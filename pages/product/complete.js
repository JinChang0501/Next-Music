import { useEffect } from 'react'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import styles from '@/styles/product/product.module.scss'
import CartLayout from '@/components/layout/cart-layout'
import ProgressBar from '@/components/product/progressBar'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'

export default function Complete() {
  const breadcrumbsURL = [
    { label: '周邊商城', href: '/' },
    { label: '商品資訊', href: '/product[pid]' },
    { label: '購物車', href: '/product/cart' },
  ]
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <ProgressBar />
      {/* <Link href="/product/cart">連至購物車</Link> */}
      <div className={`row  ${styles['mb-40']} ${styles['center-item']}`}>
        <div className={`first chb-h4 ${styles['my-20']} ${styles['w-800']}`}>
          已收到訂單，感謝您的購買
        </div>
        <div className={`second ${styles['my-20']} ${styles['w-800']}`}>
          <p className='chb-p'>訂單編號: 00001111</p>
          {/* 表格 */}
          <table className={`table table-bordered border-dark`}>
            <thead>
              <tr className={``}>
                <th className={`chb-h6 ${styles['w-160']} ${styles['text-center-x']}`}>收貨人</th>
                <th className={`chb-h6 ${styles['text-center-x']}`}>黃大安</th>
              </tr>
            </thead>
            <tbody>
              <tr className={``}>
                <td className={`chb-h6 ${styles['w-160']} ${styles['text-center-x']}`}>收貨地點</td>
                <td className={`chb-h6 ${styles['text-center-x']}`}>7-11 大安門市(台北市大安區信義路三段178號1樓)</td>
              </tr>
              <tr className={`chb-h6 `}>
                <td colspan="2" className={``}>
                  <p>您訂購的商品預計3-7個工作日後抵達取貨門市，商品抵達時會發送手機簡訊通知您，
                  屆時請至門市取貨付現。</p>
                  <p>商品抵達七天後若您未取貨，商品將會退回本公司，此筆訂單將被取消。</p>
                </td>
              </tr>
          </tbody>
          </table>
          
        </div>
        <div className={`third text-secondary ${styles['my-20']} ${styles['w-800']}`}>
          <p className={`chr-p  ${styles['mt-40']}`}>本網頁只是確認本系統已收到您的訂購訊息、並供您再次自行核對之用，不代表交易已經完成。如果您所訂購的商品仍有存貨、且交易條件經確認無誤，我們才會出貨至您所指定的超商門市，只有當我們收到全部商品總額，您的付款程序才算完成。</p>
          <p className='chr-p'>本公司絕不會主動以電話或簡訊通知顧客變更付款方式！如接獲任何電話號碼之來電，要求變更付款方式或ATM任何操作等，請不要理會該通電話！</p>
          
        </div>

        {/* <div className={`chb-h6 ${styles['mt-40']} ${styles['']}`}>
            『訂單查詢』您可至會員中心的「周邊商品購買紀錄」，登入查詢您的訂單處理情形。
          </div> */}
        <div className={`fourth ${styles['my-40']} ${styles['w-800']}`}>
          <DesktopBlackNoIconBtnPurple text="訂單查詢" className={`chb-h6 ${styles['btn-760']} ${styles['mb-30']}`} 

          />
          <DesktopBlackNoIconBtnPurple text="回到周邊商城" className={`chb-h6 ${styles['btn-760']}`} />
        </div>
      </div>
    </>
  )
}

Complete.getLayout = function getLayout(page) {
  return <CartLayout title="complete">{page}</CartLayout>
}
