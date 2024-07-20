import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react'

const SpotifyAuthContext = createContext()

export const SpotifyAuthProvider = ({ children }) => {
  // 初始化 token
  const [spotifyToken, setSpotifyToken] = useState(
    'BQAjWkkvdQbHFKI-Vtrr-gpCLtBw6jFSsxIDIxDCMRgBRa4_UJQ_ovpOXuBKD26OHdFs2Z8l247BBRshnRezOUuRWMqGIMeo8aiDDSBiYlOQz_sqemKQRY4zeLiL-1LE4sP9ydfnWKm7vsP6tOoWl_OlggqH18SE2Grej_ntBFIuiX_cQ3WqC6q_-apFrNNGU3blxLdliZ0ER2Ct3AqVI5sJc6_2FKKpI0bSipmEOQegJXunatqWG3F6qR7Mqjylh3yLuGVliZ39Mng_irjyIrIGfLDA0oknesJu8fFhkLD5cOtbeuZoB3IuWv9_NryJcPZjYFCWbM_FnuV7RG8u6MuT'
  )
  const [refreshToken, setRefreshToken] = useState(
    'AQA23eOUMh-bzncDeYlJEnNvcbbAB6qNTqaceRGM3stPw5ovELJifz0fer8y2Hmdyn9-2OacDUtxwYGJ1MngyP7MBZwHT9cKO8jxdS0I1YdA5A3JYxDDcusal0_er1zPxCI'
  )

  //
  const storedSpotifyToken = () => {
    try {
      const Key1 = 'spotify_token'
      localStorage.setItem(Key1, spotifyToken)
      // localStorage.removeItem(testKey)
      console.log()
    } catch (e) {
      return false
    }
  }

  const storedRefreshToken = () => {
    try {
      const Key2 = 'refresh_token'
      localStorage.setItem(Key2, refreshToken)
      // localStorage.removeItem(testKey)
      return true
    } catch (e) {
      return false
    }
  }
  // 在 localstorage 存取 授權令牌 & 刷新令牌
  useEffect(() => {
    storedSpotifyToken()
    storedRefreshToken()
  }, [])

  const getRefreshToken = async () => {
    // refresh token that has been previously stored
    const refreshToken = localStorage.getItem('refresh_token')
    const url = 'https://accounts.spotify.com/api/token'

    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: 'a95421f6a14e4aedb3f416099b3de0ba',
      }),
    }
    const body = await fetch(url, payload)
    const res = await body.json()
    console.log(res)

    // localStorage.setItem('spotify_token', res.accessToken)
    // localStorage.setItem('refresh_token', res.refreshToken)
    setSpotifyToken(res.access_Token)
    setRefreshToken(res.refresh_Token)
    storedSpotifyToken()
    storedRefreshToken()
  }

  useEffect(() => {
    getRefreshToken()
    const interval = setInterval(() => {
      getRefreshToken()
    }, 55 * 60 * 1000) // 55 minutes

    return () => clearInterval(interval)
  }, [])

  const value = {
    spotifyToken,
    refreshToken,
    getRefreshToken,
  }
  return (
    <SpotifyAuthContext.Provider value={value}>
      {children}
    </SpotifyAuthContext.Provider>
  )
}

export const useSpotifyAuth = () => useContext(SpotifyAuthContext)
