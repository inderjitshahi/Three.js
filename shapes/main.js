import './style.css'
//^ https://threejs.org/docs/?q=geome#api/en/geometries/BoxGeometry
import * as THREE from "three"; // Import the entire THREE.js library, which is a popular 3D rendering library.

//* Scene: This is the container that holds all objects, cameras, and lights. 
const scene = new THREE.Scene();

//& LoadingManager
const loadingManager = new THREE.LoadingManager();
loadingManager.onStart=()=>{
    console.log('loading started')
}
loadingManager.onProgress=(url,itemsLoaded,itemsTotal)=>{
    console.log('loading in progress',url,itemsLoaded,itemsTotal)
}
loadingManager.onLoad=()=>{
    console.log('loading completed')
}
loadingManager.onError=(url)=>{
    console.log('loading error',url)
}

//& Texture
const texture = new THREE.TextureLoader(loadingManager).load('particle.jpeg');
// const environmentMap = new THREE.CubeTextureLoader(loadingManager)
// const geometry = new THREE.PlaneGeometry()
// const geometry=new THREE.BufferGeometry()
// const vertices=new Float32Array([
//   0,0,0,
//   0,1,0,
//   1,0,0
// ])
// const positionsAttribute=new THREE.BufferAttribute(vertices,3)
// geometry.setAttribute('position',positionsAttribute)
// const material = new THREE.MeshBasicMaterial({ map: texture }); // The cube will be green in color (hex code for green).

//& PointsMaterial
const geometry=new THREE.BufferGeometry()
const count=1000;
const positions=new Float32Array(count*3)
for(let i=0;i<count*3;i++){
    positions[i]=(Math.random()-0.5)*15
}
geometry.setAttribute('position',new THREE.BufferAttribute(positions,3))
const material = new THREE.PointsMaterial()
const points=new THREE.Points(geometry,material)
material.size=.08
material.transparent=true //to make the points transparent
material.depthTest=false  //to make the points visible from behind
material.alphaMap=texture //to apply texture to the points
//& Material and its properties
// material.wireframe = true; // The cube will have a wireframe.
// material.transparent = true; // The cube will be transparent.
// material.opacity = 0.5; // The cube will be 50% transparent.
// material.side = THREE.DoubleSide; // The cube will be visible from both sides.
// material.flatShading = true; // The cube will have flat shading.
// material.color = new THREE.Color(0xff0000); // The cube will be red in color
// material.reflectivity = 1; // The cube will be 100% reflective.
// material.metalness = 1; // The cube will be 100% metallic.
// material.roughness = 0; // The cube will have 0 roughness.
// material.map = texture; // The cube will have a texture applied to it.
// material.envMap = environmentMap; // The cube will have an environment map applied to it.
const mesh = new THREE.Mesh(geometry, material);



// Add the cube (mesh) to the scene so it can be rendered.
scene.add(points);






//& Camera: Defines the perspective from which the scene is viewed.
const aspect = {
    width: window.innerWidth,  // Get the width of the browser window.
    height: window.innerHeight // Get the height of the browser window.
};

// PerspectiveCamera: Creates a camera with perspective projection (objects closer to the camera appear larger).
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height, 0.01, 1000);


// Set the position of the camera in the scene. The camera will be positioned at (0, 0, 5) in 3D space.
camera.position.z = 3;
camera.position.x = 0;
camera.position.y = 0;

//*Renderer: Handles drawing the scene onto the canvas using WebGL (a graphics API that allows for rendering 3D on the web).
const canvas = document.getElementById('canvas'); // Get the canvas element where the scene will be displayed.
const renderer = new THREE.WebGLRenderer({ canvas,alpha:true }); // alpha:true is used to make the scene background transparent.

// Set the size of the renderer to fill the entire window.
renderer.setSize(aspect.width, aspect.height);

//& OrbitControls
// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled

//Clock
const clock = new THREE.Clock();


//& Animation
const animate = () => {
    const elapsedTime = clock.getElapsedTime(); //in seconds
    //one ration per second
    points.rotation.y = elapsedTime*0.25;
    points.rotation.x = elapsedTime*0.25;

    //OrbitControls
    // controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
animate();
