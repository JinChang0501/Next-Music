import React, { useEffect, useState } from 'react'
import styles from './left-bar.module.scss'
import Link from 'next/link'
import { FaKey } from 'react-icons/fa6'
import { IoPersonSharp } from 'react-icons/io5'
import { FaShoppingCart } from 'react-icons/fa'
import { BsTicketPerforatedFill } from 'react-icons/bs'
import { BiCollection } from 'react-icons/bi'
import { useAuth } from '@/hooks/use-auth'
import { login, logout, getUserById, checkAuth } from '@/services/user' //checkAuth
import useFirebase from '@/hooks/use-firebase'
import toast, { Toaster } from 'react-hot-toast'
import { IoCalendarNumber } from 'react-icons/io5'
import { updateProfile, updateProfileAvatar } from '@/services/user'
import { useRouter } from 'next/router'
// 定義要在此頁呈現/編輯的會員資料初始物件
const initUserProfile = {
  email: '',
}

export default function LeftBar({ pageName = '' }) {
  const router = useRouter()
  const { logoutFirebase } = useFirebase()
  // 更新表單
  const { auth, setAuth, initUserData } = useAuth()

  const [userProfile, setUserProfile] = useState(initUserProfile)
  const getUserData = async (id) => {
    const res = await getUserById(id)

    console.log(res.data)

    if (res.data.status === 'success') {
      // 以下為同步化目前後端資料庫資料，與這裡定義的初始化會員資料物件的資料
      const dbUser = res.data.data.user
      const dbUserProfile = { ...initUserProfile }

      for (const key in dbUserProfile) {
        if (Object.hasOwn(dbUser, key)) {
          // 這裡要將null值的預設值改為空字串 ''
          dbUserProfile[key] = dbUser[key] || ''
        }
      }

      // 設定到狀態中
      setUserProfile(dbUserProfile)

      // toast.success('會員資料載入成功')
    } else {
      // toast.error(`會員資料載入失敗`)
    }
  }
  // auth載入完成後向資料庫要會員資料

  const [isLoggedIn, setIsLoggedIn] = useState(false) // 這裡要接Login元件傳回來的狀態

  // 更新登入狀態
  const updateLoginStatus = (loggedIn) => {
    setIsLoggedIn(loggedIn)
  }

  //處理登出
  const handleLogout = async () => {
    logoutFirebase()

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
      getUserData(auth.userData.id)
    }
    // eslint-disable-next-line
  }, [auth])

  return (
    <>
      <div className="left-bar bg-black80">
        {/*  bg-black80 */}
        <div className="mt-3 text-center">
          <p className="chb-h4 text-white">會員中心</p>
          <hr className="custom-hr" />
        </div>
        {/* <div>
          <div className="py-4">
            <div className={`${styles.imgF} mx-auto`}>
              <img
                src="/images/member/img/angel-1284369__340.jpg"
                className={`${styles['img-size']} mx-auto`}
              ></img>
            </div>
          </div>

          <div className="text-center">
            <p
              className={`${styles['short-underline']} chb-h5 m-0 mb-3 text-white`}
            >
              三個字
            </p>
          </div>
        </div> */}
        {/* 功能列 */}
        <div className="">
          <ul className="list-unstyled m-0">
            <Link
              href="/member/profile"
              className="text-decoration-none text-center fw-bold chr-h5"
            >
              <li
                className={`py-2 m-0 ${
                  pageName === 'profile' ? 'text-purple1' : 'text-purple3'
                }`}
              >
                <div className="d-flex text-center justify-content-center">
                  <div className="me-2">
                    <IoPersonSharp />
                  </div>
                  <div>個人資料</div>
                </div>
              </li>
            </Link>
            <Link
              href="/member/profile-password"
              className="text-decoration-none text-center fw-bold chr-h5"
            >
              <li
                className={`py-2 m-0 ${
                  pageName === 'profile-password'
                    ? 'text-purple1'
                    : 'text-purple3'
                }`}
              >
                <div className="d-flex text-center justify-content-center">
                  <div className="me-2">
                    <FaKey />
                  </div>
                  <div>更新密碼</div>
                </div>
              </li>
            </Link>
            <Link
              href="/member/calendar"
              className="text-decoration-none text-center fw-bold m-0 chr-h5"
            >
              <li
                className={`py-2 m-0 ${
                  pageName === 'calendar' ? 'text-purple1' : 'text-purple3'
                }`}
              >
                <div className="d-flex text-center justify-content-center">
                  <div className="me-2">
                    <IoCalendarNumber />
                  </div>
                  <div>活動日程</div>
                </div>
              </li>
            </Link>
            <Link
              href="/member/collection"
              className="text-decoration-none text-center fw-bold chr-h5"
            >
              <li
                className={`py-2 m-0 ${
                  pageName === 'collection' ? 'text-purple1' : 'text-purple3'
                }`}
              >
                <div className="d-flex text-center justify-content-center">
                  <div className="me-2">
                    <BiCollection />
                  </div>
                  <div>個人收藏</div>
                </div>
              </li>
            </Link>
            <Link
              href="/member/ticket-order"
              className="text-decoration-none text-center fw-bold chr-h5"
            >
              <li
                className={`py-2 m-0 ${
                  pageName === 'ticket-order' ? 'text-purple1' : 'text-purple3'
                }`}
              >
                <div className="d-flex text-center justify-content-center">
                  <div className="me-2">
                    <BsTicketPerforatedFill />
                  </div>
                  <div>訂票紀錄</div>
                </div>
              </li>
            </Link>
            <Link
              href="/member/store-order"
              className="text-decoration-none text-center fw-bold chr-h5"
            >
              <li
                className={`py-2 m-0 ${
                  pageName === 'store-order' ? 'text-purple1' : 'text-purple3'
                }`}
              >
                <div className="d-flex text-center justify-content-center">
                  <div className="me-2">
                    <FaShoppingCart />
                  </div>
                  <div>購物紀錄</div>
                </div>
              </li>
            </Link>
            {/* <Link
              href="account"
              className="text-decoration-none text-center fw-bold chr-h5"
            >
              <li className="py-2 text-purple3 m-0">帳號設定</li>
            </Link> */}
          </ul>
        </div>
        {/* 信箱與登出 */}
        <div className="bottom-content text-center bg-black80 py-3">
          <span className="eng-h7 text-white">{userProfile.email}</span>
          <br />
          <button
            className="text-decoration-none text-purple3 bg-black80"
            onClick={handleLogout}
          >
            登出
          </button>
        </div>
      </div>

      <style jsx>{`
        /* 新增的 CSS */
        .left-bar {
          padding-top: 60px; /* Navbar的高度 */
          height: 100vh; /* 填滿整個視窗高度 */
          position: relative;
        }
        .bottom-content {
          position: absolute;
          bottom: 50px;
          left: 0;
          width: 100%;
          padding: 10px;
          background-color: #f4f4f4;
        }
        .custom-hr {
          border: 0;
          border-top: 3px solid #ffffff; /* 設置粗細和顏色 */
          width: 70%; /* 分隔線寬度 */
          margin: 1rem auto; /* 上下邊距和自動水平對齊 */
          opacity: 0.6;
        }
        /* 在手機板上隱藏 .left-bar */
        @media (max-width: 576px) {
          .left-bar {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
