import React, { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { Calendar, Whisper, Popover, Badge } from 'rsuite'

// getTodoList 函數
export default function getTodoList(date) {
  const { auth } = useAuth()
  // 收藏列表，收藏初始值
  const [favorite, setFavorite] = useState({
    success: false,
    rows: { 
      favorites: [] // 有收藏的 activity_id
    },
  })

  // 取得收藏項目
  const fetchFavorites = async () => {
    // try {
      // console.log(auth.userData.id)
      const res = await getFavorites()
      console.log(res.rows)
      console.log(res)
      if(res.success === true) {
        setFavorite(res)
      }
      // } catch (error) {
      //   console.log('現在的favorite')
      //   console.log(favorite)
      //   console.error('無法獲取收藏', error)
      // }
  }
  // 有登入的話，抓favorite資料
  useEffect(() => {
    if (auth.isAuth) {
      fetchFavorites()
      console.log(favorite)
    }
  }, [auth])

  const day = date.getDate()
  const month = date.getMonth() +1

  return (
    <>
  {/* switch (day, month) {
    case 10,7:
      return [
        { time: '10:30', title: 'Meeting' },
        { time: '12:00', title: 'Lunch' }
      ]
    case 15:
      return [
        { time: '09:30', title: 'Products' },
        { time: '12:30', title: 'Client' },
        { time: '02:00 pm', title: 'Product' },
        { time: '05:00 pm', title: 'teptance' },
        { time: '06:30 pm', title: 'Reporting' },
        { time: '10:00 pm', title: 'Goin walk the dog' }
      ]
    default:
      return []
  } */}
  </>
  )
}