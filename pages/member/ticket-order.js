import React, { useState } from 'react'
import MemberDLayout from '@/components/member/computer-layout'
import tickets from '@/data/member/tickets.json'
import styles from '@/components/member/computer-layout/left-bar.module.scss'

// import { Dropdown } from 'react-bootstrap'

export default function TicketOrder() {
  const [activeTab, setActiveTab] = useState('concert') //頁籤 預設先給concert
  const [ticketStatus, setTicketStatus] = useState('0') //下拉選單 預設是0， 0就是 "全部"

  const concertTickets = [
    // { id: 0, status: '全部', name: '全部' },
    { status: '未使用', name: '演唱會 1' },
    { status: '已使用', name: '演唱會 2' },
    // 添加更多票券資料
  ]

  const festivalTickets = [
    // { id: 0, status: '全部', name: '全部' },
    { status: '未使用', name: '音樂祭 1' },
    { status: '已使用', name: '音樂祭 2' },
    // 添加更多票券資料
  ]

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setTicketStatus('0') // 重置票券狀態
  }

  const handleStatusChange = (e) => {
    setTicketStatus(e.target.value)
  }

  const getFilteredTickets = () => {
    const tickets = activeTab === 'concert' ? concertTickets : festivalTickets
    if (ticketStatus === '0') {
      return tickets
    }
    return tickets.filter(
      (ticket) => ticket.status === (ticketStatus === '1' ? '未使用' : '已使用')
    )
  }

  return (
    <>
      <p className="chb-h4 text-purple1">我的票券</p>
      <hr className="custom-hr" />
      <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
        <li className="nav-item col-6 col-md-3" role="presentation">
          <button
            className={`nav-link w-100 ${
              activeTab === 'concert' ? 'active' : ''
            } px-5`}
            id="concert-tab"
            data-bs-toggle="tab"
            type="button"
            role="tab"
            aria-controls="concert"
            aria-selected={activeTab === 'concert'}
            onClick={() => handleTabChange('concert')}
          >
            演唱會
          </button>
        </li>
        <li className="nav-item col-6 col-md-3" role="presentation">
          <button
            className={`nav-link w-100 ${
              activeTab === 'festival' ? 'active' : ''
            } px-5`}
            id="festival-tab"
            data-bs-toggle="tab"
            type="button"
            role="tab"
            aria-controls="festival"
            aria-selected={activeTab === 'festival'}
            onClick={() => handleTabChange('festival')}
          >
            音樂祭
          </button>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        <div
          className={`tab-pane fade ${
            activeTab === 'concert' ? 'show active' : ''
          }`}
          id="concert"
          role="tabpanel"
          aria-labelledby="concert-tab"
        >
          {/* dropdown */}
          <div className="row">
            <div className="col-12 col-lg-6 py-3">
              <div className="w-100 d-flex">
                <label
                  htmlFor="activity"
                  className="chb-h6 flex-fill text-center"
                >
                  <span>票券狀態：</span>
                </label>
                <select
                  required
                  id="activity"
                  name="activity"
                  className="align-item-center flex-fill"
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
            <div className="col-9"></div>
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
          {/* dropdown */}
          <div className="row">
            <div className="col-12 col-lg-6 py-3">
              <div className="w-100 d-flex">
                <label
                  htmlFor="activity"
                  className="chb-h6 flex-fill text-center"
                >
                  <span>票券狀態：</span>
                </label>
                <select
                  required
                  id="activity"
                  name="activity"
                  className="align-item-center flex-fill"
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
            <div className="col-9"></div>
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
  return <MemberDLayout title="Music | 我的票券">{page}</MemberDLayout>
}
