// pages/index.js
import MemberDLayout from '@/components/member/desktop-layout'
import { IoEyeSharp } from 'react-icons/io5'
import { IoEyeOffSharp } from 'react-icons/io5'
import { useState } from 'react'
import { useAuth } from '@/hooks/use-auth'
import toast, { Toaster } from 'react-hot-toast'
import { updatePassword } from '@/services/user'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
// 定義要在此頁呈現/編輯的會員資料初始物件
const initUserPassword = {
  origin: '', //要比對成功才能修改
  new: '', //新密碼
  confirm: '', //確認新密碼
}

export default function ProfilePassword() {
  // 需要會員登入時的id
  const { auth } = useAuth()

  const [userPassword, setUserPassword] = useState(initUserPassword)

  //顯示密碼功能
  const [showOriginPassword, setShowOriginPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleShowOriginPassword = (e) => {
    e.preventDefault()
    setShowOriginPassword(!showOriginPassword)
  }

  const handleShowNewPassword = (e) => {
    e.preventDefault()
    setShowNewPassword(!showNewPassword)
  }

  const handleShowConfirmPassword = (e) => {
    e.preventDefault()
    setShowConfirmPassword(!showConfirmPassword)
  }
  // 輸入資料用
  const handleFieldChange = (e) => {
    setUserPassword({ ...userPassword, [e.target.name]: e.target.value })
  }

  // 送出表單用
  const handleSubmit = async (e) => {
    // 阻擋表單預設送出行為
    e.preventDefault()

    // 表單驗証 - START
    if (!userPassword.new || !userPassword.origin || !userPassword.confirm) {
      toast.error('密碼欄位為必填')
      return // 跳出函式
    }

    if (userPassword.new !== userPassword.confirm) {
      toast.error('新密碼與確認密碼不同')
      return // 跳出函式
    }

    if (userPassword.origin === userPassword.new) {
      toast.error('舊密碼與新密碼不能相同')
      return // 跳出函式
    }

    // 表單驗証 - END

    // 送到伺服器進行更新
    const password = { origin: userPassword.origin, new: userPassword.new }
    const res = await updatePassword(auth.userData.id, password)

    console.log(res.data)

    if (res.data.status === 'success') {
      toast.success('會員密碼修改成功')
      setUserPassword(initUserPassword)
    } else {
      toast.error('會員密碼修改失敗')
    }
  }
  return (
    <>
      <p className="chb-h4 text-purple1">更新密碼</p>
      <hr className="custom-hr" />
      {/* ------------------------------------------------------------------------------------------------------- */}

      <div className="col-12 col-md-8 mx-auto">
        {/* 2----------------------------------------------------------------------------------------------------- */}
        <div className="accordion" id="accordionExample2">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                更新密碼
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse show"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample2"
            >
              <div className="accordion-body">
                {/* 1 */}
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="origin" className="form-label">
                      舊密碼
                    </label>
                    <div className="input-group">
                      <input
                        type={showOriginPassword ? 'text' : 'password'}
                        className="form-control"
                        id="origin"
                        placeholder="輸入舊密碼"
                        name="origin"
                        value={userPassword.origin}
                        onChange={handleFieldChange}
                      />
                      <button
                        className="btn btn-secondary"
                        onClick={handleShowOriginPassword}
                      >
                        {showOriginPassword ? (
                          <IoEyeSharp className="fs-4" />
                        ) : (
                          <IoEyeOffSharp className="fs-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="form-group mb-3">
                    <label htmlFor="new" className="form-label">
                      新密碼
                    </label>
                    <div className="input-group">
                      <input
                        type={showNewPassword ? 'text' : 'password'}
                        className="form-control"
                        id="new"
                        placeholder="輸入新密碼"
                        name="new"
                        value={userPassword.new}
                        onChange={handleFieldChange}
                      />
                      <button
                        className="btn btn-secondary"
                        onClick={handleShowNewPassword}
                      >
                        {showNewPassword ? (
                          <IoEyeSharp className="fs-4" />
                        ) : (
                          <IoEyeOffSharp className="fs-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="form-group mb-3">
                    <label htmlFor="confirm" className="form-label">
                      再次輸入新密碼
                    </label>
                    <div className="input-group">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        className="form-control"
                        id="confirm"
                        placeholder="再次輸入新密碼"
                        name="confirm"
                        value={userPassword.confirm}
                        onChange={handleFieldChange}
                      />
                      <button
                        className="btn btn-secondary"
                        onClick={handleShowConfirmPassword}
                      >
                        {showConfirmPassword ? (
                          <IoEyeSharp className="fs-4" />
                        ) : (
                          <IoEyeOffSharp className="fs-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  {/* 3 end */}
                  <div className="py-2 d-flex justify-content-end">
                    <DesktopWhiteNoIconBtnPurple
                      text="更新"
                      className="chb-h7 px-3 py-2"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .error-border {
          border: 1px solid red;
        }
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
ProfilePassword.getLayout = function getLayout(page) {
  return (
    <MemberDLayout title="Makin | 會員更新密碼" pageName="profile-password">
      {page}
    </MemberDLayout>
  )
}
