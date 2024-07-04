import React, { useRef, useEffect, useState } from 'react'
import FixedContentLayout from '@/components/layout/ticket-layout/desktopLayout/fixedContentLayout'
import ProgressBar from '@/components/ticket/progressBar'
import LeftSecond from '@/components/ticket/desktop-concert/second/leftSecond'
import RightSecond from '@/components/ticket/desktop-concert/second/rightSecond'
import PhoneTitle from '@/components/ticket/phone-concert/phoneTitle'
import PhoneSelectTicket from '@/components/ticket/phone-concert/phoneSelectTicket'
import style from '@/styles/ticket/concert/second.module.scss'

export default function Second() {
  // #region 動態獲取 breadcrumb、progressBar 高度，返回給 content

  const breadcrumbRef = useRef(null)
  const progressBarRef = useRef(null)
  const [contentHeight, setContentHeight] = useState('100%')
  const [isPhoneView, setIsPhoneView] = useState(false)

  useEffect(() => {
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

    handleResize()

    window.addEventListener('resize', handleResize)

    const observer = new ResizeObserver(handleResize)
    const breadcrumbNode = breadcrumbRef.current
    const progressBarNode = progressBarRef.current
    if (breadcrumbNode) observer.observe(breadcrumbNode)
    if (progressBarNode) observer.observe(progressBarNode)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (breadcrumbNode) observer.unobserve(breadcrumbNode)
      if (progressBarNode) observer.unobserve(progressBarNode)
    }
  }, [])

  // #endregion 動態獲取 breadcrumb、progressBar 高度，返回給 content

  return (
    <>
      {isPhoneView ? (
        <>
          {/* title */}
          <PhoneTitle />

          {/* progress */}
          <ProgressBar />

          {/* photo */}
          <div className={`${style.bottom}`}>
            <PhoneSelectTicket />
          </div>
        </>
      ) : (
        <>
          {/* breadcrumb */}
          <div ref={breadcrumbRef} className={`${style.breadcrumb} row`}>
            <div className="col-12 p-0 bg-warning"></div>
          </div>

          {/* progressBar + timeCounter */}
          <ProgressBar progressBarRef={progressBarRef} />

          {/* content */}
          <div
            className="row d-flex flex-nowrap"
            style={{ height: contentHeight }}
          >
            {/* LeftSecond */}
            <LeftSecond />

            {/* RightSecond */}
            <RightSecond />
          </div>
        </>
      )}
    </>
  )
}

Second.getLayout = function getLayout(page) {
  return <FixedContentLayout title="select-Seat">{page}</FixedContentLayout>
}
