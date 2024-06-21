import React from 'react'
import MemberDLayout from '@/components/member/computer-layout'

export default function TicketOrder() {
  return (
    <>
      <p className="chb-h1">我的票夾</p>
    </>
  )
}

TicketOrder.getLayout = function getLayout(page) {
  return <MemberDLayout>{page}</MemberDLayout>
}
