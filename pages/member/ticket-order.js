import MemberDLayout from '@/components/member/desktop-layout'
// import styles from '@/components/member/desktop-layout/left-bar.module.scss'
import toast, { Toaster } from 'react-hot-toast'
import Tickets from '@/components/member/desktop-layout/tickets'
import TicketMobile from '@/components/member/mobile-layout/ticket-mobile'

import { useCallback, useEffect, useState } from 'react'
import { getTicketOrder } from '@/services/ticket-order'
import { useAuth } from '@/hooks/use-auth'
import Tab from '@/components/common/tabs/tab'
import Link from 'next/link'

export default function TicketOrder() {
  const [userTicketsCon, setUserTicketCon] = useState([])
  const [userTicketsFes, setUserTicketFes] = useState([])
  const { auth } = useAuth()

  const [sortBy, setSortBy] = useState('')

  const getSort = (e) => {
    setSortBy(e.target.value)
  }
  useEffect(() => {
    console.log(sortBy)
  }, [sortBy])

  const getUserData = useCallback(async () => {
    try {
      const res = await getTicketOrder(sortBy)
      console.log('以下是response data')
      console.log(res)
      console.log('以下是res.data')
      console.log(res.data)

      if (res.status === 'success') {
        console.log('以下是res.data.result')
        console.log(res.data.result)

        const concertData = res.data.result.filter((item) => {
          return item.class === 'concert'
        })

        const festivalData = res.data.result.filter((item) => {
          return item.class === 'festival'
        })
        console.log('以下是filteredData')
        console.log(festivalData)

        setUserTicketCon(concertData)
        setUserTicketFes(festivalData)

        console.log('會員訂單資料載入成功')
      } else {
        console.log('會員訂單資料載入失敗')
      }
    } catch (error) {
      console.error('Error fetching order data:', error)
      console.log('會員訂單資料載入失敗')
    }
  }, [sortBy, setUserTicketCon, setUserTicketFes])

  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    console.log(sortBy)
    getUserData()
  }, [sortBy, getUserData])

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
      //getUserData() // getUserData(auth.userData.id) 將用戶 ID 傳遞给 getTicketOrder 函数，但是抓會員資料是來自authenticate.js
    }
  }, [auth])

  // if (userTicketsCon.length === 0 && userTicketsFes.length === 0) {
  //   return (
  //     <>
  //       <p className="chb-h4 text-purple1">我的票券</p>
  //       <hr className="custom-hr" />
  //       <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
  //         <Tab
  //           tabName="演唱會"
  //           tabTarget="concert"
  //           ariaSelected={true}
  //           classNames="col-6 col-md-3"
  //         />
  //         <Tab
  //           tabName="音樂祭"
  //           tabTarget="festival"
  //           ariaSelected={false}
  //           classNames="col-6 col-md-3"
  //         />
  //       </ul>
  //       {/* ---------------------------------- */}
  //       {/* 內容 */}
  //       <div className="tab-content mb-2" id="myTabContent">
  //         <div
  //           className="tab-pane fade show active"
  //           id="concert"
  //           role="tabpanel"
  //           aria-labelledby="concert-tab"
  //         >
  //           {/* 排序dropdown */}
  //           <div className="row">
  //             <div className="col-12 col-lg-6 py-3 d-flex flex-row">
  //               <div className="col-6 text-center">
  //                 <label
  //                   htmlFor="activity"
  //                   className="chb-h6 flex-fill text-center"
  //                 >
  //                   <span className="chb-h5">訂單排序：</span>
  //                 </label>
  //               </div>
  //               <div className="col-6">
  //                 <select
  //                   required
  //                   id="activity"
  //                   name="activity"
  //                   className="align-item-center h-100 w-100"
  //                   onChange={getSort}
  //                   disabled
  //                 >
  //                   <option value="desc" className="text-center">
  //                     時間由近到遠
  //                   </option>
  //                   <option value="asc" className="text-center">
  //                     時間由遠到近
  //                   </option>
  //                 </select>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="container mt-5 px-0">
  //             <div className="table table-bordered text-center">
  //               <p className="chr-h6">您的票券還是空的呢！</p>
  //               <Link href="/Activity" className="chr-h6">
  //                 探索精彩活動，開始您的音樂之旅
  //               </Link>
  //             </div>
  //           </div>
  //         </div>
  //         {/* 2 */}
  //         <div
  //           className="tab-pane fade"
  //           id="festival"
  //           role="tabpanel"
  //           aria-labelledby="festival-tab"
  //         >
  //           {/* ---------------------------------------------------- */}
  //           {/* 排序dropdown */}
  //           <div className="row">
  //             <div className="col-12 col-lg-6 py-3 d-flex flex-row">
  //               <div className="col-6 text-center">
  //                 <label
  //                   htmlFor="activity"
  //                   className="chb-h6 flex-fill text-center"
  //                 >
  //                   <span className="chb-h5">訂單排序：</span>
  //                 </label>
  //               </div>
  //               <div className="col-6">
  //                 <select
  //                   required
  //                   id="activity"
  //                   name="activity"
  //                   className="align-item-center h-100 w-100"
  //                   onChange={getSort}
  //                   disabled
  //                 >
  //                   <option value="desc" className="text-center">
  //                     時間由近到遠
  //                   </option>
  //                   <option value="asc" className="text-center">
  //                     時間由遠到近
  //                   </option>
  //                 </select>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="container mt-5 px-0">
  //             <div className="table table-bordered text-center">
  //               <p className="chr-h6">您的票券還是空的呢！</p>
  //               <Link href="/Activity" className="chr-h6">
  //                 探索精彩活動，開始您的音樂之旅
  //               </Link>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   )
  // }

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
          {/* 排序dropdown */}
          <div className="row">
            <div className="col-12 col-lg-6 py-3 d-flex flex-row">
              <div className="col-6 text-center">
                <label
                  htmlFor="activity"
                  className="chb-h6 flex-fill text-center"
                >
                  <span className="chb-h5">訂單排序：</span>
                </label>
              </div>
              <div className="col-6">
                <select
                  required
                  id="activity"
                  name="activity"
                  className="align-item-center h-100 w-100"
                  onChange={getSort}
                  disabled={userTicketsCon.length === 0}
                >
                  <option value="desc" className="text-center">
                    時間由近到遠
                  </option>
                  <option value="asc" className="text-center">
                    時間由遠到近
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="container mt-4 px-0">
            {userTicketsCon.length === 0 ? (
              <>
                <div className="table table-bordered text-center">
                  <p className="chr-h6">您的票券還是空的呢！</p>
                  <Link href="/Activity" className="chr-h6">
                    探索精彩活動，開始您的音樂之旅
                  </Link>
                </div>
              </>
            ) : (
              <>
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
                            key={v.order_num}
                            order_num={v.order_num}
                            created_at={v.created_at}
                            price={v.price}
                            actname={v.actname}
                            location={v.location}
                            actdate={v.actdate}
                            acttime={v.acttime}
                            amount={v.amount}
                            picinfrontend={v.picinfrontend}
                            status={v.status}
                            payment={v.payment}
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
                          key={v.order_num}
                          order_num={v.order_num}
                          created_at={v.created_at}
                          price={v.price}
                          actname={v.actname}
                          location={v.location}
                          actdate={v.actdate}
                          acttime={v.acttime}
                          amount={v.amount}
                          picinfrontend={v.picinfrontend}
                          status={v.status}
                          payment={v.payment}
                        />
                      )
                    })}
                  </tbody>
                )}
              </>
            )}
          </div>
        </div>
        {/* 2 */}
        <div
          className="tab-pane fade"
          id="festival"
          role="tabpanel"
          aria-labelledby="festival-tab"
        >
          {/* ---------------------------------------------------- */}
          {/* 排序dropdown */}
          <div className="row">
            <div className="col-12 col-lg-6 py-3 d-flex flex-row">
              <div className="col-6 text-center">
                <label
                  htmlFor="activity"
                  className="chb-h6 flex-fill text-center"
                >
                  <span className="chb-h5">訂單排序：</span>
                </label>
              </div>
              <div className="col-6">
                <select
                  required
                  id="activity"
                  name="activity"
                  className="align-item-center h-100 w-100"
                  onChange={getSort}
                  disabled={userTicketsFes.length === 0}
                >
                  <option value="desc" className="text-center">
                    時間由近到遠
                  </option>
                  <option value="asc" className="text-center">
                    時間由遠到近
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="container mt-4 px-0">
            {userTicketsFes.length === 0 ? (
              <>
                <div className="table table-bordered text-center">
                  <p className="chr-h6">您的票券還是空的呢！</p>
                  <Link href="/Activity" className="chr-h6">
                    探索精彩活動，開始您的音樂之旅
                  </Link>
                </div>
              </>
            ) : (
              <>
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
                            key={v.order_num}
                            order_num={v.order_num}
                            created_at={v.created_at}
                            price={v.price}
                            actname={v.actname}
                            location={v.location}
                            actdate={v.actdate}
                            acttime={v.acttime}
                            amount={v.amount}
                            picinfrontend={v.picinfrontend}
                            status={v.status}
                            payment={v.payment}
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
                          key={v.order_num}
                          order_num={v.order_num}
                          created_at={v.created_at}
                          price={v.price}
                          actname={v.actname}
                          location={v.location}
                          actdate={v.actdate}
                          acttime={v.acttime}
                          amount={v.amount}
                          picinfrontend={v.picinfrontend}
                          status={v.status}
                          payment={v.payment}
                        />
                      )
                    })}
                  </tbody>
                )}
              </>
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
