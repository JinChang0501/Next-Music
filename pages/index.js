import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/home.module.css'
import DesktopBlackNoIconBtnBlack from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnBlack'
import DesktopWhiteNoIconBtnBlack from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnBlack'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import { useEffect, useState } from 'react'
import Login from '@/components/login/login'
import { useLogin } from '@/hooks/use-login'
import { useAuth } from '@/hooks/use-auth'
import { getArtist } from '@/services/artist'
import toast, { Toaster } from 'react-hot-toast'
import ArtCard from '@/components/artist/art-card'

export default function Index() {
  const { handleGotoMember, handleWakeLogin } = useLogin()
  const { auth } = useAuth()

  const [artistData, setArtData] = useState([])

  const getUserData = async () => {
    try {
      const res = await getArtist()
      console.log('以下是response data')
      console.log(res)
      console.log('以下是res.data')
      console.log(res.data)

      if (res.status === 'success') {
        console.log('以下是res.data.result')
        console.log(res.data.result)
        setArtData(res.data.result) //這一包是物件陣列[{},{},{}]
        // toast.success('會員購物紀錄載入成功')
        console.log('首頁藝人資料載入成功')
      } else {
        console.log('首頁藝人資料載入失敗')
      }
    } catch (error) {
      console.error('Error fetching order data:', error)
      // toast.error('會員購物紀錄載入失敗')
    }
  }

  useEffect(() => {
    getUserData()
  }, [])
  return (
    <>
      {/* banner一張（影片輪播） start */}
      <div className={`${styles['bannerSty']}`}>
        <div
          className={`d-none d-md-flex flex-column align-items-center text-align mx-auto text-white text-center ${styles['p-relative']}`}
        >
          <div className="eng-h1 mb-2">Lose Yourself in Music</div>
          <div className="eng-h1 mb-4">Find Yourself in the Festivity</div>
          <div className="eng-p">
            <DesktopBlackNoIconBtnBlack
              text={auth.isAuth ? 'Member Center' : 'MY ACCOUNT'}
              className="eng-h5"
              onClick={auth.isAuth ? handleGotoMember : handleWakeLogin}
            />
          </div>
        </div>
      </div>

      {/* banner（影片輪播） end */}
      {/* <div className={` ${styles['bg-img-flow']}`}></div> */}
      <div className={`music-container`}>
        <div className={`row mb-5 ${styles['mt-120']}`}>
          <div className="d-flex flex-column align-items-center text-align">
            <div className="eng-h1 text-white">Activities</div>
            <div className="chb-h3 text-purple3 text-center">
              體驗最盛大的視聽饗宴
            </div>
          </div>
        </div>
        {/* 第一個活動 start */}
        <div className={`row ${styles['mb-120']}`}>
          <div
            className={`col-md-7 col-12 p-2 ${styles['ov-hide']} ${styles['img-borderA']}`}
          >
            <div className={`${styles['custom-bg-01']}`} />
          </div>
          <div className="col-md-5 col-12">
            <div className="d-flex flex-column gap-3 ms-md-5 ms-0 mt-5 my-md-auto">
              <div className="eng-h4 text-purple1">#Concert</div>
              <div className="eng-h3 text-purple3">08/15</div>
              <div className="chb-h1 text-purple3">建宮蓋廟</div>
              <div className="chb-h6 text-white">
                宮廟不僅是多重領域大門，也是意識流的集合中心，血肉Boyz持續在宇宙中殺翻現場！
              </div>
              <div className="d-flex text-nowrap">
                <div className="me-3">
                  <Link href={`/Activity/9`}>
                    <DesktopWhiteNoIconBtnBlack text="活動資訊" />
                  </Link>
                </div>
                <div className="">
                  <DesktopBlackNoIconBtnPurple text="立即購票" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 第一個活動 end */}
        {/* 第二個活動 start */}
        <div className="row">
          <div
            className={`col-md-7 col-12 p-2 order-md-2 ${styles.cover} ${styles['img-borderA']}`}
          >
            <div className={`${styles['custom-bg-02']}`} />
          </div>
          <div className="col-md-5 col-12 order-md-1">
            <div className="d-flex flex-column gap-3 me-md-5 me-0 mt-5 my-md-auto">
              <div className="eng-h4 text-purple1">#MusicFest</div>
              <div className="eng-h3 text-purple3">10/12</div>
              <div className="chb-h1 text-purple3">打狗祭</div>
              <div className="chb-h6 text-white">
                遨遊在大宇宙中的外星小怪獸，受到打狗港灣的強大召喚！為了這群有夢想的人，打狗星際入口再度開啟》》》》》》
              </div>
              <div className="d-flex text-nowrap">
                <div className="me-3">
                  <Link href={`/Activity/16`}>
                    <DesktopWhiteNoIconBtnBlack text="活動資訊" />
                  </Link>
                </div>
                <div className="">
                  <DesktopBlackNoIconBtnPurple text="立即購票" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 第二個活動 end */}
        {/* 音樂人 start */}
        {/* 背景畫面待修改 */}
        <div className={`row ${styles['mb-120']} ${styles['mt-120']}`}>
          <div className="d-flex flex-column align-items-center">
            <div className="eng-h1 text-white">Discover More</div>
            <div className="chb-h3 text-purple3 text-center">
              挖掘你還未聽過的好聲音
            </div>
          </div>
        </div>
        <div
          className={`d-flex justify-content-md-center justify-content-around align-items-center ${styles['mt-80']} ${styles['mb-120']}`}
        >
          {/* 最大那顆，到時候要隨著滑鼠事件移動 */}
          {/* <div className="col-md-4 col-8 d-flex flex-column align-items-center order-md-3 mb-5 mb-md-0">
            <img
              src="https://i.postimg.cc/dtx1T54J/m-S62j-SACo-Ptq-Bo-YSHPi-Rwp.jpg"
              className={`rounded-circle mb-4 ${styles['artist-img-l']}`}
            />
            <div className="chb-h4 text-white">音樂人</div>
          </div> */}
          {/* 其他顆 */}
          <div className={styles['marquee-container']}>
            <div className={styles.marquee}>
              {artistData.map((v, i) => {
                return <ArtCard key={i} photo={v.photo} art_name={v.art_name} />
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 音樂人 end */}
    </>
  )
}
