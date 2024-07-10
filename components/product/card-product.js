import { useState } from 'react'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import data from '@/data/product/Product.json'
import Link from 'next/link'
// import required modules
import styles from '@/styles/product/product.module.scss'

export default function CardProduct() {
  const [products, setProducts] = useState(data)

  return (
    <>
       {products.map((v, i) => {
              return (
                <div key={v.id} className={`card ${styles['card']} ${styles['mt-28']}`}>
                  <img
                    src={`/images/product/list/${v.picture}`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className={`card-body ${styles['bg-bk']}`}>
                    {/* <p className={`card-text chb-h6 text-purple3 ${styles['text-center']}`}><Link href={`/product/${v.id}`}>{v.name}</Link></p> */}
                    <p className={`card-text chb-h6 text-purple3 ${styles['text-center']}`}>{v.name}</p>
                    <p className={`card-text chb-h6 text-white ${styles['text-center']}`}>{v.activity}</p>
                    <p className={`card-text chb-h6 text-white ${styles['text-center']}`}>NT$ {v.price}</p>
                    <div className={`${styles['text-center']}`}>
                    <Link href={`/product/${v.id}`}><DesktopBlackNoIconBtnPurple text="詳細資訊" className={`chb-p`} /></Link>
                    
                    </div>
                  </div>
                </div>
              )
            })}
    </>
  )
}
