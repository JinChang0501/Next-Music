import React from 'react'
import { BsSearch } from 'react-icons/bs'
import DesktopBlackPureIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackPureIconBtnPurple'

export default function LeftBarArt({
  handleSearch,
  onClassChange,
  onNameChange,
  classValue,
  nameValue,
  handleKeyDown,
}) {
  return (
    <>
      {/* left bar start */}
      <div className="col-md-3 col-12 mt-2 mb-5">
        <div className="outline sticky-40">
          <form onSubmit={handleSearch} className="col-10 mx-auto">
            <div className="mt-4 mb-2 mb-md-0 col-12 col-md-12">
              <select
                className="form-select input-p3"
                value={classValue}
                onChange={onClassChange}
                onKeyDown={handleKeyDown}
              >
                <option defaultValue="">-- 選擇風格 --</option>
                <option value="0">搖滾</option>
                <option value="1">獨立</option>
                <option value="2">龐克</option>
                <option value="3">流行</option>
                <option value="4">金屬</option>
                <option value="5">民謠</option>
                <option value="6">爵士藍調</option>
              </select>
            </div>
            <div className="mt-4 mb-4 mb-md-4 col-12 input-group">
              <input
                type="text"
                className="form-control input-p3"
                placeholder="音樂人"
                value={nameValue}
                onChange={onNameChange}
                onKeyDown={handleKeyDown}
              />
              <DesktopBlackPureIconBtnPurple
                icon={BsSearch}
                iconWidth={22}
                iconHeight={22}
                // 這裡加上搜尋/篩選，［送出表單］的函式
                onclick={handleSearch}
                // 也可以按 enter 送出表單(待修改)
                onKeyDown={handleKeyDown}
              />
            </div>
          </form>
        </div>
      </div>
      {/* left bar end */}
      <style jsx>{`
        .outline {
          border: 1px solid #685beb;
        }
        .input-p3 {
          border: 1px solid #dbd7ff;
          background-color: #272727;
          color: white;
        }
        ::placeholder {
          color: white;
          opacity: 0.5;
        }
        .sticky-40 {
          position: sticky;
          top: 40px;
        }
      `}</style>
    </>
  )
}
