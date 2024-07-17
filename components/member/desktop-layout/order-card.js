import React, { useEffect, useRef, useState } from 'react'
import styles from './order-card.module.scss'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import Link from 'next/link'
import moment from 'moment-timezone'

export default function OrderCard({
  order_num = '',
  firstProductPicture = '',
  firstProductName = '',
  totalPrice = '',
  totalCount = '',
  created_at = '',
}) {
  const formateCreated_At = moment(created_at)
    .tz('Asia/Taipei')
    .format('YYYY/MM/DD HH:mm')
  return (
    <>
      <div className="mb-3">
        <div className="row mt-3 border border-2 border-purple1">
          <div className="col-12 bg-purple1 py-2">
            <div className="px-md-3 d-flex justify-content-between">
              <p className="text-center p-0 m-0 chb-h6 text-white">
                訂單編號:{order_num}
              </p>
              <p className="text-center p-0 m-0 chb-h6 text-white">
                {formateCreated_At}
              </p>
            </div>
          </div>

          <div className="col-12 bg-purple3 py-2 border-top border-2 border-purple2">
            <div className="row text-center">
              <div className="col chb-h6 ps-4">商品圖片</div>
              <div className="col chb-h6 ps-4">商品名稱</div>
              <div className="col chb-h6 ps-3">件數</div>
              <div className="col chb-h6">訂單總價</div>
            </div>
          </div>

          <div className="col-12 py-2">
            <div className="row text-center my-1">
              <div className="col d-flex justify-content-center">
                <img
                  src={`/images/product/list/${firstProductPicture}`}
                  className={styles.img160}
                  alt=""
                />
              </div>
              <div className="col my-auto p-0 chr-h6">{firstProductName}</div>
              <div className="col my-auto p-0 chr-h6">共{totalCount}件</div>
              <div className="col my-auto p-0 chr-h6">$ {totalPrice}</div>
            </div>
          </div>
          <div className="col-12 bg-purple3 py-2 border-top border-2 border-purple2">
            <div className="row text-center">
              <Link href={`/member/store-detail/${order_num}`}>
                <div className="col chb-h6">檢視其他商品</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
