import { useState, useEffect } from 'react'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import styles from '@/styles/product/product.module.scss'
import CartLayout from '@/components/layout/cart-layout'
import ProgressBarThree from '@/components/product/progressBarThree'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import data from '@/data/product/Product.json'
import Link from 'next/link'
import { useShip711StoreOpener } from '@/hooks/use-ship-711-store'
// 會員
import { getUserById } from '@/services/user'
import { useAuth } from '@/hooks/use-auth'
const initUserProfile = {
  name: '',
  email: '',
  mobile: '',
  birthday: '',
  gender: '',
  address: '',
  avatar: '',
}

export default function Complete() {
  const breadcrumbsURL = [
    { label: '周邊商城', href: '/product' },
    { label: '商品資訊', href: '/product[pid]' },
    { label: '購物車', href: '/cart' },
  ]
  const { store711, openWindow, closeWindow } = useShip711StoreOpener(
    'http://localhost:3005/api/shipment/711'
  )
  const storeKey = 'store711'

  const [userProfile, setUserProfile] = useState([])
  // 會員
  const { auth } = useAuth()
  const getUserData = async (id) => {
    const res = await getUserById(id)

    console.log(res.data)

    if (res.data.status === 'success') {
      // 以下為同步化目前後端資料庫資料，與這裡定義的初始化會員資料物件的資料
      const dbUser = res.data.data.user
      const dbUserProfile = { ...initUserProfile }

      for (const key in dbUserProfile) {
        if (Object.hasOwn(dbUser, key)) {
          // 這裡要將null值的預設值改為空字串 ''
          dbUserProfile[key] = dbUser[key] || ''
        }
      }

      // 設定到狀態中
      setUserProfile(dbUserProfile)
    }
  }

  const clearLocalStorageStore = () => {
    localStorage.removeItem(storeKey)
  }
  // auth載入完成後向資料庫要會員資料
  useEffect(() => {
    if (auth.isAuth) {
      getUserData(auth.userData.id)
    }
    // eslint-disable-next-line
  }, [auth])

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <ProgressBarThree />
      {/* <Link href="/product/cart">連至購物車</Link> */}
      <div className={`row  ${styles['mb-40']} ${styles['center-item']}`}>
        <div className={`first chb-h4 ${styles['my-20']} ${styles['w-800']}`}>
          已收到訂單，感謝您的購買
        </div>
        <div className={`second ${styles['my-20']} ${styles['w-800']}`}>
          <p className="chb-p">訂單編號: Aa10032</p>
          {/* 表格 */}
          <table className={`table table-bordered border-dark`}>
            <thead>
              <tr className={``}>
                <th
                  className={`chb-h6 ${styles['w-160']} ${styles['text-center-x']}`}
                >
                  收貨人
                </th>
                <th className={`chb-h6 ${styles['text-center-x']}`}>
                  {userProfile.name}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={``}>
                <td
                  className={`chb-h6 ${styles['w-160']} ${styles['text-center-x']}`}
                >
                  收貨地點
                </td>
                <td className={`chb-h6 ${styles['text-center-x']}`}>
                  {store711.storename}({store711.storeaddress})
                </td>
              </tr>
              <tr className={`chb-h6 `}>
                <td colspan="2" className={``}>
                  <p>
                    您訂購的商品預計3-7個工作日後抵達取貨門市，商品抵達時會發送手機簡訊通知您，
                    屆時請至門市取貨付現。
                  </p>
                  <p>
                    商品抵達七天後若您未取貨，商品將會退回本公司，此筆訂單將被取消。
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className={`third text-secondary ${styles['my-20']} ${styles['w-800']}`}
        >
          <p className={`chr-p  ${styles['mt-40']}`}>
            本網頁只是確認本系統已收到您的訂購訊息、並供您再次自行核對之用，不代表交易已經完成。如果您所訂購的商品仍有存貨、且交易條件經確認無誤，我們才會出貨至您所指定的超商門市，只有當我們收到全部商品總額，您的付款程序才算完成。
          </p>
          <p className="chr-p">
            本公司絕不會主動以電話或簡訊通知顧客變更付款方式！如接獲任何電話號碼之來電，要求變更付款方式或ATM任何操作等，請不要理會該通電話！
          </p>
        </div>

        {/* <div className={`chb-h6 ${styles['mt-40']} ${styles['']}`}>
            『訂單查詢』您可至會員中心的「周邊商品購買紀錄」，登入查詢您的訂單處理情形。
          </div> */}
        <div
          className={`fourth ${styles['my-40']} ${styles['w-800']} ${styles['text-center-x']}`}
        >
          <Link href={`/member/store-order`}>
            <DesktopBlackNoIconBtnPurple
              text="訂單查詢"
              className={`chb-h6 ${styles['btn-761']} ${styles['mb-30']}`}
              onClick={clearLocalStorageStore}
            />
          </Link>
          <Link href={`/product`}>
            <DesktopBlackNoIconBtnPurple
              text="回到周邊商城"
              className={`chb-h6 ${styles['btn-761']}`}
              onClick={clearLocalStorageStore}
            />
          </Link>
        </div>
      </div>
    </>
  )
}

Complete.getLayout = function getLayout(page) {
  return <CartLayout title="complete">{page}</CartLayout>
}
