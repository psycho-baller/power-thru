import { Text, Center } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";

export default function Quote() {
    // text.rotation.set(0, 0, 0);

  return (
    // <Center>
      <Text
        // ref={text}
        size={0.08}
        height={0.2}
        // position-y={0.5}
        // curveSegments={12}
        // bevelEnabled
        // bevelThickness={0.01}
        // bevelSize={0.02}
        // bevelOffset={0}
        // bevelSegments={5}
        rotation={[0, -0.5, 0]}
        position={[1.5, 3.5, 0]}
        // x: 1.5,
        // y: 3.5,
        font=".\Oxygen_Regular.json"
        // fontSize={0.08}
      >
        Hello
        <meshNormalMaterial />
      </Text>
    // </Center>
  );
}
