import { useEffect, useState } from 'react'
import { GET_PRODUCTS } from '@/configs/api-path'
import styles from '@/styles/product/product.module.scss'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import CarouselIndex from '@/components/product/carousel-index'
// import CardProduct from '@/components/product/card-product'
// import LeftBar2 from '@/components/product/left-bar2'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import { BsSearch } from 'react-icons/bs'
import DesktopBlackPureIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackPureIconBtnPurple'
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
      product.name.toLowerCase().includes(keyword) || product.activity.toLowerCase().includes(keyword)
    )
    setFilteredProducts(filtered)
  }

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <CarouselIndex />
      <div className={`${styles['mx-160']} ${styles['my-100']}`}>
        <div className="row">

          <div className={`col-md-3 col-12 mb-3`}>
          <div className="outline sticky-40"> 
          <div className="col-10 mx-auto">
          {/* 輸入框 */}
          <div className="my-4 col-12 text-white chr-p">輸入關鍵字:搜尋商品名稱或活動名稱</div>
          <div className="mt-4 mb-4 mb-md-4 col-12 input-group">
            <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="form-control input-p3"
                  placeholder="關鍵字"
                />
            <DesktopBlackPureIconBtnPurple
                  onClick={handleSearchClick}
                  icon={BsSearch}
                iconWidth={22}
                iconHeight={22}
                />
          </div>
          {/* 輸入框 */}
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
      <style jsx>{`
        .outline {
          border: 1px solid #685BEB;
        }
        .input-p3 {
          border: 1px solid #dbd7ff;
          background-color: #272727;
          color: white;
        }
        ::placeholder {
        color: white;
        opacity: .5;
        }     
        input[type="date"]::-webkit-calendar-picker-indicator {
          cursor: pointer;
          {/* border-radius: 4px; */}
          {/* margin-right: 2px; */}
          opacity: 1;
          filter: invert(1);
        }
        .sticky-40 {
          position: sticky;
          top: 40px;
        }
      `}</style>
    </>
  )
}
