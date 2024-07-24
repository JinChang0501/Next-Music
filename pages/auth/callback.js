import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Callback() {
  const router = useRouter()

  useEffect(() => {
    // const { access_token, refresh_token } = router.query
    // 使用 window.location.hash 來獲取 URL fragment
    const hash = window.location.hash.substring(1)
    const params = new URLSearchParams(hash)

    const access_token = params.get('access_token')
    const refresh_token = params.get('refresh_token')

    if (access_token && refresh_token) {
      // 將令牌存儲到 localStorage
      localStorage.setItem('spotify_access_token', access_token)
      localStorage.setItem('spotify_refresh_token', refresh_token)

      // 重定向到 音樂人 頁面
      router.push('/artist')
    }
  }, [router.query])

  return <div>處理中...</div>
}
