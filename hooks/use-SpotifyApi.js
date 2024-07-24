import { API_SPOTIFY } from '@/configs/spotify-api'
import { useSpotifyAuth } from '@/hooks/use-SpotifyAuth0724'
import React, { useState, useEffect, useCallback } from 'react'

export const useSpotifyApi = () => {
  const [token, setToken] = useState(null)
  const [isTokenLoaded, setIsTokenLoaded] = useState(false)

  // 在 localStorage 讀取 access_token
  useEffect(() => {
    const storedToken = localStorage.getItem('spotify_access_token')
    setToken(storedToken)
    setIsTokenLoaded(true)
  }, [])

  const fetchWithToken = useCallback(
    async (url, options = {}) => {
      if (!isTokenLoaded) {
        console.log('Token is still loading')
        return
      }

      if (!token) {
        console.error('No access token available')
        // await refreshAccessToken()
        return
      }

      try {
        const response = await fetch(url, {
          ...options,
          headers: {
            ...options.headers,
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        return await response.json()
      } catch (error) {
        console.error('API call failed:', error)
        if (error.message.includes('401')) {
          // await getSpotifyToken()
        }
        throw error
      }
    },
    [token, isTokenLoaded]
  )

  const getTopTracks = useCallback(
    async (id) => {
      if (!isTokenLoaded) return
      try {
        return await fetchWithToken(
          `${API_SPOTIFY}/v1/artists/${id}/top-tracks?market=TW`
        )
      } catch (error) {
        console.error('無法獲取熱門歌曲', error)
        throw error
      }
    },
    [fetchWithToken, isTokenLoaded]
  )

  const getArtists = useCallback(
    async (...ids) => {
      if (!isTokenLoaded) return
      try {
        return await fetchWithToken(
          `${API_SPOTIFY}/v1/artists?ids=${ids.join(',')}`
        )
      } catch (error) {
        console.error('無法獲取多筆藝人資訊', error)
        throw error
      }
    },
    [fetchWithToken, isTokenLoaded]
  )

  const getArtist = useCallback(
    async (id) => {
      if (!isTokenLoaded) return
      try {
        return await fetchWithToken(`${API_SPOTIFY}/v1/artists/${id}`)
      } catch (error) {
        console.error('無法獲取單個藝人資訊', error)
        throw error
      }
    },
    [fetchWithToken, isTokenLoaded]
  )

  return {
    getTopTracks,
    getArtists,
    getArtist,
    isTokenLoaded,
  }
}
