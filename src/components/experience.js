import { useRef } from "react";
import {
//   useHelper,
  BakeShadows,
  softShadows,
  OrbitControls,
  AccumulativeShadows,
  RandomizedLight,
  Sky,
} from "@react-three/drei";
import * as THREE from "three";

// softShadows({
//     frustum: 3.75,
//     size: 0.005,
//     near: 9.5,
//     samples: 17,
//     rings: 11
// })

export default function Experience() {
  const directionalLight = useRef();
  const cube = useRef();
//   useHelper(directionalLight, THREE.DirectionalLightHelper, 0.5, "hotpink");
  return (
    <>
      <OrbitControls makeDefault />

      <AccumulativeShadows position={[0, -0.99, 0]} scale={10}>
        <RandomizedLight />
      </AccumulativeShadows>

      <directionalLight
        ref={directionalLight}
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
      />
      <ambientLight intensity={0.5} />

      <Sky />

      <mesh castShadow position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh position-x={2} scale={1.5} ref={cube} castShadow>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
