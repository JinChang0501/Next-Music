import React from 'react'
import MemberDLayout from '@/components/member/computer-layout'

export default function StoreOrder() {
  return (
    <>
      <p className="chb-h1">商城購買紀錄</p>
    </>
  )
}

StoreOrder.getLayout = function getLayout(page) {
  return <MemberDLayout>{page}</MemberDLayout>
}
