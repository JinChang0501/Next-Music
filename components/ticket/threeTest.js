import React, { useEffect, useRef } from 'react'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import * as THREE from 'three'
import * as TWEEN from 'three/addons/libs/tween.module.js'

export default function Left() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current

    // #region scene & camera & AxesHelper & renderer

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(80, 1, 0.1, 1000)
    camera.position.set(0, 0, 1)
    camera.lookAt(0, 0, 0)

    const axesHelper = new THREE.AxesHelper(15)
    scene.add(axesHelper)

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor('white', 1)

    // #endregion scene & camera & AxesHelper & renderer

    // #region create plane

    const geometry = new THREE.PlaneGeometry(1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const plane = new THREE.Mesh(geometry, material)
    plane.position.set(0, 0, 0)
    scene.add(plane)

    // #endregion create plane

    // #region Raycaster & clickEvent

    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(mouse, camera)

      const intersects = raycaster.intersectObjects([plane])

      if (intersects.length > 0) {
        if (intersects[0].object._isSelect) {
          intersects[0].object.material.color.set(
            intersects[0].object.originColor
          )
          // 相機動畫
          new TWEEN.Tween(camera.position)
            .to({ x: 0, y: 0, z: 1 }, 1000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start()

          intersects[0].object._isSelect = false
          return
        }
        intersects[0].object._isSelect = true
        intersects[0].object.originColor =
          intersects[0].object.material.color.getHex()
        intersects[0].object.material.color.set(0xff0000)

        // 相機動畫
        new TWEEN.Tween(camera.position)
          .to({ x: 0, y: -0.5, z: 0.4 }, 1000)
          .easing(TWEEN.Easing.Quadratic.InOut)
          .start()
      }
    })

    // #endregion Raycaster & clickEvent

    // #region OrbitControls

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.2

    controls.mouseButtons = {
      LEFT: THREE.MOUSE.PAN, // 左鍵進行平移
      MIDDLE: THREE.MOUSE.DOLLY, // 中鍵進行縮放
      RIGHT: THREE.MOUSE.NONE, // 右鍵禁用
    }

    // #endregion OrbitControls

    // #region animate

    function animate(time) {
      requestAnimationFrame(animate)
      controls.update()
      TWEEN.update(time)
      renderer.render(scene, camera)
    }
    animate()

    // #endregion animate

    // #region handleResize

    function handleResize() {
      renderer.setSize(canvas.clientWidth, canvas.clientHeight)
      camera.aspect = canvas.clientWidth / canvas.clientHeight
      camera.updateProjectionMatrix()
    }

    window.addEventListener('resize', handleResize)

    // #endregion handleResize

    // #region clear useEffect

    return () => {
      window.removeEventListener('resize', handleResize)
    }

    // #endregion clear useEffect
  }, [])

  return (
    <>
      <div className="col-xxl-9 col-xl-8 col-lg-7 col-md-6 pe-0">
        <canvas ref={canvasRef} className="w-100 h-100"></canvas>
      </div>
    </>
  )
}
