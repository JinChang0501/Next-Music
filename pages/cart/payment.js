import { React, useState } from 'react'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import styles from '@/styles/product/product.module.scss'
import CartLayout from '@/components/layout/cart-layout'
import ProgressBarTwo from '@/components/product/progressBarTwo'
import CartList from '@/components/checkout/cart-list'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import Transport from '@/components/product/transport'
import EcPay from '@/components/product/ec-pay'

// import data from '@/data/product/Product.json'
import Link from 'next/link'
import { useCart } from '@/hooks/product/use-cart'

export default function Payment() {
  const[products, setProducts] = useState()
  const { totalPrice, totalQty } = useCart()
  const breadcrumbsURL = [
    { label: '周邊商城', href: '/product' },
    { label: '商品資訊', href: '/product[pid]' },
    { label: '購物車', href: '/cart' },
  ]
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <ProgressBarTwo />
      {/* <Link href="/product/cart">連至購物車</Link> */}
      <div className={`container ${styles['mb-40']} ${styles['center-item']}`}>
      <div className={`col-12 col-md-8 cart-area ${styles['my-20']} `}>
          <p className={`chb-h5 ${styles['ml-20']}`}>購買的商品 </p>
         {/* 購物列表 start */}
         <CartList />
          {/* 購物列表 end */}
          <hr />
          <div className={` ${styles['mt-40']} ${styles['w-1061']} ${styles['space-between']} ${styles['ml-40']}`}>
          <div>總數量: {totalQty} / 總金額: {totalPrice}</div>
          </div>
        </div>
        <div className={`second ${styles['mt-40']} ${styles['w-800']}`}>
          <p className="chb-h5">請確認收貨人基本資訊</p>
          {/* 表單 */}
          <form>
            <div className="mb-3">
              <p for="exampleInputEmail1" className="chb-p">姓名</p>
              <input type="text" className={`form-control ${styles['w-800']}`} aria-label="default input example" />
            </div>
            <div className="mb-3">
              <p for="exampleInputEmail1" className={`chb-p ${styles['mt-28']}`}>電子郵件</p>
              <input type="email" className={`form-control ${styles['w-800']}`}  aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text chb-p text-black40">購買後確認信將發送至此電子郵件</div>
            </div>
            <div className="mb-3">
              <p for="exampleInputEmail1" className={`chb-p ${styles['mt-28']}`}>手機號碼</p>
              <input type="mobile" className={`form-control ${styles['w-800']}`}  />
              <div id="emailHelp" className="form-text chb-p text-black40">到貨時通知將發送至此手機號碼</div>
            </div>
          </form>
        </div>
        <div className={`third ${styles['mt-40']} ${styles['w-800']}`}>
          <p className='chb-h5'>請選擇配送方式</p>
          <Transport />
        </div>
        <div className={`fourth ${styles['mt-40']} ${styles['w-800']}`} disabled>
          <p className='chb-h5'>選擇『宅配到府』，請選擇付款方式</p>
          <EcPay />
        </div>
        <div className={`fifth ${styles['my-40']} ${styles['w-800']} ${styles['center-item']}`}>
        <Link href={`/cart/complete`}><DesktopBlackNoIconBtnPurple text="下一步" className={`chb-h6 ${styles['btn-760']}`} /></Link>
        </div>
     </div>
    </>
  )
}

Payment.getLayout = function getLayout(page) {
  return <CartLayout title="payment">{page}</CartLayout>
}
