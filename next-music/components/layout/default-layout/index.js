import React from 'react'
import Head from 'next/head'
import Nav from './nav'
import Footer from './footer'

export default function DefaultLayout({ title = 'Music', children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="d-flex flex-column vh-100">
        <Nav />
        {/* main 裡面放背景顏色或背景 */}
        <main className="flex-grow-1 bg-purple1">
          {/* 使用自定義 container */}
          <div className="music-container">
            {children}
            {/* 全域的載入動畫指示器 */}
            {/* {loader()} */}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
