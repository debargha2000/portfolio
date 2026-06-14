import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { vertexShader, fragmentShader } from './shaders/inkCanvasShaders';

const ShaderPlane = () => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    }),
    []
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      // Update resolution in case of resize
      materialRef.current.uniforms.uResolution.value.set(
        window.innerWidth,
        window.innerHeight
      );
    }
  });

  return (
    <mesh>
      {/* Plane geometry covering the entire screen */}
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
      />
    </mesh>
  );
};

export function InkCanvas() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={window.devicePixelRatio}
        gl={{ antialias: false }} // Turn off antialias for performance on full screen shader
      >
        <ShaderPlane />
      </Canvas>
    </div>
  );
}
