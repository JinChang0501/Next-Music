import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Nav from '../default-layout/nav'
import Footer from '../default-layout/footer'
import Loader from './loader'
import style from './loader.module.scss' // 引入 CSS 模組

export default function HomeLayout({
  title = 'Makin',
  children,
  showLoader = false,
}) {
  const [loading, setLoading] = useState(showLoader)

  useEffect(() => {
    let timer

    if (showLoader) {
      setLoading(true)
      timer = setTimeout(() => {
        setLoading(false)
      }, 1500)
    } else {
      setLoading(false)
    }

    return () => clearTimeout(timer)
  }, [showLoader])

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {loading ? (
        <div className={`${style.loaderWrapper}`}>
          <Loader />
        </div>
      ) : (
        <div className="d-flex flex-column vh-100">
          <Nav />
          <main className="flex-grow-1 bg-dark">{children}</main>
          <Footer />
        </div>
      )}
    </>
  )
}
