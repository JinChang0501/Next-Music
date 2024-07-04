import React from 'react'

// desktop white
import DesktopWhiteIconBtnBlack from '@/components/common/button/desktopWhiteButton/desktopWhiteIconBtnBlack'
import DesktopWhiteIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteIconBtnPurple'
import DesktopWhiteNoIconBtnBlack from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnBlack'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import DesktopWhitePureIconBtnBlack from '@/components/common/button/desktopWhiteButton/desktopWhitePureIconBtnBlack'
import DesktopWhitePureIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhitePureIconBtnPurple'

// phone white
import PhoneWhiteIconBtnBlack from '@/components/common/button/phoneWhiteButton/phoneWhiteIconBtnBlack'
import PhoneWhiteIconBtnPurple from '@/components/common/button/phoneWhiteButton/phoneWhiteIconBtnPurple'
import PhoneWhiteNoIconBtnBlack from '@/components/common/button/phoneWhiteButton/phoneWhiteNoIconBtnBlack'
import PhoneWhiteNoIconBtnPurple from '@/components/common/button/phoneWhiteButton/phoneWhiteNoIconBtnPurple'
import PhoneWhitePureIconBtnBlack from '@/components/common/button/phoneWhiteButton/phoneWhitePureIconBtnBlack'
import PhoneWhitePureIconBtnPurple from '@/components/common/button/phoneWhiteButton/phoneWhitePureIconBtnPurple'

// desktop black
import DesktopBlackIconBtnBlack from '@/components/common/button/desktopBlackButton/desktopBlackIconBtnBlack'
import DesktopBlackIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackIconBtnPurple'
import DesktopBlackNoIconBtnBlack from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnBlack'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import DesktopBlackPureIconBtnBlack from '@/components/common/button/desktopBlackButton/desktopBlackPureIconBtnBlack'
import DesktopBlackPureIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackPureIconBtnPurple'

// phone phone
import PhoneBlackIconBtnBlack from '@/components/common/button/phoneBlackButton/phoneBlackIconBtnBlack'
import PhoneBlackIconBtnPurple from '@/components/common/button/phoneBlackButton/phoneBlackIconBtnPurple'
import PhoneBlackNoIconBtnBlack from '@/components/common/button/phoneBlackButton/phoneBlackNoIconBtnBlack'
import PhoneBlackNoIconBtnPurple from '@/components/common/button/phoneBlackButton/phoneBlackNoIconBtnPurple'
import PhoneBlackPureIconBtnBlack from '@/components/common/button/phoneBlackButton/phoneBlackPureIconBtnBlack'
import PhoneBlackPureIconBtnPurple from '@/components/common/button/phoneBlackButton/phoneBlackPureIconBtnPurple'

// icon
import { BsRepeat } from 'react-icons/bs'
import { BsPhoneVibrateFill } from 'react-icons/bs'

// product progressBar
import ProgressBar from '@/components/product/progressBar'

export default function BtnTest() {
  return (
    <>
      <div className="bg-white d-flex flex-column justify-content-center align-items-center">
        <div>
          <ProgressBar />
        </div>
        <div>
          <h1>White Desktop Custom Button</h1>
        </div>
        <div>
          <DesktopWhiteIconBtnBlack
            text="Remove"
            className="chb-h4"
            icon={BsRepeat}
            iconWidth={30}
            iconHeight={30}
            iconMarginRight={20}
          />
        </div>
        <div>
          <DesktopWhiteIconBtnPurple />
        </div>
        <div>
          <DesktopWhiteNoIconBtnBlack text="123" className="chb-h7" />
        </div>
        <div>
          <DesktopWhiteNoIconBtnPurple />
        </div>
        <div>
          <DesktopWhitePureIconBtnBlack
            icon={BsPhoneVibrateFill}
            iconWidth={100}
            iconHeight={100}
          />
        </div>
        <div>
          <DesktopWhitePureIconBtnPurple />
        </div>
        <div>
          <h1>White Phone Custom Button</h1>
        </div>
        <div>
          <PhoneWhiteIconBtnBlack
            text="Remove"
            className="chb-p"
            icon={BsRepeat}
            iconWidth={10}
            iconHeight={10}
            iconMarginRight={10}
          />
        </div>
        <div>
          <PhoneWhiteIconBtnPurple />
        </div>
        <div>
          <PhoneWhiteNoIconBtnBlack text="456" className="chb-p" />
        </div>
        <div>
          <PhoneWhiteNoIconBtnPurple />
        </div>
        <div>
          <PhoneWhitePureIconBtnBlack
            icon={BsPhoneVibrateFill}
            iconWidth={50}
            iconHeight={50}
          />
        </div>
        <div>
          <PhoneWhitePureIconBtnPurple />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="text-white">
          <h1>Black Desktop Custom Button</h1>
        </div>
        <div>
          <DesktopBlackIconBtnBlack
            text="Remove"
            className="chb-h4"
            icon={BsRepeat}
            iconWidth={30}
            iconHeight={30}
            iconMarginRight={20}
          />
        </div>
        <div>
          <DesktopBlackIconBtnPurple />
        </div>
        <div>
          <DesktopBlackNoIconBtnBlack text="123" className="chb-h5" />
        </div>
        <div>
          <DesktopBlackNoIconBtnPurple />
        </div>
        <div>
          <DesktopBlackPureIconBtnBlack
            icon={BsPhoneVibrateFill}
            iconWidth={50}
            iconHeight={50}
          />
        </div>
        <div>
          <DesktopBlackPureIconBtnPurple />
        </div>
        <div className="text-white">
          <h1>Black Phone Custom Button</h1>
        </div>
        <div>
          <PhoneBlackIconBtnBlack
            text="Remove"
            className="chb-p"
            icon={BsRepeat}
            iconWidth={10}
            iconHeight={10}
            iconMarginRight={10}
          />
        </div>
        <div>
          <PhoneBlackIconBtnPurple />
        </div>
        <div>
          <PhoneBlackNoIconBtnBlack text="456" className="chb-p" />
        </div>
        <div>
          <PhoneBlackNoIconBtnPurple />
        </div>
        <div>
          <PhoneBlackPureIconBtnBlack
            icon={BsPhoneVibrateFill}
            iconWidth={50}
            iconHeight={50}
          />
        </div>
        <div>
          <PhoneBlackPureIconBtnPurple />
        </div>
      </div>
      <style jsx>{`
        div {
          margin-bottom: 20px;
        }
      `}</style>
    </>
  )
}
