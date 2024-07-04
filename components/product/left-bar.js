import { useState, useEffect } from 'react'
import Link from 'next/link'
// import BS5Pagination from '@/components/common/bs5-pagination'
import { BsSearch } from 'react-icons/bs'
import DesktopBlackPureIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackPureIconBtnPurple'

export default function LeftBar() {
  // 最後得到的資料
  const [total, setTotal] = useState(0) // 總筆數
  // const [pageCount, setPageCount] = useState(0) // 總頁數
  const [products, setProducts] = useState([]) // 商品資料陣列

  // 查詢條件用(這裡用的初始值都與伺服器的預設值一致)
  const [nameLike, setNameLike] = useState('')

  // 與伺服器作fetch獲得資料(建議寫在useEffect上面與外面比較容易維護管理)
  const getProducts = async (params = {}) => {
    const baseUrl = 'http://localhost:3005/api/my-products'
    // 轉換為查詢字串
    const searchParams = new URLSearchParams(params)
    const url = `${baseUrl}?${searchParams.toString()}`

    // 使用try-catch陳述式，讓和伺服器連線程式作錯誤處理
    try {
      const res = await fetch(url)
      const resData = await res.json()

      // 伺服器回應資料格式
      if (resData.status === 'success') {
        // 設定回應用的狀態
        setTotal(resData.data.total)

        // 檢查是否為陣列資料類型(基本保護)
        if (Array.isArray(resData.data.products)) {
          // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render)
          setProducts(resData.data.products)
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  // 按下搜尋按鈕
  const handleSearch = () => {
    // 每次搜尋條件後，因為頁數和筆數可能不同，所以要導向第1頁
    // setPage(1)

    const params = {
      name_like: nameLike,
    }

    getProducts(params)
  }

  // 樣式3: didMount+didUpdate
  useEffect(() => {
    const params = {
      name_like: nameLike,
    }

    getProducts(params)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {/* left bar start */}
      <div className="col-md-3 col-12 mb-3">
        <div className="row outline">
          <form id="" action="" className="col-10 mx-auto">
            <div className="my-4 col-12">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected="">選擇活動</option>
                <option value={1}>活動1</option>
                <option value={2}>活動2</option>
                <option value={3}>活動3</option>
                <option value={4}>活動4</option>
                <option value={5}>活動5</option>
                <option value={6}>活動6</option>
                <option value={7}>活動7</option>
                <option value={8}>活動8</option>
                <option value={9}>活動9</option>
              </select>
            </div>
            <div className="my-4 input-group col-12">
              <input
                type="text"
                className="form-control"
                value={nameLike}
                onChange={(e) => {
                  setNameLike(e.target.value)
                }}
                placeholder="關鍵字"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <DesktopBlackPureIconBtnPurple
                icon={BsSearch}
                iconWidth={28}
                iconHeight={28}
                onClick={handleSearch}
              />
            </div>
          </form>
        </div>
      </div>
      {/* left bar end */}
      <style jsx>{`
        .outline {
          border: 1px solid #685BEB;
        }
      `}</style>
    </>
  )
}
