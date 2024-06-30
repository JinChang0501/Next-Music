import React, { useState, useEffect } from 'react'
import style from './progressBar.module.scss'
import { FaChevronRight } from 'react-icons/fa'
// 只需訪問一次或少數 title props，所以使用 import useTitle
import { useTitle } from '@/context/ticket/useTitle'
export default function ProgressBar({ progressBarRef, isStarted = true }) {
  const [time, setTime] = useState(10 * 60) // 初始設置為 10 分鐘 (600 秒)
  const title = useTitle() // 獲取 Context 中的 title

  useEffect(() => {
    if (isStarted && time > 0) {
      const timerId = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
      }, 1000)
      return () => clearInterval(timerId) // 清除計時器
    }
  }, [isStarted, time])

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

  return (
    <div
      ref={progressBarRef}
      className={`${style.progressBarHeight} row d-flex`}
    >
      <div className={`${style.progressBar} col-7`}>
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

      <div className={`${style.timeCounter} col-5`}>
        <div className={`${style.timeCounterClock}`}>
          <div className={`${style.timeCounterClockBlock} text-black chb-h4`}>
            {minutes[0]}
          </div>
          <div className={`${style.timeCounterClockBlock} text-black chb-h4`}>
            {minutes[1]}
          </div>
          <div className={`${style.timeCounterClockColon} text-black30 chb-h3`}>
            :
          </div>
          <div className={`${style.timeCounterClockBlock} text-black chb-h4`}>
            {seconds[0]}
          </div>
          <div className={`${style.timeCounterClockBlock} text-black chb-h4`}>
            {seconds[1]}
          </div>
        </div>
        <div className={`${style.timeCounterText} text-black80 chb-p`}>
          請於10分鐘內完成訂票
        </div>
      </div>
    </div>
  )
}
