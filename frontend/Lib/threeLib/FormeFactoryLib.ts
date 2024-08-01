import * as THREE from 'three';

export const createCube = (color: number, position: THREE.Vector3): THREE.Mesh => {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.copy(position);
    return cube;
};

export const createSphere = (color: number, position: THREE.Vector3): THREE.Mesh => {
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.copy(position);
    return sphere;
};

export const createTorus = (color: number, position: THREE.Vector3): THREE.Mesh => {
    const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color });
    const torus = new THREE.Mesh(geometry, material);
    torus.position.copy(position);
    return torus;
};

export const createHalfTorus = (color: number, position: THREE.Vector3, rotation: THREE.Euler): THREE.Mesh => {
    const geometry = new THREE.TorusGeometry(1, 0.4, 16, 50, Math.PI);
    const material = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
    const halfTorus = new THREE.Mesh(geometry, material);
    halfTorus.position.copy(position);
    halfTorus.rotation.copy(rotation);
    return halfTorus;
};
