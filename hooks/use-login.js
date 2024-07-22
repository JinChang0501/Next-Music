import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const LoginContext = createContext(null)

export default function LoginProvider({ children }) {
  const router = useRouter()
  const [wakeLogin, setWakeLogin] = useState(false) //喚醒登入面板
  const [wakeForgetPassword, setWakeForgetPassword] = useState(false)
  // 登入面板左右顯示 Start
  const [isActive, setIsActive] = useState(false)

  const handleRegisterClick = () => {
    setIsActive(true)
  }

  const handleLoginClick = () => {
    setIsActive(false)
  }
  //登入面板左右顯示 End
  const handleWakeLogin = () => {
    setWakeLogin(true)
  }

  const handleGotoMember = () => {
    router.push('/member/profile')
  }

  const handleWakeRegister = () => {
    setWakeLogin(true)
    setIsActive(true)
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
      router.pathname === '/cart/payment'
    ) {
      router.back() // 如果路徑是 /product，才執行返回上一頁
    }
  }

  return (
    <>
      <LoginContext.Provider
        value={{
          isActive,
          wakeLogin,
          wakeForgetPassword,
          setWakeLogin,
          handleWakeLogin,
          handleWakeForgetPassword,
          handleCloseForgetPassword,
          handleCloseLogin,
          handleGotoMember,
          setIsActive,
          handleWakeRegister,
          handleLoginClick,
          handleRegisterClick,
        }}
      >
        {children}
      </LoginContext.Provider>
    </>
  )
}

export const useLogin = () => useContext(LoginContext)
