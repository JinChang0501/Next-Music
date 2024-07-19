import React from 'react'

export default function DesktopWhiteNoIconBtnGray({
  text = 'button',
  className = 'chb-h6',
  onClick = () => {},
}) {
  return (
    <>
      <button
        className={`DesktopWhiteNoIconBtnGray ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
      <style jsx>{`
        .DesktopWhiteNoIconBtnGray {
          padding: 12px 20px;
          color: white;
          background-color: #8e8e8e;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.5s ease;
        }
        .DesktopWhiteNoIconBtnGray:hover {
          background-color: #dbd7ff;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
