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
        <div className={styles.transportBlock}>
          <div className={styles.transportBlockHome}>
            <button
              className={`${styles.transportCircle} ${
                selected === 'ecPay' ? 'bg-black' : 'bg-white'
              }`}
              onClick={() => handleCircleClick('ecPay')}
            ></button>
            <div className="chb-h6">宅配到府
              <p for="exampleInputEmail1" className="chb-p mt-3">收件地址</p>
              <input type="text" className={`form-control ${styles['w-750']}`} />
            </div>
          </div>
        </div>
        <div className={`${styles['transportBlock']} ${styles['mt-40']}`}>
          <div className={styles.transportBlockMarkt}>
            <button
              className={`${styles.transportCircle} ${
                selected === 'market' ? 'bg-black' : 'bg-white'
              }`}
              onClick={() => handleCircleClick('market')}
            ></button>
            <div className="chb-h6">7-11超商付款取貨
              <DesktopWhiteNoIconBtnBlack text="選擇門市" className={`chb-h6 mt-3 ${styles['h-40']}`}/>
              {/* 門市名稱: <input type="text" value={store711.storename} disabled /> */}
              <p className={`${styles['mt-28']}`}>門市名稱</p> <input type="text" className={`form-control ${styles['w-750']}`}   disabled />
              {/* 門市地址: <input type="text" value={store711.storeaddress} disabled /> */}
              <p className={`${styles['mt-28']}`}>門市地址</p><input type="text" className={`form-control ${styles['w-750']}`} disabled />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
