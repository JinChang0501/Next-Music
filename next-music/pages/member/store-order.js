import React from 'react'
import MemberLayout from '@/components/member/layout'

export default function StoreOrder() {
  return (
    <>
      <p className="chb-h1">商城購買紀錄</p>
    </>
  )
}

StoreOrder.getLayout = function getLayout(page) {
  return <MemberLayout>{page}</MemberLayout>
}
