"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Hero3DObjectsProps {
  mouse: { x: number; y: number };
  time: number;
  reducedMotion: boolean;
}

export function Hero3DObjects({ mouse, time, reducedMotion }: Hero3DObjectsProps) {
  const groupRef = useRef<THREE.Group>(null);
  const meshesRef = useRef<THREE.Mesh[]>([]);

  const materials = useMemo(() => [
    new THREE.MeshPhysicalMaterial({
      color: 0x8b5cf6,
      metalness: 0.2,
      roughness: 0.3,
      transmission: 0.2,
      thickness: 0.5,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      wireframe: false,
    }),
    new THREE.MeshPhysicalMaterial({
      color: 0x06b6d4,
      metalness: 0.3,
      roughness: 0.2,
      transmission: 0.3,
      thickness: 0.5,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      wireframe: false,
    }),
    new THREE.MeshPhysicalMaterial({
      color: 0xf43f5e,
      metalness: 0.1,
      roughness: 0.4,
      transmission: 0.1,
      thickness: 0.3,
      clearcoat: 0.5,
      clearcoatRoughness: 0.2,
      wireframe: false,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      metalness: 0.1,
      roughness: 0.5,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    }),
  ], []);

  const geometries = useMemo(() => [
    new THREE.TorusKnotGeometry(0.6, 0.2, 100, 16),
    new THREE.IcosahedronGeometry(0.7, 1),
    new THREE.OctahedronGeometry(0.8, 0),
    new THREE.BoxGeometry(1, 1, 1, 4, 4, 4),
  ], []);

  const configs = useMemo(() => [
    { position: [-1.5, 1, -1], scale: 1, geometry: 0, material: 0, rotSpeed: [0.3, 0.5, 0.2] },
    { position: [1.8, -0.5, -0.5], scale: 0.8, geometry: 1, material: 1, rotSpeed: [0.2, 0.4, 0.1] },
    { position: [-0.5, -1.2, 1], scale: 1.2, geometry: 2, material: 2, rotSpeed: [0.4, 0.2, 0.3] },
    { position: [0, 0, 0], scale: 0.5, geometry: 3, material: 3, rotSpeed: [0.1, 0.3, 0.2] },
  ], []);

  useFrame((_, delta) => {
    if (reducedMotion || !groupRef.current) return;

    const group = groupRef.current;

    group.rotation.x += mouse.y * 0.002;
    group.rotation.y += mouse.x * 0.002;

    meshesRef.current.forEach((mesh, i) => {
      const config = configs[i];
      mesh.rotation.x += delta * config.rotSpeed[0];
      mesh.rotation.y += delta * config.rotSpeed[1];
      mesh.rotation.z += delta * config.rotSpeed[2];

      const floatY = Math.sin(time * 0.8 + i) * 0.15;
      const floatX = Math.cos(time * 0.6 + i * 2) * 0.1;
      mesh.position.y = config.position[1] + floatY;
      mesh.position.x = config.position[0] + floatX;
    });
  });

  return (
    <group ref={groupRef}>
      {configs.map((config, i) => (
        <mesh
          key={i}
          ref={(el) => { if (el) meshesRef.current[i] = el; }}
          geometry={geometries[config.geometry]}
          material={materials[config.material]}
          position={config.position}
          scale={config.scale}
          castShadow
          receiveShadow
        />
      ))}
    </group>
  );
}