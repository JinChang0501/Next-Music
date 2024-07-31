import React, { useEffect, useState } from 'react'
import WhiteLayout from '@/components/layout/ticket-layout/desktopLayout/whiteLayout'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import ProgressBarNoCountdown from '@/components/ticket/progressBarNoCountdown'
import Order from '@/components/ticket/desktop-music-festival/order'
import MusicFestivalTicket from '@/components/ticket/desktop-music-festival/musicFestivalTicket'
import Button from '@/components/ticket/desktop-music-festival/button'
import PhoneOrder from '@/components/ticket/phone-music-festival/phoneOrder'
import PhoneMusicFestivalTicket from '@/components/ticket/phone-music-festival/phoneMusicFestivalTicket'
import PhoneButton from '@/components/ticket/phone-music-festival/phoneButton'
import style from '@/styles/ticket/musicFestival/third.module.scss'
import { useRouter } from 'next/router'
import { useTicketContext } from '@/context/ticket/ticketContext'
import axiosInstance from '@/services/axios-instance'

export default function Finish() {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const [orderData, setOrderData] = useState(null)
  const { order_num } = router.query

  const {
    actid,
    selectedTickets,
    setTickets,
    setSelectedSeatDetails,
    setActid,
    setSelectedCount,
    setSelectedTickets,
  } = useTicketContext()

  const breadcrumbsURL = [
    ...(isMobile ? [] : [{ label: '首頁', href: '/' }]),
    { label: '演出活動', href: '/Activity' },
    {
      label:
        selectedTickets && selectedTickets.length > 0
          ? `${selectedTickets[0].actname}`
          : '活動名稱',
      href: `/Activity/${actid}`,
    },
    { label: '完成購票', href: '/ticket/concert/first' },
  ]

  useEffect(() => {
    if (order_num) {
      const fetchOrderData = async () => {
        try {
          const response = await axiosInstance.get(
            `/musicFestivalEcpay/order/${order_num}`
          )
          setOrderData(response.data)

          await axiosInstance.post('/musicFestivalEcpay/send-email', {
            order_num: order_num,
            email: 'iamjin910501@gmail.com',
          })
        } catch (error) {
          console.error('獲取訂單資料時出錯:', error)
        }
      }

      fetchOrderData()
    }
  }, [order_num])

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

      <ProgressBarNoCountdown />

      {/* order */}
      {isMobile ? (
        <PhoneOrder orderData={orderData} />
      ) : (
        <Order orderData={orderData} />
      )}

      {/* ticket */}
      <div className={`${style.orderTicketAccordion}`}>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button chb-h5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
              >
                展開票券
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                <div className={`${style.orderTicketBody}`}>
                  {/* MusicFestivalTicket */}
                  {isMobile ? (
                    <PhoneMusicFestivalTicket orderData={orderData} />
                  ) : (
                    <MusicFestivalTicket orderData={orderData} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* button */}
      {isMobile ? (
        <PhoneButton orderData={orderData} />
      ) : (
        <Button orderData={orderData} />
      )}
    </>
  )
}

Finish.getLayout = function getLayout(page) {
  return <WhiteLayout title="finish">{page}</WhiteLayout>
}
