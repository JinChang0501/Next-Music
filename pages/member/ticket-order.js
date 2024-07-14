import MemberDLayout from '@/components/member/desktop-layout'
// import styles from '@/components/member/desktop-layout/left-bar.module.scss'
import toast, { Toaster } from 'react-hot-toast'
import Tickets from '@/components/member/desktop-layout/tickets'
import TicketMobile from '@/components/member/mobile-layout/ticket-mobile'

import { useEffect, useState } from 'react'
import { getUserById } from '@/services/ticket-order'
import { useAuth } from '@/hooks/use-auth'
import Tab from '@/components/common/tabs/tab'

export default function TicketOrder() {
  const [userTicketsCon, setUserTicketCon] = useState([])
  const [userTicketsFes, setUserTicketFes] = useState([])

  const { auth } = useAuth()

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

      const concertData = res.data.result.filter((item) => {
        return item.class === 'concert'
      })

      const festivalData = res.data.result.filter((item) => {
        return item.class === 'festival'
      })
      console.log('以下是filteredData')
      console.log(festivalData)
      //const tickets = res.data.result //這一包是物件陣列[{},{},{}]
      // const ticketsCon = res.data.result

      // const ticketsFes = festivalData
      setUserTicketCon(concertData)
      setUserTicketFes(festivalData)

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
      <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
        <Tab
          tabName="演唱會"
          tabTarget="concert"
          ariaSelected={true}
          classNames="col-6 col-md-3"
        />
        <Tab
          tabName="音樂祭"
          tabTarget="festival"
          ariaSelected={false}
          classNames="col-6 col-md-3"
        />
      </ul>
      {/* ---------------------------------- */}
      {/* 內容 */}
      <div className="tab-content mb-2" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="concert"
          role="tabpanel"
          aria-labelledby="concert-tab"
        >
          {/* 活動dropdown */}
          <div className="row">
            <div className="col-12 col-md-5 py-3 d-flex flex-row">
              <div className="col-6 text-center">
                <label
                  htmlFor="activity"
                  className="chb-h6 flex-fill text-center"
                >
                  <span className="chb-h5">活動種類：</span>
                </label>
              </div>
              <div className="col-6">
                <select
                  required
                  id="activity"
                  name="activity"
                  className="align-item-center h-100 w-100"
                  // value={selectedActivity}
                  // onChange={handleChange}
                >
                  <option value="0" className="text-center">
                    - - 全部 - -
                  </option>
                  <option value="1" className="text-center">
                    - - 演唱會 - -
                  </option>
                  <option value="2" className="text-center">
                    - - 音樂祭 - -
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade show active"
            id="concert"
            role="tabpanel"
            aria-labelledby="concert-tab"
          >
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
                    {userTicketsCon.map((v, i) => {
                      return (
                        <Tickets
                          key={i}
                          order_num={v.order_num}
                          created_at={v.created_at}
                          price={v.price}
                          actname={v.actname}
                          location={v.location}
                          actdate={v.actdate}
                          acttime={v.acttime}
                          amount={v.amount}
                        />
                      )
                    })}
                  </tbody>
                </table>
              ) : (
                <tbody>
                  {userTicketsCon.map((v, i) => {
                    return (
                      <TicketMobile
                        key={i}
                        order_num={v.order_num}
                        created_at={v.created_at}
                        price={v.price}
                        actname={v.actname}
                        location={v.location}
                        actdate={v.actdate}
                        acttime={v.acttime}
                        amount={v.amount}
                      />
                    )
                  })}
                </tbody>
              )}
            </div>
          </div>
        </div>
        {/* 2 */}
        <div
          className="tab-pane fade"
          id="festival"
          role="tabpanel"
          aria-labelledby="festival-tab"
        >
          {/* 藝人dropdown */}
          <div className="row">
            <div className="col-12 col-md-5 py-3 d-flex flex-row">
              <div className="col-6 text-center">
                <label
                  htmlFor="artist"
                  className="chb-h6 flex-fill text-center"
                >
                  <span className="chb-h5">藝人：</span>
                </label>
              </div>
              <div className="col-6">
                <select
                  required
                  id="artist"
                  name="artist"
                  className="align-item-center h-100 w-100"
                  // value={selectedActivity}
                  // onChange={handleChange}
                  disabled
                >
                  <option value="0" className="text-center">
                    - - 全部 - -
                  </option>
                </select>
              </div>
            </div>
          </div>
          {/* ---------------------------------------------------- */}

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
                  {userTicketsFes.map((v, i) => {
                    return (
                      <Tickets
                        key={i}
                        order_num={v.order_num}
                        created_at={v.created_at}
                        price={v.price}
                        actname={v.actname}
                        location={v.location}
                        actdate={v.actdate}
                        acttime={v.acttime}
                        amount={v.amount}
                      />
                    )
                  })}
                </tbody>
              </table>
            ) : (
              <tbody>
                {userTicketsFes.map((v, i) => {
                  return (
                    <TicketMobile
                      key={i}
                      order_num={v.order_num}
                      created_at={v.created_at}
                      price={v.price}
                      actname={v.actname}
                      location={v.location}
                      actdate={v.actdate}
                      acttime={v.acttime}
                      amount={v.amount}
                    />
                  )
                })}
              </tbody>
            )}
          </div>
        </div>
      </div>
      {/* ---------------------------------- */}

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
