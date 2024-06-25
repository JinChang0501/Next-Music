import React from 'react'
import { BsPlus } from 'react-icons/bs'

export default function DesktopWhiteIconBtnPurple({
  text = 'button',
  className = 'chb-h5',
  iconWidth = 48,
  iconHeight = 48,
  iconMarginRight = 12,
  icon: IconComponent = BsPlus,
}) {
  return (
    <>
      <button className={`DesktopWhiteIconBtnPurple ${className}`}>
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
        .DesktopWhiteIconBtnPurple {
          padding: 6px 28px 6px 20px;
          color: white;
          background-color: #685beb;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .DesktopWhiteIconBtnPurple:hover {
          background-color: #dbd7ff;
          color: #685beb;
        }
        .Icon {
          margin-right: 12px;
          width: 48px;
          height: 48px;
        }
      `}</style>
    </>
  )
}
