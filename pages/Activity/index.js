import React from 'react'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import BannerA from '@/components/activity/banner-a'
import LeftBar from '@/components/activity/left-bar'
import Tabs from '@/components/activity/tabs'
import ActivityCard from '@/components/activity/activity-card'

export default function Activity() {
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
            <Tabs />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
          </div>
        </div>
      </div>
    </>
  )
}
