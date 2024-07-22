import { useState, useEffect, useRef } from 'react'
import { ACT_GET_ITEM } from '@/configs/api-path'
import { useRouter } from 'next/router'

import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import MainArtistInfo from '@/components/artist/main-artist-info'
import TopTrackItem from '@/components/artist/top-track-item'
import { useSpotifyApi } from '@/hooks/use-SpotifyApi'
import ParticipatingActivity from '@/components/artist/participating-activity'
import toast, { Toaster } from 'react-hot-toast'

export default function Artid() {
  const router = useRouter()
  console.log(router.query.artid)
  const { artid } = router.query // 設定路由參數給 artid (參照)
  // const artist_id = parseInt(artid) // 型態轉換：字串轉數字 // 註解掉因為這裡的id是「字串」
  const topRef = useRef(null)
  const [tracks, setTracks] = useState([])
  const [artist, setArtist] = useState([])

  const { getTopTracks, getArtist } = useSpotifyApi()

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

  const fetchData = async () => {
    try {
      const topTracks = await getTopTracks(artid)
      const thisArtist = await getArtist(artid)
      console.log(topTracks)
      console.log(thisArtist)

      if (Array.isArray(topTracks.tracks)) {
        setTracks(topTracks.tracks)
        console.log(tracks)
      }

      if (Array.isArray(thisArtist)) {
        setArtist(thisArtist)
        console.log(artist)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  useEffect(() => {
    if (!router.isReady) return
    fetchData()
  }, [])

  console.log(`activity{item} render--------`)

  if (!router.isReady) return null

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
            {/* <TopTrackList artist_id={artid} /> */}
            {tracks.map((v, i) => {
              return (
                <TopTrackItem
                  key={v.id}
                  number={i + 1}
                  cover={v.album.images[2].url}
                  song_name={v.name}
                />
              )
            })}
          </div>
        </div>
        {/* 熱門歌曲 end */}
        {/*  出演活動 start  */}
        <div className="row my-5">
          <div className="chb-h4 mb-40 text-purple1">出演活動</div>
          {/* <ParticipatingActivity imgSrc act_name act_date aid /> */}
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
