import React from 'react'
import { BsSearch } from 'react-icons/bs'
import DesktopBlackPureIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackPureIconBtnPurple'

export default function LeftBar({
  handleSearch,
  onClassChange,
  onAreaChange,
  onNameChange,
  onDateChange,
  classValue,
  areaValue,
  nameValue,
  handleKeyDown,
  dateValue,
}) {
  return (
    <>
      {/* left bar start */}
      <div className="col-md-3 col-12 mb-5">
        <div className="outline sticky-40">
          <form onSubmit={handleSearch} className="col-10 mx-auto">
            <div className="d-flex flex-md-column">
              <div className="mt-4 mb-2 mb-md-0 col-6 col-md-12">
                <select
                  className="form-select input-p3"
                  value={classValue}
                  onChange={onClassChange}
                  onKeyDown={handleKeyDown}
                >
                  <option defaultValue="">-- 選擇類型 --</option>
                  <option value="0">所有類型</option>
                  <option value="1">演唱會</option>
                  <option value="2">音樂祭</option>
                </select>
              </div>
              <div className="mt-4 mb-2 mb-md-0 col-6 col-md-12">
                <select
                  className="form-select input-p3"
                  value={areaValue}
                  onChange={onAreaChange}
                  onKeyDown={handleKeyDown}
                >
                  <option defaultValue="">-- 選擇地區 --</option>
                  <option value="0">所有區域</option>
                  <option value="1">北部</option>
                  <option value="2">中部</option>
                  <option value="3">南部</option>
                </select>
              </div>
            </div>
            <div className="mt-3 mt-md-4 mb-2 mb-md-0 col-12">
              <select
                className="form-select input-p3"
                value={dateValue}
                onChange={onDateChange}
                onKeyDown={handleKeyDown}
              >
                <option defaultValue="">-- 選擇日期 --</option>
                <option value="two_weeks">兩週內</option>
                <option value="this_month">這個月</option>
                <option value="next_month">下個月</option>
              </select>
              {/* <input 
              type="date" 
              className="form-control input-p3 text-white" 
              id="datetime" 
//日期的搜尋 待處理
              /> */}
            </div>
            <div className="mt-4 mb-4 mb-md-4 col-12 input-group">
              <input
                type="text"
                className="form-control input-p3"
                placeholder="活動名稱、地點、介紹"
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
        input[type='date']::-webkit-calendar-picker-indicator {
          cursor: pointer;
           {
            /* border-radius: 4px; */
          }
           {
            /* margin-right: 2px; */
          }
          opacity: 1;
          filter: invert(1);
        }
        .sticky-40 {
          position: sticky;
          top: 40px;
        }
      `}</style>
    </>
  )
}
