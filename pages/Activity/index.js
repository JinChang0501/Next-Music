import React from 'react'
import { useEffect, useState } from 'react'

// 帶資料的api
import { ACT_LIST } from '@/configs/api-path'
// 路徑
import { useRouter } from 'next/router'

// 內容元件
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import BannerA from '@/components/activity/banner-a'
import LeftBar from '@/components/activity/left-bar'
import ActivityCard from '@/components/activity/activity-card'

export default function Activity() {
  const router = useRouter()
  // 活動資料陣列
  const [data, setData] = useState({
    success: false,
    rows: [],
  })
  // 注意1: 初始值至少要空白陣列。初次render是用初始值，需要對應伺服器回應的資料類型。
  // 注意2: 在應用程式執行過程中，一定要保持狀態的資料類型(一定要是陣列)
  // const [activity, setActivity] = useState([]) 

  // 查詢條件用(這裡用的初始值都與伺服器的預設值一致)
  const [keyword, setKeyword] = useState('')
  const [actClass, setActClass] = useState('')
  const [area, setArea] = useState('')

  // 麵包屑 內容定義
  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '演出活動', href: '/activity' },
  ]

  // 與伺服器作fetch獲得資料(建議寫在useEffect上面與外面比較容易維護管理)
  const getActivity = async (params = {}) => {
    // 轉換為查詢字串
    // console.log(router.query) // 是空的
    // console.log(params)       // keyword,actClass,area
    const searchParams = new URLSearchParams(params)
    const url = `${ACT_LIST}?${searchParams.toString()}`

    // 使用try-catch陳述式，讓和伺服器連線程式作錯誤處理
    try {
      const res = await fetch(url)
      const resData = await res.json()
      console.log(resData)
      if (resData.success === true) {
        // 檢查是否為陣列資料類型(基本保護)
        if (Array.isArray(resData.rows)) {
          // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render)
          setData(resData)
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  // 按下搜尋按鈕
  const handleSearch =  (e) => {
    e.preventDefault()
    
    const params = {
      // sort: orderby.sort,
      // order: orderby.order,
      keyword: keyword,
      actClass: actClass,
      area: area,
    }
    console.log("params1")
    console.log(params)

     getActivity(params)
  }

  useEffect(() => {
    const params = {
      // sort: orderby.sort,
      // order: orderby.order,
      keyword: keyword,
      actClass: actClass,
      area: area,
    }

    getActivity(params)
    console.log("params2")
    console.log(params)
    // eslint-disable-next-line
  }, [])
  
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <BannerA />
      <div className="music-container">
        <div className="row">
          <LeftBar 
            classValue={actClass}
            onClassChange={(e) => {
              setActClass(e.target.value)
            }}
            areaValue={area}
            onAreaChange={(e) => {
              setArea(e.target.value)
            }}
            nameValue={keyword}
            onNameChange={(e) => {
              setKeyword(e.target.value)
            }}
            handleSearch={handleSearch} 
          />
          <div className="col-md-9 col-12">
            <div className="chb-h4 mb-3 text-purple1">活動列表</div>
            {/* 可放［活動列表 >> 搜尋結果］在標題，有結果再顯示 */}
            {/* <div className="chb-h4 mb-3 text-purple1"></div> */}
            {data.rows.map((r, i) => {
              return (
                <ActivityCard
                  key={r.actid}
                  imgSrc={r.cover}
                  title={r.name}
                  artist={r.art_name}
                  location={r.location}
                  actdate={r.actdate}
                  acttime={r.acttime}
                  aid={r.actid}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
