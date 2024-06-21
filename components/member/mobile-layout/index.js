// 自訂版面的建立語法，可以讓每個頁面套用自己的排版(layout)
import Footer from '@/components/layout/default-layout/footer'
import MNavbar from './mNavbar'
import Head from 'next/head'
import Nav from '@/components/layout/default-layout/nav'

// https://github.com/mfee-react/project-guide/blob/main/project-docs/3.howto-layout.md
MNavbar
export default function MemberMLayout({ title = 'Music | 會員', children }) {
  return (
    <>
      <div className="stickyfooter">
        <Head>
          <title>{title}</title>
        </Head>
        <Nav />
        <div className="container">
          <div className="row">
            {/* <div className="col-3 bg-purple3">
              <MNavbar />
            </div> */}
            <div className="col-9">
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
        `}</style>
      </div>
    </>
  )
}
