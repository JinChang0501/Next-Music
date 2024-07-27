import useFirebase from '@/hooks/use-firebase'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './default.module.css'
import { BsPersonCircle, BsBell, BsCart } from 'react-icons/bs'
import { useRouter } from 'next/router'
import Login from '@/components/login/login'
import ForgetPassword from '@/components/login/forget-password'
import { useLogin } from '@/hooks/use-login'
//登入用
import { initUserData, useAuth } from '@/hooks/use-auth'
import {
  login,
  logout,
  getUserById,
  checkAuth,
  getUserPic,
} from '@/services/user' //checkAuth
import toast, { Toaster } from 'react-hot-toast'
// 購物車
import { Badge } from 'rsuite'
import { useTotal } from '@/hooks/product/use-Total'
import { API_SERVER } from '@/configs/api-path'
import { useRefresh } from '@/hooks/useRefresh'
import PreviewUploadImage from '@/components/member/desktop-layout/preview-upload-image'

export default function Nav() {
  //
  const {
    wakeLogin,
    wakeForgetPassword,
    setWakeLogin,
    handleWakeLogin,
    handleWakeForgetPassword,
    handleCloseForgetPassword,
    handleCloseLogin,
    handleWakeRegister,
  } = useLogin()
  //
  //yun
  const { totalQty, setTotalQty } = useTotal()
  const [isLoggedIn, setIsLoggedIn] = useState(false) // 這裡要接Login元件傳回來的狀態
  const router = useRouter()
  const { logoutFirebase, loginGoogleRedirect, initApp } = useFirebase()
  const [memberPicData, setMemberPicData] = useState('')
  // 登入後設定全域的會員資料用
  const { auth, setAuth } = useAuth()

  const { newFileName, setNewFileName, update, setUpdate } = useRefresh()

  // 更新登入狀態
  const updateLoginStatus = (loggedIn) => {
    setIsLoggedIn(loggedIn)
  }

  //處理登出
  const handleLogout = async () => {
    logoutFirebase()
    localStorage.removeItem('makin-cart')
    setNewFileName('')
    setUpdate(false)
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

  useEffect(() => {
    if (auth.isAuth) {
      const getUserData = async () => {
        const res = await getUserPic()
        console.log('----------------------')
        console.log(res)
        console.log(res.data)

        if (res.status === 'success') {
          // 以下為同步化目前後端資料庫資料，與這裡定義的初始化會員資料物件的資料
          console.log(res.data.result)
          //頭像
          // console.log(res.data.result[0].avatar)
          const memberPic = res.data.result[0].avatar
          console.log(memberPic)
          setMemberPicData(memberPic)
          // 設定到狀態中

          console.log('會員頭像載入成功')
        } else {
          console.log(`會員頭像載入失敗`)
        }
      }
      getUserData()
      console.log('這是執行getUserData()')
    } else return
  }, [auth.isAuth])

  // 同步 isLoggedIn 狀態與 auth.isAuth
  useEffect(() => {
    setIsLoggedIn(auth.isAuth)
  }, [auth.isAuth])

  useEffect(() => {
    console.log('router')
  }, [auth.isAuth, router])
  // 直接從 localStorage 獲取購物車數據並更新 totalQty
  useEffect(() => {
    const cartData = localStorage.getItem('makin-cart');
    const cart = JSON.parse(cartData) || [];
    const qty = cart.reduce((total, item) => total + item.quantity, 0);
    setTotalQty(qty);
  }, []);
  

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
            <img src="https://i.postimg.cc/zX9tnq1L/makin-Logo-1.png" />
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
                  href="/Activity"
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
                <Link className="nav-link" href="/cart">
                  <Badge color="violet" content={totalQty}>
                    <BsCart />
                  </Badge>
                </Link>
              </li>
              {/* <li className={`me-3 me-md-1 dropdown`}>
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
              </li> */}
              <li className={`me-3 me-md-1 dropdown`}>
                <Link
                  className="nav-link"
                  href="#"
                  id="navbarDropdown02"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {auth.isAuth ? (
                    update ? (
                      <div className="rounded-circle my-auto">
                        {/* newFileName */}
                        <img
                          src={`${API_SERVER}/avatar/${newFileName}`}
                          style={{ width: '30px', height: '30px' }}
                          className="rounded-circle"
                        />
                      </div>
                    ) : memberPicData ? (
                      <div className="rounded-circle my-auto">
                        {/* newFileName */}
                        <img
                          src={`${API_SERVER}/avatar/${memberPicData}`}
                          style={{ width: '30px', height: '30px' }}
                          className="rounded-circle"
                        />
                      </div>
                    ) : (
                      <BsPersonCircle />
                    )
                  ) : (
                    <BsPersonCircle />
                  )}
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-dark dropdown-menu-end"
                  aria-labelledby="navbarDropdown02"
                >
                  {isLoggedIn ? (
                    <>
                      <li>
                        <Link className="dropdown-item" href="/member/profile">
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
        handleWakeLogin={handleWakeLogin}
      />
      <Toaster />
    </>
  )
}
