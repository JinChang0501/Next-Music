import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircle } from 'react-icons/bs'
import StoreDetailCard from './store-detail-card'
export default function StoreDetail() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576) // 螢幕寬度 > 576px 為電腦板
    }

    handleResize() // 初始設定一次

    window.addEventListener('resize', handleResize) // 監聽視窗大小變化

    return () => window.removeEventListener('resize', handleResize) // 清除事件監聽器
  }, [])

  return (
    <>
      <div className="row">
        <div className="col-12 bg-purple3 p-2 position-relative">
          <div className="p-0 m-0 chb-h5 text-center d-flex align-items-center justify-content-center">
            <a href="#" className="text-black d-flex align-items-center">
              <BsArrowLeftCircle className="chr-h3 position-absolute start-3" />
            </a>
            <p className="text-center p-0 m-0 fs-2 mx-auto">訂單紀錄</p>
          </div>
        </div>
      </div>

      <div className="row mt-3 border border-2 border-purple1">
        <div className="col-12 bg-purple1 py-2">
          <div className="px-md-5 m-0 fs-3 d-flex justify-content-between">
            <p className="text-center p-0 m-0 chb-h5 text-white">
              訂單編號:0000001
            </p>
            <p className="text-center p-0 m-0 chb-h5 text-white">已完成</p>
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
          <StoreDetailCard />
        </div>

        <div className="col-12 py-2 border-top border-2 border-purple2">
          <div className="px-sm-5 m-0 d-flex justify-content-between">
            <p className="text-center p-0 m-0 chb-h5">共 3 樣商品</p>
            <p className="text-center p-0 m-0 chb-h5">總金額: $2100</p>
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
            <p className="text-center p-0 m-0 chr-h5">2024/06/31 19:30</p>
          </div>
          <div className="px-sm-5 m-0 d-flex justify-content-between mb-2">
            <p className="text-center p-0 m-0 chb-h5">訂購人</p>
            <p className="text-center p-0 m-0 chr-h5">黃大安</p>
          </div>
          <div className="px-sm-5 m-0 d-flex justify-content-between mb-2">
            <p className="text-center p-0 m-0 chb-h5">付款方式</p>
            <p className="text-center p-0 m-0 chr-h5">LINE PAY</p>
          </div>
          <div className="px-sm-5 m-0 d-flex justify-content-between mb-2">
            <p className="text-center p-0 m-0 chb-h5">配送方式</p>
            <p className="text-center p-0 m-0 chr-h5">7-11 大安店</p>
          </div>
        </div>
      </div>
    </>
  )
}
