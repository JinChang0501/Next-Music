import axiosInstance, { fetcher } from './axios-instance'
import useSWR from 'swr'
/**

 */
// export const getUserById = async (id = 0) => {
//   return await axiosInstance.get(`/ticket-order/${id}`)
// }

export const getStoreOrder = async (sortBy) => {
  try {
    const res = await axiosInstance.get(`/store-order/${sortBy}`)
    console.log('我是service的res.data')
    console.log(res.data)
    return res.data // 返回從後端獲取的data
  } catch (error) {
    console.error('Error fetching user tickets:', error)
    throw error // 拋出錯誤以便上層處理
  }
}
