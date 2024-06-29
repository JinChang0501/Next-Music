import React, { useState, useEffect } from 'react'
import style from './progressBar.module.scss'
import { FaChevronRight } from 'react-icons/fa'

export default function ProgressBar({
  progressBarRef,
  isStarted = 600,
  title = 'Select-Seat',
}) {
  const [time, setTime] = useState(10 * 60) // 初始設置為 10 分鐘 (600 秒)

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

  const numBlockClass = (blockTitle) => {
    return blockTitle === title
      ? `${style.numBlock} bg-purple1 chb-h5`
      : `${style.numBlock} bg-black20 chb-h5`
  }

  return (
    <div
      ref={progressBarRef}
      className={`${style.progressBarHeight} row d-flex`}
    >
      {/* progressBar */}
      <div className={`${style.progressBar} col-7`}>
        <div className={`${style.progressBarBlock}`}>
          <div className={numBlockClass('Select-Seat')}>1</div>
          <div className={`${style.progressBarBlockText} chb-h5 text-black`}>
            選擇座位
          </div>
        </div>
        <div className={`${style.progressBarIconBlock}`}>
          <FaChevronRight className={`${style.progressBarIcon} text-black20`} />
        </div>
        <div className={`${style.progressBarBlock}`}>
          <div className={numBlockClass('payment')}>2</div>
          <div className={`${style.progressBarBlockText} chb-h5 text-black30`}>
            支付方式
          </div>
        </div>
        <div className={`${style.progressBarIconBlock}`}>
          <FaChevronRight className={`${style.progressBarIcon} text-black20`} />
        </div>
        <div className={`${style.progressBarBlock}`}>
          <div className={numBlockClass('finish')}>3</div>
          <div className={`${style.progressBarBlockText} chb-h5 text-black30`}>
            完成購票
          </div>
        </div>
      </div>

      {/* timeCounter */}
      <div className={`${style.timeCounter} col-5`}>
        <div className={`${style.timeCounterClock}`}>
          <div className={`${style.timeCounterClockBlock} text-black chb-h4`}>
            {/* minutes 是字符串，[0] 代表顯示第一位數，[1] 顯示第二位數 */}
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
