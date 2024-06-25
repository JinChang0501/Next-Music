import React from 'react';

// import required modules

export default function CardProduct() {
  return (
    <>
      <div className="col">
                    <div className="card w-350 no-border f-16">
                      <img
                        src="/images/product/list/t-1.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body no-space-x">
                        <p className="card-text">活動名稱</p>
                        <p className="card-text">商品名稱</p>
                        <p className="card-text">價格</p>
                        <a className="btn-bc1-white bold" href="[pid]" role="button">詳細資訊</a>
                      </div>
                    </div>
                  </div>
    </>
  );
}
