import React, { useEffect, useRef, useState } from 'react'
import { IoEyeSharp } from 'react-icons/io5'
import { IoEyeOffSharp } from 'react-icons/io5'
import toast, { Toaster } from 'react-hot-toast'
import { initUserData, useAuth } from '@/hooks/use-auth'
import { FcGoogle } from 'react-icons/fc'

import {
  checkAuth,
  login,
  getUserById,
  googleLogin,
  parseJwt,
} from '@/services/user' //checkAuth logout
import useFirebase from '@/hooks/use-firebase'
import DesktopWhiteNoIconBtnBlack from '../common/button/desktopWhiteButton/desktopWhiteNoIconBtnBlack'

export default function LoginForm({
  handleWakeForgetPassword,
  onClose,
  updateLoginStatus,
  setWakeLogin,
}) {
  const [showPassword, setShowPassword] = useState(false)
  // const [hasShownToast, setHasShownToast] = useState(false)
  const hasShownToast = useRef(false)
  const toggleShowPassword = (e) => {
    setShowPassword(!showPassword)
    e.preventDefault()
  }

  // 登入後設定全域的會員資料用
  const { auth, setAuth } = useAuth()
  // 登入表單
  const [user, setUser] = useState({ email: '', password: '' })
  // 錯誤訊息狀態
  const [loginErrors, setLoginErrors] = useState({
    email: '',
    password: '',
  })

  // 寄送Login Form
  const handleLoginForm = async (e) => {
    // 阻擋表單預設送出行為
    e.preventDefault()

    // 表單檢查 --- START
    // 建立一個新的錯誤物件
    const newLoginErrors = {
      email: '',
      password: '',
    }

    if (!user.email) {
      newLoginErrors.email = '信箱為必填'
    }

    if (!user.password) {
      newLoginErrors.password = '密碼為必填'
    }

    // 呈現錯誤訊息
    setLoginErrors(newLoginErrors)

    // 物件屬性值中有非空白字串時，代表有錯誤發生
    const hasErrors = Object.values(newLoginErrors).some((v) => v)

    // 有錯誤，不送到伺服器，跳出submit函式
    if (hasErrors) {
      return
    } else {
      const res = await login(user)

      console.log(res.data)

      if (res.data.status === 'success') {
        // 從JWT存取令牌中解析出會員資料
        // 注意JWT存取令牌中只有id, email, google_uid, line_uid在登入時可以得到
        const jwtUser = parseJwt(res.data.data.accessToken)
        console.log(jwtUser)

        const accessToken = res.data.data.accessToken
        // 存储令牌到 localStorage
        localStorage.setItem('accessToken', accessToken)

        const res1 = await getUserById(jwtUser.id)
        console.log(res1.data)

        if (res1.data.status === 'success') {
          // 只需要initUserData中的定義屬性值，詳見use-auth勾子
          const dbUser = res1.data.data.user
          const userData = { ...initUserData }

          for (const key in userData) {
            if (Object.hasOwn(dbUser, key)) {
              userData[key] = dbUser[key]
            }
          }

          // 設定到全域狀態中
          setAuth({
            isAuth: true,
            userData,
          })

          toast.success('已成功登入')
          updateLoginStatus(true)
          setWakeLogin(false)
          setUser({ email: '', password: '' })
        } else {
          toast.error('登入後無法得到會員資料')
          // 這裡可以讓會員登出，因為這也算登入失敗，有可能會造成資料不統一
        }
      } else {
        toast.error(`帳號或密碼錯誤`)
      }
    }
    // 表單檢查 --- END
  }
  // 輸入帳號 密碼用
  const handleFieldChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // 處理登入
  // const handleLogin = async (e) => {
  //   e.preventDefault()
  // }

  //Google登入
  // loginGoogleRedirect無callback，要改用initApp在頁面初次渲染後監聽google登入狀態
  const { loginGoogle, initApp } = useFirebase()
  // 這裡要設定initApp，讓這個頁面能監聽firebase的google登入狀態
  useEffect(() => {
    initApp(callbackGoogleLoginRedirect)
  }, [])

  // 處理google登入後，要向伺服器進行登入動作
  const callbackGoogleLoginRedirect = async (providerData) => {
    console.log(providerData)

    // 如果目前react(next)已經登入中，不需要再作登入動作
    if (auth.isAuth) return

    // 向伺服器進行登入動作
    const res = await googleLogin(providerData)

    console.log(res.data)

    if (res.data.status === 'success') {
      // 從JWT存取令牌中解析出會員資料
      // 注意JWT存取令牌中只有id, name, google_uid, line_uid在登入時可以得到
      const jwtUser = parseJwt(res.data.data.accessToken)
      // console.log(jwtUser)

      const accessToken = res.data.data.accessToken
      // 存储令牌到 localStorage
      localStorage.setItem('accessToken', accessToken)

      const res1 = await getUserById(jwtUser.id)
      //console.log(res1.data)

      if (res1.data.status === 'success') {
        // 只需要initUserData中的定義屬性值，詳見use-auth勾子
        const dbUser = res1.data.data.user
        const userData = { ...initUserData }

        for (const key in userData) {
          if (Object.hasOwn(dbUser, key)) {
            userData[key] = dbUser[key] || ''
          }
        }

        // 設定到全域狀態中
        setAuth({
          isAuth: true,
          userData,
        })

        if (!hasShownToast.current) {
          toast.success('已成功登入')
          hasShownToast.current = true
        }

        setWakeLogin(false)
      } else {
        toast.error('登入後無法得到會員資料')
        // 這裡可以讓會員登出，因為這也算登入失敗，有可能會造成資料不統一
      }
    } else {
      toast.error(`登入失敗`)
    }
  }

  const quickLogin = () => {
    setUser({ email: 'jin@test.com', password: '123456' })
  }
  return (
    <>
      <form onSubmit={handleLoginForm}>
        <h1 style={{ marginBottom: '20px' }}>
          <button className="bg-white text-black" onClick={quickLogin}>
            <div className="chb-h3">登入</div>
          </button>
        </h1>

        <div className="w-100">
          <label htmlFor="email">電子信箱:</label>
          <input
            type="email"
            placeholder="請輸入信箱"
            id="email"
            name="email"
            value={user.email}
            onChange={(e) => {
              handleFieldChange(e)
            }}
          />
        </div>
        <div className="col-12 error">{loginErrors.email}</div>
        <div className="w-100 mt-3">
          <label htmlFor="password">密碼:</label>
          <div className="d-flex">
            <div className="m-0 w-100">
              <input
                className="m-0"
                type={showPassword ? 'text' : 'password'}
                placeholder="密碼"
                id="password"
                name="password"
                value={user.password}
                onChange={handleFieldChange}
              />
            </div>
            <div className="align-items-center m-0">
              <button
                className="btn m-0 border-0 h-100 px-4"
                onClick={toggleShowPassword}
              >
                {showPassword ? (
                  <IoEyeSharp className="chr-h6" />
                ) : (
                  <IoEyeOffSharp className="chr-h6" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 error">{loginErrors.password}</div>
        <button
          type="button"
          className="forget-password-btn"
          onClick={() => {
            handleWakeForgetPassword()
            onClose()
          }}
        >
          忘記密碼?
        </button>
        <div className="w-50 mb-3">
          <DesktopWhiteNoIconBtnBlack
            text="登入"
            className="chb-h6 w-100 py-2"
            onClick={handleLoginForm}
          />
        </div>

        <div className="w-50">
          <DesktopWhiteNoIconBtnBlack
            type="button"
            text=<FcGoogle />
            className="chb-h5 w-100 py-2"
            onClick={() => loginGoogle()}
          />
        </div>
      </form>
      <style jsx>
        {`
          .error {
            color: red;
            font-size: 16px;
            height: 16px;
          }
          .modal-bgc {
            position: absolute;
            background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色 */
            width: 100%;
            height: 100%;
          }
          .modal-overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1080;
          }

          .custom-container .close-btn {
            position: absolute;
            padding: 0px;
            margin: 0px;
            top: 8px;

            right: 8px;
            color: red;
            background: none;
            border: none;
            z-index: 1081;
          }
          .custom-container .forget-password-btn {
            background: none;
            color: blue;
            font-size: 18px;
          }

          .custom-container {
            background-color: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
            position: relative;
            overflow: hidden;
            width: 850px;
            max-width: 100%;
            min-height: 580px;
          }

          .custom-container p {
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0.3px;
            margin: 20px 0;
          }

          .custom-container span {
            font-size: 12px;
          }

          .custom-container a {
            color: #333;
            font-size: 13px;
            text-decoration: none;
            margin: 15px 0 10px;
          }

          .custom-container button {
            background-color: #512da8;
            color: #fff;
            font-size: 12px;
            padding: 10px 45px;
            border: 1px solid transparent;

            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            margin-top: 10px;
            cursor: pointer;
          }

          .custom-container button.hidden {
            background-color: transparent;
            border-color: #fff;
          }

          .custom-container form {
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0 40px;
            height: 100%;
          }

          .btn-close {
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 1001; /* 确保按钮在所有内容的前面 */
          }

          .custom-container input {
            background-color: #eee;
            border: none;
            margin: 8px 0;
            padding: 10px 15px;
            font-size: 13px;

            width: 100%;
            outline: none;
          }

          .form-container {
            position: absolute;
            top: 0;
            height: 100%;
            transition: all 0.6s ease-in-out;
          }

          .sign-in {
            left: 0;
            width: 50%;
            z-index: 2;
          }

          .custom-container.active .sign-in {
            transform: translateX(100%);
          }

          .sign-up {
            left: 0;
            width: 50%;
            opacity: 0;
            z-index: 1;
          }

          .custom-container.active .sign-up {
            transform: translateX(100%);
            opacity: 1;
            z-index: 5;
            animation: move 0.6s;
          }

          @keyframes move {
            0%,
            49.99% {
              opacity: 0;
              z-index: 1;
            }
            50%,
            100% {
              opacity: 1;
              z-index: 5;
            }
          }

          .social-icons {
            margin: 20px 0;
          }

          .social-icons a {
            border: 1px solid #ccc;

            display: inline-flex;
            justify-content: center;
            align-items: center;
            margin: 0 3px;
            width: 40px;
            height: 40px;
          }

          .toggle-container {
            position: absolute;
            top: 0;
            left: 50%;
            width: 50%;
            height: 100%;
            overflow: hidden;
            transition: all 0.6s ease-in-out;

            z-index: 1000;
          }

          .custom-container.active .toggle-container {
            transform: translateX(-100%);
          }

          .toggle {
            background-color: #512da8;
            height: 100%;
            background: linear-gradient(to right, #5c6bc0, #512da8);
            color: #fff;
            position: relative;
            left: -100%;
            height: 100%;
            width: 200%;
            transform: translateX(0);
            transition: all 0.6s ease-in-out;
          }

          .custom-container.active .toggle {
            transform: translateX(50%);
          }

          .toggle-panel {
            position: absolute;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0 30px;
            text-align: center;
            top: 0;
            transform: translateX(0);
            transition: all 0.6s ease-in-out;
          }

          .toggle-left {
            transform: translateX(-200%);
          }

          .custom-container.active .toggle-left {
            transform: translateX(0);
          }

          .toggle-right {
            right: 0;
            transform: translateX(0);
          }

          .custom-container.active .toggle-right {
            transform: translateX(200%);
          }
        `}
      </style>
    </>
  )
}
