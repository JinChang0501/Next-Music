import {
  BsFillTicketPerforatedFill,
  BsQrCode,
  BsCalendar4,
} from 'react-icons/bs'

import style from './info.module.scss'

const infoData = [
  {
    id: 1,
    icon: <BsFillTicketPerforatedFill className={style.infoTextIcon} />,
    title: '訂票上限 6 張',
    subtitle: '',
  },
  {
    id: 2,
    icon: <BsQrCode className={style.infoTextIcon} />,
    title: '電子票券',
    subtitle: '這是電子票券，將發送到您的電子郵件',
  },
  {
    id: 3,
    icon: <BsCalendar4 className={style.infoTextIcon} />,
    title: '一生到底 One Life, One Shot',
    subtitle: ['滅火器 Fire EX.', '2024/06/15 19:30', '臺北流行音樂中心'],
  },
]

export default infoData
