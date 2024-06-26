import React from 'react'
import { BsPlus } from 'react-icons/bs'

export default function DesktopBlackPureIconBtnPurple({
  iconWidth = 60,
  iconHeight = 60,
  icon: IconComponent = BsPlus,
}) {
  return (
    <>
      <button className="DesktopBlackPureIconBtnPurple">
        <IconComponent
          style={{
            width: `${iconWidth}px`,
            height: `${iconHeight}px`,
          }}
        />
      </button>
      <style jsx>{`
        .DesktopBlackPureIconBtnPurple {
          padding: 6px;
          color: white;
          background-color: #685beb;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .DesktopBlackPureIconBtnPurple:hover {
          background-color: #dbd7ff;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
