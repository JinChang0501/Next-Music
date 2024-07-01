import React from 'react'
import style from './form.module.scss'
import formData from '@/data/ticket/desktop-concert/third/form'

export default function Form() {
  return (
    <div className={`${style.form}`}>
      {formData.map((v) => (
        <div key={v.id} className={`${style.formBlock}`}>
          <div className="chb-h6">{v.title}</div>
          <div className={`${style.formInput} text-black40`}>{v.info}</div>
        </div>
      ))}
    </div>
  )
}
