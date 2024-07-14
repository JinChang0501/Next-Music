import React from 'react'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import styles from '@/styles/product/product.module.scss'
import CartLayout from '@/components/layout/cart-layout'
import ProgressBarOne from '@/components/product/progressBarOne'
import CartList from '@/components/checkout/cart-list'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'

// import data from '@/data/product/Product.json'
import Link from 'next/link'
import { useCart } from '@/hooks/product/use-cart'

export default function CartIndex() {
  const breadcrumbsURL = [
    { label: '周邊商城', href: '/product' },
    { label: '商品資訊', href: '/product/[pid]' },
    { label: '購物車', href: '/cart' },
  ]
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <ProgressBarOne />
      <div className={`row ${styles['mb-40']} ${styles.centerItem}`}>
        <div className={`col-12 col-md-8 cart-area ${styles['my-20']} `}>
          <p className={`chb-h5 ${styles['ml-20']} ${styles.text14}`}>購物車</p>
          {/* 一項購物列表 start */}
          <CartList />
          {/* 一項購物列表 end */}
          <hr />
        </div>
      </div>
      <div className={`row ${styles['mb-40']} ${styles.centerItem}`}>
        <div
          className={`col-12 col-md-8 cart-area ${styles['my-20']} ${styles['columnCenter']} `}
        >
          <Link href={`/cart/payment`}>
            <DesktopBlackNoIconBtnPurple text="結帳" className={`chb-h6 ${styles['btn-760']}`} />
          </Link>
        </div>
      </div>
    </>
  )
}
CartIndex.getLayout = function getLayout(page) {
  return <CartLayout title="cart">{page}</CartLayout>
}
