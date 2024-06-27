import { useEffect } from 'react'
import styles from '@/styles/product/product.module.scss'
import CartLayout from '@/components/layout/cart-layout'
import ProgressBar from '@/components/product/progressBar'


export default function Payment() {
  return (
    <>
      <ProgressBar />
      {/* <Link href="/product/cart">連至購物車</Link> */}
      <div className={`first ${styles['my-20']}`}>
        <p className='chb-h5'>購買商品 </p>
        {/* 表格 */}
        <table className={`table table-bordered border-dark`}>
          <thead>
            <tr className={`${styles['h-54']}`}>
              <th><p className={`chb-p ${styles['text-center']}`}>商品圖片</p></th>
              <th><p className={`chb-p ${styles['text-center']}`}>商品名稱</p></th>
              <th><p className={`chb-p ${styles['text-center']}`}>價格</p></th>
              <th><p className={`chb-p ${styles['text-center']}`}>數量</p></th>
              <th><p className={`chb-p ${styles['text-center']}`}>小計</p></th>
            </tr>
          </thead>
          <tbody>
            <tr className={`${styles['h-120']} `}>
              <td>
                <p className={`chb-p ${styles['text-center']}`}>
                <img className={`${styles['wh-100']}`} src="/images/product/list/red_baseball-cap.jpg" />
                </p>
              </td>
              <td>
                <p className={`chb-p ${styles['text-center']}`}>夢幻樂園演唱會</p>
                <p className={`chb-p ${styles['text-center']}`}>棒球帽-紅</p>
              </td>
              <td><p className={`chb-p ${styles['text-center']}`}>價格</p></td>
              <td><p className={`chb-p ${styles['text-center']}`}>數量</p></td>
              <td><p className={`chb-p ${styles['text-center']}`}>小計</p></td>
            </tr>
          </tbody>
        </table>
        <div className={`${styles['mt-40']} ${styles['payment-first']}`}>
          <span className='chb-h5'>共1項商品，數量2個</span>
          <span className='chb-h5'>總價:NT$1400元 </span>
        </div>
      </div>
      <div className={`second ${styles['mt-40']}`}>
        <p className='chb-h5'>請確認收貨人基本資訊</p>
        {/* 表單 */}
        <form>
          <div className="mb-3">
            <p for="exampleInputEmail1" className="chb-p">姓名</p>
            <input type="email" className={`form-control ${styles['w-400']}`} id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <p for="exampleInputEmail1" className={`chb-p ${styles['mt-28']}`}>電子郵件</p>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text chb-p text-black40">購買後確認信將發送至此電子郵件</div>
          </div>
          <div className="mb-3">
            <p for="exampleInputEmail1" className={`chb-p ${styles['mt-28']}`}>手機號碼</p>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text chb-p text-black40">到貨時通知將發送至此手機號碼</div>
          </div>
  
</form>
      </div>
      <div className={`third ${styles['mt-40']}`}>
        <p className='chb-h5'>請選擇配送方式</p>
      </div>
      <div className={`fourth ${styles['mt-40']}`} disabled>
        <p className='chb-h5'>選擇『宅配到府』，請選擇付款方式</p>
      </div>
    </>
  )
}

Payment.getLayout = function getLayout(page) {
  return <CartLayout title="payment">{page}</CartLayout>
}