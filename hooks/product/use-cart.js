import { createContext, useContext, useState } from 'react'
import data from '@/data/product/Product.json'

// 1. 建立與導出context
const CartContext = createContext(null)

// 2. 建立一個Context Provider(提供者)元件
// 目的: 提供給最上層元件(_app.js)方便使用，共享狀態在這裡面統一管理
// children指的是被包覆在CartProvider中的所有子女元件
export function CartProvider({ children }) {
  // items代表購物車中的項目，初始值為空陣列
  const [items, setItems] = useState([])
  const [cart, setCart] = useState(data)

  // 遞增項目
  const increaseItem = (id) => {
    const nextItems = items.map((v, i) => {
      // 如果符合(id=傳入的id)，遞增qty的數量
      if (v.id === id) return { ...v, qty: v.qty + 1 }
      // 否則保持原本的物件值
      else return v
    })

    setItems(nextItems)
  }

  // 遞減項目
  const decreaseItem = (id) => {
    const nextItems = items.map((v, i) => {
      // 如果符合(id=傳入的id)，遞減qty的數量
      if (v.id === id) return { ...v, qty: v.qty - 1 }
      // 否則保持原本的物件值
      else return v
    })

    setItems(nextItems)
  }

  // 移除項目
  const removeItem = (id) => {
    const nextItems = items.filter((v) => {
      return v.id !== id
    })
    setItems(nextItems)
  }

  // 新增項目
  const addItem = (product) => {
    // 先尋找商品是否已在購物車項目中(沒有找到的話會回傳-1)
    const foundIndex = items.findIndex((v) => v.id === product.id)

    if (foundIndex > -1) {
      // 如果有找到的話===>遞增商品數量
      increaseItem(product.id)
    } else {
      // 否則===>新增項目
      // 擴充qty數字屬性，預設為1
      const newItem = { ...product, qty: 1 }
      const nextItems = [newItem, ...items]
      setItems(nextItems)
    }
  }

  // 計算總金額
  const calcTotalPrice = () => {
    let total = 0

    for (let i = 0; i < items.length; i++) {
      total += items[i].qty * items[i].price
    }

    return total
  }

  // 計算總數量
  const calcTotalQty = () => {
    let total = 0

    for (let i = 0; i < items.length; i++) {
      total += items[i].qty
    }

    return total
  }

  // 用陣列迭代方法reduce來計算總金額/總數量
  const totalQty = cart.reduce((acc, p) => acc + p.quantity, 0)
  const totalPrice = items.reduce((acc, p) => acc + p.quantity * p.price, 0)

  return (
    <CartContext.Provider
      // 使用value屬性提供資料給元件階層以下的所有後代元件(如果是消費者的話)
      value={{
        items,
        totalQty,
        totalPrice,
        addItem,
        increaseItem,
        decreaseItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// 3. 建立一個包裝useContext的專用名稱函式
// 目的: 讓消費者們(consumer)方便使用，呼叫useCart就可以取得共享狀態
export const useCart = () => useContext(CartContext)