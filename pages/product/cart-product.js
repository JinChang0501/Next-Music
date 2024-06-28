import { useEffect } from 'react'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import styles from '@/styles/product/product.module.scss'
import CartLayout from '@/components/layout/cart-layout'
import ProgressBar from '@/components/product/progressBar'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'

export default function Cart() {
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
      <div className={`row ${styles['mx-400']} ${styles['mb-40']}`}>
        <div className={`first ${styles['my-20']}`}>
          <p className='chb-h5'>請確認購買商品 </p>
          {/* 表格 */}
          <table className={`table table-bordered border-dark`}>
            <thead>
              <tr className={`${styles['h-54']}`}>
                <th><p className={`chb-p ${styles['text-center']}`}>勾選</p></th>
                <th><p className={`chb-p ${styles['text-center']}`}>商品圖片</p></th>
                <th><p className={`chb-p ${styles['text-center']}`}>商品名稱</p></th>
                <th><p className={`chb-p ${styles['text-center']}`}>價格</p></th>
                <th><p className={`chb-p ${styles['text-center']}`}>數量</p></th>
                <th><p className={`chb-p ${styles['text-center']}`}>小計</p></th>
                <th><p className={`chb-p ${styles['text-center']}`}>操作</p></th>
              </tr>
            </thead>
            <tbody>
              <tr className={`${styles['h-120']}`}>
                <td>
                  <p className={`chb-p ${styles['text-center']}`}>
                    <div className="form-check">
                      <input className={`form-check-input ${styles['check-input']}`} type="checkbox" value="" id="flexCheck" />
                    </div>
                  </p>
                </td>
                <td>
                  <p className={`chb-p ${styles['text-center']}`}>
                    <img className={`${styles['wh-100']}`} src="/images/product/list/red_baseball-cap.jpg" />
                  </p>
                </td>
                <td>
                  <p className={`chb-p ${styles['text-center']}`}>夢幻樂園演唱會</p>
                  <p className={`chb-p ${styles['text-center']}`}>棒球帽-紅</p>
                </td>
                <td>
                  <p className={`chb-p ${styles['text-center']}`}>$700</p>
                </td>
                <td>
                  <p className={`chb-p ${styles['text-center']}`}>
                    <select className="form-select" aria-label="Default select example">
                      <option value="1" selected>1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="2">5</option>
                      <option value="3">6</option>
                      <option value="4">7</option>
                      <option value="2">8</option>
                      <option value="3">9</option>
                      <option value="4">10</option>
                    </select>
                  </p>
                </td>
                <td><p className={`chb-p ${styles['text-center']}`}>小計</p></td>
                <td>
                  <p className={`chb-p ${styles['text-center']}`}>
                    <DesktopBlackNoIconBtnPurple text="刪除" className={`chb-h6 ${styles['h-54']}`} />
                  </p>
                </td>
              </tr>
              <tr className={`${styles['h-120']} `}>
                <td>
                  <p className={`chb-p ${styles['text-center']}`}>
                    <div className="form-check">
                      <input className={`form-check-input ${styles['check-input']}`} type="checkbox" value="" id="flexCheck" />
                    </div>
                  </p>
                </td>
                <td>
                  <p className={`chb-p ${styles['text-center']}`}>
                    <img className={`${styles['wh-100']}`} src="/images/product/list/red_baseball-cap.jpg" />
                  </p>
                </td>
                <td>
                  <p className={`chb-p ${styles['text-center']}`}>夢幻樂園演唱會</p>
                  <p className={`chb-p ${styles['text-center']}`}>棒球帽-紅</p>
                </td>
                <td>
                  <p className={`chb-p ${styles['text-center']}`}>$700</p>
                </td>
                <td>
                  <p className={`chb-p ${styles['text-center']}`}>
                    <select className="form-select" aria-label="Default select example">
                      <option value="1" selected>1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="2">5</option>
                      <option value="3">6</option>
                      <option value="4">7</option>
                      <option value="2">8</option>
                      <option value="3">9</option>
                      <option value="4">10</option>
                    </select>
                  </p>
                </td>
                <td>
                  <p className={`chb-p ${styles['text-center']}`}>
                  
                  </p>
                </td>
                <td>
                  <p className={`chb-p ${styles['text-center']}`}>
                    <DesktopBlackNoIconBtnPurple text="刪除" className={`chb-h6 ${styles['h-54']}`} />
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={`${styles['mt-40']} ${styles['payment-first']}`}>
            <span className='chb-h5'>共1項商品，數量2個</span>
            <span className='chb-h5'>總價:NT$1400元 </span>
          </div>
        </div>
        <div className={`fifth ${styles['my-40']} `} disabled>
          <DesktopBlackNoIconBtnPurple text="結帳" className={`chb-h6 ${styles['btn-760']}`} />
        </div>
      </div>
    </>
  )
}
Cart.getLayout = function getLayout(page) {
  return <CartLayout title="cart">{page}</CartLayout>
}
