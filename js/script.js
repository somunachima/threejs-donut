/**
 * Base
*/
const canvas = document.querySelector('canvas.webgl')

//Scene
const scene = new THREE.Scene()

//Test Cube
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: "#ff0000"
})
const cube = new THREE.Mesh(
  cubeGeometry, cubeMaterial
)
scene.add(cube)

//Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

//Camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 1000)
camera.position.z = 5
scene.add(camera)

//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

renderer.render(scene, camera)
