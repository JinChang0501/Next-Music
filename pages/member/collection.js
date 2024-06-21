import React from 'react'
import MemberDLayout from '@/components/member/computer-layout'

export default function Collection() {
  return (
    <>
      <p className="chb-h1">收藏庫</p>
    </>
  )
}

Collection.getLayout = function getLayout(page) {
  return <MemberDLayout>{page}</MemberDLayout>
}