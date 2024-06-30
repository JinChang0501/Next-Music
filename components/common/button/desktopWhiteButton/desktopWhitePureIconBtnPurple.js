import React from 'react'
import { BsPlus } from 'react-icons/bs'

export default function DesktopWhitePureIconBtnPurple({
  iconWidth = 40,
  iconHeight = 40,
  icon: IconComponent = BsPlus,
}) {
  return (
    <>
      <button className="DesktopWhitePureIconBtnPurple">
        <IconComponent
          style={{
            width: `${iconWidth}px`,
            height: `${iconHeight}px`,
          }}
        />
      </button>
      <style jsx>{`
        .DesktopWhitePureIconBtnPurple {
          padding: 8px;
          color: white;
          background-color: #685beb;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .DesktopWhitePureIconBtnPurple:hover {
          background-color: #dbd7ff;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
