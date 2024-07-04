import React from 'react'
import formData from '@/data/ticket/desktop-concert/third/form'
import style from './accordionSecond.module.scss'

export default function AccordionSecond() {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed  chb-h5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
          >
            請確認購買資訊
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            {/* form */}
            <div className={`${style.form}`}>
              {formData.map((v) => (
                <div key={v.id} className={`${style.formBlock}`}>
                  <div className="chb-h6">{v.title}</div>
                  <div className={`${style.formInput} text-black40 chb-h7`}>
                    {v.info}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
