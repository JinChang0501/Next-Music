import React, { createContext, useState } from 'react'

// 創建上下文
const TicketContext = createContext()

const TicketProvider = ({ children }) => {
  const [selectedNumber, setSelectedNumber] = useState(1)

  return (
    <TicketContext.Provider value={{ selectedNumber, setSelectedNumber }}>
      {children}
    </TicketContext.Provider>
  )
}

export { TicketContext, TicketProvider }
