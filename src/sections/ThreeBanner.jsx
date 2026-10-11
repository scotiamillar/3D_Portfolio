import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text3D, Center } from '@react-three/drei'
import { useRef } from 'react'


const RotatingShape = ({
  position,
  color,
  shape = 'torusKnot',
  scale = 1,
  animation = 'rotate',
  rotation = [0, 0, 0]
}) => {
  const meshRef = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    
    if (animation === 'rotate1') {
    meshRef.current.rotation.y += 0.01
    meshRef.current.rotation.x += 0.005
  } 
  
    else if (animation === 'rotate2') {
    meshRef.current.rotation.y += -0.01
    meshRef.current.rotation.x += 0.005
  }

    else if (animation === 'bounce') {
    meshRef.current.position.y =
      position[1] + Math.sin(t * 2) * 0.2
  }
})

  return (
    <mesh ref={meshRef} position={position} scale={scale} rotation={rotation}>
        {shape === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
        {shape === 'torus' && <torusGeometry args={[1, 0.35, 16, 48]} />}
        {shape === 'torusKnot' && <torusKnotGeometry args={[1, 0.3, 100, 16]} />}
        {shape === 'cone' && (<coneGeometry args={[1, 2, 32]} /> )}
        {shape === 'box' && <boxGeometry args={[1, 1, 1]} />}

      <meshLambertMaterial color={color} emissive={color} />
    </mesh>
  )
}

const ThreeBanner = () => {
  return (
    <div className="w-full h-100">
      <Canvas>
        <OrbitControls />
        
        <directionalLight
        position={[1, 1, 1]}
        intensity={3}
        color="#9CDBA6"
        />
        
        <RotatingShape
        position={[3, 2, -3]}
        color="#53a12f"
        shape="torusKnot"
        scale={0.6}
        animation="rotate1"
        />
        
        <RotatingShape
        position={[5, 0, 0]}
        color="#e879f9"
        shape="torus"
        scale={0.5}
        animation="rotate2"
        />
        
        <RotatingShape
        position={[9, 0, 0]}
        color="#38bdf8"
        shape="octahedron"
        scale={0.5}
        animation="rotate1"
        />

        <RotatingShape
        position={[6, 1, 1]}
        color="orange"
        shape="cone"
        scale={0.3}
        animation="bounce"
        rotation={[0, Math.PI, 0]}
        />

        <RotatingShape
        position={[13, -2, -1]}
        color="yellow"
        shape="box"
        scale={0.6}
        animation="rotate2"
        />

        <RotatingShape
          position={[-3, 2, -3]}
          color="#60a5fa"
          shape="torus"
          scale={0.6}
          animation="rotate1"
        />

        <RotatingShape
          position={[-5, 0, 0]}
          color="#34d399"
          shape="octahedron"
          scale={0.5}
          animation="rotate1"
        />

        <RotatingShape
          position={[-9, 0, 0]}
          color="#fb7185"
          shape="torusKnot"
          scale={0.5}
          animation="rotate2"
        />

        <RotatingShape
          position={[-6, 1.5, 1]}
          color="#a855f7"
          shape="box"
          scale={0.6}
          animation="rotate1"
        />

        <RotatingShape
          position={[-13, -2, -1]}
          color="#a78bfa"
          shape="cone"
          scale={0.4}
          animation="bounce"
          rotation={[0, Math.PI, 0]}
        />

        <Center position={[0, -1, 0]}>
            <Text3D
            font="/fonts/helvetiker_bold.typeface.json"
            size={0.8}
            height={0.2}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelSegments={5}
            >
                Scotia Millar
                <meshLambertMaterial color="#67E8F9" emissive="#67E8F9" />
            </Text3D>
        </Center>

        </Canvas>
    </div>
  )
}

export default ThreeBanner
