import { useRouter } from 'next/router'

const { createContext, useState, useEffect, useContext } = require('react')

const CountdownContext = createContext()

export const CountdownProvider = ({ children }) => {
  const [time, setTime] = useState(10 * 60)
  const [isStarted, setIsStarted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    let timer

    const handleRouterChange = (url) => {
      if (
        !url.includes('/ticket/concert/selectSeat') &&
        !url.includes('/ticket/concert/payment') &&
        !url.includes('/ticket/concert/finish') &&
        !url.includes('/ticket/musicFestival/selectSeat') &&
        !url.includes('/ticket/musicFestival/payment') &&
        !url.includes('/ticket/musicFestival/finish')
      ) {
        setTime(600) // 重置為10分鐘
        setIsStarted(false) // 停止計時器
      }
    }

    const handleTimer = () => {
      if (isStarted && time > 0) {
        timer = setInterval(() => {
          setTime((prevTime) => {
            if (prevTime <= 0) {
              clearInterval(timer)
              router.push('/Activity') // 時間到達0時跳轉頁面
              setTime(600) // 重置時間為10分鐘
              return 600
            }
            return prevTime - 1
          })
        }, 1000)
      } else {
        clearInterval(timer)
      }
    }

    handleTimer()

    router.events.on('routeChangeComplete', handleRouterChange)

    return () => {
      clearInterval(timer)
      router.events.off('routeChangeComplete', handleRouterChange)
    }
  }, [isStarted, time, router])

  return (
    <CountdownContext.Provider
      value={{ time, setTime, isStarted, setIsStarted }}
    >
      {children}
    </CountdownContext.Provider>
  )
}

export const useCountdown = () => useContext(CountdownContext)
