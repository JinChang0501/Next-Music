import React from 'react'
import Head from 'next/head'
import Nav from './nav'
import Footer from './footer'

export default function DefaultLayout({ title = 'Music', children }) {
  return (
    <>
      <div className="stickyfooter">
        <Head>
          <title>{title}</title>
          <meta name="viewport" content="width=device-width" />
        </Head>
        <Nav />
        <main className="flex-shrink-0">
          <div className="container">
            <div>{children}</div>
          </div>
          {/* 全域的載入動畫指示器 */}
          {/* {loader()} */}
        </main>
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
