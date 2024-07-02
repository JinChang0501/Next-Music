import React from 'react'
import style from './phoneAccordionSecond.module.scss'
import formData from '@/data/ticket/desktop-concert/third/form'

export default function PhoneAccordionSecond() {
  return (
    <>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed chb-h5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
          >
            請確認購買資訊
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          class="accordion-collapse collapse"
        >
          <div class="accordion-body">
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
