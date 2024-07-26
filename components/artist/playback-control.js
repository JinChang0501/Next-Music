import React, { useState, useEffect, useRef } from 'react'
import { Slider } from 'rsuite'
import Image from 'next/image'

import { BsFillVolumeDownFill } from 'react-icons/bs'
import { BsVolumeUpFill } from 'react-icons/bs'
import { BsVolumeMuteFill } from 'react-icons/bs'

const PlaybackControl = ({ player, currentTrack }) => {
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
    player.setVolume(newValue / 100)
  }

  const handleProgressChange = (newValue) => {
    setProgress(newValue)
    player.seek(newValue)
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
              <div className="m-3">
                <Image
                  width={220}
                  height={220}
                  src={`${currentTrack.album.images[1].url}`}
                ></Image>
              </div>
              <div className="chb-p mb-1">{currentTrack.name}</div>
              <div className="chr-p text-purple3">
                {currentTrack.artists[0].name}
              </div>
            </>
          ) : (
            <>
              <div className="m-3">
                <Image
                  width={220}
                  height={220}
                  src={`/images/artist/no-music.jpg`}
                ></Image>
              </div>
              <div className="chb-p mb-1">未播放</div>
            </>
          )}
        </div>
        <div className="d-flex align-items-center my-2 mx-0">
          {/* 時間軸 Bar */}
          <Slider
            value={progress}
            min={0}
            max={duration}
            step={1000}
            graduated
            tooltip={false}
            onChange={handleProgressChange}
            className="flex-grow-1"
            style={{ color: 'black', width: '180px' }}
          />
        </div>

        <div className="d-flex bg-white mx-1 justify-content-between text-black60 chr-p-8">
          <div className="">{formatTime(progress)}</div>
          <div className="">{formatTime(duration)}</div>
        </div>
        <div className="d-flex align-items-center">
          <div className="text-white eng-h5 me-2">
            <BsFillVolumeDownFill />
          </div>
          <div className="text-white eng-h5 mt-2 me-2">
            {/* 聲音 Bar */}
            <Slider
              value={volume}
              min={0}
              max={100}
              step={1}
              graduated
              onChange={handleVolumeChange}
              // barClassName="bg-dark"
              // handleStyle={{ backgroundColor: 'black' }}
              style={{ width: '120px' }}
            />
          </div>

          <div className="text-white eng-h5 me-2">
            <BsVolumeUpFill />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .outline {
            border: 1px solid #dbd7ff;
          }
        `}
      </style>
    </>
  )
}

export default PlaybackControl
