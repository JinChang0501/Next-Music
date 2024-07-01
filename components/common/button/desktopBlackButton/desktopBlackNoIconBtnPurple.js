import React from 'react'

export default function DesktopBlackNoIconBtnPurple({
  text = 'button',
  className = 'chb-h6',
}) {
  return (
    <>
      <button className={`DesktopBlackNoIconBtnPurple ${className}`}>
        {text}
      </button>
      <style jsx>{`
        .DesktopBlackNoIconBtnPurple {
          padding: 12px 20px;
          color: white;
          background-color: #685beb;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .DesktopBlackNoIconBtnPurple:hover {
          background-color: #dbd7ff;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
