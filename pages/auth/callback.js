import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Callback() {
  const router = useRouter()

  useEffect(() => {
    const { access_token, refresh_token } = router.query

    if (access_token && refresh_token) {
      // 將令牌存儲到 localStorage
      localStorage.setItem('spotify_access_token', access_token)
      localStorage.setItem('spotify_refresh_token', refresh_token)

      // 重定向到首頁
      router.push('/')
    }
  }, [router.query])

  return <div>處理中...</div>
}
