import { useEffect } from 'react'
import CarouselIndex from '@/components/product/carousel-index'
import CardProduct from '@/components/product/card-product'
import styles from '@/styles/product/product.module.scss'
// import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'

export default function List() {
  // Toggle the side navigation
  useEffect(() => {
    // fix next issue
    if (typeof window !== 'undefined') {
      const sidebarToggle = document.body.querySelector('#sidebarToggle')

      if (sidebarToggle) {
        // 在localStorage中儲存目前sidebar情況
        if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
          document.body.classList.toggle('sb-sidenav-toggled')
        }

        sidebarToggle.addEventListener('click', (event) => {
          event.preventDefault()

          document.body.classList.toggle('sb-sidenav-toggled')

          localStorage.setItem(
            'sb|sidebar-toggle',
            document.body.classList.contains('sb-sidenav-toggled')
          )
        })
      }
    }
  }, [])

  return (
    <>
      <div className="text-white">麵包屑</div>
      {/* <Breadcrumbs /> */}
      {/* 商品推播 */}
      <div className="row">
        <CarouselIndex />
      </div>
      {/* 內容正式開始 */}
      <div className={` ${styles['my-100']}`}>
        <div className="row">
          {/* left-search start*/}
          <div className="col-md-3 text-white" id="sidebar-wrapper">
          側邊欄
          </div>
          {/* left-search end*/}
          {/* 商品卡 start*/}
          <div className="col-md-9" id="page-content-wrapper">
            <div className="chb-h2 text-white">所有商品</div>
            <div className="container-fluid pt-80">
              <div className={`row row-cols-1 row-cols-md-3 ${styles['mt-80']}`}>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
              </div>
            </div>
          </div>
          {/* 商品卡 end*/}
        </div>
      </div>
    </>
  )
}
