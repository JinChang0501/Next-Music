import React from 'react'
import MemberDLayout from '@/components/member/computer-layout'
import MemberPLayout from '@/components/member/mobile-layout'
import useWindowSize from '@/hooks/member/useWindowSize'

export default function Account() {
  const size = useWindowSize()
  const isDesktop = size.width >= 768 // 假設 768px 以上為桌面佈局

  if (isDesktop) {
    return (
      <>
        <p>desktop</p>
      </>
    )
  } else {
    return (
      <>
        <p>phone</p>
      </>
    )
  }
}

Account.getLayout = function getLayout(page, screenSize) {
  return screenSize.width >= 768 ? (
    <MemberDLayout>{page}</MemberDLayout>
  ) : (
    <MemberPLayout>{page}</MemberPLayout>
  )
}
