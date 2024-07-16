import { useState , useEffect } from 'react'
// 因為使用import圖片的方式，所以需要引入Image元件
import Image from 'next/image'
// 實心圖
import bookmarkFillIcon from '@/assets/activity/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/activity/bookmark.svg'
// check Auth
// import { useAuth } from '@/hooks/use-auth'
// import { useLogin } from '@/hooks/use-login'

export default function FavIcon({ iconWidth, iconHeight  , handleToggleFav, eventId }) {
  const [ over, setOver ] = useState(false)
  const isFavorite = true
  return (
    <>
      <Image 
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        width={iconWidth}
        height={iconHeight}
        onClick={() => {
          handleToggleFav(eventId)
        }}
        // 以isFavorite屬性(布林值)，來決定呈現的圖示
        src={(isFavorite || over) ? bookmarkFillIcon : bookmarkIcon}
        alt=""
      />
    </>
  )
}
