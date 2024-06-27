import Footer from '@/components/layout/default-layout/footer'
import Head from 'next/head'
import Nav from '@/components/layout/default-layout/nav'
import LeftBar from './left-bar'
import { useEffect, useState, useRef } from 'react'
import PhoneBar from './phone-bar'

export default function MemberDLayout({ title = 'Music | 會員', children }) {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 576) // 螢幕寬度 > 576px 為電腦板
    }

    handleResize() // 初始設定一次

    window.addEventListener('resize', handleResize) // 監聽視窗大小變化

    return () => window.removeEventListener('resize', handleResize) // 清除事件監聽器
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="fixed-top w-100">
        <Nav />
      </div>
      {isDesktop ? (
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 p-0">
              <LeftBar />
            </div>
            <div className="col-10 p-0 main-content pb-5">
              <div className="music-container overflow-auto">
                <div className="mx-auto mt-3">{children}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <PhoneBar />
            </div>
          </div>
          <div className="row">
            <div className="col-12 main-content pb-5 mx-auto px-0 my-3">
              <div className="music-container overflow-auto py-3">
                <div className="mx-auto mb-3">{children}</div>
              </div>
            </div>
          </div>
        </div>
      )}
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
        /* 新增的 CSS */
        @media (max-width: 576px) {
          .col-12 {
            width: 100% !important;
          }
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
