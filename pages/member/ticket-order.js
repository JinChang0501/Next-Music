import React from 'react'
import MemberLayout from '@/components/member/layout'

export default function TicketOrder() {
  return (
    <>
      <p className="chb-h1">我的票夾</p>
    </>
  )
}

TicketOrder.getLayout = function getLayout(page) {
  return <MemberLayout>{page}</MemberLayout>
}
