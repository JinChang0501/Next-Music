// pages/index.js
import MemberDLayout from '@/components/member/desktop-layout'
import styles from '@/components/member/desktop-layout/left-bar.module.scss'
import Link from 'next/link'
import { IoEyeSharp } from 'react-icons/io5'
import { IoEyeOffSharp } from 'react-icons/io5'
import LoginModal from '@/components/login/login-modal'
import { useState } from 'react'

export default function Account() {
  const [isDisable, setIsDisable] = useState(true)

  const handleEdit = (e) => {
    e.preventDefault()

    setIsDisable(false) // 設定為可編輯狀態
  }

  const handleCancel = () => {
    setIsDisable(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 執行儲存資料的邏輯，這裡可以加入 API 呼叫或其他邏輯
    setIsDisable(true) // 儲存後設定為不可編輯狀態
  }

  return (
    <>
      <p className="chb-h4 text-purple1">帳號設定</p>
      <hr className="custom-hr" />
      {/* ------------------------------------------------------------------------------------------------------- */}

      <div className="col-12 col-md-8 mx-auto">
        {/* 1------------------------------------------------------------------------------------------------------- */}
        <div className="accordion mb-3" id="accordionExample1">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                個人資料
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample1"
            >
              <div className="accordion-body">
                <form>
                  <div className="row">
                    <div className="col-sm-6">
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
                          disabled={isDisable}
                        />
                      </div>
                    </div>
                    {/* Email */}
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          電子信箱
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          disabled={isDisable}
                        />
                      </div>
                    </div>
                  </div>

                  {/* 電話號碼 */}
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="mb-3">
                        <label htmlFor="phone_number" className="form-label">
                          電話號碼
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone_number"
                          name="phone_number"
                          pattern="[0]{1}[9]{1}[0-9]{8}"
                          maxLength="10"
                          disabled={isDisable}
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
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
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="mb-3">
                        <label htmlFor="gender" className="form-label">
                          性別
                        </label>
                        <select
                          className="form-select"
                          id="gender"
                          name="gender"
                          disabled={isDisable}
                        >
                          <option value="null">選擇性別</option>
                          <option value="Male">男 - Male</option>
                          <option value="Female">女 - Female</option>
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
                    />
                  </div>
                  {/* <div className="py-2 d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary mx-2">
                      取消
                    </button>
                    <button type="submit" className="btn btn-primary">
                      儲存
                    </button>
                  </div> */}
                  {isDisable ? (
                    <div className="py-2 d-flex justify-content-end">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleEdit}
                      >
                        編輯
                      </button>
                    </div>
                  ) : (
                    <div className="py-2 d-flex justify-content-end">
                      <button
                        className="btn btn-primary mx-2"
                        onClick={handleCancel}
                      >
                        取消
                      </button>
                      <button type="submit" className="btn btn-primary">
                        儲存
                      </button>
                    </div>
                  )}
                </form>
                {/* 3 end */}
              </div>
            </div>
          </div>
        </div>
        {/* 2----------------------------------------------------------------------------------------------------- */}
        <div className="accordion" id="accordionExample2">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                更新密碼
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample2"
            >
              <div className="accordion-body">
                {/* 1 */}
                <div className="form-group mb-3">
                  <label htmlFor="password" className="form-label">
                    舊密碼
                  </label>
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="輸入舊密碼"
                    />
                    <button className="btn btn-secondary">
                      <IoEyeSharp className="fs-4" />
                    </button>
                  </div>
                </div>
                {/* 2 */}
                <div className="form-group mb-3">
                  <label htmlFor="passwords" className="form-label">
                    新密碼
                  </label>
                  <div className="input-group">
                    <input
                      type="passwords"
                      className="form-control"
                      id="passwords2"
                      placeholder="輸入新密碼"
                    />
                    <button className="btn btn-secondary">
                      <IoEyeSharp className="fs-4" />
                    </button>
                  </div>
                </div>
                {/* 3 */}
                <div className="form-group mb-3">
                  <label htmlFor="passwords" className="form-label">
                    再次輸入新密碼
                  </label>
                  <div className="input-group">
                    <input
                      type="passwords"
                      className="form-control"
                      id="passwords3"
                      placeholder="再次輸入新密碼"
                    />
                    <button className="btn btn-secondary">
                      <IoEyeSharp className="fs-4" />
                    </button>
                  </div>
                </div>
                {/* 3 end */}
                <div className="py-2 d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary mx-2">
                    取消
                  </button>
                  <button type="submit" className="btn btn-primary">
                    儲存
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
Account.getLayout = function getLayout(page) {
  return (
    <MemberDLayout title="Music | 會員帳號設定" pageName="account">
      {page}
    </MemberDLayout>
  )
}

// const Account = () => {
//   const size = useWindowSize()
//   const isDesktop = size.width >= 768 // 假設 768px 以上為桌面佈局

//   return isDesktop ? (
//     <MemberDLayout>
//       <h1>這是桌面佈局</h1>
//     </MemberDLayout>
//   ) : (
//     <MemberPLayout>
//       <h1>這是移動佈局</h1>
//     </MemberPLayout>
//   )
// }

// Account.getLayout = (page) => page

// export default Account
