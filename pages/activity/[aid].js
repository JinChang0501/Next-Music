import { useState, useEffect, useRef } from 'react'
import { ACT_GET_ITEM } from '@/configs/api-path'
import { useRouter } from 'next/router'

import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import MainMusicInfo from '@/components/activity/main-music-info'
import ArtistFollowCard from '@/components/activity/artist-follow-card'
import artistData from '@/data/activity/artist-data'
import Tab from '@/components/common/tabs/tab'
import RecommendCard from '@/components/activity/recommend-card'
import TabContentAid from '@/components/activity/info-tab-content/tab-content-aid'
import TabContentIntro from '@/components/activity/info-tab-content/tab-content-intro'

export default function Aid() {
  const router = useRouter()
  console.log(router.query.aid)
  const { aid } = router.query  // 設定路由參數給 aid (參照)
  const actid = parseInt(aid)   // 型態轉換：字串轉數字！！
  const topRef = useRef(null)

  const [data, setData] = useState({
    success: false,
    data: {},
  })

  const [data2, setData2] = useState({
    success: false,
    data: {},
  })

  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '演出活動', href: '/activity' },
    { label: '活動詳情', href: '/activity/[aid]' },
  ]

  const scrollToTop = (e) => {
    //console.log('scrollToTop called')
    if (topRef.current) {
      console.log('topRef.current:', topRef.current)
      topRef.current.scrollIntoView({ behavior: 'smooth' })
      
    } else {
      console.log('topRef.current is null')
    }
  }

  useEffect((e)=>{
    scrollToTop(e)
  },[router])

  useEffect(() => {
    if (!router.isReady) return

    Promise.all([
      fetch(`${ACT_GET_ITEM}?${new URLSearchParams(router.query)}`).then((r) => r.json()),
      fetch(`${ACT_GET_ITEM}${aid}`).then((r) => r.json())
    ])
    .then(([myData, myData2]) => {
      console.log(data)
      console.log(myData)
      console.log(myData2)
 
      setData(myData)
      setData2(myData2)
    })
    .catch((ex) => {
      console.log('fetch-ex', ex)
    })
  
  }, [router.isReady, aid])

  console.log(`activity{item} render--------`)

  if (!router.isReady || !data.success) return null

  // 亂數取得陣列中的index
  function getRandomIndexes(array, num) {
    const indexes = []

    // 計算原始資料數
    const arrayLength = array.length

    // 避免取得資料數量 num > 原始資料數量時造成的 Error
    const count = num < array.length ? num : array.length

    while (indexes.length < count) {
      const randomIndex = Math.floor(Math.random() * arrayLength)
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex)
      }
    }

    return indexes
  }

  // 對應陣列index取得資料
  function getRandomElementsFromArray(array, count) {
    const randomIndexes = getRandomIndexes(array, count)
    const randomElements = randomIndexes.map(index => array[index])
    return randomElements
  }

  // 根據 aid 從 rows 中選擇對應的資料
  const mainInfoData = data.rows.find((r) => r.actid === actid)
  console.log(mainInfoData)
  if (!mainInfoData) return <div>走錯路囉</div>

  // 從所有活動的資料裡撈出 4 筆（隨機），且不包含本頁這筆：
  const recommendData = data.rows.filter((r) => r.actid !== actid)
  console.log(recommendData)
  const random4Recommend = getRandomElementsFromArray(recommendData, 4)

  console.log(random4Recommend)

  return (
    <>
      <div ref={topRef}></div>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <div className="music-container mt-80">
        {/* 活動主資訊 start */}
        <MainMusicInfo
          key={mainInfoData.actid}
          title={mainInfoData.actname}
          actdate={mainInfoData.actdate}
          acttime={mainInfoData.acttime}
          location={mainInfoData.location}
          artist={mainInfoData.artists}
          banner={mainInfoData.picture}
        />
        {/* 活動主資訊 end */}
        {/* 簡介：頁籤 start */}
        <ul className="nav nav-tabs mt-80 mb-40" id="activityTab" role="tablist">
          <Tab
            tabName="活動簡介"
            tabTarget="tabTargetAid"
            ariaSelected={true}
            classNames="col-6 col-md-3"
          />
          <Tab
            tabName="注意事項"
            tabTarget="tabTargetIntro"
            ariaSelected={false}
            classNames="col-6 col-md-3"
          />
        </ul>
        <div className="tab-content" id="myTabContent">
          <TabContentAid tabTargetAid="tabTargetAid" content={mainInfoData.descriptions} />
          <TabContentIntro tabTargetIntro="tabTargetIntro" />
        </div>
        {/* 簡介：頁籤 end */}
        {/* 音樂人 start */}
        <div className="row my-5">
          <div className="chb-h4 mb-40 text-purple1">音樂人</div>
          {data2.rows2.map((v,i)=>{
            return(
              <ArtistFollowCard
                key={v.eaid}
                imgSrc={v.photo}
                artist_name={v.art_name} />
              )
          })}
          
        </div>
        {/* 音樂人 end */}
        {/*  推薦活動 start  */}
        <div className="row my-5">
          <div className="chb-h4 mb-40 text-purple1">推薦活動</div>
          {random4Recommend.map((v, i) => {
            return (
              <RecommendCard
                key={v.actid}
                imgSrc={v.cover}
                activity_name={v.actname}
                artist_name={v.artists}
                aid={v.actid}
                scrollToTop={scrollToTop}
              />
            )
          })}
        </div>
      </div>
      <style jsx>{`
        .mb-40 {
          margin-bottom: 40px;
        }
        .mt-80 {
          margin-top: 80px;
        }
        .my-80 {
          margin-top: 80px;
          margin-bottom: 80px;
        }
        @media (max-width: 390px) {
          .mt-80 {
            margin-top: 20px;
          }
          .mb-40 {
            margin-bottom: 20px;
          }
          .my-80 {
            margin-top: 20px;
            margin-bottom: 20px;
          } 
        }
      `}</style>
    </>
  )
}
