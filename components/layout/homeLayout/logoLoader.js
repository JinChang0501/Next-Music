import { useEffect, useState } from 'react'
import styles from './logoLoader.module.scss'
import 'animate.css'

function LogoLoader() {
  const [firstAnimationDone, setFirstAnimationDone] = useState(false)

  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setFirstAnimationDone(true)
    }, 2000)

    const secondTimer = setTimeout(() => {
      document
        .querySelector(`.${styles.logoLoader}`)
        .classList.add(styles.hidden)
    }, 3000)

    return () => {
      clearTimeout(firstTimer)
      clearTimeout(secondTimer)
    }
  }, [])

  return (
    <div className={styles.logoLoader}>
      <div
        className={`animate__animated ${
          firstAnimationDone ? styles.customFlip : 'animate__zoomInDown'
        }`}
      >
        <img src="/images/makin-Logo-1.png" alt="Logo" />
      </div>
    </div>
  )
}

export default LogoLoader
