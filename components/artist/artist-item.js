import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import PhoneBlackNoIconBtnBlack from '../common/button/phoneBlackButton/phoneBlackNoIconBtnBlack'

export default function ArtistItem({
  imgSrc = 'https://i.postimg.cc/zB5Gh92q/temp-Image7-Gw6zu.avif',
  artist_name = '音樂人',
  artid,
  scrollToTopTwo,
}) {
  const [over, setOver] = useState(false)
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(`/artist/${artid}`).then(() => {
      scrollToTopTwo()
    })
  }
  return (
    <>
      <div className="col-6 col-sm-6 col-md-4 my-2">
        <div
          className={`img-minW d-flex flex-column align-items-center ${
            over ? 'bg-black95 hover outline' : 'bg-dark'
          }`}
          onMouseOver={() => setOver(true)}
          onFocus={() => setOver(true)}
          onMouseOut={() => setOver(false)}
          onBlur={() => setOver(false)}
        >
          <Link href={`/artist/${artid}`} onClick={handleClick}>
            <div className="p-3">
              <Image
                src={imgSrc}
                width={180}
                height={180}
                alt=""
                className="ob-cover rounded-circle"
              />
            </div>
          </Link>
          <div className="d-flex flex-column justify-content-center p-3">
            <div className="chb-h6 text-purple3 to-e m-0">{artist_name}</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .outline {
          border: 1px solid #dbd7ff;
        }
        .img-minW {
          min-width: 160px;
        }
        .to-e {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .hover {
          transform: scale(1.02, 1.02);
          transition: all 0.3s ease-out;
        }
        .rounded {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        .ob-cover {
          object-fit: cover;
        }
      `}</style>
    </>
  )
}
