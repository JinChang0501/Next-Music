import { useEffect, useState } from 'react'
import { motion, MotionConfig, useMotionValue } from 'framer-motion'
import { Shapes } from './Shapes'
import { transition } from './settings'
import useMeasure from 'react-use-measure'
import style from './btn.module.scss'

export default function ThreeDBtn() {
  const [ref, bounds] = useMeasure({ scroll: false })
  const [isHover, setIsHover] = useState(false)
  const [isPress, setIsPress] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [showShapes, setShowShapes] = useState(false)

  useEffect(() => {
    setShowShapes(true)
  }, [])

  const resetMousePosition = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <MotionConfig transition={transition}>
      <motion.button
        className={`${style.play}`}
        ref={ref}
        initial={false}
        animate={isHover ? 'hover' : 'rest'}
        whileTap="press"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.5 },
          press: { scale: 1.4 },
        }}
        onHoverStart={() => {
          resetMousePosition()
          setIsHover(true)
        }}
        onHoverEnd={() => {
          resetMousePosition()
          setIsHover(false)
        }}
        onTapStart={() => setIsPress(true)}
        onTap={() => setIsPress(false)}
        onTapCancel={() => setIsPress(false)}
        onPointerMove={(e) => {
          mouseX.set(e.clientX - bounds.x - bounds.width / 2)
          mouseY.set(e.clientY - bounds.y - bounds.height / 2)
        }}
      >
        <motion.div
          className={`${style.shapes}`}
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
        >
          <div className={`${style.pink} ${style.blush}`} />
          <div className={`${style.blue} ${style.blush}`} />
          <div className={`${style.container}`}>
            {showShapes && (
              <Shapes
                isHover={isHover}
                isPress={isPress}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            )}
          </div>
        </motion.div>
        <motion.div
          variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
          className={`${style.label}`}
        >
          MY&nbsp;&nbsp;&nbsp;ACCOUNT
        </motion.div>
      </motion.button>
    </MotionConfig>
  )
}
