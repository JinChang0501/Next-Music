import React, { useState } from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import { BsPlayCircleFill } from 'react-icons/bs'
import { BsPauseCircle } from 'react-icons/bs'
import { BsPauseCircleFill } from 'react-icons/bs'

export default function TopTrackItem({
  number = 1,
  cover = 'https://i.postimg.cc/28gJQ7xz/Cover11.jpg',
  song_name = 'Song Name',
}) {
  const [over, setOver] = useState(false)
  const [play, setplay] = useState(false)
  return (
    <>
      <div
        className={`d-flex align-items-center ${
          over ? 'bg-black90 hover' : 'bg-dark'
        }`}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      >
        <div className="eng-h6 text-black60 mx-4">{number}</div>
        <img className="img-size me-4 my-2" src={cover} />
        <div className="chr-h6 text-white me-auto">{song_name}</div>
        {/* <div className="text-white eng-h4 me-4"> */}
        {over ? (
          <BsPlayCircleFill
            className="text-white eng-h4 me-4"
            onClick={() => {
              setplay(true)
            }}
          />
        ) : (
          <BsPlayCircle className="text-white eng-h4 me-4" />
        )}
        {/* </div> */}
      </div>
      <style jsx>{`
        .img-size {
          width: 50px;
          height: 50px;
        }
         {
          /* .hover {
          transform: scale(1.04, 1.04);
          transition: all 0.3s ease-out;
        } */
        }
      `}</style>
    </>
  )
}
