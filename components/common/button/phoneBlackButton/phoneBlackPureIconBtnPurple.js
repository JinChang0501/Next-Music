import React from 'react'
import { BsPlus } from 'react-icons/bs'

export default function PhoneBlackPureIconBtnPurple({
  iconWidth = 40,
  iconHeight = 40,
  icon: IconComponent = BsPlus,
}) {
  return (
    <>
      <button className="PhoneBlackPureIconBtnPurple">
        <IconComponent
          style={{
            width: `${iconWidth}px`,
            height: `${iconHeight}px`,
          }}
        />
      </button>
      <style jsx>{`
        .PhoneBlackPureIconBtnPurple {
          padding: 4px;
          color: white;
          background-color: #685beb;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .PhoneBlackPureIconBtnPurple:hover {
          background-color: #dbd7ff;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
