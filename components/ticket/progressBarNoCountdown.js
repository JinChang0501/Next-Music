import React, { useState, useEffect } from 'react'
import style from './progressBarNoCountdown.module.scss'
import { FaChevronRight } from 'react-icons/fa'
import { useTitle } from '@/context/ticket/useTitle'
import { useRouter } from 'next/router'

export default function ProgressBarNoCountdown({ progressBarRef }) {
  const router = useRouter()
  const title = useTitle() // 獲取 Context 中的 title
  const [isPhoneView, setIsPhoneView] = useState(false)
  const { actid } = router.query

  useEffect(() => {
    const handleResize = () => {
      setIsPhoneView(window.innerWidth <= 390)
    }

    // 初次加載時檢查螢幕寬度
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const steps = [
    {
      id: 1,
      stepTitle: 'select-Seat',
      stepText: `選擇${actid > 0 && actid < 10 ? '座位' : '票數'}`,
      stepNumber: 1,
    },
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
      <div className={`${style.progressBar}`}>
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
    </div>
  )

  // #endregion DesktopView
}
