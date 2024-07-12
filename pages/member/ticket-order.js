import MemberDLayout from '@/components/member/desktop-layout'
// import styles from '@/components/member/desktop-layout/left-bar.module.scss'
import toast, { Toaster } from 'react-hot-toast'

import PageTab from '@/components/member/desktop-layout/page-tab'
import Tickets from '@/components/member/desktop-layout/tickets'
import TicketMobile from '@/components/member/mobile-layout/ticket-mobile'
import ticketData from '@/data/member/ticketData'
import { useTab } from '@/hooks/member/useTab'
import { useEffect, useState } from 'react'
import {
  updateProfile,
  getUserById,
  updateProfileAvatar,
} from '@/services/user'

// import { Dropdown } from 'react-bootstrap'

export default function TicketOrder() {
  const { activeTab, ticketStatus, handleStatusChange, getFilteredTickets } =
    useTab()

  const getUserData = async (id) => {
    const res = await getUserById(id)

    console.log(res.data)

    if (res.data.status === 'success') {
      // 以下為同步化目前後端資料庫資料，與這裡定義的初始化會員資料物件的資料
      const dbUser = res.data.data.user
      const dbUserProfile = { ...initUserProfile }

      for (const key in dbUserProfile) {
        if (Object.hasOwn(dbUser, key)) {
          // 這裡要將null值的預設值改為空字串 ''
          dbUserProfile[key] = dbUser[key] || ''
        }
      }

      // 設定到狀態中
      setUserProfile(dbUserProfile)

      toast.success('會員資料載入成功')
    } else {
      toast.error(`會員資料載入失敗`)
    }
  }

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
      <p className="chb-h4 text-purple1">我的票券</p>
      <hr className="custom-hr" />

      <PageTab />
      <div className="tab-content" id="myTabContent">
        <div
          className={`tab-pane fade ${
            activeTab === 'concert' ? 'show active' : ''
          }`}
          id="concert"
          role="tabpanel"
          aria-labelledby="concert-tab"
        >
          {/* 演唱會票券dropdown */}
          <div className="row">
            <div className="col-12 col-lg-5 py-3 d-flex flex-row">
              <div className="col-6 text-center">
                <label
                  htmlFor="activity"
                  className="chb-h6 flex-fill text-center"
                >
                  <span className="chb-h5">票券狀態：</span>
                </label>
              </div>
              <div className="col-6">
                <select
                  required
                  id="activity"
                  name="activity"
                  className="align-item-center h-100 w-100"
                  // 票的篩選功能
                  value={ticketStatus}
                  onChange={handleStatusChange}
                >
                  <option value="0" className="text-center">
                    - - 全部 - -
                  </option>
                  <option value="1" className="text-center">
                    - - 未使用 - -
                  </option>
                  <option value="2" className="text-center">
                    - - 已使用 - -
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="ticket-list">
            {getFilteredTickets().map((ticket) => (
              <div key={ticket.id} className="ticket-item">
                {ticket.name} - {ticket.status}
              </div>
            ))}
          </div>
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === 'festival' ? 'show active' : ''
          }`}
          id="festival"
          role="tabpanel"
          aria-labelledby="festival-tab"
        >
          {/* 音樂祭票券dropdown */}
          <div className="row">
            <div className="col-12 col-lg-5 py-3 d-flex flex-row">
              <div className="col-6 text-center">
                <label
                  htmlFor="activity"
                  className="chb-h6 flex-fill text-center"
                >
                  <span className="chb-h5">票券狀態：</span>
                </label>
              </div>
              <div className="col-6">
                <select
                  required
                  id="activity"
                  name="activity"
                  className="align-item-center h-100 w-100"
                  // 票的篩選功能
                  value={ticketStatus}
                  onChange={handleStatusChange}
                >
                  <option value="0" className="text-center">
                    - - 全部 - -
                  </option>
                  <option value="1" className="text-center">
                    - - 未使用 - -
                  </option>
                  <option value="2" className="text-center">
                    - - 已使用 - -
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="ticket-list">
            {getFilteredTickets().map((ticket) => (
              <div key={ticket.id} className="ticket-item">
                {ticket.name} - {ticket.status}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mt-4 px-0">
        {isDesktop ? (
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th className="col-2">訂單編號</th>
                <th className="col-2">訂單時間</th>
                <th className="col-2">活動資訊</th>
                <th className="col-2">購買票數</th>
                <th className="col-2">明細</th>
              </tr>
            </thead>
            <tbody>
              {ticketData.map((v, i) => {
                return (
                  <Tickets
                    key={i}
                    tid={v.tid}
                    created_at={v.created_at}
                    price={v.price}
                    activity_name={v.activity_name}
                    activity_place={v.activity_place}
                    activity_time={v.activity_time}
                  />
                )
              })}
            </tbody>
          </table>
        ) : (
          <tbody>
            <TicketMobile />
          </tbody>
        )}
      </div>

      <style jsx>{`
        .custom-hr {
          border: 0;
          border-top: 4px solid #007bff; /* 設置粗細和顏色 */
          width: 100%; /* 分隔線寬度 */
          margin: 1rem auto; /* 上下邊距和自動水平對齊 */
        }
        .ticket-list {
          margin-top: 20px;
        }
        .ticket-item {
          padding: 10px;
          border-bottom: 1px solid #ccc;
        }
      `}</style>
    </>
  )
}

TicketOrder.getLayout = function getLayout(page) {
  return (
    <MemberDLayout title="Makin | 我的票券" pageName="ticket-order">
      {page}
    </MemberDLayout>
  )
}
