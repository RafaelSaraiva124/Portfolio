"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Environment, Effects, ContactShadows, OrbitControls } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";
import { Hero3DParticles } from "./Hero3DParticles";
import { Hero3DObjects } from "./Hero3DObjects";

function SceneContent({ mouse, time, reducedMotion }: { mouse: { x: number; y: number }; time: number; reducedMotion: boolean }) {
  return (
    <>
      <Environment
        preset="city"
        background={false}
        files={[
          "px.png", "nx.png",
          "py.png", "ny.png",
          "pz.png", "nz.png"
        ]}
      />

      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 10, 7]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-3, 2, 3]} color="#8b5cf6" intensity={2} decay={2} />
      <pointLight position={[3, -2, -3]} color="#06b6d4" intensity={1.5} decay={2} />
      <pointLight position={[0, 5, 0]} color="#f43f5e" intensity={1} decay={2} />

      <Hero3DParticles mouse={mouse} time={time} reducedMotion={reducedMotion} />
      <Hero3DObjects mouse={mouse} time={time} reducedMotion={reducedMotion} />

      <ContactShadows
        opacity={0.3}
        scale={20}
        blur={2}
        far={10}
        position={[0, -3, 0]}
      />
    </>
  );
}

function CameraControls({ scrollY }: { scrollY: number }) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame(() => {
    if (cameraRef.current) {
      const targetZ = 5 + scrollY * 0.0008;
      const targetY = scrollY * 0.0003;
      cameraRef.current.position.z = THREE.MathUtils.lerp(cameraRef.current.position.z, targetZ, 0.05);
      cameraRef.current.position.y = THREE.MathUtils.lerp(cameraRef.current.position.y, targetY, 0.05);
      cameraRef.current.lookAt(0, targetY * 0.5, 0);
    }
  });

  return (
    <camera ref={cameraRef} position={[0, 0, 5]} fov={50} />
  );
}

export function Hero3DScene({ mouse, scrollY, reducedMotion }: { mouse: { x: number; y: number }; scrollY: number; reducedMotion: boolean }) {
  const timeRef = useRef(0);

  useFrame((_, delta) => {
    timeRef.current += delta;
  });

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false, powerPreference: "high-performance" }}
      shadows={true}
      dpr={[1, 2]}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
    >
      <Suspense fallback={null}>
        <CameraControls scrollY={scrollY} />
        <SceneContent mouse={mouse} time={timeRef.current} reducedMotion={reducedMotion} />
      </Suspense>

      {!reducedMotion && (
        <Effects multisampling={4} renderPriority={1}>
          <Effects.Bloom
            intensity={0.15}
            threshold={0.8}
            radius={0.5}
          />
        </Effects>
      )}
    </Canvas>
  );
}

export function Hero3DFallback() {
  return (
    <div
      className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80')] bg-cover bg-center opacity-10" />
    </div>
  );
}