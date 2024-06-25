import React from 'react'

export default function PhoneWhiteNoIconBtnPurple({
  text = 'button',
  className = 'chb-h6',
}) {
  return (
    <>
      <button className={`PhoneWhiteNoIconBtnPurple ${className}`}>
        {text}
      </button>
      <style jsx>{`
        .PhoneWhiteNoIconBtnPurple {
          padding: 8px 16px;
          color: white;
          background-color: #685beb;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .PhoneWhiteNoIconBtnPurple:hover {
          background-color: #dbd7ff;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
