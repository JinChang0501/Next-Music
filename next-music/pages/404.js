import { useEffect } from 'react'
export default function Custom404() {
  useEffect(() => {
    document.title = '404找不到頁面'
  }, [])
  return <h1>404 - Page Not Found</h1>
}
