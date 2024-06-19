import styles from './test.module.scss'
export default function Index() {
  return (
    <>
      <div className={`${styles.test} ${styles.spacing} eng-h1 ps-5`}>
        HIIII
      </div>
      <button className="btn btn-purple1 chi-b-h1">早安</button>
      <div className="chi-b-h2">嗨</div>
      <div className="eng-h1 fs-1 btn btn-outline-purple1">HII</div>
    </>
  )
}
