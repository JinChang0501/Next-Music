import React, { useRef, useEffect, useState } from 'react'
import TicketLayout from '@/components/layout/ticket-layout'
import style from '@/styles/ticket/desktop-select-seat.module.scss'
import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa'
import { BsInfoCircle } from 'react-icons/bs'

export default function Ticket() {
  // #region 動態獲取 breadcrumb、progressBar 高度，返回給 content

  // breadcrumbRef 和 progressBarRef 是用來獲取 DOM 元素的引用
  // contentHeight 是一個狀態變量，用來保存內容區域的高度
  const breadcrumbRef = useRef(null)
  const progressBarRef = useRef(null)
  const [contentHeight, setContentHeight] = useState('100%')

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

  return (
    <>
      {/* breadcrumb */}
      <div ref={breadcrumbRef} className={`${style.breadcrumb} row`}>
        <div className="col-12 p-0 bg-warning"></div>
      </div>

      {/* progressBar + timeCounter */}
      <div
        ref={progressBarRef}
        className={`${style.progressBarHeight} row d-flex`}
      >
        {/* progressBar */}
        <div className={`${style.progressBar} col-7`}>
          <div className={`${style.progressBarBlock}`}>
            <div className={`${style.numBlock} bg-purple1 chb-h5`}>1</div>
            <div className={`${style.progressBarBlockText} chb-h5 text-black`}>
              選擇座位
            </div>
          </div>
          <div className={`${style.progressBarIconBlock}`}>
            <FaChevronRight
              className={`${style.progressBarIcon} text-black20`}
            />
          </div>
          <div className={`${style.progressBarBlock}`}>
            <div className={`${style.numBlock} bg-black20 chb-h5`}>2</div>
            <div
              className={`${style.progressBarBlockText} chb-h5 text-black30`}
            >
              支付方式
            </div>
          </div>
          <div className={`${style.progressBarIconBlock}`}>
            <FaChevronRight
              className={`${style.progressBarIcon} text-black20`}
            />
          </div>
          <div className={`${style.progressBarBlock}`}>
            <div className={`${style.numBlock} bg-black20 chb-h5`}>3</div>
            <div
              className={`${style.progressBarBlockText} chb-h5 text-black30`}
            >
              完成購票
            </div>
          </div>
        </div>

        {/* timeCounter */}
        <div className={`${style.timeCounter} col-5`}>
          <div className={`${style.timeCounterClock}`}>
            <div className={`${style.timeCounterClockBlock} text-black chb-h4`}>
              1
            </div>
            <div className={`${style.timeCounterClockBlock} text-black chb-h4`}>
              0
            </div>
            <div
              className={`${style.timeCounterClockColon} text-black30 chb-h3`}
            >
              :
            </div>
            <div className={`${style.timeCounterClockBlock} text-black chb-h4`}>
              0
            </div>
            <div className={`${style.timeCounterClockBlock} text-black chb-h4`}>
              0
            </div>
          </div>
          <div className={`${style.timeCounterText} text-black80 chb-p`}>
            請於10分鐘內完成訂票
          </div>
        </div>
      </div>

      {/* content */}
      <div className="row d-flex flex-nowrap" style={{ height: contentHeight }}>
        {/* Image */}
        <div className={`${style.image}`}>
          <Image src="/images/ticket/test.jpg" alt="test" layout="fill" />
        </div>

        {/* Right */}
        <div className={`${style.right}`}>
          {/* rightTitle */}
          <div className={`${style.rightTitle}`}>
            <div className="chb-h5 text-black">一生到底 One Life, One Shot</div>
            <div className="chb-h6 text-black">滅火器 Fire EX.</div>
            <div className="chb-p text-black">
              2024/06/15 19:30 · 臺北流行音樂中心
            </div>
          </div>

          {/* ticketAreaTitle */}
          <div className={`${style.ticketAreaTitle} chb-p text-black`}>
            演唱會區域
          </div>

          {/* ticketArea */}
          <div className={`${style.ticketArea} chb-h5`}>
            <div className={`${style.ticketAreaBlock}`}>
              <div className={`${style.ticketAreaBlockLeft}`}>
                <div className={`${style.ticketAreaSquare} bg-A`}></div>
                <div>A&nbsp;區</div>
              </div>
              <div>$&nbsp;8600</div>
            </div>
            <div className={`${style.ticketAreaBlock}`}>
              <div className={`${style.ticketAreaBlockLeft}`}>
                <div className={`${style.ticketAreaSquare} bg-B`}></div>
                <div>B&nbsp;區</div>
              </div>
              <div>$&nbsp;6300</div>
            </div>
            <div className={`${style.ticketAreaBlock}`}>
              <div className={`${style.ticketAreaBlockLeft}`}>
                <div className={`${style.ticketAreaSquare} bg-C`}></div>
                <div>C&nbsp;區</div>
              </div>
              <div>$&nbsp;4900</div>
            </div>
            <div className={`${style.ticketAreaBlock}`}>
              <div className={`${style.ticketAreaBlockLeft}`}>
                <div className={`${style.ticketAreaSquare} bg-D`}></div>
                <div>D&nbsp;區</div>
              </div>
              <div>$&nbsp;3500</div>
            </div>
            <div className={`${style.ticketAreaBlock}`}>
              <div className={`${style.ticketAreaBlockLeft}`}>
                <div className={`${style.ticketAreaSquare} bg-E`}></div>
                <div>E&nbsp;區</div>
              </div>
              <div>$&nbsp;1900</div>
            </div>
          </div>

          {/* info */}
          <div className={`${style.info}`}>
            {/* info title */}
            <div className={`${style.infoTitle}`}>
              <BsInfoCircle className={`${style.infoTitleIcon}`} />
            </div>
            {/* info content */}
            <div className={`${style.infoContent} chb-p`}>
              <div>1.&nbsp;點選尚未售出座位區域，可以放大該區域</div>
              <div>2.&nbsp;選取座位後會依序顯示在右側</div>
              <div>3.&nbsp;訂票上限&nbsp;6&nbsp;張</div>
              <div>4.&nbsp;電子票券將會發送到您的電子郵件</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Ticket.getLayout = function getLayout(page) {
  return <TicketLayout title="Ticket">{page}</TicketLayout>
}
