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
        </Head>
        <Nav />

        <div className="container h-100 d-inline-block">
          <div>{children}</div>
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
