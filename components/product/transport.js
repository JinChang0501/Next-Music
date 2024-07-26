import { useState, useEffect } from 'react'
import styles from '@/components/product/transport.module.scss'
import DesktopWhiteNoIconBtnBlack from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnBlack'
import { useShip711StoreOpener } from '@/hooks/use-ship-711-store'
import { useTotal } from '@/hooks/product/use-Total'
import EcPay from '@/components/product/ec-pay'

export default function Transport() {
  const [selected, setSelected] = useState(null) // 使用 null 初始狀態
  const [homeDeliveryAddress, setHomeDeliveryAddress] = useState('')
  const [storeName, setStoreName] = useState('')
  const [storeAddress, setStoreAddress] = useState('')
  // 711取貨
  const { store711, openWindow, closeWindow } = useShip711StoreOpener(
    'http://localhost:3005/api/shipment/711',
    { autoCloseMins: 3 } // x分鐘沒完成選擇會自動關閉，預設5分鐘。
  )
  // 會員資料
  const { userProfile } = useTotal()
  useEffect(() => {
    // Update store name and address when store711 changes
    if (store711) {
      setStoreName(store711.storename || '')
      setStoreAddress(store711.storeaddress || '')
    }
  }, [store711])
  // 選擇誘發的變化
  const handleCircleClick = (paymentMethod) => {
    if (selected === 'home' && paymentMethod !== 'home') {
      setHomeDeliveryAddress('')
    }
    setSelected((prev) => (prev === paymentMethod ? null : paymentMethod))
  }

  return (
    <>
      <div className={styles.transport}>
        <div className={styles.transportBlock}>
          <div className={styles.transportBlockHome}>
            <button
              className={`home ${styles.transportCircle} ${
                selected === 'home' ? 'bg-black' : 'bg-white'
              }`}
              onClick={() => handleCircleClick('home')}
            ></button>
            <div className="chb-h6">
              宅配到府
              <p for="exampleInputEmail1" className="chb-p mt-3">
                收件地址
              </p>
              <input
                type="text"
                className={`form-control ${styles['w-750']}`}
                value={selected === 'home' ? `${userProfile.address}` : ''}
                onChange={(e) => setHomeDeliveryAddress(e.target.value)}
                disabled={selected !== 'home'}
              />
              {selected === 'home' && <EcPay />}
            </div>
          </div>
        </div>
        <div className={`${styles['transportBlock']} ${styles['mt-40']}`}>
          <div className={styles.transportBlockMarkt}>
            <button
              className={`market ${styles.transportCircle} ${
                selected === 'market' ? 'bg-black' : 'bg-white'
              }`}
              onClick={() => handleCircleClick('market')}
            ></button>
            <div className="chb-h6">
              超商付款取貨
              <div className="chb-h7 mt-3">
                <span name="pickup_method">711取貨付款</span>
                <span name="payment_method">現金</span>
              </div>
              {selected === 'market' && (
                <DesktopWhiteNoIconBtnBlack
                  text="選擇門市"
                  className={`chb-h6 mt-3 ${styles['h-40']}`}
                  disabled={selected === 'home'}
                  onClick={() => {
                    openWindow()
                  }}
                />
              )}
              {/* 門市名稱: <input type="text" value={store711.storename} disabled /> */}
              <p className={`${styles['mt-28']}`} >
                門市名稱
              </p>
              <input
                type="text"
                className={`form-control ${styles['w-750']}`}
                value={selected === 'market' ? storeName : ''}
                name="storename"
                disabled
              />
              {/* 門市地址: <input type="text" value={store711.storeaddress} disabled /> */}
              <p className={`${styles['mt-28']}`} >
                門市地址
              </p>
              <input
                type="text"
                className={`form-control ${styles['w-750']}`}
                value={selected === 'market' ? storeAddress : ''}
                name="storeaddress"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
