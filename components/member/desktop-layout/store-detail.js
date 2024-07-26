import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircle } from 'react-icons/bs'
import StoreDetailCard from './store-detail-card'
import Link from 'next/link'
import moment from 'moment-timezone'

export default function StoreDetail({ storeData }) {
  const [isMobile, setIsMobile] = useState(false)

  console.log('下面是storeData--------------')
  console.log(storeData)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576) // 螢幕寬度 > 576px 為電腦板
    }

    handleResize() // 初始設定一次

    window.addEventListener('resize', handleResize) // 監聽視窗大小變化

    return () => window.removeEventListener('resize', handleResize) // 清除事件監聽器
  }, [])

  if (!storeData || storeData.length === 0) {
    return <div>Loading...</div>
  }

  const formateCreated_At = moment(storeData[0].created_at)
    .tz('Asia/Taipei')
    .format('YYYY/MM/DD HH:mm')

  return (
    <>
      <div className="row">
        <div className="col-12 bg-purple3 p-2 position-relative">
          <div className="p-0 m-0 chb-h5 text-center d-flex align-items-center justify-content-center">
            <Link
              href="/member/store-order"
              className="text-black d-flex align-items-center"
            >
              <BsArrowLeftCircle className="chr-h3 position-absolute start-3" />
            </Link>
            <p className="text-center p-0 m-0 fs-2 mx-auto">訂單紀錄</p>
          </div>
        </div>
      </div>

      <div className="row mt-3 border border-2 border-purple1">
        <div className="col-12 bg-purple1 py-2">
          <div className="px-md-5 m-0 fs-3 d-flex justify-content-between">
            <p className="text-center p-0 m-0 chb-h5 text-white">
              訂單編號:{storeData[0].order_num}
            </p>
            <p className="text-center p-0 m-0 chb-h5 text-white"></p>
          </div>
        </div>

        <div className="col-12 bg-purple3 py-2 border-top border-2 border-purple2">
          <div className="row text-center">
            <div className="col chb-h5">商品圖片</div>
            <div className="col chb-h5">商品名稱</div>
            <div className="col chb-h5">件數</div>
            <div className="col chb-h5">單價</div>
          </div>
        </div>

        {/* MAP寫在這 */}
        <div className="col-12 py-2">
          {storeData.map((v, i) => {
            return (
              <StoreDetailCard
                key={i}
                picture={v.picture}
                price={v.price}
                productName={v.productName}
                quantity={v.quantity}
              />
            )
          })}
        </div>

        <div className="col-12 py-2 border-top border-2 border-purple2">
          <div className="px-sm-5 m-0 d-flex justify-content-between">
            <p className="text-center p-0 m-0 chb-h5">
              共 {storeData[0].productTotalCount} 樣商品
            </p>
            <p className="text-center p-0 m-0 chb-h5">
              總金額: ${storeData[0].totalPrice}
            </p>
          </div>
        </div>

        <div className="col-12 bg-purple3 py-2 border-top border-2 border-purple2">
          <div className="row text-center">
            <div className="col chb-h5">訂單詳細資訊</div>
          </div>
        </div>

        <div className="col-12 py-2">
          <div className="px-sm-5 m-0 d-flex justify-content-between mb-2">
            <p className="text-center p-0 m-0 chb-h5">訂單時間</p>
            <p className="text-center p-0 m-0 chr-h5">{formateCreated_At}</p>
          </div>
          <div className="px-sm-5 m-0 d-flex justify-content-between mb-2">
            <p className="text-center p-0 m-0 chb-h5">訂購人</p>
            <p className="text-center p-0 m-0 chr-h5">
              {storeData[0].memberName}
            </p>
          </div>
          <div className="px-sm-5 m-0 d-flex justify-content-between mb-2">
            <p className="text-center p-0 m-0 chb-h5">付款方式</p>
            <p className="text-center p-0 m-0 chr-h5">
              {/* {storeData[0].payment_method} */}現金
            </p>
          </div>
          <div className="px-sm-5 m-0 d-flex justify-content-between mb-2">
            <p className="text-center p-0 m-0 chb-h5">配送方式</p>
            <p className="text-center p-0 m-0 chr-h5">
              {storeData[0].storename
                ? `${storeData[0].pickup_method}${storeData[0].storename}`
                : `${storeData[0].pickup_method}`}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
