// context/TicketContext.js
import React, { createContext, useState, useContext } from 'react'

const TicketContext = createContext()

export const TicketProvider = ({ children }) => {
  const [selectedSeatDetails, setSelectedSeatDetails] = useState([])
  const [actid, setActid] = useState(null)

  return (
    <TicketContext.Provider
      value={{ selectedSeatDetails, setSelectedSeatDetails, actid, setActid }}
    >
      {children}
    </TicketContext.Provider>
  )
}

export const useTicketContext = () => useContext(TicketContext)
