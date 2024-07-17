import axiosInstance, { fetcher } from './axios-instance'
import useSWR from 'swr'
/**

 */
// export const getUserById = async (id = 0) => {
//   return await axiosInstance.get(`/ticket-order/${id}`)
// }

export const getUserById = async (id) => {
  try {
    const res = await axiosInstance.get(`/product-list`)
    return res.data // 返回從後端獲取的data
  } catch (error) {
    console.error('Error fetching user tickets:', error)
    throw error // 抛出错误以便上层处理
  }
}
