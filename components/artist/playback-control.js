import React, { useState, useEffect, useRef } from 'react'
import { Slider } from 'rsuite'
// import 'rsuite/dist/styles/rsuite-default.css'
// import './custom-slider.css'
import 'rsuite/Slider/styles/index.css'
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
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const progressInterval = useRef(null)
  const lastPosition = useRef(0) // 記錄最後播放位置

  useEffect(() => {
    if (player) {
      player.getVolume().then((vol) => {
        setVolume(vol * 100)
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
    onVolumeChange(newValue / 100)
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
      <div className="position-fixed bottom-0 end-0 m-3 p-3 bg-dark outline">
        <div className="text-white mb-2">
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
              <div className="chb-p mb-1">{currentTrack.name}</div>
              <div className="chr-p text-purple3">
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
            graduated
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
          <button onClick={onPreviousTrack} className="btn btn-link text-white">
            <BiSkipPrevious className="text-white eng-h4" />
          </button>
          {isPlaying ? (
            <BsPauseCircleFill
              onClick={onPause}
              className="text-white eng-h4 mx-2"
            />
          ) : (
            <BsPlayCircle
              onClick={handlePlay}
              className="text-white eng-h4 mx-2"
            />
          )}
          <button onClick={onNextTrack} className="btn btn-link text-white">
            <BiSkipNext className="text-white eng-h4" />
          </button>
        </div>

        {/* Volume control */}
        <div className="d-flex justify-content-center align-items-center">
          <BsFillVolumeDownFill className="text-white eng-h5 me-2" />
          <Slider
            value={volume}
            min={0}
            max={100}
            step={1}
            graduated
            onChange={handleVolumeChange}
            style={{ width: '120px' }}
          />
          <BsVolumeUpFill className="text-white eng-h5 ms-2" />
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
            background-color: #dbd7ff; /* 更改滑動手柄顏色 */
          }
          input[type='range']::-webkit-slider-thumb:before,
          input[type='range']::-webkit-slider-thumb:after {
            position: absolute;
            top: 3px;
            width: 50px; /* 使用較小的寬度進行測試 */
            height: 4px;
            content: '';
            pointer-events: none;
            transition: 0.2s;
          }

          input[type='range']::-webkit-slider-thumb:before {
            left: -47px;
            background: #f22;
          }
          input[type='range']::-webkit-slider-thumb:after {
            left: 10px;
            background: #edc;
          }
        `}
      </style>
    </>
  )
}

export default PlaybackControl
