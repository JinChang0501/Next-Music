import React from 'react'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import BannerA from '@/components/activity/banner-a'
import LeftBar from '@/components/activity/left-bar'
import ActivityTabs from '@/components/activity/activity-tabs'
import Tab from '@/components/common/tabs/tab'
import ActivityCard from '@/components/activity/activity-card'
import TabContentAll from '@/components/activity/act-tab-content/tab-content-all'
import TabContentConcert from '@/components/activity/act-tab-content/tab-content-concert'
import TabContentFestival from '@/components/activity/act-tab-content/tab-content-festival'

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
            {/* <ActivityTabs /> */}
            <ul className="nav nav-tabs mb-3" id="activityTab" role="tablist">
              <Tab
                tabName="所有活動"
                tabTarget="tabTargetAll"
                ariaSelected={true}
                classNames="col-6 col-md-3"
              />
              <Tab
                tabName="演唱會"
                tabTarget="tabTargetConcert"
                ariaSelected={false}
                classNames="col-6 col-md-3"
              />
              <Tab
                tabName="音樂祭"
                tabTarget="tabTargetFestival"
                ariaSelected={false}
                classNames="col-6 col-md-3"
              />
            </ul>
            <div className="tab-content" id="myTabContent">
              <TabContentAll tabTargetAll="tabTargetAll" />
              <TabContentConcert tabTargetConcert="tabTargetConcert" />
              <TabContentFestival tabTargetFestival="tabTargetFestival" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
