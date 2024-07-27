import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { getFavorites, addFavorite, removeFavorite } from '@/configs/fav-api'

import { useAuth } from '@/hooks/use-auth'
import toast, { Toaster } from 'react-hot-toast'

const FavContext = createContext(null)

export function FavProvider({ children }) {
  const { auth } = useAuth()

  // 收藏列表，收藏初始值
  const initialFavoriteState = {
    success: false,
    rows: {
      favorites: [], // 有收藏的 activity_id
      activities: [],
    },
  }

  const [favorite, setFavorite] = useState(initialFavoriteState)

  // 取得收藏項目
  const fetchFavorites = async () => {
    // try {
    // console.log(auth.userData.id)
    const res = await getFavorites()
    console.log(res.rows)
    console.log(res)
    if (res.success === true) {
      setFavorite(res)
    }
    // } catch (error) {
    //   console.log('現在的favorite')
    //   console.log(favorite)
    //   console.error('無法獲取收藏', error)
    // }
  }

  const handleToggleFav = async (eventId) => {
    try {
      // 確認是否已經收藏 => includes 回傳 true / false
      const isFavorite = favorite.rows.favorites.includes(eventId)

      // 根據是否收藏來決定要加入還是移除
      if (isFavorite) {
        await removeFavorite(eventId)
        toast.success('已取消收藏')
      } else {
        await addFavorite(eventId)
        toast.success('加入收藏成功')
      }

      // 更新收藏狀態
      const nextFavorites = isFavorite
        ? favorite.rows.favorites.filter((id) => id !== eventId)
        : [...favorite.rows.favorites, eventId]

      setFavorite({
        ...favorite,
        rows: {
          ...favorite.rows,
          favorites: nextFavorites,
        },
      })
    } catch (error) {
      console.error('無法切換收藏狀態', error)
    }
  }

  const resetFavorites = () => {
    setFavorite(initialFavoriteState)
  }

  useEffect(() => {
    if (auth.isAuth) {
      fetchFavorites()
      console.log(favorite)
    } else {
      // 當用戶登出時，重置收藏狀態
      resetFavorites()
    }
  }, [auth])

  return (
    <>
      <FavContext.Provider
        value={{
          favorite,
          fetchFavorites,
          resetFavorites,
          handleToggleFav,
        }}
      >
        {children}
      </FavContext.Provider>
    </>
  )
}

export const useFav = () => useContext(FavContext)
