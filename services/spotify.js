import { API_SPOTIFY, token } from '@/configs/spotify-api'

// 單個藝人的熱門歌曲
export const getTopTracks = async (id) => {
  try {
    const res = await fetch(`${API_SPOTIFY}/v1/artists/${id}/top-tracks`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const resData = await res.json()
    return resData
  } catch (error) {
    console.error('無法獲取熱門歌曲', error)
    throw error
  }
}

// 多個藝人資訊 //想一下有更好寫法嗎？
export const getArtists = async (id1, id2, id3, id4, id5) => {
  try {
    const res = await fetch(
      `${API_SPOTIFY}/v1/artists?ids=${id1},${id2},${id3},${id4},${id5}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    const data = await res.json()
    return data
  } catch (error) {
    console.error('無法獲取多筆藝人資訊', error)
    throw error
  }
}

// 單個藝人資訊
export const getArtist = async (id) => {
  try {
    const res = await fetch(`${API_SPOTIFY}/v1/artists/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error('無法獲取單個藝人資訊', error)
    throw error
  }
}
