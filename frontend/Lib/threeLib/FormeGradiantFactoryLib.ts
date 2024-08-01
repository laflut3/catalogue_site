import * as THREE from 'three';

// Function to create a shader material with a gradient
const createGradientMaterial = (color1: THREE.Color, color2: THREE.Color): THREE.ShaderMaterial => {
    const vertexShader = `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;

    const fragmentShader = `
        varying vec2 vUv;
        uniform vec3 color1;
        uniform vec3 color2;
        void main() {
            gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
        }
    `;

    return new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
            color1: { value: color1 },
            color2: { value: color2 }
        }
    });
};

export const createCube = (position: THREE.Vector3, color1: THREE.Color, color2: THREE.Color): THREE.Mesh => {
    const geometry = new THREE.BoxGeometry();
    const material = createGradientMaterial(color1, color2);
    const cube = new THREE.Mesh(geometry, material);
    cube.position.copy(position);
    return cube;
};

export const createSphere = (position: THREE.Vector3, color1: THREE.Color, color2: THREE.Color): THREE.Mesh => {
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = createGradientMaterial(color1, color2);
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.copy(position);
    return sphere;
};

export const createTorus = (position: THREE.Vector3, color1: THREE.Color, color2: THREE.Color): THREE.Mesh => {
    const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
    const material = createGradientMaterial(color1, color2);
    const torus = new THREE.Mesh(geometry, material);
    torus.position.copy(position);
    return torus;
};

export const createHalfTorus = (position: THREE.Vector3, rotation: THREE.Euler, color1: THREE.Color, color2: THREE.Color): THREE.Mesh => {
    const geometry = new THREE.TorusGeometry(1, 0.4, 16, 50, Math.PI);
    const material = createGradientMaterial(color1, color2);
    const halfTorus = new THREE.Mesh(geometry, material);
    halfTorus.position.copy(position);
    halfTorus.rotation.copy(rotation);
    return halfTorus;
};
