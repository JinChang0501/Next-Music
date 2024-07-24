import React, { useState, useEffect } from 'react'
import WhiteLayout from '@/components/layout/ticket-layout/desktopLayout/whiteLayout'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import ProgressBar from '@/components/ticket/progressBar'
import AccordionFirst from '@/components/ticket/desktop-music-festival/accordionFirst'
import AccordionSecond from '@/components/ticket/desktop-music-festival/accordionSecond'
import AccordionThird from '@/components/ticket/desktop-music-festival/accordionThird'
import PhoneAccordionFirst from '@/components/ticket/phone-music-festival/phoneAccordionFirst'
import PhoneAccordionSecond from '@/components/ticket/phone-music-festival/phoneAccordionSecond'
import PhoneAccordionThird from '@/components/ticket/phone-music-festival/phoneAccordionThird'
import style from '@/styles/ticket/musicFestival/second.module.scss'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import PhoneWhiteNoIconBtnPurple from '@/components/common/button/phoneWhiteButton/phoneWhiteNoIconBtnPurple'
import { useRouter } from 'next/router'
import { useTicketContext } from '@/context/ticket/ticketContext'
import { useCountdown } from '@/context/ticket/countdownContext'
import axiosInstance from '@/services/axios-instance'
import Swal from 'sweetalert2'
// import toast, { Toaster } from 'react-hot-toast'

export default function Payment() {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const { isStarted, setIsStarted } = useCountdown()

  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '演出活動', href: '/activity' },
    { label: '一生到底', href: '/activity/[aid]' },
    { label: '支付方式', href: '/ticket/concert/first' },
  ]

  const {
    selectedTickets,
    setTickets,
    setSelectedSeatDetails,
    setActid,
    setSelectedCount,
    setSelectedTickets,
    paymentMethod,
  } = useTicketContext()

  useEffect(() => {
    const backdropImage = isMobile
      ? '/images/ticket/giphy2.gif'
      : '/images/ticket/giphy.gif'

    Swal.fire({
      title: '請於10分鐘內完成購買',
      icon: 'warning',
      color: 'black',
      backdrop: `
        rgba(0,0,0,0.4)
        url("${backdropImage}")
        left top
        no-repeat
      `,
      confirmButtonText: '開始',
      allowOutsideClick: false,
      customClass: {
        popup: style.maskCustomSwal,
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setIsStarted(true)
      }
    })

    return () => {
      Swal.close()
    }
  }, [isMobile, setIsStarted, router])

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

  const { actid } = router.query

  const handleNext = async () => {
    if (!paymentMethod) {
      Swal.fire({
        title: '請選擇付款方式',
        icon: 'warning',
        allowOutsideClick: false,
        customClass: {
          popup: style.customSwal,
        },
      })
      // toast.error('請選擇付款方式')
      return
    }

    if (paymentMethod === 'linePay') {
      return
    }

    // 檢查是否所有 selectedTickets 的 order_num 都不為 null
    const allSoldOut = selectedTickets.every(
      (ticket) => ticket.order_num !== null
    )

    if (allSoldOut) {
      // 如果所有票據的 order_num 都不為 null，顯示警告
      alert(`${selectedTickets[0].actname} 已全部售出`)
      return // 退出函數，不進行後續的付款處理
    }

    try {
      const amount = selectedTickets.reduce(
        (total, seat) => total + seat.price,
        0
      )
      const products = selectedTickets.map((seat) => ({
        id: seat.tid,
        member_id: seat.member_id,
        name: `${seat.art_name}  ${seat.actname}`,
        price: `${seat.price} TWD`,
      }))

      // 發送 POST 請求
      const res = await axiosInstance.post('/musicFestivalEcpay', {
        amount,
        products,
        selectedTickets,
        actid,
      })

      if (res.data.status === 'success') {
        const params = res.data.params
        const form = document.createElement('form')
        form.method = 'POST'
        form.action =
          'https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5'

        Object.keys(params).forEach((key) => {
          const input = document.createElement('input')
          input.type = 'hidden'
          input.name = key
          input.value = params[key]
          form.appendChild(input)
        })

        document.body.appendChild(form)
        form.submit()
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
                <PhoneAccordionFirst />

                {/* PhoneAccordionSecond */}
                <PhoneAccordionSecond />

                {/* PhoneAccordionThird */}
                <PhoneAccordionThird />
              </>
            ) : (
              <>
                {/* AccordionFirst */}
                <AccordionFirst />

                {/* AccordionSecond */}
                <AccordionSecond />

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
