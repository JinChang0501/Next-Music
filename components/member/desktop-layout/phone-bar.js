import React from 'react'
import styles from './phone-bar.module.scss'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import PreviewUploadImage from '@/components/member/desktop-layout/preview-upload-image'
import { avatarBaseUrl } from '@/configs'
import { useAuth } from '@/hooks/use-auth'
import toast, { Toaster } from 'react-hot-toast'

import {
  updateProfile,
  getUserById,
  updateProfileAvatar,
} from '@/services/user'

// 定義要在此頁呈現/編輯的會員資料初始物件
const initUserProfile = {
  name: '',
  avatar: '',
}
export default function PhoneBar({ pageName = '' }) {
  const [isDisable, setIsDisable] = useState(true)

  const handleEdit = (e) => {
    e.preventDefault()

    setIsDisable(false) // 設定為可編輯狀態
  }

  const handleCancel = () => {
    setIsDisable(true)
  }

  // 更新表單
  const { auth } = useAuth()
  const [userProfile, setUserProfile] = useState(initUserProfile)
  const [hasProfile, setHasProfile] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)

  // !! 注意phone, birth_date...等資料並沒有在auth.userData中，需自行向伺服器獲取
  // 這裡的設計重點，是auth.userData或JWT存取令牌中，並不記錄"會改變"的會員資料(密碼當然更不行，會有安全性問題)
  // 因此更新會員資料與auth.userData或JWT存取令牌無關
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

      toast.success('會員資料載入成功')
    } else {
      toast.error(`會員資料載入失敗`)
    }
  }

  // auth載入完成後向資料庫要會員資料
  useEffect(() => {
    if (auth.isAuth) {
      getUserData(auth.userData.id)
    }
    // eslint-disable-next-line
  }, [auth])

  // 提示其它相關個人資料元件可以載入資料
  useEffect(() => {
    // 純粹觀察userProfile狀態變化用
    // console.log('userProfile狀態變化', userProfile)
    if (userProfile.name) {
      setHasProfile(true)
    }
  }, [userProfile])

  // 輸入一般資料用
  const handleFieldChange = (e) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value })
  }

  // 送出表單用
  const handleSubmit = async (e) => {
    // 阻擋表單預設送出行為
    e.preventDefault()
    setIsDisable(true) // 儲存後設定為不可編輯狀態
    // 這裡可以作表單驗証

    // 送到伺服器進行更新
    // 更新會員資料用，排除avatar
    let isUpdated = false

    const { avatar, ...user } = userProfile
    const res = await updateProfile(auth.userData.id, user)

    // console.log(res.data)

    // 上傳頭像用，有選擇檔案時再上傳
    if (selectedFile) {
      const formData = new FormData()
      // 對照server上的檔案名稱 req.files.avatar
      formData.append('avatar', selectedFile)

      const res2 = await updateProfileAvatar(formData)

      // console.log(res2.data)
      if (res2.data.status === 'success') {
        toast.success('會員頭像修改成功')
      }
    }

    if (res.data.status === 'success') {
      toast.success('會員資料修改成功')
    } else {
      toast.error('會員資料修改失敗')
    }
  }
  return (
    <>
      <div className="left-bar">
        <div className="row chb-h4 my-2 mb-3">會員中心</div>

        <div className="row align-items-center p-3">
          <div className="col-6 d-flex justify-content-center">
            {/* <img
              src="/images/member/img/beautiful-2405131__340.jpg"
              alt=""
              className={`${styles['img-size']}`}
            ></img> */}
            {hasProfile ? (
              <PreviewUploadImage
                avatarImg={userProfile.avatar}
                // uploadImg={updateProfileAvatar}
                avatarBaseUrl={avatarBaseUrl}
                // toast={toast}
                setSelectedFile={setSelectedFile}
                selectedFile={selectedFile}
              />
            ) : (
              <div>
                <img src="/blank.webp" alt="" width="200" height="200" />
              </div>
            )}
          </div>

          <div className="text-center col-6">
            <p className="chb-h4 m-0 text-black">{userProfile.name}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 p-0">
            <div className="menu-container">
              <div className="menu-wrapper px-0 ">
                <Link
                  href="profile"
                  className={`me-3 chb-h5 ${
                    pageName === 'profile' ? 'text-purple1' : 'text-black60'
                  }`}
                >
                  個人資料
                </Link>

                <Link
                  href="profile-password"
                  className={`me-3 chb-h5 ${
                    pageName === 'profile-password'
                      ? 'text-purple1'
                      : 'text-black60'
                  }`}
                >
                  更新密碼
                </Link>

                <Link
                  href="calendar"
                  className={`me-3 chb-h5 ${
                    pageName === 'calendar' ? 'text-purple1' : 'text-black60'
                  }`}
                >
                  活動日程
                </Link>

                <Link
                  href="collection"
                  className={`me-3 chb-h5 ${
                    pageName === 'collection' ? 'text-purple1' : 'text-black60'
                  }`}
                >
                  個人收藏
                </Link>
                <Link
                  href="ticket-order"
                  className={`me-3 chb-h5 ${
                    pageName === 'ticket-order'
                      ? 'text-purple1'
                      : 'text-black60'
                  }`}
                >
                  訂票紀錄
                </Link>
                <Link
                  href="store-order"
                  className={`me-3 chb-h5 ${
                    pageName === 'store-order' ? 'text-purple1' : 'text-black60'
                  }`}
                >
                  購物紀錄
                </Link>
                {/* <Link
                  href="account"
                  className={`me-3 chb-h5 ${
                    pageName === 'account' ? 'text-purple1' : 'text-black60'
                  }`}
                >
                  帳戶設定
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .left-bar {
          padding-top: 60px; /* Navbar的高度 */
          position: relative;
        }
        .menu-container {
          width: 100%;
          overflow-x: auto;
          white-space: nowrap;
        }

        .menu-wrapper {
          display: inline-block;
          padding: 10px;
        }

        .menu-item {
          display: inline-block;
          padding: 10px;
          margin-right: 10px;
          background-color: #f0f0f0;
          border-radius: 5px;
          cursor: pointer;
        }

        .menu-item:hover {
          background-color: #e0e0e0;
        }
        /* 在電腦版上隱藏 .left-bar */
        @media (min-width: 1200px) {
          .phone-bar {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
