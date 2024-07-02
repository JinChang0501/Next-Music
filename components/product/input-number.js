import { useState } from 'react'
import styles from '@/styles/product/product.module.scss'

export default function InputNumber() {
  // input-number
  const [inputNumber, setInputNumber] = useState(1)
  return (
    <>
      {/* Select的作法 */}
      {/* <div className="col">
        <div className={`chb-p ${styles['text-center']}`}>
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
        </div>
      </div> */}
      <div className={`${styles['input-border']} ${styles['w-50']}`}>
        <input
          type="number"
          value={inputNumber}
          max={10}
          min={1}
          step={1}
          onChange={(e) => {
            // 維持狀態的資料類型一致性(number)
            // setInputNumber(+e.target.value)
            setInputNumber(Number(e.target.value))
        }}
      />
      </div>
    </>
  )
}
