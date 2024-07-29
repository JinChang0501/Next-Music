import React from 'react'
import { FaMusic } from 'react-icons/fa6'

export default function Footer() {
  return (
    <>
      <footer className="footer bg-light py-3 text-center mt-auto">
        <span className="text-body-secondary fw-bolder">
          <FaMusic />
          &nbsp;&nbsp;&nbsp; Enjoy yourself in music&nbsp;&nbsp;&nbsp;
          <FaMusic />
        </span>
      </footer>
    </>
  )
}
