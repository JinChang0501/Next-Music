import React, { useCallback, useEffect, useState } from 'react'
import WhiteLayout from '@/components/layout/ticket-layout/desktopLayout/whiteLayout'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import ProgressBarNoCountdown from '@/components/ticket/progressBarNoCountdown'
import ActivityImage from '@/components/ticket/desktop-music-festival/activityImage'
import Info from '@/components/ticket/desktop-music-festival/info'
import SelectTicket from '@/components/ticket/desktop-music-festival/selectTicket'
import PhoneActivityImage from '@/components/ticket/phone-music-festival/phoneActivityImage'
import PhoneInfo from '@/components/ticket/phone-music-festival/phoneInfo'
import PhoneSelectTicket from '@/components/ticket/phone-music-festival/phoneSelectTicket'
import style from '@/styles/ticket/musicFestival/first.module.scss'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import PhoneWhiteNoIconBtnPurple from '@/components/common/button/phoneWhiteButton/phoneWhiteNoIconBtnPurple'
import { useRouter } from 'next/router'
import { useTicketContext } from '@/context/ticket/ticketContext'
import { GET_TICKET } from '@/configs/api-path'
import Swal from 'sweetalert2'
// import toast, { Toaster } from 'react-hot-toast'

export default function SelectSeat() {
  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '演出活動', href: '/activity' },
    { label: '一生到底', href: '/activity/[aid]' },
    { label: '選擇座位', href: '/ticket/concert/first' },
  ]

  const [isMobile, setIsMobile] = useState(false)

  const router = useRouter()
  const { actid } = router.query
  const {
    selectedCount,
    tickets,
    setTickets,
    setSelectedSeatDetails,
    setActid,
    setSelectedCount,
    setSelectedTickets,
    isTicketSelected,
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

  const fetchTickets = useCallback(
    async (actid) => {
      const url = `${GET_TICKET}/activity/${actid}`
      try {
        const res = await fetch(url, {
          credentials: 'include',
        })
        const resData = await res.json()
        if (resData.success) {
          setTickets(resData.rows)
        }
      } catch (error) {
        console.error(error)
      }
    },
    [setTickets]
  )

  useEffect(() => {
    setActid(actid)
  }, [actid, setActid])

  useEffect(() => {
    if (actid) {
      fetchTickets(actid)
      setActid(actid)
    }
  }, [actid, setActid, fetchTickets])

  const handleNext = () => {
    if (!isTicketSelected()) {
      Swal.fire({
        title: '尚未選擇票數',
        icon: 'warning',
        allowOutsideClick: false,
        customClass: {
          popup: style.customSwal,
        },
      })
      // toast.error('請選擇付款方式')
      return
    }

    const selectedTickets = tickets.slice(0, selectedCount)
    setSelectedSeatDetails(selectedTickets)
    window.location.href = `/ticket/musicFestival/payment/${actid}`
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
      <ProgressBarNoCountdown />

      {/* Form */}
      <div className={`${style.outsideFlexCenter}`}>
        <div
          className={`${style.innerFlexCenter} col-xxl-8 col-xl-12 col-lg-12 col-md-12 col-sm-12`}
        >
          <div className="w-100">
            {isMobile ? (
              <>
                {/* PhoneActivityImage */}

                <PhoneActivityImage />

                {/* PhoneInfo */}

                <PhoneInfo />

                {/* PhoneSelectTicket */}

                <PhoneSelectTicket />
              </>
            ) : (
              <>
                {/* activityImage */}

                <ActivityImage />

                {/* info */}

                <Info />

                {/* selectTicket */}

                <SelectTicket />
              </>
            )}
            {isMobile ? (
              <div style={{ margin: '20px 0' }}>
                <PhoneWhiteNoIconBtnPurple
                  text="下一步"
                  className="w-100 chb-h6"
                  onClick={handleNext}
                />
              </div>
            ) : (
              <div style={{ margin: '60px 0' }}>
                <DesktopWhiteNoIconBtnPurple
                  text="下一步"
                  className="w-100 chb-h6"
                  onClick={handleNext}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

SelectSeat.getLayout = function getLayout(page) {
  return <WhiteLayout title="select-Seat">{page}</WhiteLayout>
}
