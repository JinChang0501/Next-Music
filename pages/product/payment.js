import { useEffect } from 'react'
import styles from '@/styles/product/product.module.scss'
import CartLayout from '@/components/layout/cart-layout'
import ProgressBar from '@/components/product/progressBar'


export default function Payment() {
  return (
    <div>
       <ProgressBar  />
      {/* <Link href="/product/cart">連至購物車</Link> */}
    </div>
  )
}

Payment.getLayout = function getLayout(page) {
  return <CartLayout title="payment">{page}</CartLayout>
}