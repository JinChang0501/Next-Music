import React, { useEffect, useState } from 'react'
import MemberDLayout from '@/components/member/desktop-layout'
import CollectionCard from '@/components/member/desktop-layout/collection-card'
import Tab from '@/components/common/tabs/tab'
import toast, { Toaster } from 'react-hot-toast'
import { useAuth } from '@/hooks/use-auth'
import { getCollectionData } from '@/services/collection'

export default function Collection() {
  const [selectedActivity, setSelectedActivity] = useState('0')

  const [cardData, setCardData] = useState([])
  const [cardDataCon, setCardDataCon] = useState([])
  const [cardDataFes, setCardDataFes] = useState([])

  const handleChange = (event) => {
    setSelectedActivity(event.target.value)
  }
  const { auth } = useAuth()

  const getUserData = async () => {
    const res = await getCollectionData()
    console.log('以下是response data')
    console.log(res)
    console.log('以下是res.data.class')
    console.log(res.data)

    if (res.status === 'success') {
      console.log(res.data.result)
      setCardData(res.data.result)

      //filter() 裡面要不一樣
      const concertData = cardData.filter((v) => {
        return v.actClass === 'concert'
      })

      const festivalData = cardData.filter((item) => {
        return item.actClass === 'festival'
      })
      setCardDataCon(concertData)
      console.log('--------我是concertData')
      console.log(concertData)
      setCardDataFes(festivalData)
      console.log('--------festivalData')

      console.log(festivalData)

      toast.success('收藏資料載入成功')
    } else {
      toast.error(`收藏資料載入失敗`)
    }
  }
  // auth載入完成後向資料庫要會員資料
  useEffect(() => {
    if (auth.isAuth) {
      getUserData() // getUserData(auth.userData.id) 將用戶 ID 傳遞给 getTicketOrder 函数，但是抓會員資料是來自authenticate.js
    }
  }, [auth])
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
        {/* <Tab
          tabName="藝人"
          tabTarget="artist"
          ariaSelected={false}
          classNames="col-6 col-md-2"
        /> */}
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

        {/* 根據選擇的活動類型顯示不同的內容 */}
        {selectedActivity === '0' && (
          <div className="row">
            {cardData.map((v, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-3">
                <CollectionCard
                  actname={v.actname}
                  cover={v.cover}
                  descriptions={v.descriptions}
                  activity_id={v.activity_id}
                  actClass={v.actClass}
                />
              </div>
            ))}
          </div>
        )}
        {selectedActivity === '1' && (
          <div className="row">
            {cardDataCon.map((v, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-3">
                <CollectionCard
                  actname={v.actname}
                  cover={v.cover}
                  descriptions={v.descriptions}
                  activity_id={v.activity_id}
                  actClass={v.actClass}
                />
              </div>
            ))}
          </div>
        )}
        {selectedActivity === '2' && (
          <div className="row">
            {cardDataFes.map((v, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-3">
                <CollectionCard
                  actname={v.actname}
                  cover={v.cover}
                  descriptions={v.descriptions}
                  activity_id={v.activity_id}
                  actClass={v.actClass}
                />
              </div>
            ))}
          </div>
        )}
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
