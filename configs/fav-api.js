import axios from 'axios'

export const API_SERVER = 'http://localhost:3005'

// 已有
// export const getAllEvents = async () => {
//   try {
//     const response = await axios.get(`${API_SERVER}/activity`)
//     return response.data
//   } catch (error) {
//     console.error('無法獲取活動', error)
//     throw error
//   }
// }

export const addFavorite = async (userId, eventId) => {
  try {
    const response = await axios.post(`${API_SERVER}/favorite`, { userId, eventId })
    return response.data
  } catch (error) {
    console.error('無法加入收藏', error)
    throw error
  }
}

export const removeFavorite = async (userId, eventId) => {
  try {
    const response = await axios.delete(`${API_SERVER}/favorite`, { data: { userId, eventId } })
    return response.data
  } catch (error) {
    console.error('無法取消收藏', error)
    throw error
  }
}

export const checkFavorite = async (userId, eventId) => {
  try {
    const response = await axios.get(`${API_SERVER}/favorite/check`, { params: { userId, eventId } })
    return response.data.isFavorite
  } catch (error) {
    console.error('無法確認收藏狀態', error)
    throw error
  }
}

export const getFavorites = async (userId) => {
  try {
    const response = await axios.get(`${API_SERVER}/favorite/${userId}`)
    return response.data
  } catch (error) {
    console.error('無法獲取收藏', error)
    throw error
  }
}
