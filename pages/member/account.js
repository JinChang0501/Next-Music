// pages/index.js
import MemberDLayout from '@/components/member/computer-layout'
import styles from '@/components/member/computer-layout/left-bar.module.scss'
import Link from 'next/link'
import { IoEyeSharp } from 'react-icons/io5'
import { IoEyeOffSharp } from 'react-icons/io5'

export default function Account() {
  return (
    <>
      <p className="chb-h4 text-purple1">帳號設定</p>
      <hr className="custom-hr" />

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
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                className="form-select"
                id="gender"
                name="gender"
                required
              >
                <option value="" disabled>
                  Select gender
                </option>
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
          />
        </div>
        <div className="py-2 d-flex justify-content-end">
          <button type="submit" className="btn btn-primary mx-2">
            取消
          </button>
          <button type="submit" className="btn btn-primary">
            儲存
          </button>
        </div>
      </form>
      {/*  */}
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button bg-purple3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              更新密碼
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {/* 1 */}
              <div className="form-group mb-3">
                <label htmlFor="passwords" className="form-label">
                  舊密碼
                </label>
                <div className="input-group">
                  <input
                    type="passwords"
                    className="form-control"
                    id="passwords"
                    placeholder="passwords"
                  />
                  <button className="btn btn-secondary">
                    <IoEyeSharp className="fs-4" />
                  </button>
                </div>
              </div>
              {/* 2 */}
              <div className="form-group mb-3">
                <label htmlFor="passwords" className="form-label">
                  舊密碼
                </label>
                <div className="input-group">
                  <input
                    type="passwords"
                    className="form-control"
                    id="passwords2"
                    placeholder="passwords"
                  />
                  <button className="btn btn-secondary">
                    <IoEyeSharp className="fs-4" />
                  </button>
                </div>
              </div>
              {/* 3 */}
              <div className="form-group mb-3">
                <label htmlFor="passwords" className="form-label">
                  舊密碼
                </label>
                <div className="input-group">
                  <input
                    type="passwords"
                    className="form-control"
                    id="passwords3"
                    placeholder="passwords"
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
