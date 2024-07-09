import React from 'react'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import styles from '@/styles/product/product.module.scss'
import CartLayout from '@/components/layout/cart-layout'
import ProgressBarOne from '@/components/product/progressBarOne'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import InputNumber from '@/components/product/input-number'
import { BiSolidTrash } from "react-icons/bi";

export default function Cart() {
  const breadcrumbsURL = [
    { label: '周邊商城', href: '/' },
    { label: '商品資訊', href: '/product/[pid]' },
    { label: '購物車', href: '/product/cart' },
  ]
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <ProgressBarOne />
      {/* <Link href="/product/cart">連至購物車</Link> */}
      <div className={`container ${styles['mb-40']} ${styles['center-item']}`}>
        <div className={`first ${styles['my-20']} ${styles['w-1060']}`}>
          <p className={`chb-h5 ${styles['ml-40']} ${styles.text14}`}>請確認購買商品 </p>
          {/* 表格 start*/}
          <table className={`table`}>
            <thead>
              <tr className={`${styles['h-54']}`}>
                {/* <th><p className={`chb-p ${styles['text-center']}`}>勾選</p></th> */}
                <th><p className={`chb-p ${styles['text-center']}`}>商品圖片</p></th>
                <th><p className={`chb-p ${styles['text-center']}`}>商品名稱</p></th>
                <th><p className={`chb-p ${styles['text-center']}`}>價格</p></th>
                <th><p className={`chb-p ${styles['text-center']}`}>數量</p></th>
                <th><p className={`chb-p ${styles['text-center']}`}>小計</p></th>
                <th><p className={`chb-h6 ${styles['text-center']}`}><BiSolidTrash /></p></th>
              </tr>
            </thead>
            <tbody>
              <tr className={`${styles['h-120']}`}>
                <td>
                  <div className={`chb-p ${styles['text-center']}`}>
                    <img className={`${styles['wh-100']}`} src="/images/product/list/red_baseball-cap.jpg" />
                  </div>
                </td>
                <td>
                  <div className={`${styles['h-100']} ${styles['columnCenter']}`}>
                  <p className={`chb-p `}>夢幻樂園演唱會</p>
                  <p className={`chb-p `}>棒球帽-紅</p>
                  </div>
                </td>
                <td>
                  <div className={`${styles['h-100']} ${styles['columnCenter']}`}>
                  <p className={`chb-p`}>$700</p>
                  </div>
                </td>
                <td className={`${styles['h-120']} ${styles['text-center']}`}>
                  <InputNumber />
                </td>
                <td>
                  <div className={`${styles['h-100']} ${styles['columnCenter']}`}>
                  <p className={`chb-p ${styles['text-center']}`}>小計</p>
                  </div>
                  </td>
                <td>
                <div className={`${styles['h-100']} ${styles['columnCenter']}`}>
                    <DesktopBlackNoIconBtnPurple text="刪除" className={`chb-h6 ${styles['h-54']}`} />
                 </div>
                </td>
              </tr>
              <tr className={`${styles['h-120']}`}>
                <td>
                  <div className={`chb-p ${styles['text-center']}`}>
                    <img className={`${styles['wh-100']}`} src="/images/product/list/red_baseball-cap.jpg" />
                  </div>
                </td>
                <td>
                  <div className={`${styles['h-100']} ${styles['columnCenter']}`}>
                  <p className={`chb-p `}>夢幻樂園演唱會</p>
                  <p className={`chb-p `}>棒球帽-紅</p>
                  </div>
                </td>
                <td>
                  <div className={`${styles['h-100']} ${styles['columnCenter']}`}>
                  <p className={`chb-p`}>$700</p>
                  </div>
                </td>
                <td className={`${styles['h-120']} ${styles['text-center']}`}>
                  <InputNumber />
                </td>
                <td>
                  <div className={`${styles['h-100']} ${styles['columnCenter']} ${styles['cart2']}`}>
                  <p className={`chb-p ${styles['text-center']}`}>小計</p>
                  </div>
                  </td>
                <td>
                <div className={`${styles['h-100']} ${styles['columnCenter']} ${styles['cart2']}`}>
                    <DesktopBlackNoIconBtnPurple text="刪除" className={`chb-h6 ${styles['h-54']}`} />
                 </div>
                </td>
              </tr>
            </tbody>
          </table>
          {/* 表格 end*/}
          <div className={` ${styles['mt-40']} ${styles['w-1060']} ${styles['space-between']} ${styles['ml-40']}`}>
            <span className={`chb-h5 ${styles.text14}`}>共2項商品，數量2個</span>
            <span className={`chb-h5 ${styles.text14}`}>總價:NT$1400元 </span>
          </div>
        </div>
        <div className={`second ${styles['my-40']} `} disabled>
          <DesktopBlackNoIconBtnPurple text="結帳" className={`chb-h6 ${styles['btn-760']}`} />
        </div>
      </div>
    </>
  )
}
Cart.getLayout = function getLayout(page) {
  return <CartLayout title="cart">{page}</CartLayout>
}
