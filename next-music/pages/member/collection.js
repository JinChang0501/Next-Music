import MNavbar from '@/components/member/layout/mNavbar'
import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function Collection() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <MNavbar />
          </div>
        </div>
      </div>
    </>
  )
}
