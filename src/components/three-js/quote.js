import { Text, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";


export default function Quote({ quote, x, y, rotY }) {
  // text.rotation.set(0, 0, 0);
  const ref = useRef();

  const cursor = {
    x: 0,
    y: 0,
  };
  let mousePos = new Vector3(0, 0,0);

  window.addEventListener("mousemove", (event) => {
    let x = event.clientX - window.innerWidth * 0.5;
    let y = event.clientY - window.innerHeight * 0.5;
    cursor.x = x * 0.001;
    cursor.y = y * 0.001;

    mousePos.x = cursor.x;
    mousePos.y = cursor.y;
  });

  useFrame(() => {
    // console.log(mousePos.x + " " + mousePos.y);
    // if users mouse is on the text, rotate it
    if (ref.current.position.x - mousePos.x < 0.2 && ref.current.position.x - mousePos.x > -0.2 && ref.current.position.y - mousePos.y < 0.2 && ref.current.position.y - mousePos.y > -0.2)  {
    //   ref.current.rotation.y += 0.01;
    // ref.current.position.x += 0.01;
    // ref.current.scale.set(0.5, 0.5, 0.5);
    //   console.log("mouse is on text");
    }
  });

  return (
    // <Center>
    <Text
      ref={ref}
      onClick={(e) => {
        // ref.current.rotation.y = 0;
        // check of curson is on text
        console.log(e);
      }}
      // ref={text}
      size={0.03}
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
      font=".\Oxygen_Regular.json"
      // fontSize={0.08}
    >
      {quote}
      <meshNormalMaterial />
    </Text>
    // </Center>
  );
}
