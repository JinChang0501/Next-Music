import React, { useContext } from 'react'
import { createContext } from 'react'
import { useState } from 'react'

const TabContext = createContext(null)

export function ArtTabProvider({ children }) {
  const [artistTab, setartistTab] = useState('artist') //頁籤 預設先給artist

  const handleTabChange = (tabs) => {
    setartistTab(tabs)
  }

  return (
    <>
      <TabContext.Provider
        value={{
          handleTabChange,
          artistTab,
        }}
      >
        {children}
      </TabContext.Provider>
    </>
  )
}

export const useTabs = () => useContext(TabContext)
