import React, { useState, useEffect, useRef } from 'react'
import { Slider } from 'rsuite'

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

  const formatTime = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60)
    const minutes = Math.floor((ms / 1000 / 60) % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="position-fixed bottom-0 end-0 m-3 bg-dark p-3">
      <div className="text-white mb-2">
        {currentTrack ? (
          <>
            <div className="fw-bold">{currentTrack.name}</div>
            <div className="small">{currentTrack.artists[0].name}</div>
          </>
        ) : (
          <div>未播放</div>
        )}
      </div>
      <div className="d-flex align-items-center mb-2">
        <span className="text-white small me-2">{formatTime(progress)}</span>
        <Slider
          value={progress}
          min={0}
          max={duration}
          step={1000}
          onChange={handleProgressChange}
          className="flex-grow-1"
          style={{ width: '200px' }}
        />
        <span className="text-white small ms-2">{formatTime(duration)}</span>
      </div>
      <div className="d-flex align-items-center">
        <span className="text-white small me-2">音量</span>
        <Slider
          value={volume}
          min={0}
          max={100}
          step={1}
          onChange={handleVolumeChange}
          style={{ width: '120px' }}
        />
      </div>
    </div>
  )
}

export default PlaybackControl
