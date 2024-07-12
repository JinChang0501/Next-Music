import React from 'react'
import { BsSearch } from 'react-icons/bs'
import DesktopBlackPureIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackPureIconBtnPurple'

export default function LeftBar({ handleSearch , onClassChange , onAreaChange , onNameChange , classValue , areaValue , nameValue }) {
  return (
    <>
      {/* left bar start */}
      <div className="col-md-3 col-12 mb-3">
        <div className="outline sticky-40">
          <form id="searchForm" action="" className="col-10 mx-auto">
            <div className="d-flex flex-md-column">
              <div className="mt-4 mb-2 mb-md-0 col-6 col-md-12">
                <select
                  className="form-select input-p3"
                  value={classValue}
                  onChange={onClassChange}
                >
                  <option defaultValue="">-- 選擇類型 --</option>
                  <option value="">所有活動</option>
                  <option value="concert">演唱會</option>
                  <option value="festival">音樂祭</option>
                </select>
              </div>
              <div className="mt-4 mb-2 mb-md-0 col-6 col-md-12">
                <select
                  className="form-select input-p3"
                  value={areaValue}
                  onChange={onAreaChange}
                >
                  <option defaultValue="">-- 選擇地區 --</option>
                  <option value="">所有區域</option>
                  <option value="北部">北部</option>
                  <option value="中部">中部</option>
                  <option value="南部">南部</option>
                </select>
              </div>
            </div>
            <div className="mt-3 mt-md-4 mb-2 mb-md-0 col-12">
              <input type="date" 
              className="form-control input-p3 text-white" 
              id="datetime" 
//日期的搜尋 待處理
              />
            </div>
            <div className="mt-4 mb-4 mb-md-4 col-12 input-group">
              <input
                type="text"
                className="form-control input-p3"
                placeholder="關鍵字"
                value={nameValue}
                onChange={onNameChange}
              />
              <DesktopBlackPureIconBtnPurple
                icon={BsSearch}
                iconWidth={22}
                iconHeight={22}
                // type="submit"
              // 這裡加上搜尋/篩選，［送出表單］的函式
                onclick={handleSearch}
              // 也可以按 enter 送出表單(待修改)
              />
            </div>
          </form>
        </div>
      </div>
      {/* left bar end */}
      <style jsx>{`
        .outline {
          border: 1px solid #685BEB;
        }
        .input-p3 {
          border: 1px solid #dbd7ff;
          background-color: #272727;
          color: white;
        }
        ::placeholder {
        color: white;
        opacity: .5;
        }     
        input[type="date"]::-webkit-calendar-picker-indicator {
          cursor: pointer;
          {/* border-radius: 4px; */}
          {/* margin-right: 2px; */}
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
