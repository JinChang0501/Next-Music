# NEXT-MUSIC

## 開始順序

clone 專案

```sh
git clone https://github.com/JinChang0501/final.git
```

同時建立及切換分支

```sh
git switch -c 分支名稱
```

進資料夾

```sh
cd next-music
```

下載依賴

```sh
npm i
```

運行專案

```sh
npm run dev
```

## 資料夾解說 ( 由上而下 )

### assets

- 主要存放需要經過`Webpack`處理的靜態資源

- 不能通過`URL`直接訪問，需要通過`import`語句引入到組件中

```jsx
import exampleImage from '../assets/example.png'

function MyComponent() {
  return <img src={exampleImage} alt="Example" />
}
```

### components

- 如元件要套樣式在自己資料夾新增`.scss`檔，然後在元件裡面`import`，不要在`styles`裡面寫元件樣式

- 裡面已建好大家的資料夾，裡面已有`index.js`在裡面寫即可

- 如要新增資料夾裝檔案，在自己資料夾新建並以檔案名稱命名，裡面建`index.js`檔案

- `checkout`資料夾是結帳流程進度條，ex: '購物車', '運送', '付款', '明細'，元件寫在`blocks`資料夾裡，在`index.js`引入

- `layout`資料夾是共同使用版面
  - `admin-layout`是登入後版面
  - `default-layout`是共用版面 ex: navbar、footer
  - `landing-layout`是 head 及 title

### configs

- `next`連接`node`的`config`我把他註釋起來了，如果沒註釋要把`node`打開才可以打開`next`

### hooks

- 裡面已建好大家的資料夾，裡面已有`index.js`在裡面寫即可

- 如要新增資料夾裝檔案，在自己資料夾新建並以檔案名稱命名，裡面建`index.js`檔案

### pages

- 裡面已建好大家的資料夾，裡面已有`index.js`在裡面寫即可

- `_app.js`頂層`components`，導入`globals.scss`、`bootstrap`、`DefaultLayout`

- `_document.js`包含`html`、`head`、`body`、`main`、`script`標籤

- `admin.js`登入的檔案??? JIN 在自己看老師檔案查一下 XD

- `dashboard.js`套用`AdminLayout`，取代原本的`DefaultLayout`

- `index.js`我們的主要網頁，在裡面導入所有東西

- 新增頁面`title` ( `return`上面添加`useEffect` )

```jsx
import { useEffect } from 'react'
export default function Custom404() {
  useEffect(() => {
    document.title = '404找不到頁面'
  }, [])
  return <h1>404 - Page Not Found</h1>
}
```

### public

- `images`裡面已建好大家的資料夾，照片放各自的資料夾，裡面有`.gitkeep`如果有放入照片後把他刪除即可

- `favicon.ico`到時候可以換成我們自己的 LOGO

### styles

- 裡面已建好大家的資料夾，裡面已建好大家的`.scss`在裡面寫即可

# globals.scss

- `globals.scss`已建好`style guide`，裡面有`figma`字型、顏色樣式`(bootstrap自定義)`、`css`消除預設樣式

- `@import '~bootstrap/scss/bootstrap';`這行上面放`bootstrap`的自定樣式，下面放`CSS`的自定樣式

- 如需新增全域樣式按照以上規則新增

- 字型可使用`bootstrap`類名跟`figma`同名稱的樣式

- 目前字型樣式無法跟`bootstrap`其他樣式共同使用，`ex:btn、border,etc` `TODO:bugfix`

- className="chi-b-h1"
- className="chi-b-h2"
- className="chi-b-h3"
- className="chi-b-h4"
- className="chi-b-h5"
- className="chi-b-h6"
- className="chi-b-p"

- className="chi-b-h1"
- className="chi-b-h2"
- className="chi-b-h3"
- className="chi-b-h4"
- className="chi-b-h5"
- className="chi-b-h6"
- className="chi-b-p"

- className="chi-b-h1"
- className="chi-b-h2"
- className="chi-b-h3"
- className="chi-b-h4"
- className="chi-b-h5"
- className="chi-b-h6"
- className="chi-b-p"

- purple1
- purple2
- purple3
- black1
- black2
- black3
- black4
- black5
- black6
- black7
- black8
- A
- B
- C
- D
- E

# jsx style 寫法

## className ( 使用`bootstrap`類名 )

```jsx
export default function Index() {
  return (
    <>
      <div className={'eng-h1'}>HIIII</div>
    </>
  )
}
```

## module.scss ( 導入 module.scss )

```jsx
import styles from './test.module.scss'
export default function Index() {
  return (
    <>
      <div className={styles.myClass}>Styled with CSS Module</div>
      <div className={`${styles.test} ${styles.spacing}`}>
        Styled with CSS Module
      </div>
      <div className={`${styles.test} ${styles.spacing} eng-h1 ps-5`}>
        HIIII
      </div>
    </>
  )
}
```

## style 內聯寫法 ( camelCase )

```jsx
export default function Footer() {
  return (
    <>
      <footer
        className="footer bg-purple2 py-3 text-center"
        style={{ marginTop: 'auto' }}
      ></footer>
    </>
  )
}
```

## style jsx

```jsx
export default function DefaultLayout({ title = 'Music', children }) {
  return (
    <div className="stickyfooter">
      <Head>
        <title>{title}</title>
      </Head>
      <Nav />
      <div className="container">
        <div>{children}</div>
      </div>
      <Footer />
      <style jsx>{`
        .stickyfooter {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}</style>
    </div>
  )
}
```

## storage.scss

- 這是我存放我查找`scss`和`css`自定義語法的檔案不用管他
