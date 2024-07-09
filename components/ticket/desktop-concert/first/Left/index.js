import TicketSeatSVG from './ticketSeatSVG'
import { useSpring, animated } from '@react-spring/web'
import { useGesture } from '@use-gesture/react'

export default function Left() {
  // 這行代碼創建了一個包含 x 和 y 值的彈性動畫狀態
  // x 和 y 初始化為 0，api 是一個控制動畫的對象
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

  // 用於處理用戶手勢（如拖動、滾動、縮放等）
  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => api.start({ x, y }),
  })

  return (
    <div
      className="col-xxl-9 col-xl-8 col-lg-7 col-md-6 pe-0"
      style={{ overflow: 'hidden' }}
    >
      <animated.div
        {...bind()}
        style={{
          x,
          y,
          width: '100%',
          height: '100%',
        }}
      >
        <TicketSeatSVG />
      </animated.div>
    </div>
  )
}
