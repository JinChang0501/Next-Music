import React, { createContext, useContext, useState, useEffect } from 'react'

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

  useEffect(() => {
    const storedActid = localStorage.getItem('actid')
    const storedTickets = localStorage.getItem('tickets')
    const storedSelectedSeatDetails = localStorage.getItem(
      'selectedSeatDetails'
    )
    const storedSelectedCount = localStorage.getItem('selectedCount')
    const storedSelectedTickets = localStorage.getItem('selectedTickets')

    if (storedActid) setActid(JSON.parse(storedActid))
    if (storedTickets) setTickets(JSON.parse(storedTickets))
    if (storedSelectedSeatDetails)
      setSelectedSeatDetails(JSON.parse(storedSelectedSeatDetails))
    if (storedSelectedCount) setSelectedCount(JSON.parse(storedSelectedCount))
    if (storedSelectedTickets)
      setSelectedTickets(JSON.parse(storedSelectedTickets))
  }, [])

  useEffect(() => {
    localStorage.setItem('actid', JSON.stringify(actid))
    localStorage.setItem('tickets', JSON.stringify(tickets))
    localStorage.setItem(
      'selectedSeatDetails',
      JSON.stringify(selectedSeatDetails)
    )
    localStorage.setItem('selectedCount', JSON.stringify(selectedCount))
    localStorage.setItem('selectedTickets', JSON.stringify(selectedTickets))
  }, [actid, tickets, selectedSeatDetails, selectedCount, selectedTickets])

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
