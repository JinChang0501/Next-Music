import Head from 'next/head'
import Nav from '../default-layout/nav'
import Footer from '../default-layout/footer'
// 多個地方需使用到 title 這個 props，所以 import TitleContextProvider
import { TitleContextProvider } from '@/context/ticket/useTitle'

export default function TicketWhiteLayout({ children, title = '' }) {
  return (
    <TitleContextProvider title={title}>
      <Head>
        <title>{title ? 'Ticket | ' + title : 'Ticket'}</title>
      </Head>
      <div className="d-flex flex-column vh-100 overflow-y-scroll">
        <Nav />
        <main className="flex-grow-1 bg-white">
          <div className="music-container">{children}</div>
        </main>
        <Footer />
      </div>
    </TitleContextProvider>
  )
}
