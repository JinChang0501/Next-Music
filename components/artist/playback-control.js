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

  useEffect(() => {
    if (player) {
      player.getVolume().then((vol) => {
        setVolume(vol * 100)
      })

      player.addListener('player_state_changed', (state) => {
        if (state) {
          setDuration(state.duration)
          setProgress(state.position)

          if (progressInterval.current) {
            clearInterval(progressInterval.current)
          }

          progressInterval.current = setInterval(() => {
            setProgress((prev) => {
              if (prev < duration) {
                return prev + 1000
              } else {
                clearInterval(progressInterval.current)
                return prev
              }
            })
          }, 1000)
        }
      })
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current)
      }
    }
  }, [player, duration])

  const handleVolumeChange = (newValue) => {
    setVolume(newValue)
    onVolumeChange(newValue / 100)
  }

  const handleProgressChange = (newValue) => {
    setProgress(newValue)
    onSeek(newValue)
  }
  // 時間格式
  const formatTime = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60)
    const minutes = Math.floor((ms / 1000 / 60) % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
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
            // className="flex-grow-1"
            className="custom-slider"
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
            <BsPlayCircle onClick={onPlay} className="text-white eng-h4 mx-2" />
          )}
          <button onClick={onNextTrack} className="btn btn-link text-white">
            <BiSkipNext className="text-white eng-h4" />
          </button>
        </div>

        {/* Volume control */}
        <div className="d-flex align-items-center">
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
        `}
      </style>
    </>
  )
}

export default PlaybackControl
