import React from 'react'
import Head from 'next/head'

export default function HomeLayout({ title = "Mak'in", children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="d-flex flex-column vh-100">
        <main className="flex-grow-1 bg-black">{children}</main>
      </div>
    </>
  )
}
