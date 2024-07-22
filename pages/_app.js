import { useEffect } from 'react'
// 樣式
import '@/styles/globals.scss'
import DefaultLayout from '@/components/layout/default-layout'
// Jin的自訂Provider -> 我的票夾
import { TabProvider } from '@/hooks/member/useTab'
import { ActTabProvider } from '@/hooks/Activity/useTabs'
import { AuthProvider } from '@/hooks/use-auth'
import LoginProvider from '@/hooks/use-login'
// Chloe 日曆樣式套件
import 'rsuite/dist/rsuite-no-reset.min.css'
import { CustomProvider } from 'rsuite'
import zhCN from 'rsuite/locales/zh_CN'
import { CartProvider } from '@/hooks/product/use-cart'
import { TicketProvider } from '@/context/ticket/ticketContext'
import { FavProvider } from '@/hooks/use-Fav'
import { CountdownProvider } from '@/context/ticket/countdownContext'
import { SpotifyAuthProvider } from '@/hooks/use-SpotifyAuth'
import { RefreshProvider } from '@/hooks/useRefresh'
import { TotalProvider } from '@/hooks/product/use-Total'
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
      <RefreshProvider>
        <AuthProvider>
          <SpotifyAuthProvider>
            <FavProvider>
              <CustomProvider locale={zhCN}>
                <TotalProvider>
                  <CartProvider>
                    <TicketProvider>
                      <ActTabProvider>
                        <CountdownProvider>
                          <TabProvider>
                            {getLayout(<Component {...pageProps} />)}
                          </TabProvider>
                        </CountdownProvider>
                      </ActTabProvider>
                    </TicketProvider>
                  </CartProvider>
                </TotalProvider>
              </CustomProvider>
            </FavProvider>
          </SpotifyAuthProvider>
        </AuthProvider>
      </RefreshProvider>
    </LoginProvider>
  )
}
//Jin的自訂Provider -> 我的票夾
