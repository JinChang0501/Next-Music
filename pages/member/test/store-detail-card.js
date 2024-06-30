import React from 'react'
import StoreDetailCard from '@/components/member/desktop-layout/store-detail-card'
import MemberDLayout from '@/components/member/desktop-layout'

export default function StoreDetailCardPage() {
  return (
    <>
      <StoreDetailCard />
    </>
  )
}
StoreDetailCardPage.getLayout = function (page) {
  return <MemberDLayout>{page}</MemberDLayout>
}
