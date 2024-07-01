import React from 'react'
import Head from 'next/head'
// 多個地方需使用到 title 這個 props，所以 import TitleContextProvider
import { TitleContextProvider } from '@/context/ticket/useTitle'

export default function FixedContentLayout({ children, title = '' }) {
  return (
    <TitleContextProvider title={title}>
      <Head>
        <title>{title ? 'Ticket | ' + title : 'Ticket'}</title>
      </Head>
      <div className="d-flex flex-column vh-100">
        <main>
          <div className="music-container h-100">{children}</div>
        </main>
      </div>
    </TitleContextProvider>
  )
}
