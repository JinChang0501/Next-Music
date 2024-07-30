import { useEffect, useState } from 'react'
import { GET_PRODUCTS } from '@/configs/api-path'
import styles from '@/styles/product/product.module.scss'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import CarouselIndex from '@/components/product/carousel-index'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import { BsSearch } from 'react-icons/bs'
import DesktopBlackPureIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackPureIconBtnPurple'
import Link from 'next/link'
import { useTotal } from '@/hooks/product/use-Total'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/router'

export default function List() {
  const router = useRouter()
  const [product, setProduct] = useState(null)
  const [cartData, setCardData] = useState([])
  const [itemCount, setItemCount] = useState(0)
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [keyword, setKeyword] = useState('')
  const { addOne, setAddone, setTotalQty } = useTotal()
  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '周邊商城', href: '/product' },
  ]

  const addToCart = (e, index) => {
    // 確保 productId 是有效的
    if (index < 0) return

    // 創建 cartItem
    const cartItem = {
      id: products[index].id,
      name: products[index].name,
      price: products[index].price,
      quantity: 1,
    }

    // 從 localStorage 中獲取現有的購物車數據
    const cartData = localStorage.getItem('makin-cart')
    let cart = cartData ? JSON.parse(cartData) : []

    // 查找是否已經存在於購物車中
    const existingItem = cart.find((item) => item.id === cartItem.id)

    if (existingItem) {
      // 如果存在，增加數量
      existingItem.quantity += 1
    } else {
      // 否則，將新項目推入購物車
      cart.push(cartItem)
    }

    // 更新 localStorage 中的購物車數據
    localStorage.setItem('makin-cart', JSON.stringify(cart))

    // 更新 itemCount 狀態
    const updatedQty = cart.reduce((sum, item) => sum + item.quantity, 0)
    setItemCount(updatedQty)

    // 提示成功加入購物車
    toast.success('本商品已成功加入購物車')
    setAddone(addOne + 1)

    const countSum = () => {
      let sum = 0

      for (let i = 0; i < cart.length; i++) {
        sum += cart[i].quantity
      }
      return sum
    }
    setTotalQty(countSum())
  }

  useEffect(() => {
    fetch(GET_PRODUCTS, {
      credentials: 'include',
    })
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
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(keyword) ||
        product.activity.toLowerCase().includes(keyword)
    )
    setFilteredProducts(filtered)
  }

  useEffect(() => {
    if (router.isReady) {
      fetch(`${GET_PRODUCTS}`, {
        credentials: 'include',
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch')
          }
          return res.json()
        })
        .then((data) => {
          const { pid } = products.id
          const product = data.find((p) => p.id === Number(pid))
          if (product) {
            setProduct(product)
          } else {
            console.warn(`Product with id ${pid} not found`)
          }
          // 设置所有产品数据到 state 中，以便后续使用
          setProducts(data)
        })
        .catch((error) => {
          console.error('Error fetching products', error)
        })
    }
  }, [router.isReady, products.id])

  const checkCart = () => {
    const cart = localStorage.getItem('makin-cart')
    setCardData(cart)
  }

  useEffect(() => {
    checkCart()
    console.log(cartData)
  }, [cartData, router])

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <CarouselIndex />
      <div className={`${styles['mx-161']} ${styles['my-100']}`}>
        <div className="row">
          <div className={`col-md-3 col-12 mb-3`}>
            <div className="outline sticky-40">
              <div className="col-10 mx-auto">
                {/* 輸入框 */}
                <div className="my-4 col-12 text-white chr-h6">
                  請輸入商品名稱或活動名稱
                </div>
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

          <div className={`col-md-9`}>
            <div className={`chb-h3 text-white ${styles['ml-28']} mb-3`}>
              周邊商品
            </div>
            <div className={`row ${styles['ml-28']}`}>
              {filteredProducts.map((product, i) => (
                <div
                  key={product.id}
                  className={`card ${styles['card']} mb-3 me-3`}
                  style={{ width: '370px' }}
                >
                  <Link href={`/product/${product.id}`}>
                    <img
                      src={`/images/product/list/${product.picture}`}
                      className="card-img-top"
                      alt="Product"
                    />
                  </Link>
                  <div className={`card-body ${styles['bg-bk']}`}>
                    <p className={`card-text chb-h5 text-purple3`}>
                      {product.name}
                    </p>
                    <p className={`card-text chr-h7 text-white`}>
                      {product.activity}
                    </p>
                    <p className={`card-text chb-h6 text-white`}>
                      NT$ {product.price}
                    </p>
                    <div className={`${styles['text-center']}`}>
                      <DesktopBlackNoIconBtnPurple
                        text="加入購物車"
                        className={`chb-p`}
                        onClick={(e) => {
                          addToCart(e, i)
                        }}
                      />
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
          border: 1px solid #685beb;
        }
        .input-p3 {
          border: 1px solid #dbd7ff;
          background-color: #272727;
          color: white;
        }
        ::placeholder {
          color: white;
          opacity: 0.5;
        }
        input[type='date']::-webkit-calendar-picker-indicator {
          cursor: pointer;
           {
            /* border-radius: 4px; */
          }
           {
            /* margin-right: 2px; */
          }
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
