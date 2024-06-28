import MemberDLayout from '@/components/member/computer-layout'
// import styles from '@/components/member/computer-layout/left-bar.module.scss'
import PageTab from '@/components/member/computer-layout/page-tab'
import Tickets from '@/components/member/computer-layout/tickets'
import TicketMobile from '@/components/member/mobile-layout/ticket-mobile'
import ticketData from '@/data/member/ticketData'
import { useTab } from '@/hooks/member/useTab'
import { useEffect, useState } from 'react'

// import { Dropdown } from 'react-bootstrap'

export default function TicketOrder() {
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
            <div className="col-12 col-lg-3 py-3 d-flex flex-row">
              <div className="col-6 text-center">
                <label
                  htmlFor="activity"
                  className="chb-h6 flex-fill text-center"
                >
                  <span>票券狀態：</span>
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
            <div className="col-12 col-lg-3 py-3 d-flex flex-row">
              <div className="col-6 text-center">
                <label
                  htmlFor="activity"
                  className="chb-h6 flex-fill text-center"
                >
                  <span>票券狀態：</span>
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

      <div className="container mt-4">
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
    <MemberDLayout title="Music | 我的票券" pageName="ticket-order">
      {page}
    </MemberDLayout>
  )
}
