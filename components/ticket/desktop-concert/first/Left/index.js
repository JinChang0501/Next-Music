import React, { useEffect, useRef } from 'react'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GUI } from 'three/addons/libs/lil-gui.module.min.js'
import * as THREE from 'three'
import * as TWEEN from 'three/addons/libs/tween.module.js'

export default function Left() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current

    // #region scene & camera & AxesHelper & renderer

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(100, 1, 0.1, 1000)
    camera.position.set(5, 3, 10)
    camera.lookAt(0, 0, 0)

    const axesHelper = new THREE.AxesHelper(15)
    scene.add(axesHelper)

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor('white', 1)

    // #endregion scene & camera & AxesHelper & renderer

    // #region cube

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({
      color: 0x685beb,
      wireframe: true,
    })
    const cube = new THREE.Mesh(geometry, material)

    scene.add(cube)

    cube.position.set(3, 4, 4)

    // #endregion cube

    // #region circle1

    const circle1 = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    )
    circle1.position.set(-4, 2, 2)
    scene.add(circle1)

    // #endregion circle1

    // #region circle2

    const circle2 = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0x0000ff })
    )
    circle2.position.set(0, 2, 2)
    scene.add(circle2)

    // #endregion circle2

    // #region circle3

    const circle3 = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0xff00ff })
    )
    circle3.position.set(4, 2, 2)
    scene.add(circle3)

    // #endregion circle3

    // #region TWEEN

    const tween = new TWEEN.Tween(circle1.position)
    tween.to({ x: 6, y: 3, z: 5 }, 1000)
    // tween.repeat(Infinity)
    // tween.yoyo(true)
    tween.easing(TWEEN.Easing.Sinusoidal.InOut)
    tween.start()

    // #endregion TWEEN

    // #region Raycaster & clickEvent

    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(mouse, camera)

      const intersects = raycaster.intersectObjects([
        circle1,
        circle2,
        circle3,
        cube,
      ])

      if (intersects.length > 0) {
        if (intersects[0].object._isSelect) {
          intersects[0].object.material.color.set(
            intersects[0].object.originColor
          )
          intersects[0].object._isSelect = false
          return
        }
        intersects[0].object._isSelect = true
        intersects[0].object.originColor =
          intersects[0].object.material.color.getHex()
        intersects[0].object.material.color.set(0xff0000)
      }
    })

    // #endregion Raycaster & clickEvent

    // #region OrbitControls

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.2

    // #endregion OrbitControls

    // #region animate

    function animate() {
      requestAnimationFrame(animate)
      controls.update()
      TWEEN.update()
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
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

    // #region GUI

    const gui = new GUI()

    const eventObj = {
      Fullscreen: function () {
        canvas.requestFullscreen()
      },
    }

    gui.add(eventObj, 'Fullscreen').name('全螢幕')

    let folder = gui.addFolder('cube position')
    folder
      .add(cube.position, 'x')
      .min(-10)
      .max(10)
      .step(1)
      .name('cube X 軸位置')
      .onFinishChange((v) => {
        console.log('cube X 軸位置', v)
      })
    folder
      .add(cube.position, 'y')
      .min(-10)
      .max(10)
      .step(1)
      .name('cube Y 軸位置')
      .onFinishChange((v) => {
        console.log('cube Y 軸位置', v)
      })
    folder
      .add(cube.position, 'z')
      .min(-10)
      .max(10)
      .step(1)
      .name('cube Z 軸位置')
      .onFinishChange((v) => {
        console.log('cube Z 軸位置', v)
      })

    gui.add(material, 'wireframe').name('線框模式')

    const color = { value: material.color.getHex() }
    gui
      .addColor(color, 'value')
      .name('顏色')
      .onChange((v) => {
        material.color.set(v)
      })

    let params = {
      start: function () {
        tween.start()
      },
      stop: function () {
        tween.stop()
      },
    }

    gui.add(params, 'start').name('開始動畫')
    gui.add(params, 'stop').name('暫停動畫')

    // #endregion GUI

    // #region clear useEffect

    return () => {
      window.removeEventListener('resize', handleResize)
      gui.destroy()
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
