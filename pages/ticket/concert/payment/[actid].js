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
import axiosInstance from '@/services/axios-instance'

export default function Payment() {
  const [isMobile, setIsMobile] = useState(false)
  const { isStarted } = useCountdown()
  const router = useRouter()
  const [order, setOrder] = useState({})

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
      const amount = selectedSeatDetails.reduce(
        (total, seat) => total + seat.price,
        0
      )
      const products = selectedSeatDetails.map((seat) => ({
        id: seat.tid,
        member_id: seat.member_id,
        name: `${seat.seat_area} 區 ${seat.seat_row} 排 ${seat.seat_number} 號`,
        price: `${seat.price} TWD`,
      }))

      // 發送 POST 請求
      const res = await axiosInstance.post('/ecpay', {
        amount,
        products,
        selectedSeatDetails,
        actid,
      })

      // 如果後端返回 htmlContent，則自動提交表單
      if (res.data.htmlContent) {
        const tempDiv = document.createElement('div')
        tempDiv.innerHTML = res.data.htmlContent
        const form = tempDiv.querySelector('form')
        if (form) {
          document.body.appendChild(form)
          form.submit()
        } else {
          console.error('找不到支付表單')
        }
      } else {
        console.error('無效的回應格式')
      }
    } catch (error) {
      console.error('處理付款過程中出錯:', error)
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
