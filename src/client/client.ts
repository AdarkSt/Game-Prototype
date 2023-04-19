// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import Stats from 'three/examples/jsm/libs/stats.module'
// import { GUI } from 'dat.gui'

// const scene = new THREE.Scene()
// scene.add(new THREE.AxesHelper(5))

// const light = new THREE.PointLight(0xffffff, 2)
// light.position.set(0, 5, 10)
// scene.add(light)

// const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.001,
//     1000
// )
// camera.position.z = 3

// const renderer = new THREE.WebGLRenderer()
// renderer.setSize(window.innerWidth, window.innerHeight)
// document.body.appendChild(renderer.domElement)

// const controls = new OrbitControls(camera, renderer.domElement)
// controls.screenSpacePanning = true //so that panning up and down doesn't zoom in/out
// //controls.addEventListener('change', render)

// const planeGeometry = new THREE.PlaneGeometry(3.6, 1.8, 720, 360)

// const material = new THREE.MeshPhongMaterial()

// //const texture = new THREE.TextureLoader().load("img/grid.png")
// const texture = new THREE.TextureLoader().load('img/worldColour.5400x2700.jpg')
// material.map = texture
// // const envTexture = new THREE.CubeTextureLoader().load(["img/px_50.png", "img/nx_50.png", "img/py_50.png", "img/ny_50.png", "img/pz_50.png", "img/nz_50.png"])
// // const envTexture = new THREE.CubeTextureLoader().load(["img/px_eso0932a.jpg", "img/nx_eso0932a.jpg", "img/py_eso0932a.jpg", "img/ny_eso0932a.jpg", "img/pz_eso0932a.jpg", "img/nz_eso0932a.jpg"])
// // envTexture.mapping = THREE.CubeReflectionMapping
// // material.envMap = envTexture

// //const specularTexture = new THREE.TextureLoader().load("img/earthSpecular.jpg")
// // material.specularMap = specularTexture

// // const normalTexture = new THREE.TextureLoader().load('img/earth_normalmap_8192x4096.jpg')
// // material.normalMap = normalTexture

// const displacementMap = new THREE.TextureLoader().load(
//     'img/gebco_bathy.5400x2700_8bit.jpg'
// )
// material.displacementMap = displacementMap

// const plane: THREE.Mesh = new THREE.Mesh(planeGeometry, material)
// scene.add(plane)

// window.addEventListener('resize', onWindowResize, false)
// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight
//     camera.updateProjectionMatrix()
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     render()
// }

// const stats = Stats()
// document.body.appendChild(stats.dom)

// const options = {
//     side: {
//         FrontSide: THREE.FrontSide,
//         BackSide: THREE.BackSide,
//         DoubleSide: THREE.DoubleSide,
//     },
// }
// const gui = new GUI()

// const materialFolder = gui.addFolder('THREE.Material')
// materialFolder.add(material, 'transparent')
// materialFolder.add(material, 'opacity', 0, 1, 0.01)
// materialFolder.add(material, 'depthTest')
// materialFolder.add(material, 'depthWrite')
// materialFolder
//     .add(material, 'alphaTest', 0, 1, 0.01)
//     .onChange(() => updateMaterial())
// materialFolder.add(material, 'visible')
// materialFolder
//     .add(material, 'side', options.side)
//     .onChange(() => updateMaterial())
// //materialFolder.open()

// const data = {
//     color: material.color.getHex(),
//     emissive: material.emissive.getHex(),
//     specular: material.specular.getHex(),
// }

// const meshPhongMaterialFolder = gui.addFolder('THREE.meshPhongMaterialFolder')

// meshPhongMaterialFolder.addColor(data, 'color').onChange(() => {
//     material.color.setHex(Number(data.color.toString().replace('#', '0x')))
// })
// meshPhongMaterialFolder.addColor(data, 'emissive').onChange(() => {
//     material.emissive.setHex(
//         Number(data.emissive.toString().replace('#', '0x'))
//     )
// })
// meshPhongMaterialFolder.addColor(data, 'specular').onChange(() => {
//     material.specular.setHex(
//         Number(data.specular.toString().replace('#', '0x'))
//     )
// })
// meshPhongMaterialFolder.add(material, 'shininess', 0, 1024)
// meshPhongMaterialFolder.add(material, 'wireframe')
// meshPhongMaterialFolder
//     .add(material, 'flatShading')
//     .onChange(() => updateMaterial())
// meshPhongMaterialFolder.add(material, 'reflectivity', 0, 1)
// meshPhongMaterialFolder.add(material, 'refractionRatio', 0, 1)
// meshPhongMaterialFolder.add(material, 'displacementScale', 0, 1, 0.01)
// meshPhongMaterialFolder.add(material, 'displacementBias', -1, 1, 0.01)
// meshPhongMaterialFolder.open()

// function updateMaterial() {
//     material.side = Number(material.side)
//     material.needsUpdate = true
// }

// const planeData = {
//     width: 3.6,
//     height: 1.8,
//     widthSegments: 360,
//     heightSegments: 180,
// }

// const planePropertiesFolder = gui.addFolder('PlaneGeometry')
// //planePropertiesFolder.add(planeData, 'width', 1, 30).onChange(regeneratePlaneGeometry)
// //planePropertiesFolder.add(planeData, 'height', 1, 30).onChange(regeneratePlaneGeometry)
// planePropertiesFolder
//     .add(planeData, 'widthSegments', 1, 3000)
//     .onChange(regeneratePlaneGeometry)
// planePropertiesFolder
//     .add(planeData, 'heightSegments', 1, 3000)
//     .onChange(regeneratePlaneGeometry)
// planePropertiesFolder.open()

// function regeneratePlaneGeometry() {
//     const newGeometry = new THREE.PlaneGeometry(
//         planeData.width,
//         planeData.height,
//         planeData.widthSegments,
//         planeData.heightSegments
//     )
//     plane.geometry.dispose()
//     plane.geometry = newGeometry
// }

// const textureFolder = gui.addFolder("Texture")
// textureFolder.add(texture.repeat, 'x', 0.1, 1, 0.1)
// textureFolder.add(texture.repeat, 'y', 0.1, 1, 0.1)
// textureFolder.add(texture.center, 'x', 0, 1, 0.001)
// textureFolder.add(texture.center, 'y', 0, 1, 0.001)

// textureFolder.open()

// function animate() {
//     requestAnimationFrame(animate)

//     render()

//     stats.update()
// }

// function render() {
//     renderer.render(scene, camera)
// }

// animate()

import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'
import {GUI} from 'dat.gui'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {TWEEN} from 'three/examples/jsm/libs/tween.module.min'
 
const scene = new THREE.Scene()

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.01, 1000)
camera.position.set(3, 3, 3)

const controls : OrbitControls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

scene.add(new THREE.AxesHelper(5))

const light = new THREE.PointLight()
light.intensity = 1.2
light.castShadow = true
light.position.set(20, 10, 20)
light.shadow.mapSize.width = 2048
light.shadow.mapSize.height = 2048
// light.shadow.camera.near = 0.5
// light.shadow.camera.far = 20
scene.add(light)

const light2 = new THREE.PointLight()
light2.intensity = 1.2
light2.castShadow = true
light2.position.set(-20, 10, 20)
light2.shadow.mapSize.width = 2048
light2.shadow.mapSize.height = 2048
scene.add(light2)

const gui = new GUI()

const textureLoader : THREE.TextureLoader = new THREE.TextureLoader

const planeGeometry = new THREE.PlaneGeometry(30, 30, 360, 360)
const planeMap = textureLoader.load('img/earthStockMap.jpg')

const planeMaterial = new THREE.MeshPhongMaterial({
    map: planeMap,
    side: THREE.DoubleSide,
    displacementMap:textureLoader.load('img/earthStockDisplacementMap.jpg'),
    displacementScale: 0.1,
    })
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.receiveShadow = true
plane.rotateX(-Math.PI / 2)
scene.add(plane)

const sceneMeshes: THREE.Mesh[] = []
sceneMeshes.push(plane)

const onWindowResize = () => {
    const newWidth : number = window.innerWidth
    const newHeight : number = window.innerHeight

    camera.aspect = newWidth/newHeight
    camera.updateProjectionMatrix()
    renderer.setSize(newWidth, newHeight)
    render
}

const gltfLoader : GLTFLoader = new GLTFLoader()
let animationMixer: THREE.AnimationMixer
let activeAction: THREE.AnimationAction
let lastAction: THREE.AnimationAction
let modelMesh: THREE.Object3D
let modelReady = false
const animationActions: THREE.AnimationAction[] = []

const setAction = (toAction: THREE.AnimationAction, setIfSame: boolean = false) => {
    if(toAction != activeAction || setIfSame) {
        lastAction = activeAction
        activeAction = toAction
        lastAction.fadeOut(0.2)
        activeAction.reset()
        activeAction.fadeIn(0.2)
        activeAction.play()
    } 
}

const animationFolder = gui.addFolder('Animations')

gltfLoader.load('models/kachujin_g_rosales.glb', 
    gltf => {
        gltf.scene.traverse(child => {
            if((child as THREE.Mesh).isMesh) {
                child.castShadow = true
                child.frustumCulled = false
            }
        })

        animationMixer = new THREE.AnimationMixer(gltf.scene)
        const animationAction = animationMixer.clipAction((gltf as any).animations[0])
        animationActions.push(animationAction)
        activeAction = animationActions[0]
        animationFolder.add(animations, 'default')
        scene.add(gltf.scene)
        modelMesh = gltf.scene


        gltfLoader.load('models/kachujin_g_rosales@angryStaying.glb', 
            gltf => {
                const animationAction = animationMixer.clipAction((gltf as any).animations[0])
                animationActions.push(animationAction)
                animationFolder.add(animations, 'angryStaying')

                gltfLoader.load('models/kachujin_g_rosales@walking3.glb', 
                    gltf => {
                        (gltf as any).animations[0].tracks.shift()
                        const animationAction = animationMixer.clipAction((gltf as any).animations[0])
                        animationActions.push(animationAction)
                        animationFolder.add(animations, 'walking')

                        gltfLoader.load('models/kachujin_g_rosales@fight.glb', 
                            gltf => {
                                const animationAction = animationMixer.clipAction((gltf as any).animations[0])
                                animationActions.push(animationAction)
                                animationFolder.add(animations, 'fight')

                                gltfLoader.load('models/kachujin_g_rosales@boxingCombo.glb', 
                                    gltf => {
                                        const animationAction = animationMixer.clipAction((gltf as any).animations[0])
                                        animationActions.push(animationAction)
                                        animationFolder.add(animations, 'boxing')
                                        modelReady = true
                                        setAction(animationActions[1])
                                    }
                                )
                                
                            }
                        )
                    }
                )
            }
        )
    }
)

const animations = {
    default: function() {
        setAction(animationActions[0])
    },
    angryStaying: function() {
        setAction(animationActions[1])
    },
    walking: function() {
        setAction(animationActions[2])
    },
    fight: function() {
        setAction(animationActions[3])
    },
    boxing: function() {
        setAction(animationActions[4])
    }
}

const raycaster : THREE.Raycaster = new THREE.Raycaster()
const targetQuaternion: THREE.Quaternion = new THREE.Quaternion()

const onDoubleClick = (event: MouseEvent) => {
    
    const mouse = {
        x: (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
        y: -(event.clientY / renderer.domElement.clientHeight) * 2 + 1
    }

    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(sceneMeshes, false)
    
    if(intersects.length > 0) {
        const p = intersects[0].point

        // modelMesh.lookAt(p)
        const distance = modelMesh.position.distanceTo(p)

        const rotationMatrix = new THREE.Matrix4()
        rotationMatrix.lookAt(p, modelMesh.position, modelMesh.up)
        targetQuaternion.setFromRotationMatrix(rotationMatrix)

        setAction(animationActions[2])
   
        TWEEN.removeAll()
        new TWEEN.Tween(modelMesh.position).to({
            x: p.x,
            y: p.y,
            z: p.z
        }, (1000 / 1.2) * distance)
        .onUpdate(() => {
            controls.target.set(
                modelMesh.position.x,
                modelMesh.position.y,
                modelMesh.position.z
            )
            
        })
        .start()
        .onComplete(() => {
            setAction(animationActions[1])
            activeAction.clampWhenFinished = true
            activeAction.loop = THREE.LoopOnce
        })
    }
}

const onClick = (event: MouseEvent) => {
    const {shiftKey, ctrlKey} = event

    const playAfterFinish = () => {
        setAction(animationActions[1])
        animationMixer.removeEventListener('finished', playAfterFinish)
    }

    if(ctrlKey) {
        animationMixer.addEventListener('finished', playAfterFinish)
        TWEEN.removeAll()
        setAction(animationActions[3], true)
        activeAction.clampWhenFinished = true
        activeAction.loop = THREE.LoopOnce
    }
    if (shiftKey) {
        animationMixer.addEventListener('finished', playAfterFinish)
        TWEEN.removeAll()
        setAction(animationActions[4], true)
        activeAction.clampWhenFinished = true
        activeAction.loop = THREE.LoopOnce
    }
}

window.addEventListener('click', onClick, false)
window.addEventListener('dblclick', onDoubleClick, false)
window.addEventListener('resize', onWindowResize, false)

const stats = Stats()
document.body.appendChild(stats.dom)

const render = () => {
    renderer.render(scene, camera)
}

const clock = new THREE.Clock()

const animate = () => {
    requestAnimationFrame(animate)

    controls.update()

    if(modelReady) {
        animationMixer.update(clock.getDelta())

        if (!modelMesh.quaternion.equals(targetQuaternion)) {            
            modelMesh.quaternion.rotateTowards(
                targetQuaternion,
                clock.getDelta() * 1000
            )
        }
    }

    TWEEN.update()
    
    render()

    stats.update()
}

animate()

// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import Stats from 'three/examples/jsm/libs/stats.module'
// import { GUI } from 'dat.gui'
// import { TWEEN } from 'three/examples/jsm/libs/tween.module.min'
// import { io } from 'socket.io-client'

// const scene = new THREE.Scene()

// const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
// )

// const renderer = new THREE.WebGLRenderer()
// renderer.setSize(window.innerWidth, window.innerHeight)
// document.body.appendChild(renderer.domElement)

// const controls = new OrbitControls(camera, renderer.domElement)

// const geometry = new THREE.BoxGeometry()
// const material = new THREE.MeshBasicMaterial({
//     color: 0x00ff00,
//     wireframe: true,
// })

// const myObject3D = new THREE.Object3D()
// myObject3D.position.x = Math.random() * 4 - 2
// myObject3D.position.z = Math.random() * 4 - 2

// const gridHelper = new THREE.GridHelper(10, 10)
// gridHelper.position.y = -0.5
// scene.add(gridHelper)

// camera.position.z = 4

// window.addEventListener('resize', onWindowResize, false)
// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight
//     camera.updateProjectionMatrix()
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     render()
// }

// let myId = ''
// let timestamp = 0
// const clientCubes: { [id: string]: THREE.Mesh } = {}
// const socket = io()
// socket.on('connect', function () {
//     console.log('connect')
// })
// socket.on('disconnect', function (message: any) {
//     console.log('disconnect ' + message)
// })
// socket.on('id', (id: any) => {
//     myId = id
//     setInterval(() => {
//         socket.emit('update', {
//             t: Date.now(),
//             p: myObject3D.position,
//             r: myObject3D.rotation,
//         })
//     }, 50)
// })
// socket.on('clients', (clients: any) => {
//     let pingStatsHtml = 'Socket Ping Stats<br/><br/>'
//     Object.keys(clients).forEach((p) => {
//         timestamp = Date.now()
//         pingStatsHtml += p + ' ' + (timestamp - clients[p].t) + 'ms<br/>'
//         if (!clientCubes[p]) {
//             clientCubes[p] = new THREE.Mesh(geometry, material)
//             clientCubes[p].name = p
//             scene.add(clientCubes[p])
//         } else {
//             if (clients[p].p) {
//                 new TWEEN.Tween(clientCubes[p].position)
//                     .to(
//                         {
//                             x: clients[p].p.x,
//                             y: clients[p].p.y,
//                             z: clients[p].p.z,
//                         },
//                         50
//                     )
//                     .start()
//             }
//             if (clients[p].r) {
//                 new TWEEN.Tween(clientCubes[p].rotation)
//                     .to(
//                         {
//                             x: clients[p].r._x,
//                             y: clients[p].r._y,
//                             z: clients[p].r._z,
//                         },
//                         50
//                     )
//                     .start()
//             }
//         }
//     })
//     ;(document.getElementById('pingStats') as HTMLDivElement).innerHTML =
//         pingStatsHtml
// })
// socket.on('removeClient', (id: string) => {
//     scene.remove(scene.getObjectByName(id) as THREE.Object3D)
// })

// const stats = Stats()
// document.body.appendChild(stats.dom)

// const gui = new GUI()
// const cubeFolder = gui.addFolder('Cube')
// const cubePositionFolder = cubeFolder.addFolder('Position')
// cubePositionFolder.add(myObject3D.position, 'x', -5, 5)
// cubePositionFolder.add(myObject3D.position, 'z', -5, 5)
// cubePositionFolder.open()
// const cubeRotationFolder = cubeFolder.addFolder('Rotation')
// cubeRotationFolder.add(myObject3D.rotation, 'x', 0, Math.PI * 2, 0.01)
// cubeRotationFolder.add(myObject3D.rotation, 'y', 0, Math.PI * 2, 0.01)
// cubeRotationFolder.add(myObject3D.rotation, 'z', 0, Math.PI * 2, 0.01)
// cubeRotationFolder.open()
// cubeFolder.open()

// const animate = function () {
//     requestAnimationFrame(animate)

//     controls.update()

//     TWEEN.update()

//     if (clientCubes[myId]) {
//         camera.lookAt(clientCubes[myId].position)
//     }

//     render()

//     stats.update()
// }

// const render = function () {
//     renderer.render(scene, camera)
// }

// animate()