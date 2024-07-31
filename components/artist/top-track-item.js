import React, { useState } from 'react'
import Image from 'next/image'
import { BsPlayCircle } from 'react-icons/bs'
import { BsPlayCircleFill } from 'react-icons/bs'
import { BsPauseCircle } from 'react-icons/bs'
import { BsPauseCircleFill } from 'react-icons/bs'

export default function TopTrackItem({
  number = 1,
  cover = 'https://i.postimg.cc/28gJQ7xz/Cover11.jpg',
  song_name = 'Song Name',
  isPlaying,
  onPlay,
}) {
  const [over, setOver] = useState(false)
  // const [play, setplay] = useState(false)
  return (
    <>
      <div
        className={`d-flex align-items-center ${
          over ? 'bg-black90 hover' : 'bg-dark'
        }`}
        onMouseOver={() => setOver(true)}
        onFocus={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        onBlur={() => setOver(false)}
      >
        <div className="eng-h6 width-box text-black60 ms-2 ms-md-4">
          {number}
        </div>
        <Image
          width={50}
          height={50}
          className="img-size me-4 my-2"
          src={cover}
          alt={song_name}
        />
        <div className="chr-h6 text-white text-fixed me-auto">{song_name}</div>
        <button className="btn-control me-3" onClick={onPlay}>
          {isPlaying ? (
            <BsPauseCircleFill className="eng-h2" />
          ) : (
            <BsPlayCircle className="eng-h2" />
          )}
        </button>
      </div>
      <style jsx>{`
        .img-size {
          width: 50px;
          height: 50px;
        }
        .width-box {
          width: 45px;
        }
        .text-fixed {
          max-width: 380px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .icon-fixed {
          min-width: 100px;
        }
        .btn-control {
          margin: 0;
          padding: 0;
          width: 40px;
          height: 40px;
          text-align: center;
          color: #a1a1a1;
          border: none;
          outline: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .btn-control:hover {
          color: white;
        }
        @media (max-width: 390px) {
          .img-size {
            width: 40px;
            height: 40px;
          }
          .width-box {
            width: 30px;
          }
          .text-fixed {
            max-width: 170px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      `}</style>
    </>
  )
}
