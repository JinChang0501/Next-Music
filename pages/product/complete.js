import { useEffect } from 'react'
import styles from '@/styles/product/product.module.scss'
import ProgressBar from '@/components/product/progressBar'


export default function Complete() {
  return (
    <div>
       <ProgressBar  />
      {/* <Link href="/product/cart">連至購物車</Link> */}
    </div>
  )
}
