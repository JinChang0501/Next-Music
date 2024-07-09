import React from 'react'

export default function Tab({ tabName, tabTarget, ariaSelected, classNames }) {
  return (
    <>
      <li className={`nav-item ${classNames}`} role="presentation">
        <button
          className={`nav-link w-100 text-nowrap ${ariaSelected ? 'active' : ''}`}
          id={`${tabTarget}-tab`}
          data-bs-toggle="tab"
          data-bs-target={`#${tabTarget}`}
          type="button"
          role="tab"
          aria-controls={tabTarget}
          aria-selected={ariaSelected}
        >
          {tabName}
        </button>
      </li>
    </>
  )
}
