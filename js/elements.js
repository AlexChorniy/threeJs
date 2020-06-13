// Cube

const radius = 1;
const widthSegments = 20;
const heightSegments = 20;

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshPhongMaterial({ color: '#CA8' });
const cube = new THREE.Mesh(boxGeometry, boxMaterial);

const animateCube = function () {
    scene.add(cube);
    scene.remove(cone);
    scene.remove(sphere);
    renderer.render(scene, camera);
};

// Sphere

const sphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
const sphereMaterial = new THREE.MeshPhongMaterial({ color: '#CA8' });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

function animateSphere() {
    scene.add(sphere);
    scene.remove(cone);
    scene.remove(cube);
    renderer.render(scene, camera);
}

// Cone

const coneGeometry = new THREE.ConeGeometry(1, 2.5, 5);
const coneMaterial = new THREE.MeshPhongMaterial({ color: '#CA8' });
const cone = new THREE.Mesh(coneGeometry, coneMaterial);

function animateCone() {
    scene.add(cone);
    scene.remove(cube);
    scene.remove(sphere);
    renderer.render(scene, camera);
}

function removeAll() {
    scene.remove(cube);
    scene.remove(sphere);
    scene.remove(cone);
    renderer.render(scene, camera);
}

const PointLight = new THREE.PointLight(0xffffff, 1, 1000);
PointLight.position.set(50, 50, 50);
scene.add(PointLight);
