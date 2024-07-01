import MemberDLayout from '@/components/member/desktop-layout'
import React from 'react'
import TicketDetail from '@/components/member/desktop-layout/ticket-detail'

export default function TicketDetailPage() {
  return (
    <>
      <TicketDetail />
    </>
  )
}
TicketDetailPage.getLayout = function getLayout(page) {
  return (
    <MemberDLayout title="Music | 票夾訂單明細" pageName="ticket-order">
      {page}
    </MemberDLayout>
  )
}
