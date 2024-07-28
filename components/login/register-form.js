import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { IoEyeSharp } from 'react-icons/io5'
import { IoEyeOffSharp } from 'react-icons/io5'

export default function RegisterForm({ setIsActive }) {
  const [userRegister, setUserRegister] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  // 錯誤訊息狀態
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  // checkbox 呈現密碼用
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const toggleShowPassword = (e) => {
    setShowPassword(!showPassword)
    e.preventDefault()
  }

  const toggleShowConfirmPassword = (e) => {
    setShowConfirmPassword(!showConfirmPassword)
    e.preventDefault()
  }

  // 多欄位共用事件函式
  const handleRFieldChange = (e) => {
    console.log(e.target.name, e.target.value, e.target.type)

    setUserRegister({ ...userRegister, [e.target.name]: e.target.value })

    // ES6特性: 計算得來的屬性名稱(computed property names)
    // [e.target.name]: e.target.value
    // ^^^^^^^^^^^^^^^ 這樣可以動態的設定物件的屬性名稱
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E5%90%8D
  }

  //快速輸入註冊資訊
  const insertRegisterData = () => {
    const newData = {
      name: '派大星',
      email: 'iamjin910501@gmail.com',
      password: 'P@ssw0rd',
      confirmPassword: 'P@ssw0rd',
    }
    setUserRegister(newData)
  }

  const handleSubmit = async (e) => {
    // 阻擋表單預設送出行為
    e.preventDefault()

    // 表單檢查 --- START
    // 建立一個新的錯誤物件
    const newErrors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }

    if (!userRegister.name) {
      newErrors.name = '姓名為必填'
    }
    if (!userRegister.email) {
      newErrors.email = 'email為必填'
    }

    if (userRegister.password !== userRegister.confirmPassword) {
      newErrors.password = '密碼與確認密碼需要一致'
      newErrors.confirmPassword = '密碼與確認密碼需要一致'
    }

    if (!userRegister.password) {
      newErrors.password = '密碼為必填'
    }

    if (!userRegister.confirmPassword) {
      newErrors.confirmPassword = '確認密碼為必填'
    }

    // 呈現錯誤訊息
    setErrors(newErrors)

    // 物件屬性值中有非空白字串時，代表有錯誤發生
    const hasErrors = Object.values(newErrors).some((v) => v)

    // 有錯誤，不送到伺服器，跳出submit函式
    if (hasErrors) {
      return
    }
    // 表單檢查 --- END

    // 最後檢查完全沒問題才送到伺服器(ajax/fetch)
    const res = await fetch('http://localhost:3005/api/members/raw-sql', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userRegister),
    })

    const data = await res.json()

    console.log(data)

    // alert('送到伺服器')
    toast.success('註冊成功!')

    //註冊完後表單清空
    setUserRegister({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
    //讓面板回去登入
    setIsActive(false)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button
          className="bg-transparent text-black"
          onClick={(e) => {
            e.preventDefault()
            insertRegisterData()
          }}
        >
          <div className="chb-h4">註冊帳戶</div>
        </button>

        <div className="w-100">
          <label htmlFor="name">姓名:</label>
          <input
            className="mb-0"
            type="text"
            placeholder="請輸入姓名"
            id="name"
            name="name"
            value={userRegister.name}
            onChange={handleRFieldChange}
          />
        </div>
        <div className="col-12 error">{errors.name}</div>

        <div className="w-100 mt-3">
          <label htmlFor="email">信箱:</label>
          <input
            type="text"
            className="mb-0"
            placeholder="輸入信箱"
            id="email"
            name="email"
            value={userRegister.email}
            onChange={handleRFieldChange}
          />
        </div>
        <div className="col-12 error"> {errors.email}</div>

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
                value={userRegister.password}
                onChange={handleRFieldChange}
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
        <div className="col-12 error">{errors.password}</div>
        {/* 再次輸入密碼 */}
        <div className="w-100 mt-3">
          <label htmlFor="confirmPassword">再次輸入密碼:</label>
          <div className="d-flex">
            <div className="m-0 w-100">
              <input
                className="m-0"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="再次輸入密碼"
                id="confirmPassword"
                name="confirmPassword"
                value={userRegister.confirmPassword}
                onChange={handleRFieldChange}
              />
            </div>
            <div className="align-items-center m-0">
              <button
                className="btn m-0 border-0 h-100 px-4"
                onClick={toggleShowConfirmPassword}
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
        <div className="col-12 error">{errors.confirmPassword}</div>

        <button type="submit" className="mt-3">
          點我註冊
        </button>
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
