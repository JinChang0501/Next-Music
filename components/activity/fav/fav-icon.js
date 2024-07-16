import { useState } from 'react'
// 因為使用import圖片的方式，所以需要引入Image元件
import Image from 'next/image'
// 實心圖
import bookmarkFillIcon from '@/assets/activity/bookmark-fill.svg'
import { BsBookmarkFill } from 'react-icons/bs'
// 空心圖
import bookmarkIcon from '@/assets/activity/bookmark.svg'
import { BsBookmark } from 'react-icons/bs'

export default function FavIcon({ fav, handleToggleFav, iconWidth, iconHeight }) {
  const [over, setOver] = useState(false)
  return (
    <>
      <Image 
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        width={iconWidth}
        height={iconHeight}
        className='hover'
        onClick={handleToggleFav}
        // 以fav屬性(布林值)，來決定呈現的圖示
        src={(fav || over) ? bookmarkFillIcon : bookmarkIcon}
        alt=""
      />
    </>
  )
}
