import React from 'react'
import Head from 'next/head'
import Nav from './nav'
import Footer from './footer'

const DefaultLayout = ({ title = 'Music', children }) => {
  return (
    <div className="stickyfooter">
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container">
        <Nav />
        <div className="content">{children}</div>
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
  )
}

export default DefaultLayout
