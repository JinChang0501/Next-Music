import React from 'react'

export default function TabContentAid({ tabTargetAid }) {
  return (
    <>
      <div
        className="tab-pane fade show active"
        //^^^^^^^^show跟active只需要寫在第一個tab的content裡面
        id={tabTargetAid}
        role="tabpanel"
        aria-labelledby={`${tabTargetAid}-tab`}
      >
        <div>先亂打一行字</div>
      </div>
    </>
  )
}
