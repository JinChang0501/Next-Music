import React from 'react'
import { useEffect, useState } from 'react'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import styles from '@/styles/product/product.module.scss'
import CartLayout from '@/components/layout/cart-layout'
import ProgressBarOne from '@/components/product/progressBarOne'
import CartList from '@/components/checkout/cart-list'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import { GET_PRODUCTS } from '@/configs/api-path'

// import data from '@/data/product/Product.json'
import Link from 'next/link'
import { useCart } from '@/hooks/product/use-cart'

export default function CartIndex() {
  const[products, setProducts] = useState()
  const { totalPrice, totalQty } = useCart()

  const breadcrumbsURL = [
    { label: '周邊商城', href: '/product' },
    { label: '商品資訊', href: '/product/[pid]' },
    { label: '購物車', href: '/cart' },
  ]
  useEffect(() => {
    fetch(`${GET_PRODUCTS}`)
    .then((res) =>  res.json())
    .then((data) => { setProducts(data)})
  }, [])
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <ProgressBarOne />
      <div className={`row ${styles['mb-40']} ${styles.centerItem}`}>
        <div className={`col-12 col-md-8 cart-area ${styles['my-20']} `}>
          <p className={`chb-h5 ${styles['ml-20']} ${styles.text14}`}>購物車</p>
          {/* 購物列表 start */}
          
          <CartList />
          {/* 購物列表 end */}
          <hr />
          <div>總數量: {totalQty} / 總金額: {totalPrice}</div>
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
