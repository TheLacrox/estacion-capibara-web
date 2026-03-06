"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { StarField } from "./StarField";

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <StarField />
          <NebulaLight />
        </Suspense>
      </Canvas>
    </div>
  );
}

function NebulaLight() {
  return (
    <>
      <pointLight position={[5, 3, -5]} color="#8E44AD" intensity={2} distance={20} />
      <pointLight position={[-5, -2, -3]} color="#00ffff" intensity={1} distance={15} />
    </>
  );
}
