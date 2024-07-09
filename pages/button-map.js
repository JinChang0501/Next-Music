import DesktopBlackIconBtnBlack from '@/components/common/button/desktopBlackButton/desktopBlackIconBtnBlack'
import DesktopBlackIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackIconBtnPurple'
import DesktopBlackNoIconBtnBlack from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnBlack'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import DesktopWhiteNoIconBtnBlack from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnBlack'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import React from 'react'

export default function ButtonMap() {
  return (
    <>
      <div>
        <DesktopWhiteNoIconBtnBlack />
        <p className="text-white">DesktopWhiteNoIconBtnBlack</p>
      </div>
      <hr />
      <div>
        <DesktopWhiteNoIconBtnPurple />
        <p className="text-white">DesktopWhiteNoIconBtnPurple</p>
      </div>
      <hr />
      <div>
        <DesktopBlackNoIconBtnBlack />
        <p className="text-white">DesktopBlackNoIconBtnBlack</p>
      </div>
      <hr />
      <div>
        <DesktopBlackNoIconBtnPurple />
        <p className="text-white">DesktopBlackNoIconBtnPurple</p>
      </div>
    </>
  )
}
