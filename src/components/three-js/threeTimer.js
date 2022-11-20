import { Canvas } from "@react-three/fiber";

export default function Timer() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[10, 10, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  );
}
