import React, { useState } from 'react'
import { BsGoogle } from 'react-icons/bs'
import { BsFillXCircleFill } from 'react-icons/bs'
//登入會用到
import { initUserData, useAuth } from '@/hooks/use-auth'
import { checkAuth, login, getUserById } from '@/services/user' //checkAuth logout
import toast, { Toaster } from 'react-hot-toast'

// 解析accessToken用的函式
const parseJwt = (token) => {
  const base64Payload = token.split('.')[1]
  const payload = Buffer.from(base64Payload, 'base64')
  return JSON.parse(payload.toString())
}

export default function Login({
  isVisible,
  onClose,
  handleWakeForgetPassword,
  updateLoginStatus,
  setWakeLogin,
}) {
  const [isActive, setIsActive] = useState(false)

  const handleRegisterClick = () => {
    setIsActive(true)
  }

  const handleLoginClick = () => {
    setIsActive(false)
  }

  const [user, setUser] = useState({ email: '', password: '' })

  // 登入後設定全域的會員資料用
  const { setAuth } = useAuth()

  // 輸入帳號 密碼用
  const handleFieldChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // 處理登入
  const handleLogin = async (e) => {
    e.preventDefault()
    const res = await login(user)

    console.log(res.data)

    if (res.data.status === 'success') {
      // 從JWT存取令牌中解析出會員資料
      // 注意JWT存取令牌中只有id, email, google_uid, line_uid在登入時可以得到
      const jwtUser = parseJwt(res.data.data.accessToken)
      console.log(jwtUser)

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
      } else {
        toast.error('登入後無法得到會員資料')
        // 這裡可以讓會員登出，因為這也算登入失敗，有可能會造成資料不統一
      }
    } else {
      toast.error(`登入失敗`)
    }
  }

  //處理檢查登入狀態
  const handleCheckAuth = async () => {
    const res = await checkAuth()

    console.log(res.data)

    if (res.data.status === 'success') {
      toast.success('已登入會員')
    } else {
      toast.error(`非會員身份`)
    }
  }

  if (!isVisible) return null

  return (
    <>
      <div className="modal-bgc">
        <div
          className={`custom-container ${
            isActive ? 'active' : ''
          }  modal-overlay`}
          id="container"
        >
          <button
            className="close-btn"
            onClick={() => {
              onClose()
              handleLoginClick()
            }}
          >
            <BsFillXCircleFill className="chr-h4" />
          </button>
          <div className="form-container sign-up">
            <form>
              <h1>註冊帳戶</h1>
              <div className="w-100">
                <label htmlFor="name">姓名:</label>
                <input
                  type="text"
                  placeholder="請輸入姓名"
                  id="name"
                  name="name"
                />
              </div>
              <div className="w-100">
                <label htmlFor="verifyCode">驗證碼:</label>
                <div className="d-flex flex-row align-item-center mb-2">
                  <div className="w-75">
                    <input
                      type="text"
                      placeholder="驗證碼"
                      id="verifyCode"
                      className="m-0"
                    />
                  </div>
                  <div>
                    <div className="w-25">
                      <button className="btn m-0 text-nowrap px-2">
                        (60)重發驗證碼
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100">
                <label htmlFor="passwords1">密碼:</label>
                <input
                  type="password"
                  placeholder="密碼"
                  id="passwords1"
                  name="passwords"
                />
              </div>
              <div className="w-100">
                <label htmlFor="passwords2">確認密碼:</label>
                <input
                  type="password"
                  placeholder="再次輸入密碼"
                  id="passwords2"
                  name="passwords"
                />
              </div>

              <button>點我註冊</button>
            </form>
          </div>
          <div className="form-container sign-in">
            <form>
              <h1 style={{ marginBottom: '20px' }}>登我入</h1>
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
                    handleCheckAuth()
                  }}
                />
              </div>

              <div className="w-100">
                <label htmlFor="password">密碼:</label>
                <input
                  type="password"
                  placeholder="請輸入密碼"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleFieldChange}
                />
              </div>
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
              <button className="w-50 chr-h5" onClick={handleLogin}>
                登入
              </button>
              <button className="w-50">
                <a href="#" className="icon">
                  <BsGoogle className="text-white" />
                </a>
              </button>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>歡迎回來!</h1>
                <p>輸入您的個人詳細資料以使用所有網站功能</p>
                <button
                  className="hidden"
                  onClick={handleLoginClick}
                  id="login"
                >
                  返回登入
                </button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>嗨，歡迎!</h1>
                <p>使用您的個人詳細資料註冊以使用所有網站功能</p>
                <button
                  className="hidden"
                  onClick={handleRegisterClick}
                  id="register"
                >
                  點我註冊
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
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
            width: 800px;
            max-width: 100%;
            min-height: 480px;
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
      {/* 土司訊息視窗用 */}
      <Toaster />
    </>
  )
}
