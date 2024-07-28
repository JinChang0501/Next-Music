import React from 'react'
import { FaMusic } from 'react-icons/fa6'

export default function Footer() {
  return (
    <>
      <footer className="footer bg-transparent py-3 text-center mt-auto">
        <span className="text-white fw-bolder">
          <FaMusic />
          &nbsp;&nbsp;&nbsp;Enjoy yourself in music&nbsp;&nbsp;&nbsp;
          <FaMusic />
        </span>
      </footer>
    </>
  )
}
