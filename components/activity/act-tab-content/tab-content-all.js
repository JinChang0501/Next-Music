import React from 'react'
import ActivityCard from '@/components/activity/activity-card'

export default function TabContentAll({ tabTargetAll }) {
  return (
    <>
      <div
        className="tab-pane fade show active"
        //^^^^^^^^show跟active只需要寫在第一個tab的content裡面
        id={tabTargetAll}
        role="tabpanel"
        aria-labelledby={`${tabTargetAll}-tab`}
      >
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
    </>
  )
}
