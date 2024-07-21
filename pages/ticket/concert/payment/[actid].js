import React, { useState, useEffect } from 'react'
import WhiteLayout from '@/components/layout/ticket-layout/desktopLayout/whiteLayout'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import ProgressBar from '@/components/ticket/progressBar'
import AccordionFirst from '@/components/ticket/desktop-concert/second/accordionFirst'
import AccordionSecond from '@/components/ticket/desktop-concert/second/accordionSecond'
import AccordionThird from '@/components/ticket/desktop-concert/second/accordionThird'
import PhoneAccordionFirst from '@/components/ticket/phone-concert/phoneAccordionFirst'
import PhoneAccordionSecond from '@/components/ticket/phone-concert/phoneAccordionSecond'
import PhoneAccordionThird from '@/components/ticket/phone-concert/phoneAccordionThird'
import style from '@/styles/ticket/concert/second.module.scss'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import PhoneWhiteNoIconBtnPurple from '@/components/common/button/phoneWhiteButton/phoneWhiteNoIconBtnPurple'
import { useRouter } from 'next/router'
import { useTicketContext } from '@/context/ticket/ticketContext'
import { useCountdown } from '@/context/ticket/countdownContext'

export default function Payment() {
  const [isMobile, setIsMobile] = useState(false)
  const { isStarted } = useCountdown()
  const router = useRouter()

  const {
    setTickets,
    selectedSeatDetails,
    setSelectedSeatDetails,
    setActid,
    actid,
    setSelectedCount,
    setSelectedTickets,
  } = useTicketContext()

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (
        !url.includes('/ticket/concert/selectSeat') &&
        !url.includes('/ticket/concert/payment') &&
        !url.includes('/ticket/concert/finish') &&
        !url.includes('/ticket/musicFestival/selectSeat') &&
        !url.includes('/ticket/musicFestival/payment') &&
        !url.includes('/ticket/musicFestival/finish')
      ) {
        setActid(null)
        setTickets([])
        setSelectedSeatDetails([])
        setSelectedCount(1)
        setSelectedTickets([])

        localStorage.removeItem('actid')
        localStorage.removeItem('tickets')
        localStorage.removeItem('selectedSeatDetails')
        localStorage.removeItem('selectedCount')
        localStorage.removeItem('selectedTickets')
      }
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [
    router.events,
    setActid,
    setTickets,
    setSelectedSeatDetails,
    setSelectedCount,
    setSelectedTickets,
  ])

  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '演出活動', href: '/activity' },
    { label: '一生到底', href: '/activity/[aid]' },
    { label: '支付方式', href: '/ticket/concert/first' },
  ]

  const handleNext = async () => {
    try {
      const response = await fetch('http://localhost:3005/api/ecpay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          selectedSeatDetails,
          actid,
        }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()

      if (data.success) {
        const confirmed = window.confirm('訂單已創建，是否前往付款？')
        if (confirmed) {
          // 創建一個臨時的 form 元素來提交 ECPay 的表單
          const form = document.createElement('form')
          form.method = 'POST'
          form.action =
            'https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5' // 測試環境URL

          for (const key in data.ecpayForm) {
            const input = document.createElement('input')
            input.type = 'hidden'
            input.name = key
            input.value = data.ecpayForm[key]
            form.appendChild(input)
          }

          document.body.appendChild(form)
          form.submit()
        }
      } else {
        console.error('訂單創建失敗:', data.error)
        alert(`訂單創建失敗：${data.message}`)
      }
    } catch (error) {
      console.error('請求錯誤:', error)
      alert('發生網絡錯誤，請稍後再試。')
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 390)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
      {/* breadcrumb */}

      {isMobile ? (
        <Breadcrumbs breadcrumbs={breadcrumbsURL} className="" />
      ) : (
        <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      )}

      {/* progressBar + timeCounter */}

      <ProgressBar isStarted={isStarted} />

      {/* Form */}

      <div className={`${style.outsideFlexCenter}`}>
        <div
          className={`${style.innerFlexCenter} col-xxl-9 col-xl-12 col-lg-12 col-md-12 col-sm-12`}
        >
          <div
            className={`${style.accordionMarginTop} accordion w-100`}
            id="accordionPanelsStayOpenExample"
          >
            {isMobile ? (
              <>
                {/* PhoneAccordionFirst */}
                <PhoneAccordionFirst
                  selectedSeatDetails={selectedSeatDetails}
                />

                {/* PhoneAccordionSecond */}
                <PhoneAccordionSecond
                  selectedSeatDetails={selectedSeatDetails}
                />

                {/* PhoneAccordionThird */}
                <PhoneAccordionThird />
              </>
            ) : (
              <>
                {/* AccordionFirst */}
                <AccordionFirst selectedSeatDetails={selectedSeatDetails} />

                {/* AccordionSecond */}
                <AccordionSecond selectedSeatDetails={selectedSeatDetails} />

                {/* AccordionThird */}
                <AccordionThird />
              </>
            )}
          </div>
          {isMobile ? (
            <div style={{ margin: '20px 0', width: '100%' }}>
              <PhoneWhiteNoIconBtnPurple
                text="付款"
                className="w-100 chb-h6"
                onClick={handleNext}
              />
            </div>
          ) : (
            <div style={{ margin: '30px 0', width: '100%' }}>
              <DesktopWhiteNoIconBtnPurple
                text="付款"
                className="w-100 chb-h6"
                onClick={handleNext}
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

Payment.getLayout = function getLayout(page) {
  return <WhiteLayout title="payment">{page}</WhiteLayout>
}
