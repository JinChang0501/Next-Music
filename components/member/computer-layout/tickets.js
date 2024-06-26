import React from 'react'
import styles from './ticket.module.scss'

export default function Tickets() {
  return (
    <>
      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th className="col-2">訂單編號</th>
            <th className="col-2">訂單時間</th>
            <th className="col-2">活動資訊</th>
            <th className="col-2">購買票數</th>
            <th className="col-2">明細</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="align-middle">12345</td>
            <td className="align-middle">2024-06-23</td>
            <td className="bg-warning d-flex flex-column mx-auto">
              <div
                className={`text-left justify-content-center mt-2 mx-auto ${styles['same-width-text']}`}
              >
                <i className="bi bi-ticket-perforated-fill"></i>
                <span className="ms-2">一生到底，fuck codeing</span>
              </div>
              {/*  */}
              <div
                className={`text-left justify-content-center mt-2 mx-auto ${styles['same-width-text']}`}
              >
                <i className="bi bi-clock-fill me-2"></i>
                <span>2024/06/15 19:30</span>
              </div>

              <div
                className={`text-left justify-content-center mt-2 mx-auto ${styles['same-width-text']}`}
              >
                <i className="bi bi-geo-alt-fill me-2"></i>
                <span>臺北流行音樂中心</span>
              </div>
            </td>
            <td className="align-middle">2</td>
            <td className="align-middle">
              <button className="btn btn-primary">查看明細</button>
            </td>
          </tr>
          {/*  */}
          <tr>
            <td className="align-middle">12345</td>
            <td className="align-middle">2024-06-23</td>
            <td className="bg-warning d-flex flex-column mx-auto">
              <div
                className={`text-left justify-content-center mt-2 mx-auto ${styles['same-width-text']}`}
              >
                <i className="bi bi-ticket-perforated-fill"></i>
                <span className="ms-2">一生到底，fuck codeing</span>
              </div>

              <div
                className={`text-left justify-content-center mt-2 mx-auto ${styles['same-width-text']}`}
              >
                <i className="bi bi-clock-fill me-2"></i>
                <span>2024/06/15 19:30</span>
              </div>

              <div
                className={`text-left justify-content-center mt-2 mx-auto ${styles['same-width-text']}`}
              >
                <i className="bi bi-geo-alt-fill me-2"></i>
                <span>臺北流行音樂中心</span>
              </div>
            </td>
            <td className="align-middle">2</td>
            <td className="align-middle">
              <button className="btn btn-primary">查看明細</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
