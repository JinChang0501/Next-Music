import axiosInstance from './axios-instance'

export const getUserDatas = async () => {
  try {
    const res = await axiosInstance.get(`/ticket`)
    return res.data
  } catch (error) {
    console.error('Error fetching user tickets:', error)
    throw error
  }
}
