import React, {useEffect, useRef} from "react";
import {useFrame, useLoader} from "@react-three/fiber";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";

const Model: React.FC<{ path: string; position: [number, number, number]; scale?: number; offset?: number }> = ({
                                                                                                                    path,
                                                                                                                    position,
                                                                                                                    scale = 1,
                                                                                                                    offset = 0,
                                                                                                                }) => {
    const obj = useLoader(OBJLoader, path);
    const groupRef = useRef<THREE.Group>(null);
    const initialPositionY = useRef(position[1]);

    useEffect(() => {
        if (groupRef.current) {
            groupRef.current.position.set(...position);
            groupRef.current.scale.set(scale, scale, scale);
            groupRef.current.rotation.set(0, 0, 0);
        }
    }, [position, scale]);

    useEffect(() => {
        obj.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
            }
        });
    }, [obj]);

    useFrame(({ clock }) => {
        if (groupRef.current) {
            groupRef.current.position.y = initialPositionY.current + Math.sin(clock.getElapsedTime() + offset) * 10;
        }
    });

    return (
        <group ref={groupRef}>
            <primitive object={obj} />
        </group>
    );
};

export default Model