import { useEffect, useState } from 'react'
import { GET_PRODUCTS } from '@/configs/api-path'
import styles from '@/styles/product/product.module.scss'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import CarouselIndex from '@/components/product/carousel-index'
import CardProduct from '@/components/product/card-product'
import LeftBar2 from '@/components/product/left-bar2'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import Link from 'next/link'

export default function List() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [keyword, setKeyword] = useState('')

  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '周邊商城', href: '/product' },
  ]

  useEffect(() => {
    fetch(GET_PRODUCTS)
      .then((res) => res.json())
      .then((data) => {
        console.log('server data', data)
        setProducts(data)
        setFilteredProducts(data) // 初始顯示所有產品
      })
      .catch((error) => {
        console.error('Error fetching products:', error)
      })
  }, [])

  const handleSearchClick = () => {
    const filtered = products.filter((product) =>
      product.name.includes(keyword) || product.activity.includes(keyword)
    )
    setFilteredProducts(filtered)
  }

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <CarouselIndex />
      <div className={`${styles['mx-160']} ${styles['my-100']}`}>
        <div className="row">
        <div className={`col-md-3`}>
          <LeftBar2 className={``} />
          <div className={`row ${styles['ml-28']}`}>
              <div className="col-md-6">
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className={`form-control ${styles['mt-20']} ${styles['mb-20']}`}
                  placeholder="輸入關鍵字搜尋商品名稱或活動名稱"
                />
              </div>
              <div className="col-md-3">
                <button
                  onClick={handleSearchClick}
                  className={`btn btn-primary ${styles['mt-20']} ${styles['mb-20']} ${styles['ml-10']}`}
                >
                  搜尋
                </button>
              </div>
            </div>
          </div>
          <div className={`col-md-9 `}>
            <div className={`chb-h3 text-white ${styles['ml-28']}`}>所有商品</div>
            
            <div className={`row row-cols-md-3 ${styles['ml-28']}`}>
              {filteredProducts.map((product) => (
                <div key={product.id} className={`card ${styles['card']} ${styles['mt-28']}`}>
                  <img
                    src={`/images/product/list/${product.picture}`}
                    className="card-img-top"
                    alt="Product"
                  />
                  <div className={`card-body ${styles['bg-bk']}`}>
                    <p className={`card-text chb-h6 text-purple3 ${styles['text-center']}`}>
                      {product.name}
                    </p>
                    <p className={`card-text chb-h6 text-white ${styles['text-center']}`}>
                      {product.activity}
                    </p>
                    <p className={`card-text chb-h6 text-white ${styles['text-center']}`}>
                      NT$ {product.price}
                    </p>
                    <div className={`${styles['text-center']}`}>
                      <Link href={`/product/${product.id}`}>
                        <DesktopBlackNoIconBtnPurple text="詳細資訊" className={`chb-p`} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
