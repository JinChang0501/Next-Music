import axiosInstance, { fetcher } from './axios-instance'
import useSWR from 'swr'
/**
 * 檢查會員狀態使用
 */
export const checkAuth = async () => {
  return await axiosInstance.get('/auth/check')
}
/**
 * Google Login(Firebase)登入用，providerData為登入後得到的資料
 */
export const googleLogin = async (providerData = {}) => {
  return await axiosInstance.post('/google-login', providerData)
}

/**
 * 登入用，loginData = { username, passsword }
 */
// export const login = async (loginData = {}) => {
//   return await axiosInstance.post('/auth', loginData)
// }
export const login = async (loginData = {}) => {
  try {
    const res = await axiosInstance.post('/auth', loginData)
    if (res.data.status === 'success') {
      const { accessToken } = res.data.data
      localStorage.setItem('accessToken', accessToken)
    }
    return res
  } catch (error) {
    throw new Error(error.response.data.message || error.message)
  }
}

/**
 * 登出用
 */
export const logout = async () => {
  localStorage.removeItem('accessToken')
  return await axiosInstance.post('/auth/logout', {})
}

// export const logout = async () => {
//   try {
//     await axiosInstance.post('/auth/logout', {})
//     localStorage.removeItem('accessToken')
//   } catch (error) {
//     throw new Error(error.response.data.message || error.message)
//   }
// }

export const getUserPic = async () => {
  try {
    const res = await axiosInstance.get(`/memberPic`)
    return res.data // 返回從後端獲取的data
  } catch (error) {
    console.error('Error fetching user tickets:', error)
    throw error // 抛出错误以便上层处理
  }
}

/**
 * 載入會員id的資料用，需要登入後才能使用。此API路由會檢查JWT中的id是否符合本會員，不符合會失敗。
 */
export const getUserById = async (id = 0) => {
  return await axiosInstance.get(`/users/${id}`)
}
/**
 * 忘記密碼/OTP 要求一次性密碼
 */
// return await axiosInstance.post('/reset-password/otp', { email })

export const requestOtpToken = async (email = '') => {
  return await axiosInstance.post('/reset-password/otp', { email })
}
/**
 * 忘記密碼/OTP 重設密碼
 */
// return await axiosInstance.post('/reset-password/reset'
export const resetPassword = async (email = '', password = '', token = '') => {
  return await axiosInstance.post('/reset-password/reset', {
    email,
    token,
    password,
  })
}
/**
 * 註冊用
 */
export const register = async (user = {}) => {
  return await axiosInstance.post('/users', user)
}
/**
 * 修改會員一般資料用(排除password, username, email)
 */
export const updateProfile = async (id = 0, user = {}) => {
  return await axiosInstance.put(`/users/${id}/profile`, user)
}
/**
 * 修改會員頭像用，需要用FormData
 */
export const updateProfileAvatar = async (formData) => {
  return await axiosInstance.post(`/users/upload-avatar`, formData)
}
/**
 * 修改會員密碼專用, password = { originPassword, newPassword }
 */
export const updatePassword = async (id = 0, password = {}) => {
  return await axiosInstance.put(`/users/${id}/password`, password)
}
/**
 * 獲得會員有加在我的最愛的商品id，回傳為id陣列
 */
// export const getFavs = async () => {
//   return await axiosInstance.get('/favorites')
// }
/**
 * 新增商品id在該會員的我的最愛清單中的
 */
export const addFav = async (pid) => {
  return await axiosInstance.put(`/favorites/${pid}`)
}
/**
 * 移除商品id在該會員的我的最愛清單中的
 */
export const removeFav = async (pid) => {
  return await axiosInstance.delete(`/favorites/${pid}`)
}

export const useUser = (id) => {
  const { data, error, isLoading } = useSWR(`/users/${id}`, fetcher)

  return {
    data,
    isLoading,
    isError: error,
  }
}

// 解析accessToken用的函式
export const parseJwt = (token) => {
  const base64Payload = token.split('.')[1]
  const payload = Buffer.from(base64Payload, 'base64')
  return JSON.parse(payload.toString())
}
