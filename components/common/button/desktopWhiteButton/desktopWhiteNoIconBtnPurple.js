import React from 'react'

export default function DesktopWhiteNoIconBtnPurple({
  text = 'button',
  className = 'chb-h6',
  onClick = () => {},
}) {
  return (
    <>
      <button
        className={`DesktopWhiteNoIconBtnPurple ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
      <style jsx>{`
        .DesktopWhiteNoIconBtnPurple {
          padding: 12px 20px;
          color: white;
          background-color: #685beb;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .DesktopWhiteNoIconBtnPurple:hover {
          background-color: #dbd7ff;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
