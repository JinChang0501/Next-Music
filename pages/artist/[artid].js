import { useState, useEffect, useRef } from 'react'
import { ACT_GET_ITEM } from '@/configs/api-path'
import { useRouter } from 'next/router'

import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import MainMusicInfo from '@/components/Activity/main-music-info'
import MainArtistInfo from '@/components/artist/main-artist-info'
import ArtistFollowCard from '@/components/Activity/artist-follow-card'
import TopTrackList from '@/components/artist/top-track-list'
import Tab from '@/components/common/tabs/tab'
import RecommendCard from '@/components/Activity/recommend-card'
import ParticipatingActivity from '@/components/artist/participating-activity'
import TabContentAid from '@/components/Activity/info-tab-content/tab-content-aid'
import TabContentIntro from '@/components/Activity/info-tab-content/tab-content-intro'
import toast, { Toaster } from 'react-hot-toast'

// 判斷登入
import { useAuth } from '@/hooks/use-auth'
import { useLogin } from '@/hooks/use-login'

export default function Artid() {
  const router = useRouter()
  console.log(router.query.artid)
  const { artid } = router.query // 設定路由參數給 artid (參照)
  const actid = parseInt(artid) // 型態轉換：字串轉數字！！
  const topRef = useRef(null)
  // 會員相關
  const { handleGotoMember, handleWakeLogin } = useLogin()
  const { auth } = useAuth()

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
    { label: '音樂人', href: '/artist' },
    { label: '個人主頁', href: '/artist/[artid]' },
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

  useEffect(
    (e) => {
      scrollToTop(e)
    },
    [router]
  )

  useEffect(() => {
    if (!router.isReady) return

    Promise.all([
      fetch(`${ACT_GET_ITEM}?${new URLSearchParams(router.query)}`).then((r) =>
        r.json()
      ),
      fetch(`${ACT_GET_ITEM}${artid}`).then((r) => r.json()),
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
  }, [router.isReady, artid])

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
    const randomElements = randomIndexes.map((index) => array[index])
    return randomElements
  }

  // 根據 artid 從 rows 中選擇對應的資料
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
      {/* 音樂人主資訊 start */}
      <MainArtistInfo />
      {/* 音樂人主資訊 end */}
      <div className="music-container mt-80">
        {/* 熱門歌曲 start */}
        <div className="row my-5">
          <div className="chb-h4 mb-40 text-purple1">熱門歌曲</div>
          <div className="width-50">
            <TopTrackList />
          </div>
        </div>
        {/* 熱門歌曲 end */}
        {/*  出演活動 start  */}
        <div className="row my-5">
          <div className="chb-h4 mb-40 text-purple1">出演活動</div>
          <ParticipatingActivity />
          <ParticipatingActivity />
          <ParticipatingActivity />
          <ParticipatingActivity />
        </div>
        {/*  出演活動 end  */}
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
        .width-50 {
          width: 50%;
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
          .width-50 {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}
