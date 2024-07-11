import { useEffect, useState } from 'react'
import styles from '@/styles/product/product.module.scss'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import CarouselIndex from '@/components/product/carousel-index'
import CardProduct from '@/components/product/card-product'
import LeftBar from '@/components/product/left-bar'

import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import data from '@/data/product/Product.json'
import Link from 'next/link'
export default function List() {
  // Toggle the side navigation
  // useEffect(() => {
  //   // fix next issue
  //   if (typeof window !== 'undefined') {
  //     const sidebarToggle = document.body.querySelector('#sidebarToggle')

  //     if (sidebarToggle) {
  //       // 在localStorage中儲存目前sidebar情況
  //       if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
  //         document.body.classList.toggle('sb-sidenav-toggled')
  //       }

  //       sidebarToggle.addEventListener('click', (event) => {
  //         event.preventDefault()

  //         document.body.classList.toggle('sb-sidenav-toggled')

  //         localStorage.setItem(
  //           'sb|sidebar-toggle',
  //           document.body.classList.contains('sb-sidenav-toggled')
  //         )
  //       })
  //     }
  //   }
  // }, [])
  const [products, setProducts] = useState(data)

  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '周邊商城', href: '/product' },
  ]
  

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
              <CardProduct />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
