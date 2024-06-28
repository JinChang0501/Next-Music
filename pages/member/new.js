import MemberDLayout from '@/components/member/desktop-layout'
import React from 'react'
import { ClockFill } from './ClockFill'
import { Component } from './Component'
import { DivWrapper } from './DivWrapper'
import { Frame } from './Frame'
import { Frame356 } from './Frame356'
import { Frame372 } from './Frame372'
import { FrameWrapper } from './FrameWrapper'
import { GeoAltFill } from './GeoAltFill'
import { HeaderFluid } from './HeaderFluid'
import { LeftBar } from './LeftBar'
import { MusicNote } from './MusicNote'
import { PlayCircle } from './PlayCircle'
import styles from './style.css'

export default function New() {
  return (
    <>
      <div className="div-wrapper-screen">
        <HeaderFluid
          className="header-fluid-instance"
          color="black"
          navDesktopImg="line-1-3.svg"
          navDesktopImgClassName="header-fluid-4"
          navDesktopLine="line-1-2.svg"
          navDesktopLine1="line-1-4.svg"
          navDesktopLineClassName="header-fluid-2"
          navDesktopLineClassNameOverride="header-fluid-3"
        />
        <div className="web-body">
          <LeftBar
            className="design-component-instance-node-2"
            ellipse="image.png"
            line="line-1-5.svg"
            subtract="subtract-2.svg"
            vectorPen="vector-pen-2.svg"
          />
          <div className="right-side">
            <Frame
              className="frame-360"
              frameClassName="design-component-instance-node-2"
            />
            <div className="ticket-detail">
              <Component
                class1="product-detail"
                className="frame-14"
                frameClassName="component-34"
                frameClassNameOverride="design-component-instance-node-2"
              />
              <FrameWrapper
                className="frame-14"
                divClassName="frame-259-instance"
                frameClassName="frame-259"
                hasDiv={false}
                hasDiv1={false}
                text="活動資訊"
                visible={false}
              />
              <div className="frame-15">
                <div className="frame-16">
                  <div className="frame-17">
                    <PlayCircle className="icon-instance-node-2" />
                    <div className="text-wrapper-14">活動名稱</div>
                  </div>
                </div>
                <div className="frame-18">
                  <div className="text-wrapper-14">
                    一生到底，One Life, One Shot
                  </div>
                </div>
              </div>
              <div className="frame-15">
                <div className="frame-16">
                  <div className="frame-17">
                    <MusicNote className="icon-instance-node-2" />
                    <div className="text-wrapper-14">演出藝人</div>
                  </div>
                </div>
                <div className="frame-18">
                  <div className="text-wrapper-14">滅火器 Fire Ex</div>
                </div>
              </div>
              <div className="frame-15">
                <div className="frame-16">
                  <div className="frame-17">
                    <GeoAltFill className="icon-instance-node-2" />
                    <div className="text-wrapper-14">活動地點</div>
                  </div>
                </div>
                <div className="frame-18">
                  <div className="text-wrapper-14">台北流行音樂中心</div>
                </div>
              </div>
              <div className="frame-15">
                <div className="frame-16">
                  <div className="frame-17">
                    <ClockFill className="icon-instance-node-2" />
                    <div className="text-wrapper-14">活動時間</div>
                  </div>
                </div>
                <div className="frame-18">
                  <div className="text-wrapper-14">2024/06/31 19:30</div>
                </div>
              </div>
              <div className="product-detail">
                <FrameWrapper
                  className="frame-14"
                  divClassName="frame-259-instance"
                  frameClassName="frame-259"
                  hasDiv={false}
                  hasDiv1={false}
                  text="票夾"
                  visible={false}
                />
                <DivWrapper divClassName="frame-418" />
                <DivWrapper divClassName="frame-418-instance" />
                <DivWrapper divClassName="frame-19" />
              </div>
              <Frame356 className="frame-356-instance" text="共3張票" />
              <FrameWrapper
                className="frame-14"
                divClassName="frame-20"
                frameClassName="frame-259"
                hasDiv={false}
                hasDiv1={false}
                text="訂單詳細資訊"
                visible={false}
              />
              <Frame372
                className="frame-372-instance"
                visible={false}
                visible1={false}
              />
            </div>
          </div>
        </div>
      </div>
      );
      <style jsx>{`
        .custom-hr {
          border: 0;
          border-top: 4px solid #007bff; /* 設置粗細和顏色 */
          width: 100%; /* 分隔線寬度 */
          margin: 1rem auto; /* 上下邊距和自動水平對齊 */
        }
      `}</style>
    </>
  )
}

New.getLayout = function getLayout(page) {
  return <MemberDLayout>{page}</MemberDLayout>
}
