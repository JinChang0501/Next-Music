import React from 'react'
import OrderCard from '@/components/member/desktop-layout/order-card'
import MemberDLayout from '@/components/member/desktop-layout'

export default function OrderDetailPage() {
  return (
    <>
      <OrderCard />
    </>
  )
}

OrderDetailPage.getLayout = function (page) {
  return <MemberDLayout>{page}</MemberDLayout>
}
