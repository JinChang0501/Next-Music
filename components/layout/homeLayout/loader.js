import React from 'react'
import Lottie from 'react-lottie'
import loaderAnimation from '../../../assets/ticket/loader.json'
import style from './loader.module.scss'

const Loader = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: loaderAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className={`${style.loaderWrapper}`}>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  )
}

export default Loader
