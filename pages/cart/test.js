{totalQty > 0 && (
  <div className={`row ${styles['mb-40']} ${styles.centerItem}`}>
    <div
      className={`col-12 col-md-8 cart-area ${styles['my-20']} ${styles['columnCenter']} `}
    >
      <Link href={`/cart/payment`}>
        <DesktopBlackNoIconBtnPurple
            text="結帳"
            className={`chb-h6 ${styles['btn-760']}`}
          />
      </Link>
    </div>
  </div>
)}
{totalQty === 0 && (
  <div className={`row ${styles['mb-40']} ${styles.centerItem}`}>
    <div
      className={`col-12 col-md-8 cart-area ${styles['my-20']} ${styles['columnCenter']} `}
    >
      <button
        className={`chb-h6 ${styles['btn-760']} ${styles['btn-disabled']}`}
        disabled
      >
        結帳
      </button>
    </div>
  </div>
)}