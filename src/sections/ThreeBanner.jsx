import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'


const RotatingShape = ({
  position,
  color,
  shape = 'torusKnot',
  scale = 1,
  animation = 'rotate'
}) => {
  const meshRef = useRef()

  useFrame(() => {
    if (animation === 'rotate1') {
    meshRef.current.rotation.y += 0.01
    meshRef.current.rotation.x += 0.005
  } 
  
    else if (animation === 'rotate2') {
    meshRef.current.rotation.y += -0.01
    meshRef.current.rotation.x += 0.005
  }
})

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
        {shape === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
        {shape === 'torus' && <torusGeometry args={[1, 0.35, 16, 48]} />}
        {shape === 'torusKnot' && <torusKnotGeometry args={[1, 0.3, 100, 16]} />}

      <meshLambertMaterial color={color} emissive={color} />
    </mesh>
  )
}

const ThreeBanner = () => {
  return (
    <div className="w-full h-125">
      <Canvas>
        <OrbitControls />
        
        <directionalLight
        position={[1, 1, 1]}
        intensity={3}
        color="#9CDBA6"
        />
        
        <RotatingShape
        position={[-2, 0, 0]}
        color="#53a12f"
        shape="torusKnot"
        scale={0.5}
        animation="rotate1"
        />
        
        <RotatingShape
        position={[0, 0, 0]}
        color="#e879f9"
        shape="torus"
        scale={0.7}
        animation="rotate2"
        />
        
        <RotatingShape
        position={[2, 0, 0]}
        color="#38bdf8"
        shape="octahedron"
        scale={0.5}
        animation="rotate2"
        />

        </Canvas>
    </div>
  )
}

export default ThreeBanner
