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
import Marquee from 'react-fast-marquee'
import HomeLayout from '@/components/layout/homeLayout'
import gsap from 'gsap'
import { useInView } from 'react-intersection-observer'
import 'swiper/css/navigation'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
// import required modules
import { FreeMode, Pagination } from 'swiper/modules'
import ArtCardMobile from '@/components/artist/art-card-mobile'
import { API_SERVER } from '@/configs/api-path'
import { Navigation } from 'swiper/modules'
import Nav from '@/components/layout/homeLayout/nav'
import Footer from '@/components/layout/homeLayout/footer'
import { motion } from 'framer-motion'
import LogoLoader from '@/components/layout/homeLayout/logoLoader'
import ThreeDBtn from '@/components/3Dbtn'
import Swal from 'sweetalert2'

export default function Index() {
  const [isDesktop, setIsDesktop] = useState(true)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 576) // 螢幕寬度 > 576px 為電腦板
    }
    handleResize() // 初始設定一次

    window.addEventListener('resize', handleResize) // 監聽視窗大小變化

    return () => window.removeEventListener('resize', handleResize) // 清除事件監聽器
  }, [])
  const { handleGotoMember, handleWakeLogin } = useLogin()
  const { auth } = useAuth()

  const [artistData, setArtData] = useState([])

  //方法1 使用fetch
  const getUserData = async () => {
    try {
      const r = await fetch(`${API_SERVER}/api/artist-jin`)
      console.log('以下是res')
      console.log(r)
      // 尝试解析 JSON 数据
      const res = await r.json()

      console.log('以下是res')
      console.log(res)
      console.log('以下是await res.json()')
      console.log(res) // 输出解析后的数据

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
      console.error('Catch首頁藝人資料載入失敗')
    }
  }

  //方法2
  // const getUserData = async () => {
  //   try {
  //     const res = await getArtist()
  //     console.log('以下是response data')
  //     console.log(res)
  //     console.log('以下是res.data')
  //     console.log(res.data)

  //     if (res.status === 'success') {
  //       console.log('以下是res.data.result')
  //       console.log(res.data.result)
  //       setArtData(res.data.result) //這一包是物件陣列[{},{},{}]
  //       // toast.success('會員購物紀錄載入成功')
  //       console.log('首頁藝人資料載入成功')
  //     } else {
  //       console.log('首頁藝人資料載入失敗')
  //     }
  //   } catch (error) {
  //     console.error('Error fetching order data:', error)
  //     // toast.error('會員購物紀錄載入失敗')
  //   }
  // }

  useEffect(() => {
    getUserData()
  }, [])

  const getRandomItems = (arr, count) => {
    // 打亂陣列
    const shuffled = arr.sort(() => Math.random() - 0.5)
    // 選擇前 count 筆資料
    return shuffled.slice(0, count)
  }

  const randomArtists = getRandomItems(artistData, 6)

  useEffect(() => {
    const followerImgs = Array.from(
      document.querySelectorAll(`.${styles.follower} img`)
    )

    const handleMouseMove = (e) => {
      followerImgs.forEach((img, index) => {
        gsap.to(img, {
          duration: 1,
          x: e.clientX + 40,
          y: e.clientY + 30,
          ease: 'power1.out',
          opacity: 0.7,
          delay: index * 0.1,
        })
      })
    }

    const handleMouseLeave = () => {
      followerImgs.forEach((img, index) => {
        gsap.to(img, {
          duration: 1,
          opacity: 0,
          delay: index * 0.1,
        })
      })
    }

    const handleBlur = () => {
      followerImgs.forEach((img, index) => {
        gsap.to(img, {
          duration: 1,
          opacity: 0,
          delay: index * 0.1,
        })
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('blur', handleBlur)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('blur', handleBlur)
    }
  }, [])

  const fadeIn1 = {
    hidden: { opacity: 0, y: 100, scale: 0.1, rotateY: 180 },
    visible: { opacity: 1, y: 0, scale: 1, rotateY: 0 },
  }

  const fadeIn2 = {
    hidden: { opacity: 0, x: -300, y: isDesktop ? 300 : 100 },
    visible: { opacity: 1, x: 0, y: 0 },
  }

  const fadeIn3 = {
    hidden: { opacity: 0, x: 300, y: isDesktop ? 300 : 100 },
    visible: { opacity: 1, x: 0, y: 0 },
  }

  const fadeIn4 = {
    hidden: { opacity: 0, y: 100, scale: 0.1, rotateY: 180 },
    visible: { opacity: 1, y: 0, scale: 1, rotateY: 0 },
  }

  const fadeIn5 = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: { opacity: 1, scale: 1 },
  }

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [ref5, inView5] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleClearTickets = () => {
    Swal.fire({
      title: '確定重置演唱會座位嗎?',
      text: '您將無法恢復此操作！',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'tomato',
      cancelButtonColor: '#685BEB',
      confirmButtonText: '確定',
      cancelButtonText: '取消',
      allowOutsideClick: false,
      reverseButtons: true,
    }).then((result) => {
      if (!result.isConfirmed) {
        Swal.fire({
          title: '已取消',
          text: '演唱會座位成功保留 :)',
          icon: 'info',
          confirmButtonColor: '#685BEB',
        })
        return
      }

      // ✅ 呼叫後端 API
      fetch(`${API_SERVER}/api/ticket/clear-all`, {
        method: 'PUT',
        credentials: 'include', // ✅ cookie 帶過去
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // 🛑 後端回傳未授權（認證失敗）
          if (data.status === 'error' && data.message.includes('授權失敗')) {
            Swal.fire({
              title: '請先登入',
              text: '您必須登入後才能重置演唱會座位。',
              icon: 'info',
              confirmButtonColor: '#685BEB',
            })
            return
          }

          // ✅ 成功處理資料
          if (data.success && data.affectedRows > 0) {
            Swal.fire({
              title: '刪除成功',
              text: `所有票券資料已清空（共 ${data.affectedRows} 筆）`,
              icon: 'success',
              confirmButtonColor: '#685BEB',
            })
          } else if (data.success && data.affectedRows === 0) {
            Swal.fire({
              title: '沒有清除任何票券',
              text: '目前沒有需要清除的資料',
              icon: 'info',
              confirmButtonColor: '#685BEB',
            })
          } else {
            Swal.fire({
              title: '錯誤',
              text: '清空票券失敗',
              icon: 'error',
              confirmButtonColor: 'tomato',
            })
          }
        })
        .catch(() => {
          Swal.fire({
            title: '錯誤',
            text: '發生網路或伺服器錯誤',
            icon: 'error',
            confirmButtonColor: 'tomato',
          })
        })
    })
  }

  return (
    <>
      <LogoLoader />

      <div className={`${styles.follower}`}>
        <img src="/n_mouse01.png" alt="" className="w-100 me-1" />
        <img src="/n_mouse02.png" alt="" className="w-100 me-1" />
        <img src="/n_mouse03.png" alt="" className="w-100 me-1" />
        <img src="/n_mouse04.png" alt="" className="w-100 me-1" />
        <img src="/n_mouse05.png" alt="" className="w-100" />
      </div>

      {/* banner一張（影片輪播） start */}
      <div className={styles.bannerSty}>
        <Nav />
        <video muted autoPlay loop playsInline>
          <source src="/video/1.mp4" type="video/mp4" />
        </video>
        <div className={`${styles.text1} eng-h1`}>Lose Yourself in Music</div>
        <div className={`${styles.text2} eng-h1`}>
          Find Yourself in the Festivity
        </div>
        <div className={`${styles.threeBtn}`}>
          <ThreeDBtn
            text={auth.isAuth ? 'Member Center' : 'MY ACCOUNT'}
            className="eng-h4"
            onClick={auth.isAuth ? handleGotoMember : handleWakeLogin}
          />
        </div>
        <button
          className={styles.copyright}
          onClick={handleClearTickets}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered ? '重置演唱會座位' : '非商業使用'}
        </button>
      </div>

      {/* banner（影片輪播） end */}
      {/* <div className={` ${styles['bg-img-flow']}`}></div> */}
      <div className={`music-container`}>
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? 'visible' : 'hidden'}
          variants={fadeIn1}
          transition={{ duration: 1 }}
          className={`row mx-0 mb-5 ${styles['mt-120']}`}
        >
          <div className={`row mx-0 mb-5 ${styles['mt-120']}`}>
            <div className="d-flex flex-column align-items-center text-align">
              <div className="eng-h1 text-white">Activities</div>
              <div className="chb-h3 text-purple3 text-center">
                體驗最盛大的視聽饗宴
              </div>
            </div>
          </div>
        </motion.div>

        {/* 第一個活動 start */}

        <motion.div
          ref={ref2}
          initial="hidden"
          animate={inView2 ? 'visible' : 'hidden'}
          variants={fadeIn2}
          transition={{ duration: 0.6 }}
          className={`row mx-0 ${styles['mb-120']}`}
        >
          <div className={`row mx-0 ${styles['mb-120']}`}>
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
        </motion.div>
        {/* 第一個活動 end */}
        {/* 第二個活動 start */}

        <motion.div
          ref={ref3}
          initial="hidden"
          animate={inView3 ? 'visible' : 'hidden'}
          variants={fadeIn3}
          transition={{ duration: 0.6 }}
          className="row mx-0"
        >
          <div className="row mx-0">
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
        </motion.div>
        {/* 第二個活動 end */}
        {/* 音樂人 start */}
        {/* 背景畫面待修改 */}

        <motion.div
          ref={ref4}
          initial="hidden"
          animate={inView4 ? 'visible' : 'hidden'}
          variants={fadeIn4}
          transition={{ duration: 0.6 }}
          className="row mx-0"
        >
          <div className={`row mx-0 ${styles['mb-120']} ${styles['mt-120']}`}>
            <div className="d-flex flex-column align-items-center">
              <div className="eng-h1 text-white">Discover More</div>
              <div className="chb-h3 text-purple3 text-center">
                挖掘你還未聽過的好聲音
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 音樂人 end */}
      {/* swiper套件 */}

      {isDesktop ? (
        <motion.div
          ref={ref5}
          initial="hidden"
          animate={inView5 ? 'visible' : 'hidden'}
          variants={fadeIn5}
          transition={{ duration: 0.6 }}
        >
          <div className="music-container mb-5">
            <Swiper
              // slidesPerView={4.51}
              slidesPerView={4.5} // 每个幻灯片显示5个 ArtCard
              freeMode={false} // 禁用自由模式以保持幻灯片对齐}
              // spaceBetween={0}
              // freeMode={true}
              // pagination={{
              //   clickable: true,
              // }}
              navigation={true}
              modules={[Navigation]}
              // className="bg-purple1"
            >
              {artistData.map((v, i) => {
                return (
                  <SwiperSlide
                    key={i}
                    className={`mx-0 ${styles['swiper-slide']} ${styles['swiper-width']}`}
                  >
                    <ArtCard
                      key={i}
                      photo={v.photo}
                      art_name={v.art_name}
                      spotify_id={v.spotify_id}
                      shortDes={v.shortDes}
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </motion.div>
      ) : (
        <motion.div
          ref={ref5}
          initial="hidden"
          animate={inView5 ? 'visible' : 'hidden'}
          variants={fadeIn5}
          transition={{ duration: 0.6 }}
        >
          <div className="music-container mb-5">
            <div className="col-12 align-items-center order-md-3 mb-5 mb-md-0 d-flex flex-wrap">
              {randomArtists.map((v, i) => {
                return (
                  <ArtCardMobile
                    key={i}
                    photo={v.photo}
                    art_name={v.art_name}
                    spotify_id={v.spotify_id}
                    shortDes={v.shortDes}
                  />
                )
              })}
            </div>
          </div>
        </motion.div>
      )}

      <Footer />
    </>
  )
}

Index.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>
}
