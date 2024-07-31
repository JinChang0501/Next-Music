import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { BsFillXCircleFill } from 'react-icons/bs'
import toast, { Toaster } from 'react-hot-toast'
import { requestOtpToken, resetPassword } from '@/services/user'
import useInterval from '@/hooks/use-interval'
import DesktopBlackNoIconBtnPurple from '../common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import { IoEyeSharp } from 'react-icons/io5'
import { IoEyeOffSharp } from 'react-icons/io5'

export default function ForgetPassword({
  isVisible,
  onClose,
  handleWakeLogin,
}) {
  const [isActive, setIsActive] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const router = useRouter()

  const handleLeftClick = () => {
    setIsActive(false)
  }

  const backToLoginPage = () => {
    onClose()
    handleWakeLogin()
  }

  const handleShowPassword = (e) => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }

  const handleShowConfirmPassword = (e) => {
    e.preventDefault()
    setShowConfirmPassword(!showConfirmPassword)
  }

  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')

  // 清空表單
  const clearForm = () => {
    setEmail('')
    setToken('')
    setPassword('')
  }

  const [disableBtn, setDisableBtn] = useState(false)

  // 倒數計時 countdown use
  const [count, setCount] = useState(60) // 60s
  const [delay, setDelay] = useState(null) // delay=null可以停止, delay是數字時會開始倒數

  // 倒數計時 countdown use
  useInterval(() => {
    setCount(count - 1)
  }, delay)
  // 倒數計時 countdown use
  useEffect(() => {
    if (count <= 0) {
      setDelay(null)
      setDisableBtn(false)
    }
  }, [count])

  // 處理要求一次性驗証碼用
  const handleRequestOtpToken = async () => {
    if (delay !== null) {
      toast.error('錯誤 - 60s內無法重新獲得驗証碼')
      return
    }

    const res = await requestOtpToken(email)

    // 除錯用
    console.log(res.data)

    if (res.data.status === 'success') {
      toast.success('資訊 - 驗証碼已寄送到電子郵件中')
      setCount(60) // 倒數 60秒
      setDelay(1000) // 每 1000ms = 1s 減1
      setDisableBtn(true)
    } else {
      toast.error(`錯誤 - ${res.data.message}`)
    }
  }

  const insertEmail = (e) => {
    e.preventDefault()
    setEmail('iamjin910501@gmail.com')
  }
  // 處理重設密碼用
  const handleResetPassword = async () => {
    if (!email) {
      toast.error('未輸入Email')
      return
    }
    const res = await resetPassword(email, password, token)
    // 除錯用
    console.log(res.data)

    if (res.data.status === 'success') {
      toast.success('資訊 - 密碼已成功修改')
    } else {
      toast.error(`錯誤 - ${res.data.message}`)
    }
    clearForm()
    backToLoginPage()
    handleWakeLogin()
  }

  if (!isVisible) return null

  return (
    <>
      <div className="modal-bgc">
        <div
          className={`custom-container ${
            isActive ? 'active' : ''
          } modal-overlay`}
          id="container"
        >
          <button
            className="close-btn"
            onClick={() => {
              onClose()
              handleLeftClick()
            }}
          >
            <BsFillXCircleFill className="chr-h4" />
          </button>

          <div className="form-container sign-in">
            <form>
              <button className="bg-transparent" onClick={insertEmail}>
                <div className="chb-h3 text-black">忘記密碼</div>
              </button>
              {/* 電子信箱 */}
              <div className="w-100 mt-3">
                <label htmlFor="email">電子信箱:</label>
                <input
                  type="text"
                  className="mb-0"
                  placeholder="輸入信箱"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* 驗證碼 */}
              <div className="w-100 mt-3">
                <label htmlFor="token">驗證碼:</label>
                <div className="d-flex align-item-center">
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="驗證碼"
                      id="token"
                      className="m-0"
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                    />
                  </div>

                  <div>
                    <button
                      type="button"
                      className="text-nowrap m-0 h-100 px-3"
                      onClick={handleRequestOtpToken}
                      disabled={disableBtn}
                    >
                      {delay ? count + '秒後重試' : '取得驗証碼'}
                    </button>
                  </div>
                </div>
              </div>

              {/* 新密碼*/}
              <div className="w-100 mt-3">
                <label htmlFor="password">新密碼:</label>
                <div className="d-flex">
                  <div className="m-0 w-100">
                    <input
                      className="m-0"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="新密碼"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="align-items-center m-0">
                    <button
                      className="m-0 border-0 h-100 px-4 bg-eee text-purple1"
                      onClick={handleShowPassword}
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

              {/* 再次輸入新密碼 */}
              <div className="w-100 mt-3">
                <label htmlFor="confirmPassword">再次輸入密碼:</label>
                <div className="d-flex">
                  <div className="m-0 w-100">
                    <input
                      className="m-0"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="再次輸入新密碼"
                      id="confirmPassword"
                    />
                  </div>
                  <div className="align-items-center m-0">
                    <button
                      className="m-0 border-0 h-100 px-4 bg-eee text-purple1"
                      onClick={handleShowConfirmPassword}
                    >
                      {showConfirmPassword ? (
                        <IoEyeSharp className="chr-h6" />
                      ) : (
                        <IoEyeOffSharp className="chr-h6" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* --------------------------------------------------- */}

              <button
                type="button"
                className="mt-4"
                onClick={handleResetPassword}
              >
                <div className="chb-h7">送出</div>
              </button>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-right">
                <div className="chb-h3 mb-3">沒關係!</div>
                <div className="chr-h6 mb-1">我們都有忘記的時候，</div>
                <div className="chr-h6 mb-4">我們一起把它救回來吧!!</div>
                {/* <DesktopBlackNoIconBtnPurple
                  onClick={backToLoginPage}
                  text="返回登入"
                /> */}
                <button
                  className="hidden"
                  onClick={backToLoginPage}
                  id="register"
                >
                  返回登入
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
      <Toaster />
    </>
  )
}
