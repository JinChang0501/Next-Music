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

  const [data, setData] = useState({
    success: false,
    rows: [],
  })
  // 麵包屑
  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '演出活動', href: '/activity' },
  ]
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <BannerA />
      <div className="music-container">
        <div className="row">
          <LeftBar />
          <div className="col-md-9 col-12">
            {/* 可放［活動列表：搜尋結果］在標題 */}
            <div className="chb-h4 mb-3 text-purple1">活動列表</div>
            <ActivityCard />
          </div>
        </div>
      </div>
    </>
  )
}
