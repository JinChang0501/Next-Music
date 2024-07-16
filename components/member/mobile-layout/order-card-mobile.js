import React, { useEffect, useRef, useState } from 'react'
import styles from './order-card-mobile.module.scss'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import Link from 'next/link'

export default function OrderCardMobile({
  order_num = '',
  firstProductPicture = '',
  firstProductName = '',
  totalPrice = '',
  totalCount = '',
}) {
  return (
    <>
      <div className="mb-3">
        <div className="row mt-3 border border-2 border-purple1">
          <div className="col-12 bg-purple1 py-2">
            <div className="px-md-5 d-flex justify-content-between">
              <p className="text-center p-0 m-0 chb-h6 text-white">
                訂單編號:{order_num}
              </p>
              <p className="text-center p-0 m-0 chb-h6 text-white">已完成</p>
            </div>
          </div>

          <div className="col-12 bg-purple3 py-2 border-top border-2 border-purple2">
            <div className="row text-center">
              <div className="col chb-h6 text-nowrap">商品圖片</div>
              <div className="col chb-h6 text-nowrap">商品名稱</div>
              <div className="col chb-h6 text-nowrap">件數</div>
              <div className="col chb-h6 text-nowrap">總價</div>
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
              <div className="col my-auto p-0 chr-h7">{firstProductName}</div>
              <div className="col my-auto p-0 chr-h7">共{totalCount}件</div>
              <div className="col my-auto p-0 chr-h7">$ {totalPrice}</div>
            </div>
          </div>
          <div className="col-12 bg-purple3 py-2 border-top border-2 border-purple2">
            <div className="row text-center">
              <Link href="/member/store-detail">
                <div className="col chb-p">檢視其他商品</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
