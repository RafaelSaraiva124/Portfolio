"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 150;

export function Hero3DParticles({
  mouse,
  time,
  reducedMotion,
}: {
  mouse: { x: number; y: number };
  time: number;
  reducedMotion: boolean;
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useRef(new THREE.Object3D());
  const geometries = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(0.02, 0);
    const geo2 = new THREE.BoxGeometry(0.03, 0.03, 0.03);
    const geo3 = new THREE.OctahedronGeometry(0.025, 0);
    return [geo, geo2, geo3];
  }, []);

  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: 0x8b5cf6,
        transparent: true,
        opacity: 0.6,
        metalness: 0.3,
        roughness: 0.4,
        transmission: 0.3,
        thickness: 0.5,
        clearcoat: 0.5,
        clearcoatRoughness: 0.1,
      }),
    []
  );

  const positions = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const scales = new Float32Array(PARTICLE_COUNT);
    const geometryIndices = new Float32Array(PARTICLE_COUNT);
    const phases = new Float32Array(PARTICLE_COUNT);
    const speeds = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius = 3 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      scales[i] = 0.5 + Math.random() * 1.5;
      geometryIndices[i] = Math.floor(Math.random() * 3);
      phases[i] = Math.random() * Math.PI * 2;
      speeds[i] = 0.2 + Math.random() * 0.5;
    }

    return { positions, scales, geometryIndices, phases, speeds };
  }, []);

  useFrame((state, delta) => {
    if (reducedMotion || !meshRef.current) return;

    const mesh = meshRef.current;
    const { positions, scales, geometryIndices, phases, speeds } = positions;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const idx = i * 3;
      const phase = phases[i] + time * speeds[i];
      const speed = speeds[i];

      const x = positions[idx] + Math.sin(phase) * 0.02;
      const y = positions[idx + 1] + Math.cos(phase * 0.7) * 0.02;
      const z = positions[idx + 2] + Math.sin(phase * 0.5) * 0.01;

      dummy.current.position.set(x, y, z);
      dummy.current.scale.setScalar(scales[i]);
      dummy.current.rotation.x = phase * 0.5;
      dummy.current.rotation.y = phase * 0.3;
      dummy.current.updateMatrix();
      mesh.setMatrixAt(i, dummy.current.matrix);
    }

    mesh.instanceMatrix.needsUpdate = true;

    if (meshRef.current) {
      meshRef.current.rotation.x += mouse.y * 0.0005;
      meshRef.current.rotation.y += mouse.x * 0.0005;
    }
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[null, null, PARTICLE_COUNT]}
      frustumCulled={false}
      sortObjects={false}
    >
      {geometries.map((geo, i) => (
        <geometry key={i} {...geo} />
      ))}
      <material>{material}</material>
    </instancedMesh>
  );
}