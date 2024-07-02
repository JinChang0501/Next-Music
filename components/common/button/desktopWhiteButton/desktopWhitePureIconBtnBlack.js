import React from 'react'
import { BsPlus } from 'react-icons/bs'

export default function DesktopWhitePureIconBtnBlack({
  iconWidth = 40,
  iconHeight = 40,
  icon: IconComponent = BsPlus,
  onClick = () => {},
}) {
  return (
    <>
      <button className="DesktopWhitePureIconBtnBlack" onClick={onClick}>
        <IconComponent
          style={{
            width: `${iconWidth}px`,
            height: `${iconHeight}px`,
          }}
        />
      </button>
      <style jsx>{`
        .DesktopWhitePureIconBtnBlack {
          padding: 8px;
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
