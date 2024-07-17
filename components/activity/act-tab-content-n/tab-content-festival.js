import React from 'react'
import ActivityCard from '@/components/Activity/activity-card'

export default function TabContentFestival({ tabTargetFestival }) {
  return (
    <>
      <div
        className="tab-pane fade"
        //^^^^^^^^show跟active只需要寫在第一個tab的content裡面
        id={tabTargetFestival}
        role="tabpanel"
        aria-labelledby={`${tabTargetFestival}-tab`}
      >
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
    </>
  )
}
