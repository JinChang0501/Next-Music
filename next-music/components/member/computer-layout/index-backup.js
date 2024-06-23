import Footer from '@/components/layout/default-layout/footer'
import MNavbar from './leftbar'
import Head from 'next/head'
import Nav from '@/components/layout/default-layout/nav'

export default function MemberDLayout({ title = 'Music | 會員', children }) {
  return (
    <>
      <div className="stickyfooter">
        <Head>
          <title>{title}</title>
        </Head>
        <Nav />

        <div className="container-fluid flex-grow-1">
          <div className="row h-100">
            <div className="col-2 bg-black6">
              <MNavbar />
            </div>
            <div className="col-10">
              <div className="container">{children}</div>
            </div>
          </div>
        </div>

        <Footer />
        <style jsx>{`
          .stickyfooter {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          .container-fluid {
            flex-grow: 1;
          }
          .row.h-100 {
            height: 100%;
          }
        `}</style>
      </div>
    </>
  )
}
