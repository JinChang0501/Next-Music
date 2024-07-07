import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './default.module.css'
import { BsPersonCircle, BsBell, BsCart } from 'react-icons/bs'
import { useRouter } from 'next/router'
import Login from '@/components/login/login'
import ForgetPassword from '@/components/login/forget-password'

//登入用
import { initUserData, useAuth } from '@/hooks/use-auth'
import { login, logout, getUserById, checkAuth } from '@/services/user' //checkAuth
import toast, { Toaster } from 'react-hot-toast'

export default function Nav() {
  const [wakeLogin, setWakeLogin] = useState(false) //喚醒登入面板
  const [wakeForgetPassword, setWakeForgetPassword] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // 這裡要接Login元件傳回來的狀態

  // 登入後設定全域的會員資料用
  const { auth, setAuth } = useAuth()
  const router = useRouter()

  const handleWakeLogin = () => {
    setWakeLogin(true)
  }

  const handleCloseLogin = () => {
    setWakeLogin(false)
  }

  const handleWakeForgetPassword = () => {
    setWakeForgetPassword(true)
  }

  const handleCloseForgetPassword = () => {
    setWakeForgetPassword(false)
  }

  // 更新登入狀態
  const updateLoginStatus = (loggedIn) => {
    setIsLoggedIn(loggedIn)
  }

  //處理登出
  const handleLogout = async () => {
    const res = await logout()

    console.log(res.data)

    // 成功登出個回復初始會員狀態
    if (res.data.status === 'success') {
      toast.success('已成功登出')
      updateLoginStatus(false)
      router.push('/')

      setAuth({
        isAuth: false,
        userData: initUserData,
      })
    } else {
      toast.error(`登出失敗`)
    }
  }
  // if (isLoggedIn) {
  //   setWakeLogin(false)
  // }

  // 登入頁路由
  const loginRoute = '/test/user'
  // 隱私頁面路由，未登入時會，檢查後跳轉至登入頁
  const protectedRoutes = [
    '/test/user/status',
    '/test/user/profile',
    '/test/user/profile-password',
  ]

  // 檢查會員認証用
  // 每次重新到網站中，或重新整理，都會執行這個函式，用於向伺服器查詢取回原本登入會員的資料
  const handleCheckAuth = async () => {
    const res = await checkAuth()

    // 伺服器api成功的回應為 { status:'success', data:{ user } }
    if (res.data.status === 'success') {
      // 只需要initUserData的定義屬性值
      const dbUser = res.data.data.user
      const userData = { ...initUserData }

      for (const key in userData) {
        if (Object.hasOwn(dbUser, key)) {
          userData[key] = dbUser[key] || ''
        }
      }
      // 設到全域狀態中
      setAuth({ isAuth: true, userData })
    } else {
      console.warn(res.data)

      // 在這裡實作隱私頁面路由的跳轉
      if (protectedRoutes.includes(router.pathname)) {
        router.push(loginRoute)
      }
    }
  }

  //didMount(初次渲染)後，向伺服器要求檢查會員是否登入中
  useEffect(() => {
    if (router.isReady && !auth.isAuth) {
      handleCheckAuth()
    }
    // 下面加入router.pathname，是為了要在向伺服器檢查後，
    // 如果有比對到是隱私路由，就執行跳轉到登入頁面工作
    // 注意有可能會造成向伺服器要求多次，此為簡單的實作範例
    // eslint-disable-next-line
  }, [router.isReady, router.pathname])

  // 同步 isLoggedIn 狀態與 auth.isAuth
  useEffect(() => {
    setIsLoggedIn(auth.isAuth)
  }, [auth.isAuth])

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        aria-label="Eighth navbar example"
        style={{ borderBottom: '1px solid var(--Primary-03, #DBD7FF)' }}
      >
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand" href="/">
            <img src="https://i.postimg.cc/ZnMnqMpt/makin-Logo.png" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* 分頁連結 */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link eng-p"
                  aria-current="page"
                  href="/activity"
                >
                  演出活動
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link eng-p" href="/product">
                  周邊商城
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link eng-p" href="/artist">
                  音樂人
                </Link>
              </li>
            </ul>
            {/* 右方icon */}
            <ul
              className={`navbar-nav d-flex flex-row ms-auto mb-2 mb-lg-0 ${styles['icon-lg-size']}`}
            >
              <li className={`me-3 me-md-1`}>
                <Link href="#" className="nav-link">
                  <BsCart />
                </Link>
              </li>
              <li className={`me-3 me-md-1 dropdown`}>
                <Link
                  className="nav-link"
                  href="#"
                  id="navbarDropdown01"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsBell />
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-dark dropdown-menu-end"
                  aria-labelledby="navbarDropdown01"
                >
                  <li>
                    <Link className="dropdown-item" href="#">
                      通知1
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      通知2
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={`me-3 me-md-1 dropdown`}>
                <Link
                  className="nav-link"
                  href="#"
                  id="navbarDropdown02"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsPersonCircle />
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-dark dropdown-menu-end"
                  aria-labelledby="navbarDropdown02"
                >
                  {isLoggedIn ? (
                    <>
                      <li>
                        <Link className="dropdown-item" href="/member/account">
                          會員中心
                        </Link>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
                          登出
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <div className={`${styles['mouse-cursor']}`}>
                          <button
                            className="dropdown-item"
                            onClick={handleWakeLogin}
                          >
                            登入
                          </button>
                        </div>
                      </li>
                      <li>
                        <div className={`${styles['mouse-cursor']}`}>
                          <button
                            className="dropdown-item"
                            onClick={handleWakeLogin}
                          >
                            註冊
                          </button>
                        </div>
                      </li>
                    </>
                  )}
                  {/* <div className={`${styles['mouse-cursor']}`}>
                    <button className="dropdown-item" onClick={handleWakeLogin}>
                      登入
                    </button>
                  </div>

                  <li>
                    <div className={`${styles['mouse-cursor']}`}>
                      <button
                        className="dropdown-item"
                        onClick={handleWakeLogin}
                      >
                        註冊
                      </button>
                    </div> */}
                  {/* <button
                      className="btn btn-primary"
                      onClick={handleRegisterClick}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      會員中心
                    </button>
                    <LoginModal
                      isActive={isActive}
                      handleRegisterClick={handleRegisterClick}
                      handleLoginClick={handleLoginClick}
                    /> */}
                  {/* </li> */}
                  {/* <li> */}
                  {/* <Link className="dropdown-item" href="#">
                      登出
                    </Link> */}
                  {/* </li> */}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Login
        isVisible={wakeLogin}
        onClose={handleCloseLogin}
        handleWakeForgetPassword={handleWakeForgetPassword}
        updateLoginStatus={updateLoginStatus}
        setWakeLogin={setWakeLogin}
      />
      <ForgetPassword
        isVisible={wakeForgetPassword}
        onClose={handleCloseForgetPassword}
      />
      <Toaster />
    </>
  )
}
