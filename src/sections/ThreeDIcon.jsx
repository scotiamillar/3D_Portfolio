import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Float, useTexture } from '@react-three/drei'

function IconPlane({ src }) {
  const texture = useTexture(src)

  return (
    <mesh rotation={[0.3, 0.5, 0]}>
      <planeGeometry args={[1.5, 1.5]} />
      <meshBasicMaterial
        map={texture}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default function ThreeDIcon({ src }) {
  return (
    <div className="w-16 h-16">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <Float
            speed={6}
            rotationIntensity={1.6}
            floatIntensity={0.8}
            >
        <IconPlane src={src} />
        </Float>
      </Canvas>
    </div>
  )
}