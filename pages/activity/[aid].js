import { useState, useEffect } from 'react'
import { ACT_GET_ITEM } from '@/configs/api-path'
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
  console.log(router.query.aid);

  const [data, setData] = useState({
    success: false,
    data: {},
  })

  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '演出活動', href: '/activity' },
    { label: '一生到底', href: '/activity/[aid]' },
  ]

  useEffect(() => {
    if (router.query.aid) {
      fetch(`${ACT_GET_ITEM}/${router.query.aid}`)
        .then((r) => r.json())
        .then((myData) => {
          console.log(myData)
          setData(myData)
        })
        .catch((ex) => {
          console.log('fetch-ex', ex)
        })
    }
  }, [router])

  console.log(`activity{item} render--------`)

  if (!router.isReady || !data.success) return null

  const { actid, name, actdate, acttime, location, art_name } = data.data;

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <div className="music-container mt-80">
        {/* 活動主資訊 start */}
        <MainMusicInfo
          key={actid}
          title={name}
          actdate={actdate}
          acttime={acttime}
          location={location}
          artist={art_name}
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
