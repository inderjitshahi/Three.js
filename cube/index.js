import * as THREE from "three"; // Import the entire THREE.js library, which is a popular 3D rendering library.
console.log(THREE); // Log the THREE object to the console to inspect the available functionalities of the library.

//* Scene: This is the container that holds all objects, cameras, and lights. 
const scene = new THREE.Scene();

// Geometry: Defines the shape of the 3D object. BoxGeometry creates a simple cube (1x1x1 dimensions).
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Material: Determines how the surface of the object appears. MeshBasicMaterial is a basic material without lighting effects.
const material = new THREE.MeshNormalMaterial({ color: 0x00ff00 }); // The cube will be green in color (hex code for green).

// Mesh: Combines the geometry (shape) and material (appearance) to form a visible 3D object.
const mesh = new THREE.Mesh(geometry, material);
//Position the cube
//^mesh.position.x=1;


//scale the cube
//^ mesh.scale.x=1;

//rotate the cube, in radians
//^ mesh.rotation.z=.5;

//& Mesh 2
const geometry2 = new THREE.BoxGeometry(1, 1, 1);
const material2 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh2 = new THREE.Mesh(geometry2, material2);
mesh2.position.y = 2;



// Add the cube (mesh) to the scene so it can be rendered.
// scene.add(mesh);
// scene.add(mesh2);


//& Group
const group = new THREE.Group();
group.add(mesh, mesh2);
group.position.x = 0
group.rotation.x = 1.2;
scene.add(group);

//* Axes Helper
const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

//& Camera: Defines the perspective from which the scene is viewed.
const aspect = {
    width: window.innerWidth,  // Get the width of the browser window.
    height: window.innerHeight // Get the height of the browser window.
};

// PerspectiveCamera: Provides a perspective projection. Arguments:
// 1. Field of view (75 degrees here) – how wide the camera sees.
// 2. Aspect ratio – width/height to ensure proper scaling of objects.
// 3. Near clipping plane – minimum distance from the camera at which objects are rendered (0.1 in this case).
// 4. Far clipping plane – maximum distance from the camera at which objects are rendered (1000 units away).
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height, 0.1, 1000);
// const cameraHelper = new THREE.CameraHelper(camera);
// scene.add(cameraHelper);

// Camera position: Adjusts the camera's position to view the scene from a specific angle.
// Set the camera's position 5 units away from the origin (default: center of the scene) along the z-axis.
camera.position.z = 5;
// Optionally adjust the camera’s x and y position for a different perspective view.
camera.position.x = 0;
camera.position.y = 0;

//*Renderer: Handles drawing the scene onto the canvas using WebGL (a graphics API that allows for rendering 3D on the web).
// Renderer: Handles drawing the scene onto the canvas using WebGL (a graphics API that allows for rendering 3D on the web).
const canvas = document.getElementById('canvas'); // Get the canvas element where the scene will be displayed.
const renderer = new THREE.WebGLRenderer({ canvas }); // Initialize the WebGL renderer, linking it to the canvas element.

// Set the size of the renderer to fill the entire window.
renderer.setSize(aspect.width, aspect.height);

// Render the scene using the specified camera. This draws the cube (mesh) onto the canvas from the camera's point of view.
// renderer.render(scene, camera);

//Clock
const clock = new THREE.Clock();


//& Animation
const animate = () => {
    const elapsedTime = clock.getElapsedTime(); //in seconds

    //one ration per second
    group.rotation.y = elapsedTime * Math.PI * 2;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
animate();
