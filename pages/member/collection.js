import React, { useCallback, useEffect, useState } from 'react'
import MemberDLayout from '@/components/member/desktop-layout'
import CollectionCard from '@/components/member/desktop-layout/collection-card'
import Tab from '@/components/common/tabs/tab'
import toast, { Toaster } from 'react-hot-toast'
import { useAuth } from '@/hooks/use-auth'
import { getCollectionData } from '@/services/collection'
import Link from 'next/link'
export const API_SERVER = 'http://localhost:3005'

export default function Collection() {
  const [cardData, setCardData] = useState([])
  const [filter, setFilter] = useState('')
  const { auth } = useAuth()
  // const [actids, setActids] = useState('')
  const [updateTrigger, setUpdateTrigger] = useState('')
  const getFilter = (e) => {
    setFilter(e.target.value)
  }

  const getUserData = useCallback(async () => {
    try {
      const res = await getCollectionData(filter)
      console.log('以下是response data')
      console.log(res)
      console.log('以下是res.data.class')
      console.log(res.data)

      if (res.status === 'success') {
        console.log(res.data.result)
        setCardData(res.data.result)
        console.log('收藏資料載入成功')
      } else {
        console.log(`收藏資料載入失敗`)
      }
    } catch (error) {
      console.error('Error fetching collection data:', error)
      console.log('收藏資料載入失敗')
    }
  }, [filter, setCardData])

  const handleDelete = async (activity_id) => {
    console.log(activity_id)

    try {
      const response = await fetch(
        `${API_SERVER}/api/collection/${activity_id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify({ activity_id }),
          credentials: 'include',
        }
      )
      setUpdateTrigger(activity_id)
      const data = await response.json()
      console.log(data)
      return data
    } catch (error) {
      console.error('無法加入收藏', error)
      throw error
    }
  }

  useEffect(() => {
    console.log(filter)
    getUserData()
  }, [filter, getUserData, updateTrigger])

  // auth載入完成後向資料庫要會員資料
  useEffect(() => {
    if (auth.isAuth) {
      // getUserData() // getUserData(auth.userData.id) 將用戶 ID 傳遞给 getTicketOrder 函数，但是抓會員資料是來自authenticate.js
    }
  }, [auth])
  if (cardData.length === 0) {
    return (
      <>
        <p className="chb-h4 text-purple1">個人收藏</p>
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
                    onChange={getFilter}
                    disabled
                  >
                    <option value="all" className="text-center">
                      - - 全部 - -
                    </option>
                    <option value="concert" className="text-center">
                      - - 演唱會 - -
                    </option>
                    <option value="festival" className="text-center">
                      - - 音樂祭 - -
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* 根據選擇的活動類型顯示不同的內容 */}
          <div className="row">
            <div className="container mt-5 px-0">
              <div className="table table-bordered text-center">
                <p className="chr-h6">還沒有任何收藏嗎？</p>
                <Link href="/Activity" className="chr-h6">
                  立即探索精彩活動，加入你的收藏吧！點我開始
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <p className="chb-h4 text-purple1">個人收藏</p>
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
                  onChange={getFilter}
                >
                  <option value="all" className="text-center">
                    - - 全部 - -
                  </option>
                  <option value="concert" className="text-center">
                    - - 演唱會 - -
                  </option>
                  <option value="festival" className="text-center">
                    - - 音樂祭 - -
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* 根據選擇的活動類型顯示不同的內容 */}
        <div className="row">
          {cardData.map((v, i) => (
            <div key={i} className="col-6 col-md-4 col-lg-3">
              <CollectionCard
                actname={v.actname}
                cover={v.cover}
                descriptions={v.descriptions}
                activity_id={v.activity_id}
                actClass={v.actClass}
                handleDelete={handleDelete}
              />
            </div>
          ))}
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
  return (
    <MemberDLayout title="Makin | 會員收藏庫" pageName="collection">
      {page}
    </MemberDLayout>
  )
}
