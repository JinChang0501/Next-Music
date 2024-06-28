import React from 'react'
import LeftBar from '@/components/member/desktop-layout/left-bar'
import MemberDLayout from '@/components/member/desktop-layout'

export default function Test() {
  return <></>
}
Test.getLayout = function getLayout(page) {
  return <MemberDLayout title="Music | 會員帳號設定">{page}</MemberDLayout>
}
