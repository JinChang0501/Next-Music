import React, { createContext, useContext, useState } from 'react'

const TicketContext = createContext()

export const useTicketContext = () => {
  return useContext(TicketContext)
}

export const TicketProvider = ({ children }) => {
  const [actid, setActid] = useState(null)
  const [tickets, setTickets] = useState([])
  const [selectedSeatDetails, setSelectedSeatDetails] = useState([])
  const [selectedCount, setSelectedCount] = useState(1)
  const [selectedTickets, setSelectedTickets] = useState([])

  return (
    <TicketContext.Provider
      value={{
        actid,
        setActid,
        tickets,
        setTickets,
        selectedSeatDetails,
        setSelectedSeatDetails,
        selectedCount,
        setSelectedCount,
        selectedTickets,
        setSelectedTickets,
      }}
    >
      {children}
    </TicketContext.Provider>
  )
}
