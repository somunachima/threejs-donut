/**
 * Base
*/
const canvas = document.querySelector('canvas.webgl')

//Scene
const scene = new THREE.Scene()

//Test Cube
// const cubeGeometry = new THREE.BoxGeometry(1, 1, 1, 1)
// const cubeMaterial = new THREE.MeshBasicMaterial({
  // color: "#ff0000"
// })
// const cube = new THREE.Mesh(
  // cubeGeometry, cubeMaterial
// )
// scene.add(cube)

//GLTF Loader
let donut = null;
const gltfLoader = new THREE.GLTFLoader()
gltfLoader.load(
  './assets/donut/scene.gltf',
  (gltf) => {
    donut = gltf.scene;

    donut.position.x = 1.5
    donut.rotation.x = Math.PI * 0.2
    donut.rotation.z = Math.PI * 0.15

    const radius = 8.5
    donut.scale.set(radius, radius, radius)
    scene.add(donut)
  })

//Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

//Camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 1000)
camera.position.z = 5
scene.add(camera)

//Light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(1, 2, 0)
scene.add(directionalLight)

//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))



//Animation
const clock = new THREE.Clock()
let lastElapsedTime = 0

const tick = () => {
  const elapsedTime = clock.getElapsedTime()
  const deltaTime = elapsedTime - lastElapsedTime
  lastElapsedTime = elapsedTime

  // cube.rotation.y = Math.sin(elapsedTime)

  console.log('tick');
  renderer.render(scene, camera)

  window.requestAnimationFrame(tick)

}

tick()
