import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { useAuth } from './use-auth'

const RefreshContext = createContext(null)
export function RefreshProvider({ children }) {
  const [newFileName, setNewFileName] = useState('')
  const [update, setUpdate] = useState(false)

  return (
    <>
      <RefreshContext.Provider
        value={{
          newFileName,
          setNewFileName,
          update,
          setUpdate,
        }}
      >
        {children}
      </RefreshContext.Provider>
    </>
  )
}

export const useRefresh = () => useContext(RefreshContext)
