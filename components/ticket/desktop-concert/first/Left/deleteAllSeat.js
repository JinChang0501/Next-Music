import React, { useEffect, useState } from 'react'
import style from './deleteAllSeat.module.scss'
import { BsExclamationOctagon } from 'react-icons/bs'

export default function DeleteAllSeat({
  confirmDelete,
  cancelDelete,
  confirmDeleteAndChangeRouter,
}) {
  const [isPhoneView, setIsPhoneView] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      setIsPhoneView(window.innerWidth <= 390)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (isPhoneView) {
    return (
      <>
        <div className={`${style.deleteAllSeat}`}>
          <div className={`${style.deleteAllSeatTitle} chb-h5 text-black`}>
            <BsExclamationOctagon className={`${style.deleteAllSeatIcon}`} />
          </div>
          <div className={`${style.deleteAllSeatText} chb-h7 text-black`}>
            返回活動頁面將會刪除所有選取的座位，確定嗎 ?
          </div>
          <div className={`${style.deleteButton}`}>
            <button
              className={`${style.confirmButton} chb-h6`}
              onClick={confirmDeleteAndChangeRouter}
            >
              確定
            </button>
            <button
              className={`${style.cancelButton} chb-h6`}
              onClick={cancelDelete}
            >
              取消
            </button>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className={`${style.deleteAllSeat}`}>
        <div className={`${style.deleteAllSeatTitle} chb-h5 text-black`}>
          <BsExclamationOctagon className={`${style.deleteAllSeatIcon}`} />
        </div>
        <div className={`${style.deleteAllSeatText} chb-h7 text-black`}>
          返回選擇區域將會刪除所有選取的座位，確定嗎 ?
        </div>
        <div className={`${style.deleteButton}`}>
          <button
            className={`${style.confirmButton} chb-h6`}
            onClick={confirmDelete}
          >
            確定
          </button>
          <button
            className={`${style.cancelButton} chb-h6`}
            onClick={cancelDelete}
          >
            取消
          </button>
        </div>
      </div>
    </>
  )
}
