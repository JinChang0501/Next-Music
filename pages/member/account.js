// pages/index.js
import MemberDLayout from '@/components/member/computer-layout'
import MemberPLayout from '@/components/member/mobile-layout'
import useWindowSize from '@/hooks/member/useWindowSize'

const Account = () => {
  const size = useWindowSize()
  const isDesktop = size.width >= 768 // 假設 768px 以上為桌面佈局

  return isDesktop ? (
    <MemberDLayout>
      <h1>這是桌面佈局</h1>
    </MemberDLayout>
  ) : (
    <MemberPLayout>
      <h1>這是移動佈局</h1>
    </MemberPLayout>
  )
}

Account.getLayout = (page) => page

export default Account
