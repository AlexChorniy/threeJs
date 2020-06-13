var scene = new THREE.Scene();
const width = 800;
const height = 350;
var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
// camera.position.z = 3;

var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000000);
renderer.setSize(width, height);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.getElementById('canvas').appendChild(renderer.domElement);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
// camera.position.set(0, 1, 3);
// controls.target.set(1, 1, 1);


controls.update();

controls.addEventListener('change', renderEl);

function renderEl() {
    renderer.render(scene, camera);
};

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);

};

