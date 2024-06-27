import React from 'react'
import { BsSearch } from 'react-icons/bs'
import DesktopBlackPureIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackPureIconBtnPurple'

export default function LeftBar() {
  return (
    <>
      {/* left bar start */}
      <div className="col-md-3 col-12 mb-3">
        <div className="row outline">
          <form id="" action="" className="col-10 mx-auto">
            <div className="my-4 col-12">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected="">選擇地區</option>
                <option value={1}>北部</option>
                <option value={2}>中部</option>
                <option value={3}>南部</option>
              </select>
            </div>
            <div className="my-4 col-12">
              <input type="date" className="form-control" id="datetime" />
            </div>
            <div className="my-4 input-group col-12">
              <input
                type="text"
                className="form-control"
                placeholder="關鍵字"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <DesktopBlackPureIconBtnPurple
                icon={BsSearch}
                iconWidth={28}
                iconHeight={28}
              />
              {/* <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <BsSearch />
              </button> */}
            </div>
          </form>
        </div>
      </div>
      {/* left bar end */}
      <style jsx>{`
        .outline {
          border: 1px solid #685BEB;
        }
      `}</style>
    </>
  )
}
