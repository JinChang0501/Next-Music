import React, { useState } from 'react'
import style from './sold.module.scss'
import { BsChevronUp, BsCircleFill } from 'react-icons/bs'

export default function Sold() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleContent = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className={`${style.sold}`}>
        <button
          className={`${style.title} ${
            isOpen ? style.borderBottom : ''
          } chb-p bg-white`}
          onClick={toggleContent}
        >
          <div>座位售出</div>
          <div>
            <BsChevronUp
              className={`${style.titleIcon} ${isOpen ? style.rotated : ''}`}
            />
          </div>
        </button>
        <div
          className={`${style.content} ${
            isOpen ? style.contentShow : ''
          } chb-p`}
        >
          <div className={`${style.contentText} chb-p mb-3`}>
            <div>
              <BsCircleFill className={`${style.unsoldIcon} me-3`} />
            </div>
            <div>未售出</div>
          </div>
          <div className={`${style.contentText} chb-p`}>
            <div>
              <BsCircleFill className={`${style.soldIcon} me-3`} />
            </div>
            <div>已售出</div>
          </div>
        </div>
      </div>
    </>
  )
}
