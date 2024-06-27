import { useEffect } from 'react'
import styles from '@/styles/product/product.module.scss'
import CartLayout from '@/components/layout/cart-layout'
import ProgressBar from '@/components/product/progressBar'

export default function CartProduct() {
    return (
        <>
        <ProgressBar />
        
        </>
    )
}
CartProduct.getLayout = function getLayout(page) {
    return <CartLayout title="cart">{page}</CartLayout>
  }
  