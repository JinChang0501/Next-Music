import React from 'react'

export default function PhoneBlackNoIconBtnBlack({
  text = 'button',
  className = 'chb-h6',
  onClick = () => {},
}) {
  return (
    <>
      <button
        className={`PhoneBlackNoIconBtnBlack ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
      <style jsx>{`
        .PhoneBlackNoIconBtnBlack {
          padding: 8px 16px;
          color: white;
          background-color: black;
          border: 1px solid #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .PhoneBlackNoIconBtnBlack:hover {
          background-color: white;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
