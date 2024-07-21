import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react'

const SpotifyAuthContext = createContext()

export const SpotifyAuthProvider = ({ children }) => {
  // 初始化 token （目前用postman手動更新）
  const [spotifyToken, setSpotifyToken] = useState(
    'BQAIXLWhaoB1dLtBs36-55znmYBbbVCqiZNCMedPUZf0ukL2z5OzlFZEnphrpqG88Iq4MUKAR3uw2lvVlTnL29n4FC-IYk_ijkgjBOvjZcBnR-B47oc'
  )
  // 這個還沒完全搞懂ＱＱ，有一點像是 authenticate ，一個安全憑證
  const [refreshToken, setRefreshToken] = useState(
    'AQAqOfFYnmjpjeeHZ7UIw8Aa_O-zBQhv-_iGEek_JbULbpzaJiEEOKbncmwWyAYuWrcAr184eB9QCVvxIxEX-iLX4ZAkssXjmNI2-w3aSzCLCwM-voK7DGnHn9vDPrhqAEw'
  )

  // 存進 localStorage
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
