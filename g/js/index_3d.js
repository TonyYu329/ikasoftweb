// 3D game entry
import * as THREE from './lib/three.min.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0a1a);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0x404060);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 10, 7);
scene.add(directionalLight);

// Player ship
const shipGeometry = new THREE.ConeGeometry(0.5, 1, 8);
shipGeometry.rotateX(Math.PI / 2);
const shipMaterial = new THREE.MeshPhongMaterial({ color: 0x4a90d9, emissive: 0x1a3a6a });
const ship = new THREE.Mesh(shipGeometry, shipMaterial);
ship.position.y = -2;
scene.add(ship);

// Stars background
const starsGeometry = new THREE.BufferGeometry();
const starCount = 2000;
const starPositions = new Float32Array(starCount * 3);
for (let i = 0; i < starCount * 3; i++) {
    starPositions[i] = (Math.random() - 0.5) * 200;
}
starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
const stars = new THREE.Points(starsGeometry, starsMaterial);
scene.add(stars);

// Game loop
function animate() {
    requestAnimationFrame(animate);
    ship.rotation.z = Math.sin(Date.now() * 0.002) * 0.1;
    stars.rotation.y += 0.0001;
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
