import React from 'react'
import { useEffect, useState } from 'react'

// 帶資料的api
import { ACT_LIST } from '@/configs/api-path'
// 路徑
import { useRouter } from 'next/router'

// 內容元件
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import BannerA from '@/components/Activity/banner-a'
import LeftBar from '@/components/Activity/left-bar'
import Tab from '@/components/common/tabs/tab'
import TabContentAll from '@/components/Activity/act-tab-content-n/tab-content-all'
import TabContentConcert from '@/components/Activity/act-tab-content-n/tab-content-concert'
import TabContentFestival from '@/components/Activity/act-tab-content-n/tab-content-festival'

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

            {/* <ul className="nav nav-tabs mb-3" id="activityTab" role="tablist">
              <Tab
                tabName="所有活動"
                tabTarget="tabTargetAll"
                ariaSelected={true}
                classNames="col-4 col-md-3"
              />
              <Tab
                tabName="演唱會"
                tabTarget="tabTargetConcert"
                ariaSelected={false}
                classNames="col-4 col-md-3"
              />
              <Tab
                tabName="音樂祭"
                tabTarget="tabTargetFestival"
                ariaSelected={false}
                classNames="col-4 col-md-3"
              />
            </ul> */}
            {/* <div className="tab-content" id="myTabContent">
              <TabContentAll tabTargetAll="tabTargetAll" />
              <TabContentConcert tabTargetConcert="tabTargetConcert" />
              <TabContentFestival tabTargetFestival="tabTargetFestival" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
