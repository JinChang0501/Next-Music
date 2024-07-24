// pages/index.js
import MemberDLayout from '@/components/member/desktop-layout'
import styles from '@/components/member/desktop-layout/left-bar.module.scss'
import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/use-auth'
import toast, { Toaster } from 'react-hot-toast'
import PreviewUploadImage from '@/components/member/desktop-layout/preview-upload-image'
import { avatarBaseUrl } from '@/configs'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'

import {
  updateProfile,
  getUserById,
  updateProfileAvatar,
} from '@/services/user'
import DesktopWhiteNoIconBtnGray from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnGray'
import { useRefresh } from '@/hooks/useRefresh'
// 定義要在此頁呈現/編輯的會員資料初始物件
const initUserProfile = {
  name: '',
  email: '',
  mobile: '',
  birthday: '',
  gender: '',
  address: '',
  avatar: '',
}

export default function Profile() {
  const [isDisable, setIsDisable] = useState(true)
  const { newURL, setNewURl, newFileName, setNewFileName, setUpdate } =
    useRefresh()
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

      // toast.success('會員資料載入成功')
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

    // 送到伺服器進行更新
    // 更新會員資料用，排除avatar
    let isUpdated = false

    const { avatar, ...user } = userProfile
    const res = await updateProfile(auth.userData.id, user)

    // console.log(res.data)

    // 上傳頭像用，有選擇檔案時再上傳
    if (selectedFile) {
      if (
        selectedFile.type !== 'image/jpeg' &&
        selectedFile.type !== 'image/png' &&
        selectedFile.type !== 'image/jpg'
      ) {
        toast.error('請勿上傳非jpeg、png、jpg的檔案格式')
        setIsDisable(false)
        setSelectedFile(null)
        return
      }
      if (selectedFile.size > 1048576) {
        toast.error('請勿上傳超過1MB檔案大小的圖片')
        setIsDisable(false)
        setSelectedFile(null)
        return
      }
      const formData = new FormData()
      // 對照server上的檔案名稱 req.files.avatar
      formData.append('avatar', selectedFile)
      console.log('----------------')
      console.log(selectedFile)
      console.log(selectedFile.name)

      console.log(`我是selectedFile${{ selectedFile }}`)
      const res2 = await updateProfileAvatar(formData)
      //res2是後後端回過來的
      console.log(res2.data)

      //這個拿到傳過去後端且res回來的檔案名稱
      console.log(res2.data.data.avatar)
      const newFile = res2.data.data.avatar
      setNewFileName(newFile)
      setUpdate(true)
      // if (res2.data.status === 'success')
      if (res2.data.status === 'error') {
        toast.success('會員頭像修改成功')
      }
    }
    console.log(`我是newFileName: ${newFileName}`)
    if (res.data.status === 'success') {
      toast.success('會員資料修改成功')
    } else {
      toast.error('會員資料修改失敗')
    }
  }
  console.log(userProfile.avatar)
  return (
    <>
      <p className="chb-h4 text-purple1">個人資料</p>
      <hr className="custom-hr" />
      {/* ------------------------------------------------------------------------------------------------------- */}
      <form>
        <div className="row">
          <div className="col-12 col-md-5">
            {hasProfile ? (
              <PreviewUploadImage
                // avatarImg={userProfile.avatar}
                avatarImg={
                  userProfile.avatar
                    ? `${userProfile.avatar}?t=${new Date().getTime()}`
                    : 'default.png'
                } // 根据条件添加时间戳或使用默认头像
                //avatarImg={`${userProfile.avatar}?t=${new Date().getTime()}`} // 添加時間戳
                avatarBaseUrl={avatarBaseUrl}
                setSelectedFile={setSelectedFile}
                selectedFile={selectedFile}
                isDisable={isDisable}
              />
            ) : (
              <div>
                <img src="/blank.webp" alt="" width="200" height="200" />
              </div>
            )}

            <div
              className={`text-center chb-h7 mt-3 ${
                isDisable ? 'text-black40' : 'text-purple1'
              }`}
            >
              {isDisable ? '點擊編輯即可上傳頭像' : '現在可以上傳頭像囉!'}
            </div>
            <div
              className={`text-center chb-p mt-3 ${
                isDisable ? 'text-black40' : 'text-purple2'
              }`}
            >
              {isDisable ? '檔案大小最大2MB!' : '檔案大小最大2MB!'}
              <br />
              {isDisable ? '檔案限制JPG、JPEG、PNG' : '檔案限制JPG、JPEG、PNG'}
            </div>
          </div>
          <div className="col-12 col-md-7 mx-auto">
            {/* 1------------------------------------------------------------------------------------------------------- */}

            <div className="row">
              <div className="col-sm-12">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    會員姓名
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    name="name"
                    disabled
                    value={userProfile.name}
                    onChange={handleFieldChange}
                  />
                </div>
              </div>
              {/* Email */}
              <div className="col-sm-12">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    電子信箱
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    disabled
                    value={userProfile.email}
                    onChange={handleFieldChange}
                  />
                </div>
              </div>
            </div>

            {/* 電話號碼 */}
            <div className="row">
              <div className="col-sm-12">
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">
                    電話號碼
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    pattern="[0]{1}[9]{1}[0-9]{8}"
                    maxLength="10"
                    disabled={isDisable}
                    value={userProfile.mobile}
                    onChange={handleFieldChange}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="mb-3">
                  <label htmlFor="birthday" className="form-label">
                    生日
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="birthday"
                    name="birthday"
                    disabled={isDisable}
                    value={userProfile.birthday}
                    onChange={handleFieldChange}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">
                    性別
                  </label>
                  <select
                    className="form-select"
                    id="gender"
                    name="gender"
                    disabled={isDisable}
                    value={userProfile.gender}
                    onChange={handleFieldChange}
                  >
                    <option value="null">選擇性別</option>
                    <option value="male">男 - Male</option>
                    <option value="female">女 - Female</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                地址
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                disabled={isDisable}
                value={userProfile.address}
                onChange={handleFieldChange}
              />
            </div>

            {isDisable ? (
              <div className="py-2 d-flex justify-content-end">
                <DesktopWhiteNoIconBtnPurple
                  text="編輯"
                  className="chb-h7 px-3 py-2"
                  onClick={handleEdit}
                />
              </div>
            ) : (
              <div className="py-2 d-flex justify-content-end">
                <DesktopWhiteNoIconBtnGray
                  text="取消"
                  className="chb-h7 px-3 py-2 me-2"
                  onClick={handleCancel}
                />
                <DesktopWhiteNoIconBtnPurple
                  text="更新"
                  className="chb-h7 px-3 py-2"
                  onClick={handleSubmit}
                />
              </div>
            )}
          </div>
        </div>
      </form>
      <style jsx>{`
        .custom-hr {
          border: 0;
          border-top: 4px solid #007bff; /* 設置粗細和顏色 */
          width: 100%; /* 分隔線寬度 */
          margin: 1rem auto; /* 上下邊距和自動水平對齊 */
        }
      `}</style>
    </>
  )
}
Profile.getLayout = function getLayout(page) {
  return (
    <MemberDLayout title="Makin | 會員個人資料" pageName="profile">
      {page}
    </MemberDLayout>
  )
}
