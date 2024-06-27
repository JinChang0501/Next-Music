import Head from 'next/head'
import Nav from '../default-layout/nav'
import Footer from '../default-layout/footer'

export default function TicketFormLayout({ children, title = '' }) {
  return (
    <>
      <Head>
        <title>{title ? 'Ticket | ' + title : 'Ticket'}</title>
      </Head>
      <div className="d-flex flex-column vh-100">
        <Nav />
        <main className="flex-grow-1 bg-white">
          <div className="music-container">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  )
}
