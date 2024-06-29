import React from 'react'
import style from './totalPrice.module.scss'

export default function totalPrice() {
  return (
    <>
      <div className={`${style.totalPrice} chb-h5 text-black`}>
        <div>張數&nbsp;:&nbsp;6&nbsp;張</div>
        <div>總價&nbsp;:&nbsp;25,700</div>
      </div>
    </>
  )
}
