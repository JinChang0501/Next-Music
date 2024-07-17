import React from 'react'

export default function DesktopWhiteNoIconBtnBlack({
  text = 'button',
  className = 'chb-h6',
  onClick = () => {},
}) {
  return (
    <>
      <button
        className={`DesktopWhiteNoIconBtnBlack ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
      <style jsx>{`
        .DesktopWhiteNoIconBtnBlack {
          padding: 12px 20px;
          color: black;
          background-color: white;
          border: 1px solid #000;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.5s ease;
        }
        .DesktopWhiteNoIconBtnBlack:hover {
          border: 1px solid #685beb;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
