'use client';

import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';

function AnimatedSphere() {
  return (
    <Sphere args={[1, 100, 100]} scale={2}>
      <MeshDistortMaterial
        color="#EA580C"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.4}
      />
    </Sphere>
  );
}

export default function Background3D() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </Suspense>
    </div>
  );
}
