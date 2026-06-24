"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

function ShirtModel() {
    const groupRef = useRef<THREE.Group>(null);
    const { scene } = useGLTF("/models/shirt.glb");
    const [showBack, setShowBack] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowBack((prev) => !prev);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const centeredScene = useMemo(() => {
        const clonedScene = scene.clone(true);

        const box = new THREE.Box3().setFromObject(clonedScene);
        const center = new THREE.Vector3();
        box.getCenter(center);

        clonedScene.position.set(-center.x, -center.y, -center.z);
        clonedScene.scale.set(1.4, 1.4, 1.4);

        clonedScene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;

                if (mesh.material) {
                    const materials = Array.isArray(mesh.material)
                        ? mesh.material
                        : [mesh.material];

                    materials.forEach((mat) => {
                        if (mat instanceof THREE.MeshStandardMaterial) {
                            mat.roughness = 0.5;
                            mat.metalness = 0.05;
                            mat.envMapIntensity = 0.4;
                        }
                    });
                }
            }
        });

        return clonedScene;
    }, [scene]);

    useFrame((state, delta) => {
        if (!groupRef.current) return;

        const targetRotation = showBack ? Math.PI : 0;

        groupRef.current.rotation.y = THREE.MathUtils.damp(
            groupRef.current.rotation.y,
            targetRotation,
            2.5,
            delta
        );

        const t = state.clock.elapsedTime;

        groupRef.current.rotation.y += Math.sin(t * 1.2) * 0.02;
        groupRef.current.position.y = Math.sin(t * 2.5) * 0.04;
    });

    return (
        <group ref={groupRef}>
            <primitive object={centeredScene} />
        </group>
    );
}

export default function Model() {
    return (
        <div className="w-full h-[700px]">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 50 }}
                gl={{
                    antialias: true,
                    toneMapping: THREE.ACESFilmicToneMapping,
                    toneMappingExposure: 1.2,
                }}
                frameloop="always"
            >
                <ambientLight intensity={2.5} />

                <directionalLight position={[8, 10, 8]} intensity={8} />
                <directionalLight position={[-6, 4, 3]} intensity={3.5} />
                <directionalLight position={[0, 3, -6]} intensity={4} />
                <directionalLight position={[0, -4, 2]} intensity={2} />

                <spotLight
                    position={[3, 6, 5]}
                    angle={0.4}
                    penumbra={0.5}
                    intensity={3}
                />

                <Environment preset="studio" environmentIntensity={0.3} />

                <ShirtModel />
            </Canvas>
        </div>
    );
}

useGLTF.preload("/models/shirt.glb");