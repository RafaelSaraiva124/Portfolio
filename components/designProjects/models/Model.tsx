"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";

function ShirtModel() {
    const groupRef = useRef<THREE.Group>(null);
    const { scene } = useGLTF("/models/shirt.glb");
    const [showBack, setShowBack] = useState(false);
    const rotationStartTime = useRef<number | null>(null);
    const initialRotation = useRef<number>(0);
    const targetRotation = useRef<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowBack((prev) => {
                rotationStartTime.current = null;
                return !prev;
            });
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

        // Otimiza materiais para melhor resposta à luz
        clonedScene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                mesh.castShadow = false;
                mesh.receiveShadow = true;

                if (mesh.material) {
                    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
                    materials.forEach((mat) => {
                        if (mat instanceof THREE.MeshStandardMaterial) {
                            mat.roughness = 0.5;    // Mais suave para refletir melhor
                            mat.metalness = 0.05;    // Leve brilho metálico
                            mat.envMapIntensity = 0.4; // Reflexos do ambiente
                        }
                    });
                }
            }
        });

        return clonedScene;
    }, [scene]);

    useFrame((state) => {
        if (!groupRef.current) return;
        const t = state.clock.elapsedTime;

        if (rotationStartTime.current === null) {
            rotationStartTime.current = t;
            initialRotation.current = groupRef.current.rotation.y;
            targetRotation.current = showBack ? Math.PI : 0;
        }

        const rotationElapsed = t - rotationStartTime.current;
        const rotationDuration = 1.5;
        const rotationProgress = Math.min(rotationElapsed / rotationDuration, 1);

        const eased = rotationProgress < 0.5
            ? 2 * rotationProgress * rotationProgress
            : 1 - Math.pow(-2 * rotationProgress + 2, 2) / 2;

        const baseRotation = THREE.MathUtils.lerp(
            initialRotation.current,
            targetRotation.current,
            eased
        );

        const swing = Math.sin(t * 1.2) * (Math.PI / 6);
        groupRef.current.rotation.y = baseRotation + swing;
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
            >
                <ambientLight intensity={2.5} color="#ffffff" />

                <directionalLight
                    position={[8, 10, 8]}
                    intensity={8}
                    color="#ffffff"
                />

                <directionalLight
                    position={[-6, 4, 3]}
                    intensity={3.5}
                    color="#f8f0ff"
                />

                <directionalLight
                    position={[0, 3, -6]}
                    intensity={4}
                    color="#e8e0ff"
                />

                <directionalLight
                    position={[0, -4, 2]}
                    intensity={2}
                    color="#ffffff"
                />

                <spotLight
                    position={[3, 6, 5]}
                    angle={0.4}
                    penumbra={0.5}
                    intensity={3}
                    color="#ffffff"
                />

                <Environment preset="studio" environmentIntensity={0.3} />

                <ShirtModel />
            </Canvas>
        </div>
    );
}

useGLTF.preload("/models/shirt.glb");