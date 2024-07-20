// import React, {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   useCallback,
// } from 'react'

// const SpotifyAuthContext = createContext()

// // export const useSpotifyAuth = () => {
// //   // const context = useContext(SpotifyAuthContext)
// //   // if (context === undefined) {
// //   //   throw new Error('useSpotifyAuth must be used within a SpotifyAuthProvider')
// //   // }
// //   return useContext(SpotifyAuthContext)
// // }

// // 安全地獲取 localStorage 值的輔助函數
// const safelyGetItem = (key) => {
//   if (typeof window !== 'undefined' && window.localStorage) {
//     return localStorage.getItem(key)
//   }
//   return null
// }

// export const SpotifyAuthProvider = ({ children }) => {
//   const [accessToken, setAccessToken] = useState(null)
//   const [refreshToken, setRefreshToken] = useState(null)

//   // 在組件掛載後安全地初始化狀態
//   useEffect(() => {
//     setAccessToken(safelyGetItem('access_token'))
//     setRefreshToken(safelyGetItem('refresh_token'))
//   }, [])

//   const refreshAccessToken = useCallback(async () => {
//     if (!refreshToken) return

//     try {
//       const response = await fetch('/refresh_token', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ refresh_token: refreshToken }),
//       })
//       const data = await response.json()

//       if (data.access_token) {
//         setAccessToken(data.access_token)
//         localStorage.setItem('access_token', data.access_token)
//       }
//       if (data.refresh_token) {
//         setRefreshToken(data.refresh_token)
//         localStorage.setItem('refresh_token', data.refresh_token)
//       }
//     } catch (error) {
//       console.error('Failed to refresh token:', error)
//     }
//   }, [refreshToken])

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const tokenExpirationCheck = setInterval(() => {
//         if (accessToken) {
//           refreshAccessToken()
//         }
//       }, 55 * 60 * 1000) // 每55分鐘刷新一次

//       return () => clearInterval(tokenExpirationCheck)
//     }
//   }, [accessToken, refreshAccessToken])

//   const value = {
//     accessToken,
//     refreshToken,
//     refreshAccessToken,
//   }

//   return (
//     <SpotifyAuthContext.Provider value={value}>
//       {children}
//     </SpotifyAuthContext.Provider>
//   )
// }

// export const useSpotifyAuth = () => {
//   // const context = useContext(SpotifyAuthContext)
//   // if (context === undefined) {
//   //   throw new Error('useSpotifyAuth must be used within a SpotifyAuthProvider')
//   // }
//   return useContext(SpotifyAuthContext)
// }
