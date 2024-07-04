import { useState } from 'react'
import styles from '@/components/product/transport.module.scss'
import DesktopWhiteNoIconBtnBlack from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnBlack'

export default function Transport() {
  const [selected, setSelected] = useState(null) // 使用 null 初始狀態

  const handleCircleClick = (paymentMethod) => {
    setSelected((prev) => (prev === paymentMethod ? null : paymentMethod))
  }
  return (
    <>
      <div className={styles.transport}>
        <div className={styles.home}>
          <div className={styles.transportBlock}>
            <div className={styles.transportBlockLeft}>
              <button
                className={`${styles.transportCircle} ${
                  selected === 'ecPay' ? 'bg-black' : 'bg-white'
                }`}
                onClick={() => handleCircleClick('ecPay')}
              ></button>
              <div className="chb-h6">宅配到府</div>
            </div>
            <div className={styles.ecPayImage}></div>
          </div>
          <div className={styles.transportBlock}>
            <div className="mt-3">
              <p for="exampleInputEmail1" className="chb-p">收件地址</p>
              <input type="text" className=     {`form-control ${styles['w-500']}`} />
            </div>
          </div>
        </div>
        <div className={styles.market}></div>
      </div>
{/* 舊 */}
          
            <div className="form-check chb-h6">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  checked/>
              <p className={`form-check-label ${styles['mt-28']}`} for="flexRadioDefault2">
                7-11超商付款取貨
              </p>
              {/* <DesktopWhiteNoIconBtnBlack text="選擇門市" className={`chb-h6 ${styles['h-40']}`} onClick={() => {
                openWindow()}}/> */}
              <DesktopWhiteNoIconBtnBlack text="選擇門市" className={`chb-h6 ${styles['h-40']}`}/>
              {/* 門市名稱: <input type="text" value={store711.storename} disabled /> */}
              <p className={`${styles['mt-28']}`}>門市名稱</p> <input type="text" className={`form-control ${styles['w-180']}`}   disabled />
              {/* 門市地址: <input type="text" value={store711.storeaddress} disabled /> */}
              <p className={`${styles['mt-28']}`}>門市地址</p><input type="text" className={`form-control ${styles['w-500']}`} disabled />
            </div>
      
    </>
  )
}
