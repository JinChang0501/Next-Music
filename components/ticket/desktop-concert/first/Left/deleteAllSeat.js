import React from 'react'
import style from './deleteAllSeat.module.scss'
import { IoAlertCircle } from 'react-icons/io5'

export default function DeleteAllSeat({ confirmDelete, cancelDelete }) {
  return (
    <>
      <div className={`${style.deleteAllSeat}`}>
        <div className={`${style.deleteAllSeatTitle} chb-h5 text-black`}>
          <IoAlertCircle className={`${style.deleteAllSeatIcon}`} />
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
