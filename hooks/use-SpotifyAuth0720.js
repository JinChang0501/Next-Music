// import React, {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   useCallback,
// } from 'react'
// import { API_SERVER } from '@/configs/api-path'

// const SpotifyAuthContext = createContext()

// export const SpotifyAuthProvider = ({ children }) => {
//   // const getLocalStorageItem = (key) => {
//   //   if (typeof window !== 'undefined') {
//   //     return localStorage.getItem(key)
//   //   }
//   //   return null
//   // }

//   // const setLocalStorageItem = (key, value) => {
//   //   if (typeof window !== 'undefined') {
//   //     localStorage.setItem(key, value)
//   //   }
//   // }

//   const isLocalStorageAvailable = () => {
//     try {
//       const testKey = '__test__'
//       localStorage.setItem(testKey, testKey)
//       // localStorage.removeItem(testKey)
//       return true
//     } catch (e) {
//       return false
//     }
//   }

//   // Use this check before attempting to use localStorage
//   if (isLocalStorageAvailable()) {
//     // Use localStorage
//     console.log('done')
//   } else {
//     console.error('localStorage is not available')
//     // Implement a fallback strategy or inform the user
//   }

//   // 定義spotifyToken、refreshToken原始狀態
//   const [spotifyToken, setSpotifyToken] = useState(
//     'BQANauVRGfvNcdmYZPrMreh_KIAjxbMmFR12eN6GPClhilDiqz8EkItmu5Z3DdQCkRUBGnxM81w07IkVLbL1ej3Q_NJTK6yvP9Vl3Oz8cFwEXkZ3-DE'
//   )
//   const [refreshToken, setRefreshToken] = useState(null)

//   const storedSpotifyToken = (value) => {
//     try {
//       const Key1 = 'spotify_token'
//       localStorage.setItem(Key1, value)
//       // localStorage.removeItem(testKey)
//       return true
//     } catch (e) {
//       return false
//     }
//   }

//   const storedRefreshToken = (value) => {
//     try {
//       const Key2 = 'refresh_token'
//       localStorage.setItem(Key2, value)
//       // localStorage.removeItem(testKey)
//       return true
//     } catch (e) {
//       return false
//     }
//   }

//   useEffect(() => {
//     // const storedSpotifyToken = getLocalStorageItem('spotify_token')
//     // const storedRefreshToken = getLocalStorageItem('refresh_token')
//     // console.log('Initializing tokens:', {
//     //   storedSpotifyToken,
//     //   storedRefreshToken,
//     // })
//     // setSpotifyToken(storedSpotifyToken)
//     // setRefreshToken(storedRefreshToken)
//     // console.log('Initializing tokens:', {
//     //   storedSpotifyToken,
//     //   storedRefreshToken,
//     // })
//     storedSpotifyToken()
//     storedRefreshToken()
//   }, [])

//   const refreshAccessToken = useCallback(async () => {
//     if (!refreshToken) {
//       console.error('No refresh token available')
//       return
//     }

//     try {
//       console.log('Attempting to refresh token')
//       const response = await fetch(`${API_SERVER}/refresh_token`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ refresh_token: refreshToken }),
//         credentials: 'include', // 包含 cookies
//       })
//       const data = await response.json()

//       if (data.spotify_token) {
//         console.log('New access token received')
//         setSpotifyToken(data.spotify_token)
//         storedSpotifyToken(data.spotify_token)
//       }
//       if (data.refresh_token) {
//         console.log('New refresh token received')
//         setRefreshToken(data.refresh_token)
//         setLocalStorageItem(data.refresh_token)
//       }
//     } catch (error) {
//       console.error('Failed to refresh token:', error)
//     }
//   }, [refreshToken])

//   useEffect(() => {
//     const tokenExpirationCheck = setInterval(() => {
//       if (spotifyToken) {
//         console.log('Checking token expiration')
//         refreshAccessToken()
//       } else {
//         console.log('No access token available for refresh check')
//       }
//     }, 55 * 60 * 1000) // 每 55 分鐘檢查一次

//     return () => clearInterval(tokenExpirationCheck)
//   }, [spotifyToken, refreshAccessToken])

//   const value = {
//     spotifyToken,
//     refreshToken,
//     refreshAccessToken,
//   }

//   return (
//     <SpotifyAuthContext.Provider value={value}>
//       {children}
//     </SpotifyAuthContext.Provider>
//   )
// }

// export const useSpotifyAuth = () => useContext(SpotifyAuthContext)
