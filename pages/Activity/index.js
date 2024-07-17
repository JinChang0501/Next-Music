import React from 'react'
import { useEffect, useState , useRef } from 'react'

// 帶資料的api
import { ACT_LIST } from '@/configs/api-path'
import { getFavorites, addFavorite, removeFavorite, checkFavorite } from '@/configs/fav-api'
// 路徑
import { useRouter } from 'next/router'
// 判斷登入
import { useAuth } from '@/hooks/use-auth'
import { useLogin } from '@/hooks/use-login'

// 內容元件
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import BannerA from '@/components/Activity/banner-a'
import LeftBar from '@/components/Activity/left-bar'
import ActivityCard from '@/components/Activity/activity-card'

export default function Activity() {
  const router = useRouter()
  const topRef = useRef(null)
  // 會員相關
  const { handleWakeLogin } = useLogin()
  const { auth } = useAuth()
  // 判斷是否登入 auth.isAuth

  // 活動資料陣列
  const [data, setData] = useState({
    success: false,
    rows: [],
  })
  // 列表
  const [favorites, setFavorites] = useState({
    success: false,
    rows: [],
  })

  // 設定到初始狀態前，先擴增一個代表是否有加入收藏的屬性fav(布林，預設為false)
  const initState = data.rows.map((v, i) => {
    return { ...v, isFavorite: false }
  })
  // 布林值，是否被收藏
  const [favData, setFavData] = useState(initState)

  // 初始值至少要空白陣列。初次render是用初始值，需要對應伺服器回應的資料類型。
  // 在應用程式執行過程中，一定要保持狀態的資料類型(一定要是陣列)
  // const [activity, setActivity] = useState([]) 

  // 查詢條件用(這裡用的初始值都與伺服器的預設值一致)
  const [keyword, setKeyword] = useState('')
  const [actClass, setActClass] = useState('')
  const [area, setArea] = useState('')
  const [dateRange, setDateRange] = useState('')

  // 麵包屑 內容定義
  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '演出活動', href: '/Activity' },
  ]

  // 與伺服器作fetch獲得資料(建議寫在useEffect上面與外面比較容易維護管理)
  const getActivity = async (params = {}) => {
    // 轉換為查詢字串
    console.log(router.query) // 是空的
    console.log(params)       // keyword, actClass, area, dataRange
    const searchParams = new URLSearchParams(params)
    const url = `${ACT_LIST}?${searchParams.toString()}`

    // 使用try-catch陳述式，讓和伺服器連線程式作錯誤處理
    try {
      const res = await fetch(url)
      const resData = await res.json()
      console.log(resData)
      if (resData.success === true) {
        // 檢查是否為陣列資料類型(基本保護)
        if (Array.isArray(resData.rows)) {
          // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render)
          setData(resData)
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  // 按下搜尋按鈕
  const handleSearch =  (e) => {
    e.preventDefault()
    
    const params = {
      // sort: orderby.sort,
      // order: orderby.order,
      keyword: keyword,
      actClass: actClass,
      area: area,
      dateRange: dateRange,
    }
    console.log("params1")
    console.log(params)

     getActivity(params)
     scrollToTop()
  }

  // 按下Enter按鈕
  const handleKeyDown =  (e) => {
    console.log(e.key)
    if (e.key === 'Enter') {
       e.preventDefault()
      handleSearch(e)
    }
   }

  // 滾動到Top
  const scrollToTop = (e) => {
    //console.log('scrollToTop called')
    if (topRef.current) {
      console.log('topRef.current:', topRef.current)
      topRef.current.scrollIntoView({ behavior: 'smooth' })  
     } else {
       console.log('topRef.current is null')
     }
  }

  // 首次渲染、取得列表、搜尋條件
  useEffect(() => {
    const params = {
      keyword: keyword,
      actClass: actClass,
      area: area,
      dateRange: dateRange,
    }

    getActivity(params)
      console.log("params2")
      console.log(params)
      // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (auth.isAuth) {
      const fetchFavorites = async () => {
        try {
          console.log(auth.userData.id)
          const data = await getFavorites(auth.userData.id)
          setFavorites(data)
        } catch (error) {
          console.error('無法獲取收藏', error)
        }
      };

      fetchFavorites()
    }
  }, [auth])
///////////////////////////寫到一半
  const handleToggleFav = async (eventId) => {
    try {
      if (isFavorite) {
        console.log(auth.userData.id)
        console.log(eventId)
        await removeFavorite(auth.userData.id, eventId)
      } else {
        await addFavorite(auth.userData.id, eventId)
      }
      setFavData(!isFavorite)
    } catch (error) {
      console.error('無法切換收藏狀態', error)
    }
  }

//  const handleToggleFav = async (eventId) => {
//     const nextFavData = data.rows.map((v, i) => {
//       // 如果符合(actid=傳入actid)，回傳修改其中屬性fav的值作邏輯反相
//       if (v.actid === actid) return { ...v, fav: !v.fav }
//       // 否則保持原本的物件值
//       else return v
//     })
//     setFavData(nextFavData)
//   }


  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <BannerA />
      <div ref={topRef}></div>
      <div className="music-container mt-3 mt-md-5">
        <div className="row">
          <LeftBar 
            classValue={actClass}
            onClassChange={(e) => {
              setActClass(e.target.value)
            }}
            areaValue={area}
            onAreaChange={(e) => {
              setArea(e.target.value)
            }}
            nameValue={keyword}
            onNameChange={(e) => {
              setKeyword(e.target.value)
            }}
            dateValue={dateRange}
            onDateChange={(e) => { 
              setDateRange(e.target.value)
            }}
            handleSearch={handleSearch} 
            handleKeyDown={handleKeyDown}
          />
          <div className="col-md-9 col-12 mb-3">
            <div className="chb-h4 mb-3 text-purple1">活動列表</div>
            {/* 可放［活動列表 >> 搜尋結果］在標題，有結果再顯示 */}
            {/* <div className="chb-h4 mb-3 text-purple1"></div> */}
            {data.rows.map((r, i) => {
              // 將ActivityCard-Fav元件引入，並傳入list、handleToggleFav屬性
              return (
                <ActivityCard
                  eventId={r.actid}
                  imgSrc={r.cover}
                  title={r.actname}
                  artist={r.artists}
                  location={r.location}
                  actdate={r.actdate}
                  acttime={r.acttime}
                  aid={r.actid}
                  // 有登入的話切換toggle，沒有的話要先登入
                  handleToggleFav={auth.isAuth ? handleToggleFav : handleWakeLogin }
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
