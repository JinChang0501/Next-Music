import React from 'react'
import { BsPlus } from 'react-icons/bs'

export default function PhoneWhitePureIconBtnPurple({
  iconWidth = 40,
  iconHeight = 40,
  icon: IconComponent = BsPlus,
  onClick = () => {},
}) {
  return (
    <>
      <button className="PhoneWhitePureIconBtnPurple" onClick={onClick}>
        <IconComponent
          style={{
            width: `${iconWidth}px`,
            height: `${iconHeight}px`,
          }}
        />
      </button>
      <style jsx>{`
        .PhoneWhitePureIconBtnPurple {
          padding: 4px;
          color: white;
          background-color: #685beb;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .PhoneWhitePureIconBtnPurple:hover {
          background-color: #dbd7ff;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
