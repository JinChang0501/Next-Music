import { useState } from 'react'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import data from '@/data/product/Product.json'
import Link from 'next/link'
// import required modules
import styles from '@/styles/product/product.module.scss'

export default function CardProduct2() {
  const [products, setProducts] = useState(data)

  return (
    <>
      {products.map((v, i) => {
        return ( 
       
            <div key={v.id} className={`row ${styles['row2']}`}>
              <div className={` col-4 ${styles['mt-52']} `}>
      
        <div className={`card ${styles['card']} ${styles['mt-28']}`}>
          <img
            src={`/images/product/list/${v.picture}`}
            className="card-img-top"
            alt="..."
          />
          <div className={`card-body ${styles['bg-bk']}`}>
            {/* <p className={`card-text chb-h6 text-purple3 ${styles['text-center']}`}><Link href={`/product/${v.id}`}>{v.name}</Link></p> */}
            <p className={`card-text chb-h6 text-purple3 ${styles['text-center']}`}></p>
            <p className={`card-text chb-h6 text-white ${styles['text-center']}`}></p>
            <p className={`card-text chb-h6 text-white ${styles['text-center']}`}>NT$ </p>
            <div className={`${styles['text-center']}`}>
            <Link href={`/product/`}><DesktopBlackNoIconBtnPurple text="詳細資訊" className={`chb-p`} /></Link>
            
            </div>
          </div>
        </div>
   
              </div>  
              <div className={` col-4 ${styles['mt-52']}`}>
      
        <div className={`card ${styles['card']} ${styles['mt-28']}`}>
          <img
            src={`/images/product/list/${v.picture}`}
            className="card-img-top"
            alt="..."
          />
          <div className={`card-body ${styles['bg-bk']}`}>
            {/* <p className={`card-text chb-h6 text-purple3 ${styles['text-center']}`}><Link href={`/product/${v.id}`}>{v.name}</Link></p> */}
            <p className={`card-text chb-h6 text-purple3 ${styles['text-center']}`}></p>
            <p className={`card-text chb-h6 text-white ${styles['text-center']}`}></p>
            <p className={`card-text chb-h6 text-white ${styles['text-center']}`}>NT$ </p>
            <div className={`${styles['text-center']}`}>
            <Link href={`/product/`}><DesktopBlackNoIconBtnPurple text="詳細資訊" className={`chb-p`} /></Link>
            
            </div>
          </div>
        </div>
   
              </div>  
              <div className={` col-4 ${styles['mt-52']}`}>
      
        <div className={`card ${styles['card']} ${styles['mt-28']}`}>
          <img
            src={`/images/product/list/`}
            className="card-img-top"
            alt="..."
          />
          <div className={`card-body ${styles['bg-bk']}`}>
            {/* <p className={`card-text chb-h6 text-purple3 ${styles['text-center']}`}><Link href={`/product/${v.id}`}>{v.name}</Link></p> */}
            <p className={`card-text chb-h6 text-purple3 ${styles['text-center']}`}></p>
            <p className={`card-text chb-h6 text-white ${styles['text-center']}`}></p>
            <p className={`card-text chb-h6 text-white ${styles['text-center']}`}>NT$ </p>
            <div className={`${styles['text-center']}`}>
            <Link href={`/product/`}><DesktopBlackNoIconBtnPurple text="詳細資訊" className={`chb-p`} /></Link>
            
            </div>
          </div>
        </div>
   
              </div>  
              
            </div>
          
        ) })}
    </>
  )
}
