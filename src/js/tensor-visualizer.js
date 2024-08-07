import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { Tensor } from 'utilities-library'

// SCENA AND CAMERA
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.z = 50

// WEBGL
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// FONT
const loader = new FontLoader()

// TENSOR
function createTensor(font) {
  const tensor = new Tensor()
  tensor.cargar(4, 4, 4, 0, 9)
  const cubeWidth = 5
  const cubeHeight = 5
  const fontSize = 2
  const fontHeight = 0
  const cubeDepth = 0.01
  const gap = 0
  let layerGrap = 30
  const colors = [0xff0000, 0x00ff00, 0x0000ff]

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
        // Ajustar la posición de los cubos
        cube.position.set(
          x * (cubeWidth + gap),
          (tensor.tensor[z].length - y - 1) * (cubeHeight + gap),
          (tensor.tensor.length - 1 - z) * cubeDepth * layerGrap * layerGrap
        )
        scene.add(cube)

        // Crear texto
        const textGeometry = new TextGeometry(tensor.tensor[z][y][x].toString(), {
          font: font,
          size: fontSize,
          height: fontHeight
        })

        const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })
        const textMesh = new THREE.Mesh(textGeometry, textMaterial)

        // Centrar el texto en el cubo
        textGeometry.computeBoundingBox()
        const textWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x
        textMesh.position.set(
          x * (cubeWidth + gap) - textWidth / 2,
          (tensor.tensor[z].length - y - 1) * (cubeHeight + gap),
          (tensor.tensor.length - 1 - z) * cubeDepth * layerGrap * layerGrap +
            cubeDepth / 2 +
            0.05
        )

        scene.add(textMesh)
      }
    }
  }


  // Configurar OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.25
  controls.enableZoom = true

  // Función de animación
  function animate() {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }

  animate()
}

loader.load(
  'https://unpkg.com/three@0.148.0/examples/fonts/helvetiker_regular.typeface.json',
  font => {
    createTensor(font)
  }
)
