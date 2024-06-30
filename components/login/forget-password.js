import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { BsFillXCircleFill } from 'react-icons/bs'

export default function ForgetPassword({ isVisible, onClose }) {
  const [isActive, setIsActive] = useState(false)
  const router = useRouter()

  const handleRegisterClick = () => {
    setIsActive(true)
  }

  const handleLeftClick = () => {
    setIsActive(false)
  }

  const backToLoginPage = () => {
    router.push('/login')
  }

  const handleNextStep = (e) => {
    e.preventDefault() // 阻止表單默認行為
    setIsActive(true)
    // router.push('/login/reset-password')

    // 導航到重設密碼頁面
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
          <div className="form-container sign-up">
            <form>
              <h1 style={{ marginBottom: '20px' }}>重設密碼</h1>
              <div className="w-100">
                <label htmlFor="passwords1">新密碼:</label>
                <input
                  type="password"
                  placeholder="輸入新密碼"
                  id="passwords1"
                  name="passwords"
                />
              </div>
              <div className="w-100">
                <label htmlFor="passwordw2">再次輸入新密碼:</label>
                <input
                  type="password"
                  placeholder="再次輸入新密碼"
                  id="passwordw2"
                  name="passwords"
                />
              </div>
              {/* <Link href="/login/forget-password">忘記密碼?</Link> */}
              <button className="mt-5">更新</button>
            </form>
          </div>
          <div className="form-container sign-in">
            {/* onSubmit={handleNextStep} */}
            <form>
              <h1 style={{ marginBottom: '20px' }}>忘記密碼</h1>
              <div className="w-100">
                <label htmlFor="email">電子信箱:</label>
                <input
                  type="email"
                  placeholder="輸入註冊信箱"
                  id="email"
                  name="email"
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
              {/* <a href="#">忘記密碼?</a> */}
              {/* <button className="mt-5">下一步</button> */}{' '}
              <button className="mt-5" onClick={handleNextStep} id="register">
                下一步
              </button>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>開始重設密碼吧!</h1>
                <p>更新完成後將跳轉回登入頁面，再請重新登入~~</p>
                <button className="hidden" onClick={handleLeftClick} id="login">
                  返回登入
                </button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>沒關係!</h1>
                <p>我們都有忘記的時候，我們一起把它救回來吧!!</p>
                {/* <button
                className="hidden"
                onClick={handleRegisterClick}
                id="register"
              >
                重設密碼
              </button> */}
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
