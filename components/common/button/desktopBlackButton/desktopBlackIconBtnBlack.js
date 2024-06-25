import React from 'react'
import { BsPlus } from 'react-icons/bs'

export default function DesktopBlackIconBtnBlack({
  text = 'button',
  className = 'chb-h5',
  iconWidth = 48,
  iconHeight = 48,
  iconMarginRight = 12,
  icon: IconComponent = BsPlus,
}) {
  return (
    <>
      <button className={`DesktopBlackIconBtnBlack ${className}`}>
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
        .DesktopBlackIconBtnBlack {
          padding: 6px 28px 6px 20px;
          color: white;
          background-color: black;
          border: 1px solid #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .DesktopBlackIconBtnBlack:hover {
          background-color: white;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
