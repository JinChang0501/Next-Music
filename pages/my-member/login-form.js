import { useState } from 'react'

export default function LoginForm() {
  // 記錄欄位輸入資料，狀態為物件，物件的屬性名稱要對應到欄位的名稱
  const [user, setUser] = useState({
    username: '',
    password: '',
    password2: '',
  })

  // 記錄欄位錯誤訊息的狀態
  const [errors, setErrors] = useState({
    username: '',
    password: '',
    password2: '',
  })

  // 顯示密碼的核取方塊用
  const [showPassword, setShowPassword] = useState(false)

  // 多欄位共用事件處理函式
  const handleFieldChange = (e) => {
    // 可以利用e.target觀察目前是在輸入或操作哪個欄位上
    console.log(e.target.name, e.target.type, e.target.value)
    // ES6: computed property names (計算得來的屬性名稱)
    // [e.target.name]: e.target.value }
    // ^^^^^^^^^^^^^^^ 這裡可以動態的代入變數值或表達式，計算出物件屬性名稱(字串)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // 表單送出事件處理函式
  const handleSubmit = (e) => {
    // 阻擋表單預設送出行為
    e.preventDefault()

    // 表單檢查---START---
    // 建立一個新的錯誤訊息物件
    const newErrors = { username: '', password: '', password2: '' }

    // if (user.username === '') {
    // 上面寫法常見改為下面這樣，`if(user.username)` 代表有填寫，
    // 所以反相判斷 `if(!user.username)` 代表沒填寫
    if (!user.username) {
      newErrors.username = '帳號為必填'
    }

    if (user.password && user.password.length < 6) {
      newErrors.password = '密碼至少6個字元'
    }

    if (user.password === '') {
      newErrors.password = '密碼為必填'
    }

    if (user.password2 === '') {
      newErrors.password2 = '確認密碼為必填'
    }

    if (user.password !== user.password2) {
      newErrors.password = '密碼與確認密碼需要相同'
      newErrors.password2 = '密碼與確認密碼需要相同'
    }

    // 檢查完設定到狀態中
    setErrors(newErrors)

    // 物件屬性值中有非空白字串時，代表有錯誤發生
    const hasErrors = Object.values(newErrors).some((v) => v)

    // 有錯誤發生，不送到伺服器去
    if (hasErrors) {
      return // 函式中作流程控制，會跳出函式不執行之後的程式碼
    }
    // 表單檢查--- END ---

    // 檢查沒問題後再送到伺服器
    alert('送到伺服器')
  }

  return (
    <>
      <h1>會員登入表單</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            {/* 使用表單元素都應給name屬性 */}
            帳號:{' '}
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="error">{errors.username} </div>
        <div>
          <label>
            密碼:{' '}
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={user.password}
              onChange={handleFieldChange}
            />
          </label>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={(e) => {
              setShowPassword(e.target.checked)
            }}
          />
          顯示密碼
        </div>
        <div className="error">{errors.password}</div>
        <div>
          <label>
            確認密碼:{' '}
            <input
              type="password"
              name="password2"
              value={user.password2}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="error">{errors.password2}</div>

        <div>
          {/* form標記中的button最好加上類型，預設是submit，會觸發表單的submit事件 */}
          <button type="submit">登入</button>
        </div>
      </form>
      <style jsx>
        {`
          .error {
            color: red;
            font-size: 13px;
            height: 16px;
          }
        `}
      </style>
    </>
  )
}
