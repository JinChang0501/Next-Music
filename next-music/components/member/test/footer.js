import React from 'react'
import { FaMusic } from 'react-icons/fa6'

export default function Footer() {
  return (
    <>
      <div className="footer text-center bg-purple2 py-3">
        <span className="text-body-secondary fw-bolder">
          <FaMusic />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lose yourself in
          music&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Find yourself in the festivity
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FaMusic />
        </span>
      </div>
      <style jsx>{`
        .navbar,
        .footer {
          position: fixed;
          width: 100%;
          z-index: 1000;
          color: #fff;
          padding: 10px;
        }
        .navbar {
          top: 0;
        }
        .footer {
          bottom: 0;
        }
      `}</style>
    </>
  )
}
