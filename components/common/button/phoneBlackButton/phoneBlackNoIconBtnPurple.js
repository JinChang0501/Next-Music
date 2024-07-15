import React from 'react'

export default function PhoneBlackNoIconBtnPurple({
  text = 'button',
  className = 'chb-h6',
  onClick = () => {},
}) {
  return (
    <>
      <button
        className={`PhoneBlackNoIconBtnPurple ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
      <style jsx>{`
        .PhoneBlackNoIconBtnPurple {
          padding: 8px 16px;
          color: white;
          background-color: #685beb;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.5s ease;
        }
        .PhoneBlackNoIconBtnPurple:hover {
          background-color: #dbd7ff;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
