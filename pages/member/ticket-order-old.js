import MemberDLayout from '@/components/member/desktop-layout'
// import styles from '@/components/member/desktop-layout/left-bar.module.scss'
import toast, { Toaster } from 'react-hot-toast'

import PageTab from '@/components/member/desktop-layout/page-tab'
import Tickets from '@/components/member/desktop-layout/tickets'
import TicketMobile from '@/components/member/mobile-layout/ticket-mobile'
import ticketData from '@/data/member/ticketData'
import { useTab } from '@/hooks/member/useTab'
import { useEffect, useState } from 'react'

import { getUserById } from '@/services/ticket-order'
import { useAuth } from '@/hooks/use-auth'

export default function TicketOrder() {
  const {
    activeTab,
    ticketStatus,
    handleStatusChange,
    getFilteredTickets,
    useConTab,
  } = useTab()
  const [userTickets, setUserTicket] = useState([])
  const { auth } = useAuth()
  const [tab, setTab] = useState(useConTab)

  const getUserData = async (id) => {
    const res = await getUserById(id)
    console.log('以下是response data')
    console.log(res)
    console.log('以下是res.data.class')
    console.log(res.data)
    // const filteredData = res.data.map((item) => item.class === 'concert')
    // console.log('以下是filteredData')
    // console.log(filteredData)

    if (res.status === 'success') {
      // 以下為同步化目前後端資料庫資料，與這裡定義的初始化會員資料物件的資料

      // const dbUserProfile = { ...initUserTicket }

      // 假设您只需要第一个票務數據，可以根據實際需求修改
      // const firstTicket = dbUserTickets.length > 0 ? dbUserTickets[0] : {}

      // 設定到狀態中
      // setUserTicket(dbUserProfile)
      console.log(res.data.result)
      const filteredData = res.data.result.filter((item) => {
        return item.class === tab
      })
      console.log('以下是filteredData')
      console.log(filteredData)
      //const tickets = res.data.result //這一包是物件陣列[{},{},{}]
      const tickets = filteredData
      setUserTicket(tickets)
      toast.success('會員訂單資料載入成功')
    } else {
      toast.error(`會員訂單資料載入失敗`)
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
  // auth載入完成後向資料庫要會員資料
  useEffect(() => {
    if (auth.isAuth) {
      getUserData(auth.userData.id) // 将用户 ID 传递给 getUserById 函数
    }
  }, [auth])

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
                  {userTickets.map((v, i) => {
                    return (
                      <Tickets
                        key={i}
                        order_num={v.order_num}
                        created_at={v.created_at}
                        price={v.price}
                        activity_name={v.name}
                        activity_place={v.location}
                        a_datetime={v.a_datetime}
                        amount={v.amount}
                      />
                    )
                  })}
                </tbody>
              </table>
            ) : (
              <tbody>
                {userTickets.map((v, i) => {
                  return (
                    <TicketMobile
                      key={i}
                      order_num={v.order_num}
                      created_at={v.created_at}
                      price={v.price}
                      activity_name={v.name}
                      location={v.location}
                      a_datetime={v.a_datetime}
                      amount={v.amount}
                    />
                  )
                })}
              </tbody>
            )}
            {/* {getFilteredTickets().map((ticket) => (
              <div key={ticket.id} className="ticket-item">
                {ticket.name} - {ticket.status}
              </div>
            ))} */}
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
              {userTickets.map((v, i) => {
                return (
                  <Tickets
                    key={i}
                    order_num={v.order_num}
                    created_at={v.created_at}
                    price={v.price}
                    activity_name={v.name}
                    activity_place={v.location}
                    a_datetime={v.a_datetime}
                    amount={v.amount}
                  />
                )
              })}
            </tbody>
          </table>
        ) : (
          <tbody>
            {userTickets.map((v, i) => {
              return (
                <TicketMobile
                  key={i}
                  order_num={v.order_num}
                  created_at={v.created_at}
                  price={v.price}
                  activity_name={v.name}
                  location={v.location}
                  a_datetime={v.a_datetime}
                  amount={v.amount}
                />
              )
            })}
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
