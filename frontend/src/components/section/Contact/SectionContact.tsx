import {useState, ChangeEvent, FormEvent, useRef, useEffect} from 'react';
import * as THREE from 'three';
import {createCube, createSphere, createTorus, createHalfTorus} from '@/../Lib/threeLib/FormeGradiantFactoryLib'; // Ajuster le chemin d'importation si nécessaire
import { dotWave } from 'ldrs'

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    dotWave.register()

    const mountRef = useRef<HTMLDivElement | null>(null);
    const [formData, setFormData] = useState<FormData>({name: '', email: '', message: ''});
    const [status, setStatus] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('Sending');
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await res.json();
        if (data.success) {
            setStatus('Message envoyé !');
            setFormData({name: '', email: '', message: ''});
        } else {
            setStatus('Probléme lors de l\'envoie du mail');
        }
    };

    useEffect(() => {
        if (!mountRef.current) return;
        const mount = mountRef.current;

        // Create the scene
        const scene = new THREE.Scene();

        // Create the camera
        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        camera.position.z = 10;  // Adjusted for better view

        // Create the renderer
        const renderer = new THREE.WebGLRenderer({alpha: true});
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(renderer.domElement);

        // Add shapes to the scene using the imported functions
        const shapes = [
            createTorus(new THREE.Vector3(-4, 2, 2), new THREE.Color(0x0000ff), new THREE.Color(0x87cefa)),  // Gradient torus at (-2, 0, 2)
            createHalfTorus(new THREE.Vector3(5.2, -3, -3), new THREE.Euler(0, 0, Math.PI / 2), new THREE.Color(0x0000ff), new THREE.Color(0x87cefa)), // Gradient half-torus at (-1, -2, -3)
            createCube(new THREE.Vector3(8, 3, 3), new THREE.Color(0x0000ff), new THREE.Color(0x87cefa)),
            createCube(new THREE.Vector3(-8, -3, 3), new THREE.Color(0x0000ff), new THREE.Color(0x87cefa))
        ];

        shapes.forEach(shape => scene.add(shape));

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            const time = Date.now() * 0.001;
            shapes.forEach(shape => {
                shape.rotation.x += 0.01;
                shape.rotation.y += 0.01;
                shape.position.y += Math.sin(time) * 0.005; // Subtle up-and-down movement
            });
            renderer.render(scene, camera);
        };
        animate();

        // Handle window resize
        const handleResize = () => {
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            mount.removeChild(renderer.domElement);
        };
    }, [mountRef]);

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100 relative">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md z-10">
                <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Message:</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Send
                    </button>
                </form>
                {status === 'Sending' ? (
                    <div className="mt-4 text-center">
                        <l-dot-wave size="47" speed="1" color="black"></l-dot-wave>
                    </div>
                ) : (
                    <p className="mt-4 text-center">{status}</p>
                )}
            </div>
            <div ref={mountRef} className="absolute top-0 left-0 w-full h-full"></div>
        </section>
    );
}
