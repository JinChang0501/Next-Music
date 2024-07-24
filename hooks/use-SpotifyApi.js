import { API_SPOTIFY } from '@/configs/spotify-api'
import { useSpotifyAuth } from '@/hooks/use-SpotifyAuth0724'
import { useCallback } from 'react'

export const useSpotifyApi = () => {
  const [token, setToken] = useState(null)

  // 在 localStorage 讀取 access_token
  useEffect(() => {
    setToken(localStorage.getItem('spotify_access_token'))
  }, [])
  const fetchWithToken = useCallback(
    async (url, options = {}) => {
      if (!spotifyToken) {
        console.error('No access token available')
        await refreshAccessToken()
        return
      }

      try {
        const response = await fetch(url, {
          ...options,
          headers: {
            ...options.headers,
            Authorization: `Bearer ${spotifyToken}`,
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
    [spotifyToken]
  )

  const getTopTracks = useCallback(
    async (id) => {
      try {
        return await fetchWithToken(
          `${API_SPOTIFY}/v1/artists/${id}/top-tracks?market=TW`
        )
      } catch (error) {
        console.error('無法獲取熱門歌曲', error)
        throw error
      }
    },
    [fetchWithToken]
  )

  const getArtists = useCallback(
    async (...ids) => {
      try {
        return await fetchWithToken(
          `${API_SPOTIFY}/v1/artists?ids=${ids.join(',')}`
        )
      } catch (error) {
        console.error('無法獲取多筆藝人資訊', error)
        throw error
      }
    },
    [fetchWithToken]
  )

  const getArtist = useCallback(
    async (id) => {
      try {
        return await fetchWithToken(`${API_SPOTIFY}/v1/artists/${id}`)
      } catch (error) {
        console.error('無法獲取單個藝人資訊', error)
        throw error
      }
    },
    [fetchWithToken]
  )

  return {
    getTopTracks,
    getArtists,
    getArtist,
  }
}
