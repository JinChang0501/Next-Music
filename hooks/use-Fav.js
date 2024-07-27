import React, { useContext, useEffect, useState, useCallback } from 'react'
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
  const fetchFavorites = useCallback(async () => {
    try {
      const res = await getFavorites()
      if (res.success === true) {
        setFavorite(res)
      }
    } catch (error) {
      console.error('無法獲取收藏', error)
    }
  }, [])

  const handleToggleFav = useCallback(
    async (eventId) => {
      try {
        const isFavorite = favorite.rows.favorites.includes(eventId)

        if (isFavorite) {
          await removeFavorite(eventId)
          toast.success('已取消收藏')
        } else {
          await addFavorite(eventId)
          toast.success('加入收藏成功')
        }

        // 切換後立即獲取更新的收藏列表
        await fetchFavorites()
      } catch (error) {
        console.error('無法切換收藏狀態', error)
      }
    },
    [favorite.rows.favorites, fetchFavorites]
  )

  const resetFavorites = useCallback(() => {
    setFavorite(initialFavoriteState)
  }, [])

  useEffect(() => {
    if (auth.isAuth) {
      fetchFavorites()
      console.log(favorite)
    } else {
      // 當用戶登出時，重置收藏狀態
      resetFavorites()
    }
  }, [auth, fetchFavorites, resetFavorites])

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
