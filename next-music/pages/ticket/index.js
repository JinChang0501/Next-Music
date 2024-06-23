import React from 'react'
import TicketLayout from '@/components/layout/ticket-layout'
import Image from 'next/image'

export default function Ticket() {
  return (
    <div className="h-100 d-flex">
      <div className="h-100 col-7 position-relative">
        <Image
          src="/images/ticket/test.jpg"
          alt="test"
          layout="fill" // 使用 layout="fill" 來填充父元素的大小
        />
      </div>
      <div className="h-100 col-5 bg-info overflow-x-hidden overflow-y-auto">
        <div style={{ height: '5000px' }}>EEE</div>
      </div>
    </div>
  )
}

Ticket.getLayout = function getLayout(page) {
  return <TicketLayout>{page}</TicketLayout>
}
