import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { BsFillXCircleFill } from 'react-icons/bs'
import toast, { Toaster } from 'react-hot-toast'
import { requestOtpToken, resetPassword } from '@/services/user'
import useInterval from '@/hooks/use-interval'
import DesktopBlackNoIconBtnPurple from '../common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import DesktopBlackNoIconBtnBlack from '../common/button/desktopBlackButton/desktopBlackNoIconBtnBlack'

export default function ForgetPassword({ isVisible, onClose }) {
  const [isActive, setIsActive] = useState(false)
  const router = useRouter()

  const handleLeftClick = () => {
    setIsActive(false)
  }

  const backToLoginPage = () => {
    onClose()
  }

  const [userForgetPassword, setUserForgetPassword] = useState({
    email: '',
    verifyCode: '',
  })

  // 錯誤訊息狀態
  const [errors, setErrors] = useState({
    email: '',
    verifyCode: '',
    password: '',
    confirmPassword: '',
    samePassword: '',
  })

  // 多欄位共用事件函式
  const handleForgetFieldChange = (e) => {
    console.log(e.target.name, e.target.value, e.target.type)

    setUserForgetPassword({
      ...userForgetPassword,
      [e.target.name]: e.target.value,
    })

    // ES6特性: 計算得來的屬性名稱(computed property names)
    // [e.target.name]: e.target.value
    // ^^^^^^^^^^^^^^^ 這樣可以動態的設定物件的屬性名稱
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E5%90%8D
  }

  const handleForgetForm = async (e) => {
    // 阻擋表單預設送出行為
    e.preventDefault()

    // 表單檢查 --- START
    // 建立一個新的錯誤物件
    const newErrors = {
      email: '',
      verifyCode: '',
    }

    if (!userForgetPassword.email) {
      newErrors.email = '信箱為必填'
    }

    if (!userForgetPassword.verifyCode) {
      newErrors.verifyCode = '驗證碼為必填'
    }

    if (!userForgetPassword.password) {
      newErrors.password = '密碼為必填'
    }

    if (!userForgetPassword.confirmPassword) {
      newErrors.confirmPassword = '再次輸入密碼為必填'
    }

    // if (!userForgetPassword.confirmPassword !== userForgetPassword.password) {
    //   newErrors.samePassword = '新密碼需與再次輸入密碼相同'
    // }

    // 呈現錯誤訊息
    setErrors(newErrors)

    // 物件屬性值中有非空白字串時，代表有錯誤發生
    const hasErrors = Object.values(newErrors).some((v) => v)

    // 有錯誤，不送到伺服器，跳出submit函式
    if (hasErrors) {
      return
    }
    // 表單檢查 --- END
  }

  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('')
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

  // 處理重設密碼用
  const handleResetPassword = async () => {
    const res = await resetPassword(email, password, token)
    // 除錯用
    console.log(res.data)

    if (res.data.status === 'success') {
      toast.success('資訊 - 密碼已成功修改')
    } else {
      toast.error(`錯誤 - ${res.data.message}`)
    }
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
            {/* onSubmit={handleNextStep} */}
            <form onSubmit={handleForgetForm}>
              <div className="chb-h3">忘記密碼</div>
              {/* 電子信箱 */}
              <div className="w-100 mt-3">
                <label htmlFor="email">電子信箱:</label>
                <input
                  type="text"
                  className="mb-0"
                  placeholder="輸入信箱"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-12 error"> {errors.email}</div>

              {/* 驗證碼 */}
              <div className="w-100 mt-3">
                <label htmlFor="verifyCode">驗證碼:</label>
                <div className="d-flex flex-row align-item-center">
                  <div className="w-75">
                    <input
                      type="text"
                      placeholder="驗證碼"
                      id="verifyCode"
                      className="m-0"
                      name="verifyCode"
                      value={userForgetPassword.verifyCode}
                      onChange={handleForgetFieldChange}
                    />
                  </div>
                  <div>
                    <div className="w-25">
                      {/* <button className="btn m-0 text-nowrap px-2">
                        (60)重發驗證碼
                      </button> */}
                      <button
                        className="m-0 text-nowrap"
                        onClick={handleRequestOtpToken}
                        disabled={disableBtn}
                      >
                        {delay
                          ? count + '秒後可以再次取得驗証碼'
                          : '取得驗証碼'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 error mb-3"> {errors.verifyCode}</div>

              {/* 新密碼*/}
              <div className="w-100 mt-1">
                <label htmlFor="password">新密碼:</label>
                <input
                  type="password"
                  placeholder="輸入新密碼"
                  className="mb-0"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="col-12 error mb-2">{errors.password}</div>
              <div className="col-12 error"> {errors.samePassword}</div>

              {/* 再次輸入新密碼 */}
              <div className="w-100 mt-1">
                <label htmlFor="confirmPassword">再次輸入新密碼:</label>
                <input
                  type="password"
                  className="mb-0"
                  placeholder="輸入信箱"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={userForgetPassword.confirmPassword}
                  onChange={handleForgetFieldChange}
                />
              </div>
              <div className="col-12 error">{errors.confirmPassword}</div>
              <div className="col-12 error">{errors.samePassword}</div>

              {/* --------------------------------------------------- */}

              <button className="mt-2" onClick={handleResetPassword}>
                送出
              </button>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-right">
                <div className="chb-h3 mb-3">沒關係!</div>
                <div className="chr-h6 mb-1">我們都有忘記的時候，</div>
                <div className="chr-h6 mb-5">我們一起把它救回來吧!!</div>
                <DesktopBlackNoIconBtnPurple onClick={backToLoginPage} />
              </div>
            </div>
          </div>
        </div>
      </div>
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
