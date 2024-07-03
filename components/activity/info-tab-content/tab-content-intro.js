import React from 'react'

export default function TabContentIntro({ tabTargetIntro }) {
  return (
    <>
      <div
        className="tab-pane fade"
        //^^^^^^^^show跟active只需要寫在第一個tab的content裡面
        id={tabTargetIntro}
        role="tabpanel"
        aria-labelledby={`${tabTargetIntro}-tab`}
      >
        <div className="chb-p">本場次購票方式為：「網站購票、信用卡付款、ibon取票」及「網站購票、ibon付款、ibon取票」及「ibon購票、付款、取票」三種，相關注意事項請詳閱【常見問題】的【iNDIEVOX 網站購票說明】及【ibon機台購票說明】。
          本場次單筆訂單限購4張。
          本活動為：全區搖滾站席。
          開演時間為 19：30，將於 19：00 開放入場。
          一般預售票開賣時間：2024/07/03（星期三）12：00。〈開演前一日即停止預售，開演當天請至現場購買現場票種，現場售票僅接受現金付款〉
          身障票種將於 2024/06/14（星期五）12：00 開始受理傳真訂單，於此時間前傳真進線的訂單恕不受理。訂購單請至【常見問題】的【身心障礙優惠票購票說明】中下載。
          預售一經完售即不開放現場售票。
          一人一票入場，票券遺失，須重新購票，恕不補發。
          購票前請確認您欲購買的場次及活動，本活動恕不提供換票，如需換票等同於退票。
          如需辦理退票請先閱讀【常見問題】的【退票辦法說明】並請留意受理退票的期限。
          活動開演前10日起（不含活動當日）即不再受理退票。本活動的退票辦理截止期限為2024/08/07（星期三），逾期恕不受理。</div>
      </div>
    </>
  )
}
