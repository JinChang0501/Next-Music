import { useEffect } from 'react'
// 樣式
import '@/styles/globals.scss'
import DefaultLayout from '@/components/layout/default-layout'
// Jin的自訂Provider -> 我的票夾
import { TabProvider } from '@/hooks/member/useTab'
import { ActTabProvider } from '@/hooks/Activity/useTabs'
import { AuthProvider } from '@/hooks/use-auth'
import { MusicFestivalProvider } from '@/context/ticket/selectNumber'
import LoginProvider from '@/hooks/use-login'
// Chloe 日曆樣式套件
import 'rsuite/dist/rsuite-no-reset.min.css'
import { CustomProvider } from 'rsuite'
import { CartProvider } from '@/hooks/product/use-cart'
import { TicketProvider } from '@/context/ticket/ticketContext'

export default function MyApp({ Component, pageProps }) {
  // 導入bootstrap的JS函式庫
  // 要document物件出現後才能導入 bootstrap的js函式庫
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])

  // 使用預設排版檔案
  // 對應`components/layout/default-layout/index.js` 或 `components/layout/default-layout.js`
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return (
    <LoginProvider>
      <AuthProvider>
        <CustomProvider>
          <CartProvider>
            <MusicFestivalProvider>
              <ActTabProvider>
                <TabProvider>
                  <TicketProvider>
                    {getLayout(<Component {...pageProps} />)}
                  </TicketProvider>
                </TabProvider>
              </ActTabProvider>
            </MusicFestivalProvider>
          </CartProvider>
        </CustomProvider>
      </AuthProvider>
    </LoginProvider>
  )
}
//Jin的自訂Provider -> 我的票夾
