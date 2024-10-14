import * as THREE from "three";
console.log(THREE); 


//Scene
const scene=new THREE.Scene();

//Object in three called Mesh
const geometry=new THREE.BoxGeometry(1,1,1);
const material=new THREE.MeshBasicMaterial({color:0x00ff00});
const mesh=new THREE.Mesh(geometry,material);


//camera
const aspect={
    width:window.innerWidth,
    height:window.innerHeight
}
const camera=new THREE.PerspectiveCamera(75,aspect.width/aspect.height,0.1,1000);    //field of view,aspect ratio,near clipping plane,far clipping plane
camera.position.z=5; 
camera.position.x=1;
camera.position.y=1;


//add the mesh to the scene
scene.add(mesh);


//Renderer
const canvas=document.getElementById('canvas');
const renderer=new THREE.WebGLRenderer({canvas}); //add the webgl renderer to the canvas
renderer.setSize(aspect.width,aspect.height); //set the size of the renderer
renderer.render(scene,camera) //render the scene with the camera
