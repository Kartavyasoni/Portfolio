import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uMouse;
  varying float vElevation;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 pos = position;

    float t = uTime * 0.35;
    float e = 0.0;
    e += sin(pos.x * 0.45 + t) * 0.55;
    e += sin(pos.y * 0.55 - t * 1.2) * 0.45;
    e += sin((pos.x + pos.y) * 0.25 + t * 0.8) * 0.5;
    e += sin(length(pos.xy) * 0.6 - t * 1.5) * 0.22;

    // soft swell that follows the cursor
    float m = sin(pos.x * 0.3 + uMouse.x * 3.1416) *
              cos(pos.y * 0.3 + uMouse.y * 3.1416) * 0.2;
    e += m;

    pos.z += e;
    vElevation = e;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying float vElevation;
  varying vec2 vUv;

  void main() {
    float h = smoothstep(-1.0, 1.4, vElevation);
    vec3 color = mix(uColorA, uColorB, h);

    // radial fade so the grid dissolves into the backdrop at the edges
    float dist = distance(vUv, vec2(0.5));
    float vignette = smoothstep(0.62, 0.16, dist);

    float alpha = (0.10 + h * 0.7) * vignette;
    gl_FragColor = vec4(color, alpha);
  }
`;

function Terrain({ reduced }: { reduced: boolean }) {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uColorA: { value: new THREE.Color('#1d5fd8') },
      uColorB: { value: new THREE.Color('#22d3ee') },
    }),
    [],
  );

  useFrame((state, delta) => {
    if (matRef.current) {
      if (!reduced) matRef.current.uniforms.uTime.value += delta;
      // ease the cursor influence
      mouse.current.lerp(state.pointer, 0.05);
      matRef.current.uniforms.uMouse.value.copy(mouse.current);
    }
    // subtle parallax tilt of the whole field
    if (groupRef.current && !reduced) {
      groupRef.current.rotation.x = -Math.PI / 2 + 0.08 + state.pointer.y * 0.04;
      groupRef.current.rotation.z = state.pointer.x * 0.04;
    }
  });

  return (
    <group ref={groupRef} rotation={[-Math.PI / 2 + 0.08, 0, 0]} position={[0, -1.6, 0]}>
      <mesh>
        <planeGeometry args={[40, 30, 150, 110]} />
        <shaderMaterial
          ref={matRef}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          wireframe
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

function DataNodes({ reduced }: { reduced: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const count = 90;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 24;
      arr[i * 3 + 1] = Math.random() * 6 - 0.5;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 14 - 2;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current && !reduced) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#67e8f9"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Rig() {
  // Keep the camera framing stable; the motion lives in the terrain.
  const { camera } = useThree();
  camera.position.set(0, 3.4, 7.5);
  camera.lookAt(0, 0, 0);
  return null;
}

export default function HeroScene() {
  const reduced = usePrefersReducedMotion();

  return (
    <Canvas
      dpr={[1, 1.75]}
      frameloop={reduced ? 'demand' : 'always'}
      camera={{ position: [0, 3.4, 7.5], fov: 55 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ pointerEvents: 'none' }}
    >
      <Rig />
      <Terrain reduced={reduced} />
      <DataNodes reduced={reduced} />
      <EffectComposer>
        <Bloom
          intensity={0.9}
          luminanceThreshold={0.05}
          luminanceSmoothing={0.4}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
}
