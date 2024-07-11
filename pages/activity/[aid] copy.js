import { useState, useEffect } from 'react'
// 帶資料的api
import { ACT_GET_ITEM } from '@/configs/api-path'
// 路徑
import { useRouter } from 'next/router'

import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import MainMusicInfo from '@/components/activity/main-music-info'
import ArtistFollowCard from '@/components/activity/artist-follow-card'
import artistData from '@/data/activity/artist-data'
import Tab from '@/components/common/tabs/tab'
import RecommondCard from '@/components/activity/recommond-card'
import TabContentAid from '@/components/activity/info-tab-content/tab-content-aid'
import TabContentIntro from '@/components/activity/info-tab-content/tab-content-intro'

export default function Aid() {
  const router = useRouter()
  const { aid } = router.query  // 假設 URL 中包含 aid 參數 (參照)
  const actid = parseInt(aid)   // 字串轉數字！！
  // console.log(aid);
  // console.log(router.query);
  // console.log(new URLSearchParams(router.query));

  const [data, setData] = useState({
    success: false,
    rows: [],
  })

  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '演出活動', href: '/activity' },
    { label: '活動詳情', href: '/activity/[aid]' },
  ]

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    // new URLSearchParams(router.query) 這塊應該是搜尋結果的query string
    fetch(`${ACT_GET_ITEM}?${new URLSearchParams(router.query)}`, { signal })
      .then((r) => r.json())
      .then((myData) => {
        console.log(data)
        setData(myData)
      })
      .catch((ex) => {
        console.log('fetch-ex', ex)
      })
    return () => {
      controller.abort() // 取消上一次的 ajax
    }
  }, [router])

  console.log(`activity{item} render--------`)

  if (!router.isReady || !data.success) return null

  // 根據 aid 從 rows 中選擇對應的資料
  const mainInfoData = data.rows.find((r) => r.actid === actid)
  if (!mainInfoData) return <div>走錯路囉</div>

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <div className="music-container mt-80">
        {/* 活動主資訊 start */}
        <MainMusicInfo
          key={mainInfoData.actid}
          title={mainInfoData.name}
          actdate={mainInfoData.actdate}
          acttime={mainInfoData.acttime}
          location={mainInfoData.location}
          artist={mainInfoData.art_name}
        />
        {/* 活動主資訊 end */}
        {/* 簡介：頁籤 start */}
        <ul className="nav nav-tabs mt-80 mb-40" id="activityTab" role="tablist">
          <Tab
            tabName="節目介紹"
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
          <TabContentAid tabTargetAid="tabTargetAid" />
          <TabContentIntro tabTargetIntro="tabTargetIntro" />
        </div>
        {/* 簡介：頁籤 end */}
        {/* 音樂人 start */}
        <div className="row my-5">
          <div className="chb-h4 mb-40 text-purple1">音樂人</div>
          {artistData.map((v, i) => {
            return (
              <ArtistFollowCard key={v.id} imgSrc={v.imageSrc} artist_name={v.artist_name} />
            )
          })}
        </div>
        {/* 音樂人 end */}
        {/*  推薦活動 start  */}
        <div className="row my-5">
          <div className="chb-h4 mb-40 text-purple1">推薦活動</div>
          {artistData.map((v, i) => {
            return (
              <RecommondCard key={v.id} imgSrc={v.imageSrc} activity_name={v.activity_name} artist_name={v.artist_name} />
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
