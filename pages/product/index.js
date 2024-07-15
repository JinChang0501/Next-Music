import { useEffect, useState } from 'react'
import { GET_PRODUCTS } from '@/configs/api-path'
import styles from '@/styles/product/product.module.scss'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import CarouselIndex from '@/components/product/carousel-index'
import CardProduct from '@/components/product/card-product'
import LeftBar from '@/components/product/left-bar'
// import data from '@/data/product/Product.json'

import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
// import data from '@/data/product/Product.json'
import Link from 'next/link'
export default function List() {
  const [products, setProducts] = useState([])

  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '周邊商城', href: '/product' },
  ]
  useEffect(() => {
    fetch(`${GET_PRODUCTS}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('server data',data);
        setProducts(data)
      })
  }, [])

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      {/* 商品推播 */}
      <CarouselIndex />
      {/* 內容正式開始 */}
      <div className={`${styles['mx-160']} ${styles['my-100']}`}>
        <div className="row">
          {/* left-search start*/}
          <LeftBar className={``} />
          {/* left-search end*/}
          <div className={`col-md-9 `}>
            <div className={`chb-h3 text-white ${styles['ml-28']}`}>所有商品</div>
            <div className={`row row-cols-md-3 ${styles['ml-28']}`}>
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
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
