import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { GET_PRODUCTS } from '@/configs/api-path'
import toast, { Toaster } from 'react-hot-toast'
// 會員
import { getUserById } from '@/services/user'
import { useAuth } from '@/hooks/use-auth'
import { useRouter } from 'next/router'

const TotalContext = createContext(null)
const initUserProfile = {
  name: '',
  email: '',
  mobile: '',
  birthday: '',
  gender: '',
  address: '',
  avatar: '',
}
const initOrderNum = 0
export function TotalProvider({ children }) {
  const [product, setProduct] = useState(null)
  const [products, setProducts] = useState([])
  const cartKey = 'makin-cart'
  const storeKey = 'store711'
  const [orderNum, setOrderNum] = useState(initOrderNum)
  const [cart, setCart] = useState([])
  const [cartData, setCartData] = useState([])
  const [items, setItems] = useState([])
  const [totalQty, setTotalQty] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  // const [cartDatas, setCardDatas] = useState([])
  const router = useRouter()
  const [userProfile, setUserProfile] = useState([])

  // const breadcrumbsURL = [
  //   { label: '周邊商城', href: '/product' },
  //   { label: '商品資訊', href: '/product[pid]' },
  //   { label: '購物車', href: '/cart' },
  // ]
  // 後端商品
  useEffect(() => {
    fetch(GET_PRODUCTS, {
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch products')
        }
        return res.json()
      })
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
        console.error('Error fetching products', error)
      })

    setCart(getCartFromStorage())
  }, [])
  const getCartFromStorage = () => {
    let cartData = []
    const oriData = localStorage.getItem(cartKey)
    console.log(oriData)
    try {
      cartData = JSON.parse(oriData)
      if (!Array.isArray(cartData)) {
        cartData = []
      }
    } catch (ex) {
      console.error('Error parsing cart data', ex)
    }
    return cartData
  }
  //
  const addToCart = () => {
    if (!product) return

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    }

    let cartData = localStorage.getItem('makin-cart')

    if (cartData) {
      setCart(JSON.parse(cartData))
    }

    const existingItem = cart.find((item) => item.id === cartItem.id)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push(cartItem)
    }

    localStorage.setItem('makin-cart', JSON.stringify(cart))

    const qty = cart.reduce((total, item) => total + item.quantity, 0)
    setTotalQty(qty)

    toast.success(`本商品已成功加入購物車`)
  }

  // 購物車內容
  useEffect(() => {
    setItems(
      cart.map((item) => ({
        ...item,
        ...products.find((product) => product.id === item.id),
      }))
    )

    let qty = 0
    let price = 0
    cart.forEach((item) => {
      qty += +item.quantity
      price += item.quantity * item.price
    })
    setTotalQty(qty)
    setTotalPrice(price)
  }, [cart, products])

  // 清除LocalStorage的資料
  const clearLocalStorageCart = () => {
    localStorage.removeItem(cartKey)
  }
  // 會員
  const { auth } = useAuth()
  const getUserData = async (id) => {
    const res = await getUserById(id)

    console.log(res.data)

    if (res.data.status === 'success') {
      // 以下為同步化目前後端資料庫資料，與這裡定義的初始化會員資料物件的資料
      const dbUser = res.data.data.user
      const dbUserProfile = { ...initUserProfile }

      for (const key in dbUserProfile) {
        if (Object.hasOwn(dbUser, key)) {
          // 這裡要將null值的預設值改為空字串 ''
          dbUserProfile[key] = dbUser[key] || ''
        }
      }

      // 設定到狀態中
      setUserProfile(dbUserProfile)
    }
  }

  // auth載入完成後向資料庫要會員資料
  useEffect(() => {
    if (auth.isAuth) {
      getUserData(auth.userData.id)
    }
    // eslint-disable-next-line
  }, [auth])

  return (
    <>
      <TotalContext.Provider
        value={{
          totalQty,
          setTotalQty,
          clearLocalStorageCart,
          userProfile,
          items,
          totalPrice,
          setOrderNum,
          orderNum,
        }}
      >
        {children}
      </TotalContext.Provider>
    </>
  )
}
export const useTotal = () => useContext(TotalContext)
