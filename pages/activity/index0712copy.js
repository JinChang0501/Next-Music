import React from 'react'
import { useEffect, useState } from 'react'

// 帶資料的api
import { ACT_LIST } from '@/configs/api-path'
// import { ACT_GET_ITEM } from '@/configs/api-path'
// 路徑
import { useRouter } from 'next/router'

// 內容元件
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import BannerA from '@/components/activity/banner-a'
import LeftBar from '@/components/activity/left-bar'
import ActivityCard from '@/components/activity/activity-card'

export default function Activity() {
  const router = useRouter()

  const [data, setData] = useState({
    success: false,
    rows: [],
  })

// 查詢條件用
const [nameLike, setNameLike] = useState('')
const [actClass, setActClass] = useState(0)
const [area, setArea] = useState(0)

  // 麵包屑 內容定義
  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '演出活動', href: '/activity' },
  ]

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    // setLoading(true);
    // new URLSearchParams(router.query) 這塊應該是放搜尋結果的query string
    fetch(`${ACT_LIST}?${new URLSearchParams(router.query)}`, { signal })
      .then((r) => r.json())
      .then((myData) => {
        console.log(data)
        setData(myData)
        // setLoading(false);
      })
      .catch((ex) => {
        // setLoadingError('載入資料時發生錯誤');
        // setLoading(false);
        console.log('fetch-ex', ex)
      })
    return () => {
      controller.abort() // 取消上一次的 ajax
    }
  }, [router])

  console.log(`activity render--------`)

  if (!router.isReady || !data.success) return null

const handleSearch = (e) => {

}

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <BannerA />
      <div className="music-container">
        <div className="row">
          <LeftBar
            handleSearch={handleSearch} 
          />
          <div className="col-md-9 col-12">
            {/* 可放［活動列表 >> 搜尋結果］在標題 */}
            <div className="chb-h4 mb-3 text-purple1">活動列表</div>
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
