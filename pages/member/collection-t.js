import React, { useState } from 'react'
import MemberDLayout from '@/components/member/desktop-layout'
import CollectionCard from '@/components/member/desktop-layout/collection-card'
import cardData from '@/data/member/cardData'
import Tab from '@/components/common/tabs/tab'

export default function Collection() {
  const [selectedActivity, setSelectedActivity] = useState('0')

  const handleChange = (event) => {
    setSelectedActivity(event.target.value)
  }

  return (
    <>
      <p className="chb-h4 text-purple1">收藏庫</p>
      <hr className="custom-hr" />
      {/*  */}
      <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
        {/* col-6 */}
        {/* 活動 */}
        <Tab
          tabName="活動"
          tabTarget="activity"
          ariaSelected={true}
          classNames="col-6 col-md-2"
        />
        <Tab
          tabName="藝人"
          tabTarget="artist"
          ariaSelected={false}
          classNames="col-6 col-md-2"
        />
      </ul>
      {/* 內容 */}
      <div className="tab-content mb-2" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="activity"
          role="tabpanel"
          aria-labelledby="activity-tab"
        >
          {/* 活動dropdown */}
          <div className="row">
            <div className="col-12 col-md-5 py-3 d-flex flex-row">
              <div className="col-6 text-center">
                <label
                  htmlFor="activity"
                  className="chb-h6 flex-fill text-center"
                >
                  <span className="chb-h5">活動種類：</span>
                </label>
              </div>
              <div className="col-6">
                <select
                  required
                  id="activity"
                  name="activity"
                  className="align-item-center h-100 w-100"
                  value={selectedActivity}
                  onChange={handleChange}
                >
                  <option value="0" className="text-center">
                    - - 全部 - -
                  </option>
                  <option value="1" className="text-center">
                    - - 演唱會 - -
                  </option>
                  <option value="2" className="text-center">
                    - - 音樂祭 - -
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div
          className="tab-pane fade"
          id="artist"
          role="tabpanel"
          aria-labelledby="artist-tab"
        >
          {/* 藝人dropdown */}
          <div className="row">
            <div className="col-12 col-md-5 py-3 d-flex flex-row">
              <div className="col-6 text-center">
                <label
                  htmlFor="artist"
                  className="chb-h6 flex-fill text-center"
                >
                  <span className="chb-h5">藝人：</span>
                </label>
              </div>
              <div className="col-6">
                <select
                  required
                  id="artist"
                  name="artist"
                  className="align-item-center h-100 w-100"
                  value={selectedActivity}
                  onChange={handleChange}
                  disabled
                >
                  <option value="0" className="text-center">
                    - - 全部 - -
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade show active"
          id="activity"
          role="tabpanel"
          aria-labelledby="activity-tab"
        ></div>

        {/* ---------------------------------------------------- */}
        <div
          className="tab-pane fade"
          id="artist"
          role="tabpanel"
          aria-labelledby="artist-tab"
        ></div>
      </div>

      <div className="row">
        {cardData.map((v, index) => (
          <div key={index} className="col-6 col-md-3">
            <CollectionCard
              imageSrc={v.imageSrc}
              title={v.title}
              description={v.description}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .custom-hr {
          border: 0;
          border-top: 4px solid #007bff; /* 設置粗細和顏色 */
          width: 100%; /* 分隔線寬度 */
          margin: 1rem auto; /* 上下邊距和自動水平對齊 */
        }
      `}</style>
    </>
  )
}

Collection.getLayout = function getLayout(page) {
  return (
    <MemberDLayout title="Music | 會員收藏庫" pageName="collection">
      {page}
    </MemberDLayout>
  )
}
