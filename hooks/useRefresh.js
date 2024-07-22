import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const RefreshContext = createContext(null)
export function RefreshProvider({ children }) {
  const [trigger, setTrigger] = useState(0)
  return (
    <>
      <RefreshContext.Provider value={{ trigger, setTrigger }}>
        {children}
      </RefreshContext.Provider>
    </>
  )
}

export const useRefresh = () => useContext(RefreshContext)
