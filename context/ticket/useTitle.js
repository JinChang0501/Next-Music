import React, { createContext, useContext } from 'react'

// Context 提供了一種在 React 組件樹中共享值的方法，
// 而不需要顯式地通過 props 一層層地傳遞
const TitleContext = createContext()

// 定義一個 Context Provider 組件 TitleContextProvider。
// 這個組件接收 title 和 children 兩個 props
export function TitleContextProvider({ title, children }) {
  return <TitleContext.Provider value={title}>{children}</TitleContext.Provider>
}

// 定義一個 useTitle 函數，使用 useContext 鉤子來訪問 TitleContext 中的值
// 可以方便地獲取共享的 title 值，而不需要直接使用 useContext(TitleContext)
export const useTitle = () => useContext(TitleContext)

// 將 TitleContext 作為默認導出，使得其他文件可以方便地導入這個 Context 物件
export default TitleContext
