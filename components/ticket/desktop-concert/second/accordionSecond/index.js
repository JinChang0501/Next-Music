import React, { useEffect, useState } from 'react'
import { useTicketContext } from '@/context/ticket/ticketContext'
import style from './accordionSecond.module.scss'
import moment from 'moment-timezone'
import { getUserDatas } from '@/services/ticket'
import { useAuth } from '@/hooks/use-auth'

export default function AccordionSecond() {
  const { selectedSeatDetails } = useTicketContext()
  const [userData, setUserData] = useState([])
  const { auth } = useAuth()

  const getUserData = async () => {
    try {
      const res = await getUserDatas()
      if (res.status === 'success') {
        setUserData(res.data.result)
      }
    } catch (error) {
      console.error('Error fetching order data:', error)
    }
  }

  useEffect(() => {
    if (auth.isAuth) {
      getUserData()
    }
  }, [auth])

  const { actname, actdate, acttime, location, art_name } =
    selectedSeatDetails[0] || {}

  const datetime = moment(
    `${actdate} ${acttime}`,
    `YYYY-MM-DD HH:mm:ss`
  ).format('YYYY-MM-DD HH:mm:ss')

  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed  chb-h5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
          >
            請確認購買資訊
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            {/* form */}
            <div className={`${style.form}`}>
              <div className={`${style.formBlock}`}>
                <div className="chb-h6">姓名</div>
                <div className={`${style.formInput} text-black40 chb-h7`}>
                  {userData.length > 0 ? userData[0].name : '加载中...'}
                </div>
              </div>
              <div className={`${style.formBlock}`}>
                <div className="chb-h6">電子郵件</div>
                <div className={`${style.formInput} text-black40 chb-h7`}>
                  {userData.length > 0 ? userData[0].email : '加载中...'}
                </div>
              </div>
              <div className={`${style.formBlock}`}>
                <div className="chb-h6">演唱會名稱</div>
                <div className={`${style.formInput} text-black40 chb-h7`}>
                  {actname}
                </div>
              </div>
              <div className={`${style.formBlock}`}>
                <div className="chb-h6">歌手</div>
                <div className={`${style.formInput} text-black40 chb-h7`}>
                  {art_name}
                </div>
              </div>
              <div className={`${style.formBlock}`}>
                <div className="chb-h6">演唱會地點</div>
                <div className={`${style.formInput} text-black40 chb-h7`}>
                  {location}
                </div>
              </div>
              <div className={`${style.formBlock}`}>
                <div className="chb-h6">演唱會時間</div>
                <div className={`${style.formInput} text-black40 chb-h7`}>
                  {datetime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
