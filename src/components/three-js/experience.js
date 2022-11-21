import { useRef } from "react";
import {
  //   useHelper,
  Sparkles,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Quote from "./quote";
import quotes from "../../data/quotes";

export default function Experience() {
  const colorArray = [
    "#FF0000",
    "#FF7F00",
    "#FFFF00",
    "#00FF00",
    "#0000FF",
    "#4B0082",
    "#8B00FF",
  ];

  const count = 500;
  // float 32 array for the random colors
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    // positions[i] = (Math.random() - 0.5) * 10;
    colors[i] = Math.random();
  }

  return (
    <>
      <ambientLight intensity={0.5} />

      <Sparkles
        /** Number of particles (default: 100) */
        count={count}
        /** Speed of particles (default: 1) */
        speed={0.2}
        /** Opacity of particles (default: 1) */
        // opacity?: number | Float32Array
        /** Color of particles (default: 100) */
        // random color
        color={colors}
        /** Size of particles (default: randomized between 0 and 1) */
        size={2}
        /** The space the particles occupy (default: 1) */
        scale={5.5}
        /** Movement factor (default: 1) */
        // noise?: number | [number, number, number] | THREE.Vector3 | Float32Array
      />

      {quotes.map((quote, index) => {
        const rand = Math.random();
        const randY = Math.random();

        return (
          <Quote
            key={index}
            quote={quote}
            x={rand * 2 - 1} // -1 to 1
            y={randY * 7 - 3.5} // -3.5 to 3.5
            rotY={-rand * 0.5 - 0.25} // -.25 to .25
          />
        );
      })}
    </>
  );
}
