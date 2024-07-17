import MemberDLayout from '@/components/member/desktop-layout'
import React, { useEffect, useState } from 'react'
import StoreDetail from '@/components/member/desktop-layout/store-detail'
import StoreDetailMobile from '@/components/member/mobile-layout/store-detail-mobile'
import { GET_STORE_DETAIL } from '@/configs/api-path'
import { useRouter } from 'next/router'

export default function StoreDetailPage() {
  const [isDesktop, setIsDesktop] = useState(true)
  const [storeData, setStoreData] = useState([])
  const router = useRouter()
  const [data, setData] = useState({
    success: false,
    data: {},
  })
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const order_num = router.query.order_num

    console.log('下面是router.query')

    console.log(router.query)

    const url = `${GET_STORE_DETAIL}/${order_num}`
    // new URLSearchParams(router.query) 這塊應該是搜尋結果的query string
    fetch(url, {
      signal,
      credentials: 'include',
    })
      .then((r) => r.json())
      .then((myData) => {
        console.log('--------------------------')
        console.log(data)
        setData(myData)
        console.log('----------myData---------')
        console.log(myData)
        console.log('----------myData.data.result---------')

        setStoreData(myData.data.result) //物件陣列
        console.log(myData.data.result)
      })
      .catch((ex) => {
        console.log('fetch-ex', ex)
      })
    return () => {
      controller.abort() // 取消上一次的 ajax
    }
  }, [router])

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
      {isDesktop ? (
        <StoreDetail storeData={storeData} />
      ) : (
        <StoreDetailMobile storeData={storeData} />
      )}
    </>
  )
}
StoreDetailPage.getLayout = function getLayout(page) {
  return (
    <MemberDLayout title="Makin | 購物訂單詳細頁面" pageName="store-order">
      {page}
    </MemberDLayout>
  )
}
