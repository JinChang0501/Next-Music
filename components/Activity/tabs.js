import React from 'react'

export default function Tabs() {
  return (
    <>
      {/* 頁籤 start */}
      <div className="row mb-3">
        <div className="col-12">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                所有活動
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                音樂祭
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                演唱會
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* 頁籤 end */}
    </>
  )
}
