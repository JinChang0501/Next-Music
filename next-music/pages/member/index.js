import MNavbar from '@/components/member/layout/mNavbar'
import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function Member() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 bg-purple1">
            <MNavbar />
          </div>
        </div>
      </div>
    </>
  )
}

// Member.getLayout = function getLayout(page){
//   return <MemberLayout>{children}</MemberLayout>
// }
