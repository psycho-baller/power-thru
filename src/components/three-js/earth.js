import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useLoader, useFrame } from '@react-three/fiber'
import { useRef } from 'react'


export default function Saturn() {
    const earthRef = useRef()
    const model = useLoader(GLTFLoader, "./earth.glb");

    useFrame(() => {
        earthRef.current.rotation.y += 0.002;
    })

    return (
      <>
        {/* <OrbitControls makeDefault /> */}
        <ambientLight intensity={1.5} />
        <pointLight position={[1, 1, 5]} intensity={1.5} />

        <primitive ref={earthRef} object={model.scene}  scale={0.006} />
      </>
    );
}