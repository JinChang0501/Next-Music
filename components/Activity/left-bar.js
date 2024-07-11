import React from 'react'
import { BsSearch } from 'react-icons/bs'
import DesktopBlackPureIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackPureIconBtnPurple'

export default function LeftBar() {
  return (
    <>
      {/* left bar start */}
      <div className="col-md-3 col-12 mb-3">
        <div className="outline sticky-40">
          <form id="" action="" className="col-10 mx-auto">
            <div className="d-flex flex-md-column">
              <div className="mt-4 mb-2 mb-md-0 col-6 col-md-12">
                <select
                  className="form-select input-p3"
                  aria-label="Default select example"
                >
                  <option defaultValue="0">選擇類型</option>
                  <option value={1}>所有活動</option>
                  <option value={2}>演唱會</option>
                  <option value={3}>音樂祭</option>
                </select>
              </div>
              <div className="mt-4 mb-2 mb-md-0 col-6 col-md-12">
                <select
                  className="form-select input-p3"
                  aria-label="Default select example"
                >
                  <option defaultValue="0">選擇地區</option>
                  <option value={1}>所有區域</option>
                  <option value={2}>北部</option>
                  <option value={3}>中部</option>
                  <option value={4}>南部</option>
                </select>
              </div>
            </div>
            <div className="mt-3 mt-md-4 mb-2 mb-md-0 col-12">
              <input type="date" className="form-control input-p3 text-white" id="datetime" />
            </div>
            <div className="mt-4 mb-4 mb-md-4 col-12 input-group">
              <input
                type="text"
                className="form-control input-p3"
                placeholder="關鍵字"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <DesktopBlackPureIconBtnPurple
                icon={BsSearch}
                iconWidth={22}
                iconHeight={22}
              // 這裡加上搜尋/篩選，［送出表單］的函式
              // 複合式的搜尋
              // 也可以按 enter 送出表單
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
