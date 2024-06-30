import React, { useContext } from 'react'
import { createContext } from 'react'
import { useState } from 'react'

const TabContext = createContext(null)

export default function TabProvider({ children }) {
  const [activeTab, setActiveTab] = useState('allActivity') //頁籤 預設先給allActivity

  const handleTabChange = (tab) => {
    setActiveTab(tab)
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
