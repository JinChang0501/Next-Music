import MemberDLayout from '@/components/member/desktop-layout'
import React, { useEffect, useState } from 'react'
import TicketDetail from '@/components/member/desktop-layout/ticket-detail'
import { GET_TICKET_DETAIL } from '@/configs/api-path'
import { useRouter } from 'next/router'

export default function TicketDetailPage() {
  const router = useRouter()

  const [ticketData, setTicketData] = useState([])
  console.log(ticketData)
  const [data, setData] = useState({
    success: false,
    data: {},
  })
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const order_num = router.query.order_num

    console.log('下面是router.query')

    console.log(router.query)

    const url = `${GET_TICKET_DETAIL}/${order_num}`
    // new URLSearchParams(router.query) 這塊應該是搜尋結果的query string
    fetch(url, {
      signal,
      credentials: 'include',
    })
      .then((r) => r.json())
      .then((myData) => {
        console.log('--------------------------')
        console.log(data)
        setData(myData)
        console.log('----------myData---------')
        console.log(myData)
        console.log('----------myData.data.result---------')

        setTicketData(myData.data.result) //物件陣列
        console.log(myData.data.result)
      })
      .catch((ex) => {
        console.log('fetch-ex', ex)
      })
    return () => {
      controller.abort() // 取消上一次的 ajax
    }
  }, [router])
  return (
    <>
      <TicketDetail ticketData={ticketData} />
    </>
  )
}
TicketDetailPage.getLayout = function getLayout(page) {
  return (
    <MemberDLayout title="Makin | 票夾訂單明細" pageName="ticket-order">
      {page}
    </MemberDLayout>
  )
}
