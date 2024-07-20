import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react'

const SpotifyAuthContext = createContext()

const getLocalStorageItem = (key) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key)
  }
  return null
}

const setLocalStorageItem = (key, value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, value)
  }
}

export const SpotifyAuthProvider = ({ children }) => {
  const [spotifyToken, setSpotifyToken] = useState(
    'BQBSJOmVypOpW68gPynVu1JVox2LpW5wgQsrQbH3cYGireiJQcC1PKdx2hqz5yb0vopEBOxYuWyC-fauN9o13bloZpFvJYhcVAFYYgti8qaphBNFmgM'
  )
  const [refreshToken, setRefreshToken] = useState(null)

  useEffect(() => {
    const storedSpotifyToken = getLocalStorageItem('spotify_access_token')
    const storedRefreshToken = getLocalStorageItem('spotify_refresh_token')
    console.log('Initializing tokens:', {
      storedSpotifyToken,
      storedRefreshToken,
    })
    setSpotifyToken(storedSpotifyToken)
    setRefreshToken(storedRefreshToken)
  }, [])

  const refreshAccessToken = useCallback(async () => {
    if (!refreshToken) {
      console.error('No refresh token available')
      return
    }

    try {
      console.log('Attempting to refresh token')
      const response = await fetch('/refresh_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh_token: refreshToken }),
        credentials: 'include', // 包含 cookies
      })
      const data = await response.json()

      if (data.access_token) {
        console.log('New access token received')
        setSpotifyToken(data.access_token)
        setLocalStorageItem('spotify_access_token', data.access_token)
      }
      if (data.refresh_token) {
        console.log('New refresh token received')
        setRefreshToken(data.refresh_token)
        setLocalStorageItem('spotify_refresh_token', data.refresh_token)
      }
    } catch (error) {
      console.error('Failed to refresh token:', error)
    }
  }, [refreshToken])

  useEffect(() => {
    const tokenExpirationCheck = setInterval(() => {
      if (spotifyToken) {
        console.log('Checking token expiration')
        refreshAccessToken()
      } else {
        console.log('No access token available for refresh check')
      }
    }, 55 * 60 * 1000) // 每 55 分鐘檢查一次

    return () => clearInterval(tokenExpirationCheck)
  }, [spotifyToken, refreshAccessToken])

  const value = {
    spotifyToken,
    refreshToken,
    refreshAccessToken,
  }

  return (
    <SpotifyAuthContext.Provider value={value}>
      {children}
    </SpotifyAuthContext.Provider>
  )
}

export const useSpotifyAuth = () => useContext(SpotifyAuthContext)
