import React from 'react'
import { BsPlus } from 'react-icons/bs'

export default function PhoneWhiteIconBtnBlack({
  text = 'button',
  className = 'chb-h6',
  iconWidth = 36,
  iconHeight = 36,
  iconMarginRight = 8,
  icon: IconComponent = BsPlus,
  onClick = () => {},
}) {
  return (
    <>
      <button
        className={`PhoneWhiteIconBtnBlack ${className}`}
        onClick={onClick}
      >
        <IconComponent
          style={{
            marginRight: `${iconMarginRight}px`,
            width: `${iconWidth}px`,
            height: `${iconHeight}px`,
          }}
        />
        {text}
      </button>
      <style jsx>{`
        .PhoneWhiteIconBtnBlack {
          padding: 2px 12px 2px 8px;
          color: black;
          background-color: white;
          border: 1px solid #000;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.5s ease;
        }
        .PhoneWhiteIconBtnBlack:hover {
          border: 1px solid #685beb;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
