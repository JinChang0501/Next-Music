import React, { useRef, useEffect, useState } from 'react'
import { useTicketContext } from '@/context/ticket/ticketContext'
import FixedContentLayout from '@/components/layout/ticket-layout/desktopLayout/fixedContentLayout'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import ProgressBarNoCountdown from '@/components/ticket/progressBarNoCountdown'
import PhoneTitle from '@/components/ticket/phone-concert/phoneTitle'
import PhoneSelectTicket from '@/components/ticket/phone-concert/phoneSelectTicket'
import Left from '@/components/ticket/desktop-concert/first/Left'
import Right from '@/components/ticket/desktop-concert/first/Right'
import RightSecond from '@/components/ticket/desktop-concert/first/rightSecond'
import style from '@/styles/ticket/concert/first.module.scss'
import { GET_TICKET } from '@/configs/api-path'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

export default function SelectSeat() {
  // #region 動態獲取 breadcrumb、progressBar 高度，返回給 content

  // breadcrumbRef 和 progressBarRef 是用來獲取 DOM 元素的引用
  // contentHeight 是一個狀態變量，用來保存內容區域的高度
  const breadcrumbRef = useRef(null)
  const progressBarRef = useRef(null)
  const [contentHeight, setContentHeight] = useState('100%')
  const [isPhoneView, setIsPhoneView] = useState(false)

  // useEffect 用於在組件渲染後執行副作用，比如事件監聽器的添加和清理
  useEffect(() => {
    // handleResize 函數計算 breadcrumb 和 progressBar 的總高度，並設置 contentHeight 狀態變量
    // breadcrumbRef.current.offsetHeight 和 progressBarRef.current.offsetHeight 分別獲取 breadcrumb 和 progressBar 元素的高度
    // availableHeight 是可用的內容高度，計算方式為 100% 減去 breadcrumb 和 progressBar 的總高度
    // setContentHeight 更新 contentHeight 狀態
    const handleResize = () => {
      if (breadcrumbRef.current && progressBarRef.current) {
        const breadcrumbHeight = breadcrumbRef.current.offsetHeight
        const progressBarHeight = progressBarRef.current.offsetHeight
        const availableHeight = `calc(100% - ${
          breadcrumbHeight + progressBarHeight
        }px)`
        setContentHeight(availableHeight)
      }
      setIsPhoneView(window.innerWidth <= 390)
    }

    // 初次計算內容高度，確保在組件首次渲染時設置正確的高度
    handleResize()

    // 當窗口大小改變時，重新計算內容高度
    window.addEventListener('resize', handleResize)

    // ResizeObserver 用於監聽 breadcrumb 和 progressBar 高度的變化
    // observer.observe 監聽這些 DOM 元素的變化，如果有變化就調用 handleResize
    const observer = new ResizeObserver(handleResize)
    const breadcrumbNode = breadcrumbRef.current
    const progressBarNode = progressBarRef.current
    if (breadcrumbNode) observer.observe(breadcrumbNode)
    if (progressBarNode) observer.observe(progressBarNode)

    // 在組件卸載時，移除事件監聽器和 ResizeObserver 監聽
    // 確保不會有內存洩漏或者多餘的事件監聽器影響性能
    return () => {
      window.removeEventListener('resize', handleResize)
      if (breadcrumbNode) observer.unobserve(breadcrumbNode)
      if (progressBarNode) observer.unobserve(progressBarNode)
    }
  }, [])

  // #endregion 動態獲取 breadcrumb、progressBar 高度，返回給 content

  const router = useRouter()
  const { actid } = router.query
  const [tickets, setTickets] = useState()
  const [seatMap, setSeatMap] = useState([])
  const {
    selectedSeatDetails,
    setSelectedSeatDetails,
    setActid,
    setSelectedCount,
    setSelectedTickets,
  } = useTicketContext()

  const breadcrumbsURL = [
    ...(isPhoneView ? [] : [{ label: '首頁', href: '/' }]),
    { label: '演出活動', href: '/Activity' },
    {
      label:
        tickets && tickets.length > 0 ? `${tickets[0].actname}` : '活動名稱',
      href: `/Activity/${actid}`,
    },
    { label: '選擇座位', href: '/ticket/concert/first' },
  ]

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
    if (actid) {
      fetchTickets(actid)
      setActid(actid)
    }
  }, [actid, setActid])

  const fetchTickets = async (actid) => {
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
  }

  useEffect(() => {
    if (tickets) {
      setSeatMap(tickets)
    }
  }, [tickets])

  const handleSeatClick = (seatNumber) => {
    setSelectedSeatDetails((prevDetails) => {
      const isSelected = prevDetails.some(
        (seat) => seat.seat_number === seatNumber
      )
      if (isSelected) {
        return prevDetails.filter((seat) => seat.seat_number !== seatNumber)
      } else {
        const seatDetails = seatMap.find(
          (seat) => seat.seat_number === seatNumber
        )
        return [...prevDetails, seatDetails]
      }
    })
  }

  const [selectedSeats, setSelectedSeats] = useState([])

  const handleSeatsChange = (newSelectedSeats) => {
    setSelectedSeats(newSelectedSeats)
  }

  const handleDeleteSeat = (seat) => {
    setSelectedSeatDetails((prevDetails) =>
      prevDetails.filter(
        (selectedSeat) => selectedSeat.seat_number !== seat.seat_number
      )
    )
  }

  const handleDeleteAllSeat = async () => {
    const result = await Swal.fire({
      title: '確定嗎 ?',
      html: '<span style="font-weight: bolder;">這將會刪除所選座位 !</span>',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'tomato',
      cancelButtonColor: '#685BEB',
      confirmButtonText: '確定',
      cancelButtonText: '取消',
      allowOutsideClick: false,
    })

    if (result.isConfirmed) {
      await Swal.fire({
        title: '已刪除 !',
        html: '<span style="font-weight: bolder;">您所選的座位已成功刪除 !</span>',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      })

      Swal.close()

      setTimeout(() => {
        setSelectedSeatDetails([])
      }, 100)
    }
  }

  const handleDeleteAllSeatAndChangeRouter = async () => {
    const result = await Swal.fire({
      title: '確定嗎 ?',
      html: '<span style="font-weight: bolder;">這將會刪除所選座位<br/>並返回活動頁面 !</span>',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'tomato',
      cancelButtonColor: '#685BEB',
      confirmButtonText: '確定',
      cancelButtonText: '取消',
      allowOutsideClick: false,
      customClass: {
        popup: style.phoneSize,
      },
    })

    if (result.isConfirmed) {
      setSelectedSeatDetails([])
      Swal.close()
      router.push('/Activity')
    }
  }

  const handlePhoneChangeRouter = () => {
    router.push('/Activity')
  }

  const [isRightVisible, setIsRightVisible] = useState(true)
  const [isRightSecondVisible, setIsRightSecondVisible] = useState(false)

  useEffect(() => {
    let timeoutId
    if (selectedSeatDetails.length > 0 && selectedSeatDetails.length <= 6) {
      setIsRightVisible(false)
      setIsRightSecondVisible(true)
    } else if (selectedSeatDetails.length === 0) {
      setIsRightSecondVisible(false)
      timeoutId = setTimeout(() => {
        setIsRightVisible(true)
      }, 400)
    }
    return () => {
      clearTimeout(timeoutId)
    }
  }, [selectedSeatDetails])

  const toggleShowDeleteAllSeat = () => {
    if (selectedSeatDetails.length > 0) {
      handleDeleteAllSeat() // 顯示 SweetAlert2 對話框
    }

    if (selectedSeatDetails.length > 0 && isPhoneView) {
      handleDeleteAllSeatAndChangeRouter()
    }

    if (selectedSeatDetails.length === 0 && isPhoneView) {
      handlePhoneChangeRouter()
    }
  }

  // #region PhoneView

  if (isPhoneView) {
    return (
      <>
        <PhoneTitle
          tickets={tickets}
          selectedSeats={selectedSeatDetails}
          showDeleteAllSeat={toggleShowDeleteAllSeat}
        />

        <ProgressBarNoCountdown progressBarRef={progressBarRef} />

        <Left
          onSeatsChange={handleSeatsChange}
          updateSelectedSeats={setSelectedSeats}
          selectedSeats={selectedSeatDetails}
          tickets={tickets}
          onSeatClick={handleSeatClick}
          className={`${style.svgHeight}`}
        />

        <div className={style.zIndex} style={{ userSelect: 'none' }}>
          <PhoneSelectTicket
            selectedSeats={selectedSeatDetails}
            onDeleteSeat={handleDeleteSeat}
            tickets={tickets}
          />
        </div>
      </>
    )
  }

  // #endregion PhoneView

  // #region DesktopView

  return (
    <>
      {/* breadcrumb */}
      <div ref={breadcrumbRef}>
        <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      </div>

      {/* progressBar + timeCounter */}
      <ProgressBarNoCountdown progressBarRef={progressBarRef} />

      {/* content */}
      <div
        className="d-flex flex-nowrap overflow-hidden"
        style={{ height: contentHeight, userSelect: 'none' }}
      >
        <Left
          onSeatsChange={handleSeatsChange}
          updateSelectedSeats={setSelectedSeats}
          selectedSeats={selectedSeatDetails}
          tickets={tickets}
          onSeatClick={handleSeatClick}
        />
        <div
          className="col-xxl-3 col-xl-4 col-lg-5 col-md-6 p-0"
          style={{
            display: isRightVisible ? 'block' : 'none',
          }}
        >
          <Right tickets={tickets} />
        </div>
        <div
          className="col-xxl-3 col-xl-4 col-lg-5 col-md-6 px-3 overflow-x-hidden overflow-y-scroll"
          style={{
            transform: isRightSecondVisible
              ? 'translateX(0)'
              : 'translateX(100%)',
            opacity: isRightSecondVisible ? 1 : 0,
            transition: 'all 0.4s',
          }}
        >
          <RightSecond
            selectedSeats={selectedSeatDetails}
            onDeleteSeat={handleDeleteSeat}
            showDeleteAllSeat={toggleShowDeleteAllSeat}
            tickets={tickets}
          />
        </div>
      </div>
    </>
  )

  // #endregion DesktopView
}

SelectSeat.getLayout = function getLayout(page) {
  return <FixedContentLayout title="select-Seat">{page}</FixedContentLayout>
}
