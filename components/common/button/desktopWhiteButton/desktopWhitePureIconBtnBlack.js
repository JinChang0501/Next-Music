import React from 'react'
import { BsPlus } from 'react-icons/bs'

export default function DesktopWhitePureIconBtnBlack({
  iconWidth = 60,
  iconHeight = 60,
  icon: IconComponent = BsPlus,
}) {
  return (
    <>
      <button className="DesktopWhitePureIconBtnBlack">
        <IconComponent
          style={{
            width: `${iconWidth}px`,
            height: `${iconHeight}px`,
          }}
        />
      </button>
      <style jsx>{`
        .DesktopWhitePureIconBtnBlack {
          padding: 6px;
          color: black;
          background-color: white;
          border: 1px solid #000;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .DesktopWhitePureIconBtnBlack:hover {
          border: 1px solid #685beb;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
