import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="zh-TW" className="h-100">
      <Head>
        {/* 如有需要加 link 放在 Head 標籤裡面 */}
        {/* initial-scale=1：設置頁面初次載入時的縮放比例為 1 */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="d-flex flex-column h-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
