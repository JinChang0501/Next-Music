import React from 'react'

export default function TabContent({ tabTarget }) {
  return (
    <>
      <div
        className="tab-pane fade show active"
        //^^^^^^^^show跟active只需要寫在第一個tab的content裡面
        id={tabTarget}
        role="tabpanel"
        aria-labelledby={`${tabTarget}-tab`}
      >
        我是測試
      </div>
    </>
  )
}
