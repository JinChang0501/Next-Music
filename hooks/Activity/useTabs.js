import React, { useContext } from 'react'
import { createContext } from 'react'
import { useState } from 'react'

const TabContext = createContext(null)

export default function TabProvider({ children }) {
  const [activeTab, setActiveTab] = useState('activity') //頁籤 預設先給activity

  const handleTabChange = (tabs) => {
    setActiveTab(tabs)
  }

  return (
    <>
      <TabContext.Provider
        value={{
          handleTabChange,
          activeTab,
        }}
      >
        {children}
      </TabContext.Provider>
    </>
  )
}

export const useTabs = () => useContext(TabContext)
