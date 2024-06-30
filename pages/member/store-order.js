import MemberDLayout from '@/components/member/desktop-layout'
import OrderCard from '@/components/member/desktop-layout/order-card'
import OrderCardMobile from '@/components/member/mobile-layout/order-card-mobile'
import { useTab } from '@/hooks/member/useTab'
import { useEffect, useState } from 'react'

// import { Dropdown } from 'react-bootstrap'

export default function StoreOrder() {
  const { activeTab, ticketStatus, handleStatusChange, getFilteredTickets } =
    useTab()

  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 576) // 螢幕寬度 > 576px 為電腦板
    }

    handleResize() // 初始設定一次

    window.addEventListener('resize', handleResize) // 監聽視窗大小變化

    return () => window.removeEventListener('resize', handleResize) // 清除事件監聽器
  }, [])

  return (
    <>
      <p className="chb-h4 text-purple1">周邊購買紀錄</p>
      <hr className="custom-hr" />
      {/* 活動dropdown */}
      <div className="row">
        <div className="col-12 col-lg-3 py-3 d-flex flex-row">
          <div className="col-6 text-center">
            <label htmlFor="activity" className="chb-h6 flex-fill text-center">
              <span className="chb-h5">訂單狀態：</span>
            </label>
          </div>
          <div className="col-6">
            <select
              required
              id="activity"
              name="activity"
              className="align-item-center h-100 w-100"
            >
              <option value="0" className="text-center">
                - - 全部 - -
              </option>
              <option value="1" className="text-center">
                - - 未完成 - -
              </option>
              <option value="2" className="text-center">
                - - 已完成 - -
              </option>
            </select>
          </div>
        </div>
      </div>
      {/* map寫在下面 */}
      <div className="row mx-0">
        {isDesktop ? <OrderCard /> : <OrderCardMobile />}
      </div>

      <style jsx>{`
        .custom-hr {
          border: 0;
          border-top: 4px solid #007bff; /* 設置粗細和顏色 */
          width: 100%; /* 分隔線寬度 */
          margin: 1rem auto; /* 上下邊距和自動水平對齊 */
        }
      `}</style>
    </>
  )
}

StoreOrder.getLayout = function getLayout(page) {
  return (
    <MemberDLayout title="Music | 周邊購買紀錄" pageName="store-order">
      {page}
    </MemberDLayout>
  )
}
