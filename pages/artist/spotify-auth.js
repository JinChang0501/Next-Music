import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const SpotifyAuth = () => {
  const [token, setToken] = useState(null)
  const router = useRouter()

  const handleLogin = () => {
    router.push('http://localhost:3005/login')
    // window.location.href = 'http://localhost:3005/login'
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {token ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">授權成功！</h2>
          <p className="mb-4">您已成功登入Spotify。</p>
          <button
            onClick={() => router.push('/')}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            返回首頁
          </button>
        </div>
      ) : (
        <button
          onClick={handleLogin}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          使用Spotify登入
        </button>
      )}
    </div>
  )
}

export default SpotifyAuth
