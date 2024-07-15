import React from 'react'
import { BsPlus } from 'react-icons/bs'

export default function PhoneBlackPureIconBtnBlack({
  iconWidth = 20,
  iconHeight = 20,
  icon: IconComponent = BsPlus,
  onClick = () => {},
}) {
  return (
    <>
      <button className="PhoneBlackPureIconBtnBlack" onClick={onClick}>
        <IconComponent
          style={{
            width: `${iconWidth}px`,
            height: `${iconHeight}px`,
          }}
        />
      </button>
      <style jsx>{`
        .PhoneBlackPureIconBtnBlack {
          padding: 6px;
          color: white;
          background-color: black;
          border: 1px solid #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.5s ease;
        }
        .PhoneBlackPureIconBtnBlack:hover {
          background-color: white;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
