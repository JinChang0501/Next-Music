// hooks/useFavorites.js

import { useState, useEffect } from 'react'
import { getFavorites, addFavorite, removeFavorite } from '@/configs/fav-api'
import { useAuth } from '@/hooks/use-auth'

export function useFavorites() {
  const { auth } = useAuth()
  const [favorite, setFavorite] = useState({
    success: false,
    rows: {
      favorites: [],
    },
  })

  const fetchFavorites = async () => {
    try {
      const res = await getFavorites()
      if (res.success === true) {
        setFavorite(res)
      }
    } catch (error) {
      console.error('Unable to fetch favorites', error)
    }
  }

  const toggleFavorite = async (eventId) => {
    try {
      const isFavorite = favorite.rows.favorites.includes(eventId)

      if (isFavorite) {
        await removeFavorite(eventId)
      } else {
        await addFavorite(eventId)
      }

      const nextFavorite = isFavorite
        ? favorite.rows.favorites.filter((id) => id !== eventId)
        : [...favorite.rows.favorites, eventId]

      setFavorite({
        ...favorite,
        rows: {
          ...favorite.rows,
          favorites: nextFavorite,
        },
      })
    } catch (error) {
      console.error('Unable to toggle favorite status', error)
    }
  }

  useEffect(() => {
    if (auth.isAuth) {
      fetchFavorites()
    }
  }, [auth])

  return {
    favorite,
    toggleFavorite,
    isFavorite: (eventId) => favorite.rows.favorites.includes(eventId),
  }
}
