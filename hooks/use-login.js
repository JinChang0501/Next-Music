import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const LoginContext = createContext(null)

export default function LoginProvider({ children }) {
  const router = useRouter()
  const [wakeLogin, setWakeLogin] = useState(false) //喚醒登入面板
  const [wakeForgetPassword, setWakeForgetPassword] = useState(false)

  const handleWakeLogin = () => {
    setWakeLogin(true)
  }

  const handleWakeForgetPassword = () => {
    setWakeForgetPassword(true)
  }

  const handleCloseForgetPassword = () => {
    setWakeForgetPassword(false)
  }

  const handleCloseLogin = () => {
    setWakeLogin(false)
    if (
      router.pathname === '/member/profile' ||
      router.pathname === '/product'
    ) {
      router.back() // 如果路徑是 /product，才執行返回上一頁
    }
  }

  return (
    <>
      <LoginContext.Provider
        value={{
          wakeLogin,
          wakeForgetPassword,
          setWakeLogin,
          handleWakeLogin,
          handleWakeForgetPassword,
          handleCloseForgetPassword,
          handleCloseLogin,
        }}
      >
        {children}
      </LoginContext.Provider>
    </>
  )
}

export const useLogin = () => useContext(LoginContext)