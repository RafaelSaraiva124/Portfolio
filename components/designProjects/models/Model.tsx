"use client";

import { useRef, useMemo, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame, invalidate } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

interface ShirtModelProps {
    dragInfluence: number;
}

function ShirtModel({ dragInfluence }: ShirtModelProps) {
    const groupRef = useRef<THREE.Group>(null);
    const { scene } = useGLTF("/models/shirt.glb");
    const [showBack, setShowBack] = useState(false);
    const elapsedTime = useRef(0);
    const smoothedInfluence = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowBack((p) => !p);
            invalidate();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const centeredScene = useMemo(() => {
        const cloned = scene.clone(true);
        const box = new THREE.Box3().setFromObject(cloned);
        const center = new THREE.Vector3();
        box.getCenter(center);
        cloned.position.set(-center.x, -center.y, -center.z);
        cloned.scale.set(1.4, 1.4, 1.4);
        cloned.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
                mats.forEach((mat) => {
                    if (mat instanceof THREE.MeshStandardMaterial) {
                        mat.roughness = 0.6;
                        mat.metalness = 0.0;
                        mat.envMapIntensity = 0.8;
                    }
                });
            }
        });
        return cloned;
    }, [scene]);

    useFrame((_, delta) => {
        if (!groupRef.current) return;
        elapsedTime.current += delta;

        smoothedInfluence.current = THREE.MathUtils.lerp(
            smoothedInfluence.current,
            dragInfluence,
            0.08
        );

        const targetRotation = showBack ? Math.PI : 0;

        groupRef.current.rotation.y = THREE.MathUtils.damp(
            groupRef.current.rotation.y,
            targetRotation,
            2.5,
            delta
        );

        const t = elapsedTime.current;
        const spring = THREE.MathUtils.clamp(
            smoothedInfluence.current * 0.15,
            -0.15,
            0.15
        );

        groupRef.current.rotation.y += Math.sin(t * 1.2) * 0.02 + spring;
        groupRef.current.position.y = Math.sin(t * 0.2) * 0.04 - 0.3;

        invalidate();
    });

    return (
        <group ref={groupRef}>
            <primitive object={centeredScene} />
        </group>
    );
}

export default function Model() {
    const isDragging = useRef(false);
    const lastX = useRef<number | null>(null);
    const rawInfluence = useRef(0);
    const [dragInfluence, setDragInfluence] = useState(0);
    const [grabbing, setGrabbing] = useState(false);

    const handlePointerDown = useCallback((e: React.PointerEvent) => {
        isDragging.current = true;
        setGrabbing(true);
        lastX.current = e.clientX;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    }, []);

    const handlePointerMove = useCallback(
        (e: React.PointerEvent) => {
            if (!isDragging.current || lastX.current === null) return;
            const delta = e.clientX - lastX.current;
            rawInfluence.current = THREE.MathUtils.clamp(
                rawInfluence.current + delta * 0.04,
                -1,
                1
            );
            setDragInfluence(rawInfluence.current);
            lastX.current = e.clientX;
            invalidate();
        },
        []
    );

    const handlePointerUp = useCallback(() => {
        isDragging.current = false;
        setGrabbing(false);
        lastX.current = null;
        rawInfluence.current = 0;
        setDragInfluence(0);
        invalidate();
    }, []);

    return (
        <div
            className="relative w-full h-[700px] select-none"
            style={{ cursor: grabbing ? "grabbing" : "grab" }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
        >
            <Canvas
                camera={{ position: [0, 0, 9], fov: 38 }}
                gl={{
                    antialias: true,
                    toneMapping: THREE.ACESFilmicToneMapping,
                    toneMappingExposure: 1.1,
                }}
                frameloop="demand"
            >
                <ambientLight intensity={1.2} />
                <directionalLight position={[5, 8, 5]} intensity={4} castShadow />
                <directionalLight position={[-4, 2, -3]} intensity={1.5} />
                <spotLight
                    position={[0, 8, 4]}
                    angle={0.35}
                    penumbra={0.8}
                    intensity={5}
                    castShadow
                />

                <Environment preset="apartment" environmentIntensity={0.6} />

                <ShirtModel dragInfluence={dragInfluence} />

                <ContactShadows
                    position={[0, -1.8, 0]}
                    opacity={0.18}
                    scale={6}
                    blur={2.5}
                    far={3}
                />
            </Canvas>
        </div>
    );
}

useGLTF.preload("/models/shirt.glb");