import React from 'react'
import { BsPlus } from 'react-icons/bs'

export default function DesktopBlackIconBtnBlack({
  text = 'button',
  className = 'chb-h5',
  iconWidth = 48,
  iconHeight = 48,
  iconMarginRight = 6,
  icon: IconComponent = BsPlus,
  onClick = () => {},
}) {
  return (
    <>
      <button
        className={`DesktopBlackIconBtnBlack ${className}`}
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
        .DesktopBlackIconBtnBlack {
          padding: 0px 14px 0px 6px;
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
