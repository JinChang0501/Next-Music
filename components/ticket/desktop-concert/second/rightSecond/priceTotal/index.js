import React from 'react'
import style from './priceTotal.module.scss'

export default function PriceTotal() {
  return (
    <>
      <div className={`${style.priceTotal} chb-h5 text-black`}>
        <div>張數 : 6 張</div>
        <div>總價 : 25,700</div>
      </div>
    </>
  )
}
