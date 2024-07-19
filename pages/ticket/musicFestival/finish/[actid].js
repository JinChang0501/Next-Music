import React, { useEffect, useState } from 'react'
import WhiteLayout from '@/components/layout/ticket-layout/desktopLayout/whiteLayout'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import ProgressBar from '@/components/ticket/progressBar'
import Order from '@/components/ticket/desktop-music-festival/order'
import MusicFestivalTicket from '@/components/ticket/desktop-music-festival/musicFestivalTicket'
import Button from '@/components/ticket/desktop-music-festival/button'
import PhoneOrder from '@/components/ticket/phone-music-festival/phoneOrder'
import PhoneMusicFestivalTicket from '@/components/ticket/phone-music-festival/phoneMusicFestivalTicket'
import PhoneButton from '@/components/ticket/phone-music-festival/phoneButton'
import style from '@/styles/ticket/musicFestival/third.module.scss'
import { useRouter } from 'next/router'
import { useTicketContext } from '@/context/ticket/ticketContext'

export default function Finish() {
  const [isMobile, setIsMobile] = useState(false)

  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '演出活動', href: '/activity' },
    { label: '一生到底', href: '/activity/[aid]' },
    { label: '完成購票', href: '/ticket/concert/first' },
  ]

  const router = useRouter()
  const {
    setTickets,
    setSelectedSeatDetails,
    setActid,
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

      <ProgressBar />

      {/* order */}
      {isMobile ? <PhoneOrder /> : <Order />}

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
                    <PhoneMusicFestivalTicket />
                  ) : (
                    <MusicFestivalTicket />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* button */}
      {isMobile ? <PhoneButton /> : <Button />}
    </>
  )
}

Finish.getLayout = function getLayout(page) {
  return <WhiteLayout title="finish">{page}</WhiteLayout>
}
