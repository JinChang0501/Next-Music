import React, { useState } from 'react'
import MemberDLayout from '@/components/member/computer-layout'
import Concerts from '@/components/member/computer-layout/concerts'
import Festivals from '@/components/member/computer-layout/festivals'

import { Dropdown } from 'react-bootstrap'

export default function Collection() {
  const [selectedActivity, setSelectedActivity] = useState('0')

  const handleChange = (event) => {
    setSelectedActivity(event.target.value)
  }

  const renderPage = () => {
    switch (selectedActivity) {
      case '1':
        return <Concerts />
      case '2':
        return <Festivals />
      default:
        return <AllActivities />
    }
  }
  return (
    <>
      <p className="chb-h4 text-purple1">收藏庫</p>
      <hr className="custom-hr" />
      <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active px-5"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            活動
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link px-5"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            藝人
          </button>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          {/* dropdown */}
          <div className="row">
            <div className="col-3">
              <div className="w-100 d-flex">
                <label
                  htmlFor="activity"
                  className="chb-h6 flex-fill text-center"
                >
                  <span>活動：</span>
                </label>
                <select
                  required
                  id="activity"
                  name="activity"
                  className="align-item-center flex-fill"
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
            <div className="col-9">{renderPage()}</div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          {/* dropdown */}
          <div className="row">
            <div className="col-3">
              <div className="w-100 d-flex">
                <label
                  htmlFor="activity"
                  className="chb-h6 flex-fill text-center"
                >
                  <span>藝人：</span>
                </label>
                <select
                  required
                  id="activity"
                  name="activity"
                  className="align-item-center flex-fill"
                  disabled
                >
                  <option value="0" className="text-center">
                    - - 全部 - -
                  </option>
                </select>
              </div>
            </div>
            {/*  */}
            <div className="col-9"></div>
          </div>
        </div>
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
  return <MemberDLayout>{page}</MemberDLayout>
}
