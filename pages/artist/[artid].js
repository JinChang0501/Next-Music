import { useState, useEffect, useRef } from 'react'
import { ART_LIST } from '@/configs/api-path'
import { useRouter } from 'next/router'

import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import MainArtistInfo from '@/components/artist/main-artist-info'
import TopTrackItem from '@/components/artist/top-track-item'
import { useSpotifyApi } from '@/hooks/use-SpotifyApi'
import ParticipatingActivity from '@/components/artist/participating-activity'
import PlaybackControl from '@/components/artist/playback-control'
import PlaybackControlMob from '@/components/artist/playback-control-mob'

export default function Artid() {
  const router = useRouter()
  // console.log(router.query.artid)
  const { artid } = router.query // 設定路由參數給 artid (參照)
  // ^^^^這裡的id是spotify_id，型態為「字串」，不用轉數字
  const topRef = useRef(null)
  const [isDesktop, setIsDesktop] = useState(true)
  const [tracks, setTracks] = useState([])
  // 參加了哪些活動 (包含！音樂人！資訊)
  const [activity, setActivity] = useState({
    success: false,
    rows2: [],
  })
  // 播放相關
  const [player, setPlayer] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrackUri, setCurrentTrackUri] = useState('')
  const [deviceId, setDeviceId] = useState(null)

  const { getTopTracks, isTokenLoaded } = useSpotifyApi()

  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '音樂人', href: '/artist' },
    { label: `${activity.rows2[0]?.art_name}`, href: '/artist/[artid]' },
  ]

  // 換頁後滾動到頂部
  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // 熱門歌曲的fetch，使用spotify的API
  const fetchData = async () => {
    try {
      const topTracks = await getTopTracks(artid)
      // const thisArtist = await getArtist(artid)
      console.log(topTracks)
      // console.log(thisArtist)

      if (Array.isArray(topTracks.tracks)) {
        setTracks(topTracks.tracks)
        // console.log(tracks)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  // 換頁後回到頂部
  useEffect(() => {
    if (router.isReady) {
      scrollToTop()
    }
  }, [router.isReady])

  // 音樂人資訊
  useEffect(() => {
    if (!router.isReady) return

    fetch(`${ART_LIST}${artid}`)
      .then((r) => r.json())
      .then((myData) => {
        // console.log(myData)
        setActivity(myData)
      })
      .catch((ex) => {
        console.log('fetch-ex', ex)
      })
  }, [router.isReady, artid])

  // 取得熱門歌曲
  useEffect(() => {
    if (!isTokenLoaded || !router.isReady) return
    fetchData()
  }, [isTokenLoaded, router.isReady])

  // 初始化播放器
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://sdk.scdn.co/spotify-player.js'
    script.async = true

    document.body.appendChild(script)

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: '熱門歌曲',
        getOAuthToken: (cb) => {
          const token = localStorage.getItem('spotify_access_token')
          cb(token)
        },
        volume: 0.5,
      })

      player.addListener('ready', ({ device_id }) => {
        // console.log('Ready with Device ID', device_id)
        setDeviceId(device_id)
        setPlayer(player)
      })

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id)
      })

      player.addListener('player_state_changed', (state) => {
        if (!state) {
          return
        }
        // console.log(state)
        const currentTrack = state.track_window?.current_track
        if (currentTrack) {
          // console.log(currentTrack.uri)
          setCurrentTrackUri(currentTrack.uri)
        }
        setIsPlaying(!state.paused)
      })

      player.connect()
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  // 控制播放按鈕
  const handlePlay = async (trackUri) => {
    if (!player || !deviceId) return

    const token = localStorage.getItem('spotify_access_token')

    if (currentTrackUri === trackUri && isPlaying) {
      await player.pause()
      setIsPlaying(false)
    } else {
      let response
      if (currentTrackUri === trackUri) {
        // 如果是同一首歌，恢復播放
        response = await fetch(
          `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        )
      } else {
        // 如果是不同首歌，從頭開始播放
        response = await fetch(
          `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
          {
            method: 'PUT',
            body: JSON.stringify({ uris: [trackUri] }),
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        )
      }

      if (response.ok) {
        setCurrentTrackUri(trackUri)
        setIsPlaying(true)
      } else {
        console.error('Error playing track:', response.statusText)
      }
    }
  }

  // 上一首歌
  const handleNextTrack = () => {
    const currentIndex = tracks.findIndex(
      (track) => track.uri === currentTrackUri
    )
    const nextTrack = tracks[(currentIndex + 1) % tracks.length]
    handlePlay(nextTrack.uri)
  }
  // 下一首歌
  const handlePreviousTrack = () => {
    const currentIndex = tracks.findIndex(
      (track) => track.uri === currentTrackUri
    )
    const previousTrack =
      tracks[(currentIndex - 1 + tracks.length) % tracks.length]
    handlePlay(previousTrack.uri)
  }
  // 畫面大小
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 576) // 螢幕寬度 > 576px 為電腦板
    }
    handleResize() // 初始設定一次

    window.addEventListener('resize', handleResize) // 監聽視窗大小變化

    return () => window.removeEventListener('resize', handleResize) // 清除事件監聽器
  }, [])

  if (!router.isReady) return null

  return (
    <>
      <div ref={topRef}></div>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      {/* 音樂人主資訊 start */}
      <MainArtistInfo
        imgSrc={`/images/artist/${activity.rows2[0]?.photoname}`}
        artist_name={activity.rows2[0]?.art_name}
      />
      {/* 音樂人主資訊 end */}
      <div className="music-container mt-80">
        {/* 熱門歌曲 start */}
        <div className="chb-h4 mt-2 mb-40 text-purple1">熱門歌曲</div>
        <div className="d-flex my-5">
          <div className="width-60">
            {tracks.map((v, i) => {
              return (
                <TopTrackItem
                  key={v.uri}
                  number={i + 1}
                  cover={v.album.images[2].url}
                  song_name={v.name}
                  isPlaying={isPlaying && currentTrackUri === v.uri}
                  onPlay={() => handlePlay(v.uri)}
                />
              )
            })}
          </div>
        </div>
        {/* 熱門歌曲 end */}
        {/*  出演活動 start  */}
        <div className="row my-5">
          <div className="chb-h4 mb-40 text-purple1">出演活動</div>
          {activity.rows2.map((v, i) => {
            return (
              <ParticipatingActivity
                key={v.actid}
                imgSrc={`/images/Activity/${v.picinfrontend}`}
                act_name={v.actname}
                act_date={v.actdate}
                aid={v.actid}
              />
            )
          })}
        </div>
        {/*  出演活動 end  */}
      </div>
      {/* 播放器 controller */}
      {isDesktop ? (
        <PlaybackControl
          player={player}
          currentTrack={tracks.find((track) => track.uri === currentTrackUri)}
          isPlaying={isPlaying}
          onPlay={() => handlePlay(currentTrackUri)}
          onPause={() => player.pause()}
          onNextTrack={handleNextTrack}
          onPreviousTrack={handlePreviousTrack}
          onSeek={(position) => player.seek(position)}
          onVolumeChange={(volume) => player.setVolume(volume)}
        />
      ) : (
        <PlaybackControlMob
          player={player}
          currentTrack={tracks.find((track) => track.uri === currentTrackUri)}
          isPlaying={isPlaying}
          onPlay={() => handlePlay(currentTrackUri)}
          onPause={() => player.pause()}
          onSeek={(position) => player.seek(position)}
        />
      )}

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
        .width-60 {
          width: 60%;
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
          .width-60 {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}
