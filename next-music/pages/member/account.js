import React from 'react'
import MemberLayout from '@/components/member/layout'

export default function Account() {
  return (
    <>
      <p className="chb-h1">帳號設定頁</p>
    </>
  )
}

Account.getLayout = function getLayout(page) {
  return <MemberLayout>{page}</MemberLayout>
}
