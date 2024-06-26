import React from 'react'
import { BsPlus } from 'react-icons/bs'

export default function PhoneBlackIconBtnPurple({
  text = 'button',
  className = 'chb-h6',
  iconWidth = 36,
  iconHeight = 36,
  iconMarginRight = 8,
  icon: IconComponent = BsPlus,
}) {
  return (
    <>
      <button className={`PhoneBlackIconBtnPurple ${className}`}>
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
        .PhoneBlackIconBtnPurple {
          padding: 2px 12px 2px 8px;
          color: white;
          background-color: #685beb;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .PhoneBlackIconBtnPurple:hover {
          background-color: #dbd7ff;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
