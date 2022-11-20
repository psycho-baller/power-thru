import { Text, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

export default function Quote({ quote, x, y, rotY }) {
  const ref = useRef();
  const [showQuote, setShowQuote] = useState(false);

    window.addEventListener("keydown", (e) => {
      if (e.key === "q") {
        if (showQuote === false) {
          setShowQuote(true);
        } else {
          setShowQuote(false);
        }
      }
    });
  useEffect(() => {
    if (showQuote) {
      ref.current.rotation.y = 0;
      ref.current.position.x = 0;
      ref.current.position.z = 1;
      ref.current.fontSize = 0.1;
      // focus on the quote
      // ref.current.parent.;
    } else {
      ref.current.rotation.y = rotY;
      ref.current.position.x = x;
      ref.current.position.z = 0;
        ref.current.fontSize = 0.08;
    }
  }, [showQuote]);
  return (
    // <Center>
    <Text
      ref={ref}
      // ref={text}
      height={0.1}
      // position-y={0.5}
      // curveSegments={12}
      // bevelEnabled
      // bevelThickness={0.01}
      // bevelSize={0.02}
      // bevelOffset={0}
      // bevelSegments={5}
      rotation={[0, rotY, 0]}
      position={[x, y, 0]}
      // x: 1.5,
      // y: 3.5,
      font="./bangers-v20-latin-regular.woff"
      fontSize={0.08}
    >
      {quote}
      <meshNormalMaterial />
    </Text>
    // </Center>
  );
}
