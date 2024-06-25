import React from 'react'
import { BsPlus } from 'react-icons/bs'

export default function PhoneWhitePureIconBtnBlack({
  iconWidth = 40,
  iconHeight = 40,
  icon: IconComponent = BsPlus,
}) {
  return (
    <>
      <button className="PhoneWhitePureIconBtnBlack">
        <IconComponent
          style={{
            width: `${iconWidth}px`,
            height: `${iconHeight}px`,
          }}
        />
      </button>
      <style jsx>{`
        .PhoneWhitePureIconBtnBlack {
          padding: 4px;
          color: black;
          background-color: white;
          border: 1px solid #000;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .PhoneWhitePureIconBtnBlack:hover {
          border: 1px solid #685beb;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
