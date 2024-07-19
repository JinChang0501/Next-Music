import React, { useState, useEffect } from 'react'
import style from './progressBar.module.scss'
import { FaChevronRight } from 'react-icons/fa'
import { useTitle } from '@/context/ticket/useTitle'
import { useCountdown } from '@/context/ticket/countdownContext'

export default function ProgressBar({ progressBarRef }) {
  const { time } = useCountdown()
  const title = useTitle() // 獲取 Context 中的 title
  const [isPhoneView, setIsPhoneView] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsPhoneView(window.innerWidth <= 390)
    }

    // 初次加載時檢查螢幕寬度
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60) // 計算剩餘的分鐘數
    const remainingSeconds = seconds % 60 // 計算剩餘的秒數
    return {
      // 將分鐘數轉換為兩位數的字符串，不足兩位前面補 0
      minutes: String(minutes).padStart(2, '0'),
      // 將秒數轉換為兩位數的字符串，不足兩位前面補 0
      seconds: String(remainingSeconds).padStart(2, '0'),
    }
  }

  const { minutes, seconds } = formatTime(time)

  const steps = [
    { id: 1, stepTitle: 'select-Seat', stepText: '選擇座位', stepNumber: 1 },
    { id: 2, stepTitle: 'payment', stepText: '支付方式', stepNumber: 2 },
    { id: 3, stepTitle: 'finish', stepText: '完成購票', stepNumber: 3 },
  ]

  const numBlockClass = (step) => {
    return step.stepTitle === title ? 'bg-purple1' : 'bg-black20'
  }

  const textBlockClass = (step) => {
    return step.stepTitle === title ? 'text-black' : 'text-black30'
  }

  // #region PhoneViewSwitch

  const renderMobileView = () => {
    let stepNumber, stepText

    switch (title) {
      case 'select-Seat':
        stepNumber = 1
        stepText = '選擇座位'
        break
      case 'payment':
        stepNumber = 2
        stepText = '支付方式'
        break
      case 'finish':
        stepNumber = 3
        stepText = '完成購票'
        break
      default:
        stepNumber = 1
        stepText = '選擇座位'
    }

    return (
      <div className={`${style.progress}`} style={{ userSelect: 'none' }}>
        <div className={`${style.progressLeft}`}>
          <div className={`${style.progressLeftSquare} chb-h6`}>
            {stepNumber}
          </div>
          <div className={`${style.progressLeftText} chb-h5`}>{stepText}</div>
        </div>
        <div className={`${style.progressRight}`}>
          <div className={`${style.progressRightClockBlock} chb-h6`}>
            {minutes[0]}
          </div>
          <div className={`${style.progressRightClockBlock} chb-h6`}>
            {minutes[1]}
          </div>
          <div className={`${style.progressRightClockColon} chb-h5`}>:</div>
          <div className={`${style.progressRightClockBlock} chb-h6`}>
            {seconds[0]}
          </div>
          <div className={`${style.progressRightClockBlock} chb-h6`}>
            {seconds[1]}
          </div>
        </div>
      </div>
    )
  }

  // #endregion PhoneViewSwitch

  // #region PhoneView

  if (isPhoneView) {
    return renderMobileView()
  }

  // #endregion PhoneView

  // #region DesktopView

  return (
    <div
      ref={progressBarRef}
      className={`${style.progressBarHeight} row d-flex`}
      style={{ userSelect: 'none' }}
    >
      <div className={`${style.progressBar} col-xxl-7 col-xl-6 col-lg-5`}>
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className={`${style.progressBarBlock}`}>
              <div
                className={`${style.numBlock} ${numBlockClass(step)} chb-h5`}
              >
                {step.stepNumber}
              </div>
              <div
                className={`${
                  style.progressBarBlockText
                } chb-h5 ${textBlockClass(step)}`}
              >
                {step.stepText}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={`${style.progressBarIconBlock}`}>
                <FaChevronRight
                  className={`${style.progressBarIcon} text-black20`}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className={`${style.timeCounter} col-xxl-5 col-xl-6 col-lg-7`}>
        <div className={`${style.timeCounterClock}`}>
          <div className={`${style.timeCounterClockBlock} text-black chb-h5`}>
            {minutes[0]}
          </div>
          <div className={`${style.timeCounterClockBlock} text-black chb-h5`}>
            {minutes[1]}
          </div>
          <div className={`${style.timeCounterClockColon} text-black30 chb-h3`}>
            :
          </div>
          <div className={`${style.timeCounterClockBlock} text-black chb-h5`}>
            {seconds[0]}
          </div>
          <div className={`${style.timeCounterClockBlock} text-black chb-h5`}>
            {seconds[1]}
          </div>
        </div>
        <div className={`${style.timeCounterText} text-black80 chb-p`}>
          請於10分鐘內完成訂票
        </div>
      </div>
    </div>
  )

  // #endregion DesktopView
}
