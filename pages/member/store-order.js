import MemberDLayout from '@/components/member/desktop-layout'
import OrderCard from '@/components/member/desktop-layout/order-card'
import OrderCardMobile from '@/components/member/mobile-layout/order-card-mobile'
import toast, { Toaster } from 'react-hot-toast'

import { useEffect, useState } from 'react'
import { getStoreOrder } from '@/services/store-order'
import { useAuth } from '@/hooks/use-auth'

// import { Dropdown } from 'react-bootstrap'

export default function StoreOrder() {
  const [isDesktop, setIsDesktop] = useState(true)
  const { auth } = useAuth()
  const [orderData, setOrderData] = useState([])

  const getUserData = async () => {
    const res = await getStoreOrder()
    console.log('以下是response data')
    console.log(res)
    console.log('以下是res.data.class')
    console.log(res.data)

    if (res.status === 'success') {
      console.log('res.data.result')

      console.log(res.data.result)
      //const tickets = res.data.result //這一包是物件陣列[{},{},{}]
      // const ticketsCon = res.data.result

      // const ticketsFes = festivalData
      setOrderData(res.data.result) //這一包是物件陣列[{},{},{}]

      toast.success('會員購物紀錄載入成功')
    } else {
      toast.error(`會員購物紀錄載入失敗`)
    }
  }

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
      getUserData() // 将用户 ID 传递给 getUserById 函数
    }
  }, [auth])
  return (
    <>
      <p className="chb-h4 text-purple1">周邊購買紀錄</p>
      <hr className="custom-hr" />
      {/* 活動dropdown */}
      <div className="row">
        <div className="col-12 col-lg-5 py-3 d-flex flex-row">
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
        {isDesktop
          ? orderData.map((v, i) => {
              return (
                <OrderCard
                  key={i}
                  order_num={v.order_num}
                  firstProductPicture={v.firstProductPicture}
                  firstProductName={v.firstProductName}
                  totalPrice={v.totalPrice}
                  totalCount={v.totalCount}
                />
              )
            })
          : orderData.map((v, i) => {
              return (
                <OrderCardMobile
                  key={i}
                  order_num={v.order_num}
                  firstProductPicture={v.firstProductPicture}
                  firstProductName={v.firstProductName}
                  totalPrice={v.totalPrice}
                  totalCount={v.totalCount}
                />
              )
            })}
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
    <MemberDLayout title="Makin | 周邊購買紀錄" pageName="store-order">
      {page}
    </MemberDLayout>
  )
}
