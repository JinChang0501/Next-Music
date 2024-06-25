import Link from "next/link"
import Image from "next/image"
import styles from '@/styles/forIndex.module.scss'

export default function Index() {
  return (
    <>
      {/* banner一張（影片輪播） start */}
      <div className="bannerSty">
        <div className="row">
          <div className="col-6 d-none d-md-block mx-auto mt-120 text-center">
            <h1 className="my-2">Lose Yourself in Music</h1>
            <h1 className="my-2">Find Yourself in the Festivity</h1>
            <p className="my-2">
              <button className="btn btn-lg btn-primary" href="#">
                MY ACCOUNT
              </button>
            </p>
          </div>
        </div>
      </div>
      {/* banner（影片輪播） end */}
      <div className="container">
        <div className="row mb-5 mt-120">
          <div className="d-flex flex-column align-items-center">
            <h1>Activities</h1>
            <h3>給你最盛大的視覺與聽覺饗宴</h3>
          </div>
        </div>
        {/* 第一個活動 start */}
        <div className="row mb-120">
          <div className="col-md-7 col-12 p-2 of-hide img-border">
            <div className="custom-bg-01" />
          </div>
          <div className="col-md-5 col-12">
            <div className="d-flex flex-column gap-3 ms-md-5 ms-0 mt-5">
              <h4>#Concert</h4>
              <h3>07/24</h3>
              <h1>建宮蓋廟</h1>
              <h6>
                演出活演出活動演出活動演出活動演出活動演出活動演出活動演出活動演出活動演出活動演出活動動
              </h6>
              <div className="row text-nowrap">
                <div className="col-3">
                  <button className="btn btn-outline-secondary">活動資訊</button>
                </div>
                <div className="col-3">
                  <button className="btn btn-primary">立即購票</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 第一個活動 end */}
        {/* 第二個活動 start */}
        <div className="row">
          <div className="col-md-7 col-12 p-2 order-md-2 img-border cover">
            <div className="custom-bg-02" />
          </div>
          <div className="col-md-5 col-12 order-md-1">
            <div className="d-flex  flex-column gap-3 me-md-5 me-0 mt-5">
              <h4>#MusicFest</h4>
              <h3>05/22</h3>
              <h1>打狗祭</h1>
              <h6>
                演出活演出活動演出活動演出活動演出活動演出活動演出活動演出活動演出活動演出活動演出活動動
              </h6>
              <div className="row text-nowrap">
                <div className="col-3">
                  <button className="btn btn-outline-secondary">活動資訊</button>
                </div>
                <div className="col-3">
                  <button className="btn btn-primary">立即購票</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 第二個活動 end */}
        {/* 音樂人 start */}
        <div className="row mb-5 mt-120">
          <div className="d-flex flex-column align-items-center">
            <h1>Discover More</h1>
            <h3>挖掘你還未聽過的好聲音</h3>
          </div>
        </div>
        <div className="row d-flex justify-content-md-center justify-content-around align-items-center mb-120">
          {/* 最大那顆，到時候要隨著滑鼠事件移動 */}
          <div className="col-md-4 col-8 d-flex flex-column align-items-center order-md-3 mb-5 mb-md-0">
            <Image
              src="https://i.postimg.cc/dtx1T54J/m-S62j-SACo-Ptq-Bo-YSHPi-Rwp.jpg"
              className={`rounded-circle mb-4 ${styles['artist-img-l']}`}
              alt="..."
              width={200}
              height={200}
            />
            <h4>音樂人</h4>
          </div>
          {/* 其他顆 */}
          <div className="col-md-2 col-5 d-flex flex-column align-items-center order-md-1 mb-5 mb-md-0">
            <Image
              src="https://i.postimg.cc/BbjpZhmX/Wmwi-Dkfdq-VH87seo-RLnge-U.jpg"
              className={`rounded-circle mb-4 ${styles['artist-img-s']}`}
              alt="..."
              width={200}
              height={200}
            />
            <h4>音樂人</h4>
          </div>
          <div className="col-md-2 col-5 d-flex flex-column align-items-center order-md-2 mb-5 mb-md-0">
            <Image
              src="https://i.postimg.cc/BbjpZhmX/Wmwi-Dkfdq-VH87seo-RLnge-U.jpg"
              className={`rounded-circle mb-4 ${styles['artist-img-s']}`}
              alt="..."
              width={200}
              height={200}
            />
            <h4>音樂人</h4>
          </div>
          <div className="col-md-2 col-5 d-flex flex-column align-items-center order-md-4">
            <Image
              src="https://i.postimg.cc/BbjpZhmX/Wmwi-Dkfdq-VH87seo-RLnge-U.jpg"
              className={`rounded-circle mb-4 ${styles['artist-img-s']}`}
              alt="..."
              width={200}
              height={200}
            />
            <h4>音樂人</h4>
          </div>
          <div className="col-md-2 col-5 d-flex flex-column align-items-center order-md-5">
            <Image
              src="https://i.postimg.cc/BbjpZhmX/Wmwi-Dkfdq-VH87seo-RLnge-U.jpg"
              className={`rounded-circle mb-4 ${styles['artist-img-s']}`}
              alt="..."
              width={200}
              height={200}
            />
            <h4>音樂人</h4>
          </div>
        </div>
        {/* 音樂人 end */}
      </div>
      {/* bootstrap cdn js */}
      {/* <div
        style={{ height: '100px' }}
        className="w-100 bg-black5 text-warning d-flex justify-content-center align-items-center "
      >
        測試 container : 桌機版 1600px ; 手機版 334px
      </div>
      <table className="table table-bordered table-striped table-hover mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>bookname</th>
            <th>publish_date</th>
            <th>pages</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((v) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.bookname}</td>
                <td>{v.publish_date}</td>
                <td>{v.pages}</td>
                <td>{v.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table> */}
    </>
  )
}
