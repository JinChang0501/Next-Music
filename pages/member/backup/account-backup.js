import React from 'react'
import MemberDLayout from '@/components/member/computer-layout'

export default function Account() {
  return (
    <>
      <p className="chb-h1">帳號設定頁</p>
    </>
  )
}

Account.getLayout = function getLayout(page) {
  return <MemberDLayout>{page}</MemberDLayout>
}
