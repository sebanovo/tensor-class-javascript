import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { Tensor } from 'utilities-library'

import json from '../json/font.json'

// SCENA AND CAMERA
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.z = 30

// WEBGL
const renderer = new THREE.WebGLRenderer()
renderer.setClearColor(0x003366)
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// FONT
const loader = new FontLoader()

// TENSOR
const tensor = new Tensor()
tensor.cargar(1, 3, 2, 0, 9)
const cubeWidth = 5
const cubeHeight = 5
const fontSize = 2
const fontHeight = 0
const cubeDepth = 0.01
const gap = 0
let layerGrap = 1e3
const colors = [0x000000]

function clearScene() {
  while (scene.children.length > 0) {
    scene.remove(scene.children[0])
  }
}

// ORBIT CONTROLS
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.25
controls.enableZoom = true

// GEOMETRY
const geometry = new THREE.BoxGeometry(cubeWidth, cubeHeight, cubeDepth)
const material = new THREE.MeshBasicMaterial({
  color: colors[0],
  transparent: true,
  opacity: 0.5
})

// CUBE
const cube = new THREE.Mesh(geometry, material)

const totalWidth = tensor.columnas * (cubeWidth + gap)
const totalHeight = tensor.filas * (cubeHeight + gap)

export function drawTensor(tensor) {
  const font = loader.parse(json)

  for (let z = 0; z < tensor.capas; z++) {
    for (let x = 0; x < tensor.filas; x++) {
      for (let y = 0; y < tensor.columnas; y++) {
        const geometry = new THREE.BoxGeometry(cubeWidth, cubeHeight, cubeDepth)
        const material = new THREE.MeshBasicMaterial({
          color: colors[(x + y + z) % colors.length],
          transparent: true,
          opacity: 0.5
        })
        const cube = new THREE.Mesh(geometry, material)

        cube.position.set(
          y * (cubeWidth + gap) - totalWidth / 2 + cubeWidth / 2,
          -x * (cubeHeight + gap) + totalHeight / 2 - cubeHeight / 2,
          -z * cubeDepth * layerGrap
        )
        scene.add(cube)

        const textGeometry = new TextGeometry(tensor.tensor[z][x][y].toString(), {
          font: font,
          size: fontSize,
          depth: fontHeight
        })

        const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })
        const textMesh = new THREE.Mesh(textGeometry, textMaterial)

        textGeometry.computeBoundingBox()
        const textWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x
        textMesh.position.set(
          y * (cubeWidth + gap) - totalWidth / 2 + cubeWidth / 2 - textWidth / 2,
          -x * (cubeHeight + gap) + totalHeight / 2 - cubeHeight / 2,
          -z * cubeDepth * layerGrap + cubeDepth / 2 + 0.05
        )

        scene.add(textMesh)
      }
    }
  }
}

export function updateTensor(tensor) {
  clearScene()
  drawTensor(tensor)
}

// ANIMATE
function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

animate()

export function incrementLayerGrap() {
  layerGrap += 1e3
}

export function decrementLayerGrap() {
  if (layerGrap - 1e3 === 0) return
  layerGrap -= 1e3
}
