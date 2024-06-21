import React from 'react'
import MemberLayout from '@/components/member/layout'

export default function Collection() {
  return (
    <>
      <p className="chb-h1">收藏庫</p>
    </>
  )
}

Collection.getLayout = function getLayout(page) {
  return <MemberLayout>{page}</MemberLayout>
}
