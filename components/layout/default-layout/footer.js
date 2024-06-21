import React from 'react'
import { FaMusic } from 'react-icons/fa6'

export default function Footer() {
  return (
    <>
      <footer
        className="footer bg-purple2 py-3 text-center"
        style={{ marginTop: 'auto' }}
      >
        <span className="text-body-secondary fw-bolder">
          <FaMusic />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lose yourself in
          music&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Find yourself in the festivity
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FaMusic />
        </span>
      </footer>
    </>
  )
}
