import React from 'react'
import Carousel0613 from '@/components/product/carousel0613'

export default function Detail() {
  return (
    <>
      {/* 第一個區塊 */}
      <div className="row mt-5 mx-2">
      {/* 左 */}
        <div className="col-sm-7">
          <div className="position-sticky" style={{ top: '2rem' }}>
            <Carousel0613 />
          </div>
        </div>
        {/* 右 */}
        <div className="col-sm-5">
           {/* 活動名稱 activity.name*/}
          <h3>Nike Air Force 1 PLT.AF.ORM</h3>
          {/* 商品名稱products.name */}
          <p>女鞋</p>
          {/* price */}
          <p>$4,000</p>
          {/* size */}
          <div>
            <p>尺寸</p>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
              <label class="form-check-label" for="flexRadioDefault1">
                S
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  />
              <label class="form-check-label" for="flexRadioDefault2">
                M
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  />
              <label class="form-check-label" for="flexRadioDefault2">
                L
              </label>
            </div>
          </div>
          {/* <ul>
            <li>顯示顏色： 白/白/白/Summit White</li>
            <li>款式： DJ9946-100</li>
          </ul> */}
          <button className="btn btn-primary w-50">加入購物車</button>
          <button className="btn btn-outline-primary w-50">
            {/* <i className="bi bi-suit-heart"></i> */}
            立即購買
          </button>
        </div>
      </div>
      {/* 第二個區塊 */}
      <div className="row mt-5 mx-2">
        <div className="col-sm-12">
          <h4 className="mb-5">商品介紹</h4>
          <hr />
          <p className="text-center my-5 font-weight-light fs-4"></p>
          <p>活動聯名限量HOODIE</p>
          <p>名牌設計總監親自設計</p>
          <p>親膚材質 保暖透氣</p>
          <p>超高回頭率！</p>
        </div>
      </div>
      {/* 第三個區塊 */}
      <div className="row mt-5 mx-2">
        <div className="col-sm-12">
          <h4 className="mb-5">付款方式</h4>
          <hr />
          <p className="text-center my-5 font-weight-light fs-4"></p>
          <p>目前提供付款方式有3種：</p>
          <p>『綠界』付款，宅配到府（限台灣本島）</p>
          <p>『LINE PAY』付款，宅配到府（限台灣本島）</p>
          <p>『超商取貨付款』</p>
          <p>※ 配合的宅配公司為：黑貓宅急便</p>
        </div>
      </div>
      {/* 第四個區塊 */}
      <div className="row mt-5 mx-2">
        <div className="col-sm-12">
          <h4 className="mb-5">推薦商品</h4>
          <hr />
          
        </div>
      </div>
    </>
  )
}
