import React, { useState, useEffect, useRef } from 'react'
import { Slider } from 'rsuite'
// import 'rsuite/dist/styles/rsuite-default.css'
// import './custom-slider.css'
// import 'rsuite/Slider/styles/index.css'
import Image from 'next/image'

import {
  BsFillVolumeDownFill,
  BsVolumeUpFill,
  BsVolumeMuteFill,
} from 'react-icons/bs'
import {
  BsPlayCircle,
  BsPlayCircleFill,
  BsPauseCircle,
  BsPauseCircleFill,
} from 'react-icons/bs'
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi'

const PlaybackControl = ({
  player,
  currentTrack,
  isPlaying,
  onPlay,
  onPause,
  onNextTrack,
  onPreviousTrack,
  onSeek,
  onVolumeChange,
}) => {
  const [volume, setVolume] = useState(50)
  const [isMuted, setIsMuted] = useState(false)
  const [previousVolume, setPreviousVolume] = useState(50)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const progressInterval = useRef(null)
  const lastPosition = useRef(0) // 記錄最後播放位置

  useEffect(() => {
    if (player) {
      player.getVolume().then((vol) => {
        setVolume(vol * 100)
        setPreviousVolume(vol * 100)
      })

      const handleStateChange = (state) => {
        if (state) {
          setDuration(state.duration)
          setProgress(state.position)

          if (progressInterval.current) {
            clearInterval(progressInterval.current)
          }

          if (state.paused) {
            // 如果暫停，不要更新進度
            return
          }

          // 播放進度的邏輯
          progressInterval.current = setInterval(() => {
            setProgress((prev) => {
              const newProgress = prev + 1000
              // 還沒播完的話，記錄上次播放的位置
              if (newProgress < state.duration) {
                lastPosition.current = newProgress
                return newProgress
              } else {
                clearInterval(progressInterval.current)
                return prev
              }
            })
          }, 1000)
        }
      }

      player.addListener('player_state_changed', handleStateChange)

      //播放器卸載時，也移除事件監聽器
      return () => {
        player.removeListener('player_state_changed', handleStateChange)
        if (progressInterval.current) {
          clearInterval(progressInterval.current)
        }
      }
    }
  }, [player])

  // 處理暫停狀態
  useEffect(() => {
    if (!isPlaying && progressInterval.current) {
      clearInterval(progressInterval.current)
    } else if (isPlaying && !progressInterval.current) {
      // 恢復播放時，從上次的位置繼續
      setProgress(lastPosition.current)
      progressInterval.current = setInterval(() => {
        setProgress((prev) => {
          // 更新進度的邏輯
          const newProgress = prev + 1000
          if (newProgress < duration) {
            lastPosition.current = newProgress
            return newProgress
          } else {
            clearInterval(progressInterval.current)
            return prev
          }
        })
      }, 1000)
    }
  }, [isPlaying, duration])

  const handleVolumeChange = (newValue) => {
    setVolume(newValue)
    setPreviousVolume(newValue)
    setIsMuted(newValue === 0)
    onVolumeChange(newValue / 100)
  }
  const handleToggleMute = () => {
    if (isMuted) {
      // 如果當前是靜音狀態，恢復到之前的音量
      setVolume(previousVolume)
      setIsMuted(false)
      onVolumeChange(previousVolume / 100)
    } else {
      // 如果當前不是靜音狀態，設置為靜音
      setPreviousVolume(volume)
      setVolume(0)
      setIsMuted(true)
      onVolumeChange(0)
    }
  }

  // 手動控制時間軸的位置
  const handleProgressChange = (newValue) => {
    setProgress(newValue)
    lastPosition.current = newValue
    onSeek(newValue)
  }
  // 時間格式換算
  const formatTime = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60)
    const minutes = Math.floor((ms / 1000 / 60) % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  // 確保從上次暫停的位置開始播放
  const handlePlay = () => {
    onPlay()
    player.seek(lastPosition.current)
  }
  return (
    <>
      <div className="position-fixed pos-end m-3 p-3 bg-black95 outline">
        <div className="text-white wid-250 mb-3">
          {currentTrack ? (
            <>
              {/* 有專輯正在播放 */}
              <div className="m-3">
                <Image
                  width={220}
                  height={220}
                  src={currentTrack.album.images[1].url}
                  alt={currentTrack.name}
                />
              </div>
              <div className="marquee">
                <span className="chb-p mb-1">{currentTrack.name}</span>
              </div>
              <div className="chr-p-12 text-purple3">
                {currentTrack.artists[0].name}
              </div>
            </>
          ) : (
            <>
              {/* 未播放狀態 */}
              <div className="m-3">
                <Image
                  width={220}
                  height={220}
                  src="/images/artist/no-music.jpg"
                  alt="No music playing"
                />
              </div>
              <div className="chb-p mb-1">未播放</div>
            </>
          )}
        </div>
        <div className="d-flex align-items-center my-2 mx-2">
          {/* 時間軸 Bar */}
          <Slider
            value={progress}
            min={0}
            max={duration}
            step={1000}
            progress
            tooltip={false}
            onChange={handleProgressChange}
            // className="custom-slider"
            handleClassName="custom-slider"
            style={{ width: '100%' }}
          />
        </div>
        <div className="d-flex mx-1 justify-content-between text-black60 chr-p-12">
          <div className="">{formatTime(progress)}</div>
          <div className="">{formatTime(duration)}</div>
        </div>

        {/* Playback controls */}
        <div className="d-flex justify-content-center align-items-center my-2">
          <button onClick={onPreviousTrack} className="btn btn-link btn-track">
            <BiSkipPrevious className="eng-h4" />
          </button>
          <button
            className="btn-control"
            onClick={isPlaying ? onPause : handlePlay}
          >
            {isPlaying ? (
              <BsPauseCircleFill className="eng-h2" />
            ) : (
              <BsPlayCircleFill className="eng-h2" />
            )}
          </button>
          <button onClick={onNextTrack} className="btn btn-link btn-track">
            <BiSkipNext className="eng-h4" />
          </button>
        </div>

        {/* Volume control */}
        <div className="d-flex ms-5 align-items-center">
          <button className="btn-mute" onClick={handleToggleMute}>
            {isMuted ? (
              <BsVolumeMuteFill className="eng-h5 me-2" />
            ) : volume > 50 ? (
              <BsVolumeUpFill className="eng-h5 me-2" />
            ) : (
              <BsFillVolumeDownFill className="eng-h5 me-2" />
            )}
          </button>
          <Slider
            value={volume}
            min={0}
            max={100}
            step={1}
            progress
            onChange={handleVolumeChange}
            style={{ width: '100px' }}
          />
        </div>
      </div>
      <style jsx>
        {`
          .outline {
            border: 1px solid #dbd7ff;
          }
          .custom-slider .rs-slider-bar {
            background-color: #dbd7ff; /* 更改滑動條顏色 */
          }
          .custom-slider .rs-slider-handle {
            background-color: #000000; /* 更改滑動手柄顏色 */
          }
          .wid-250 {
            width: 250px;
          }
          .pos-end {
            top: 42%;
            right: 5%;
          }
          .btn-control {
            margin: 0;
            padding: 0;
            width: 40px;
            height: 40px;
            text-align: center;
            color: #ffffff;
            border: none;
            outline: none;
            background: transparent;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .btn-control:hover {
            transform: scale(1.065);
          }
          .btn-mute {
            margin: 0px;
            padding: 0px;
            width: 40px;
            text-align: center;
            color: #888888;
            border: 1px solid transparent;
            outline: none;
            background: transparent;
          }
          .btn-mute:hover {
            margin: 0px;
            padding: 0px;
            width: 40px;
            text-align: center;
            color: white;
            border: 1px solid transparent;
            outline: none;
            background: transparent;
          }
          .btn-track {
            color: #a1a1a1;
          }
          .btn-track:hover {
            color: white;
          }
          .marquee {
            position: relative;
            width: 245px;
            height: 24px;
            margin: auto;
            overflow: hidden;
          }
          .marquee span {
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            padding-left: 100%;
            animation: run 10s infinite linear;
          }
          @keyframes run {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </>
  )
}

export default PlaybackControl
