import React from 'react'

export default function DesktopBlackNoIconBtnBlack({
  text = 'button',
  className = 'chb-h6',
}) {
  return (
    <>
      <button className={`DesktopBlackNoIconBtnBlack ${className}`}>
        {text}
      </button>
      <style jsx>{`
        .DesktopBlackNoIconBtnBlack {
          padding: 18px 42px;
          color: white;
          background-color: black;
          border: 1px solid #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .DesktopBlackNoIconBtnBlack:hover {
          background-color: white;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
