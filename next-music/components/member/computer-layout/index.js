import Footer from '@/components/layout/default-layout/footer'
import Head from 'next/head'
import Nav from '@/components/layout/default-layout/nav'
import LeftBar from './left-bar'

export default function MemberDLayout({ title = 'Music | 會員', children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="fixed-top w-100">
        <Nav />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 p-0">
            <LeftBar />
          </div>
          <div className="col-10 p-0 main-content pb-5">
            <div className="container overflow-auto">{children}</div>
          </div>
        </div>
      </div>
      <div className="fixed-bottom w-100">
        <Footer />
      </div>

      <style jsx>{`
        .overflow-auto {
          overflow-y: auto;
        }
        .fixed-left {
          position: fixed;
          top: 56px;
          left: 0;
          bottom: 56px;
          z-index: 1000; /* 可以根據需要調整z-index值 */
        }

        .main-content {
          margin-top: 60px; /* Navbar的高度 */
          padding-left: 20px; /* 左側欄位的寬度 */
          overflow-y: auto;
          height: calc(100vh - 117px); /* 計算剩餘高度，扣除navbar的高度 */
        }
      `}</style>
    </>
  )
}
// .main-content {
//   margin-top: 60px; /* Navbar的高度 */
//   padding-left: 20px; /* 左側欄位的寬度 */
//   overflow-y: auto;
//   height: calc(100vh - 60px); /* 計算剩餘高度，扣除navbar的高度 */
// }
