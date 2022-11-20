import { useControls } from "leva";
import React, {
  useState,
  useEffect,
  useRef,
  ref,
  setGlobalCoords,
} from "react";
import { useFrame } from "@react-three/fiber";
import { Vector2 } from "three";

export default function Timer({ secs, mins, hrs, days }) {
  let mousePos = new Vector2(0, 0);
  window.addEventListener("mousemove", (event) => {
    let x = event.clientX - window.innerWidth * 0.5;
    let y = event.clientY - window.innerHeight * 0.5;

    mousePos.x = x * 0.001;
    mousePos.y = y * 0.001;
  });
  const daysRef = useRef();
  const hrsRef = useRef();
  const minsRef = useRef();
  const secsRef = useRef();

  useFrame(() => {
    secsRef.current.rotation.x =
      secsRef.current.rotation.x * 0.95 + mousePos.y * 1.7 * 0.05;
    secsRef.current.rotation.y =
      secsRef.current.rotation.y * 0.95 + mousePos.x * 1.7 * 0.05;

    minsRef.current.rotation.x =
      minsRef.current.rotation.x * 0.95 + mousePos.y * 0.5 * 0.05;
    minsRef.current.rotation.y =
      minsRef.current.rotation.y * 0.95 + mousePos.x * 0.5 * 0.05;

    hrsRef.current.rotation.x =
      hrsRef.current.rotation.x * 0.95 + mousePos.y * 0.3 * 0.05;
    hrsRef.current.rotation.y =
      hrsRef.current.rotation.y * 0.95 + mousePos.x * 0.3 * 0.05;

    daysRef.current.rotation.x =
      daysRef.current.rotation.x * 0.95 + mousePos.y * 0.1 * 0.05;
    daysRef.current.rotation.y =
      daysRef.current.rotation.y * 0.95 + mousePos.x * 0.1 * 0.05;
  });

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <group ref={daysRef} rotation-z={Math.PI * 0.5}>
        <mesh>
          <torusGeometry
            args={[3.6, 0.2, 15, 80, -(days * Math.PI * 2) / 90]}
          />
          <meshStandardMaterial color="#C8963E" />
        </mesh>
        <mesh>
          <torusGeometry args={[3.6, 0.035, 15, 70, (2*Math.PI - (days * Math.PI * 2) / 90)]} />
          <meshStandardMaterial color="#8f8f8f" />
        </mesh>
      </group>
      <group ref={hrsRef} rotation-z={Math.PI * 0.5}>
        <mesh>
          <torusGeometry args={[2.8, 0.2, 15, 70, -(hrs * Math.PI * 2) / 24]} />
          <meshStandardMaterial color="#6f71ff" />
        </mesh>
        <mesh>
          <torusGeometry
            args={[2.8, 0.035, 15, 50, Math.PI * 2 - (hrs * Math.PI * 2) / 24]}
          />
          <meshStandardMaterial color="#8f8f8f" />
        </mesh>
      </group>

      <group ref={minsRef} rotation-z={Math.PI * 0.5}>
        <mesh>
          <torusGeometry
            args={[1.9, 0.035, 15, 40, Math.PI * 2 - (mins * Math.PI * 2) / 60]}
          />
          <meshStandardMaterial color="#8f8f8f" />
        </mesh>
        <mesh>
          <torusGeometry
            args={[1.9, 0.2, 15, 60, -(mins * Math.PI * 2) / 60]}
          />
          <meshStandardMaterial color="#ff4e4e" />
        </mesh>
      </group>

      <group ref={secsRef} rotation-z={Math.PI * 0.5}>
        <mesh>
          <torusGeometry
            args={[1.0, 0.035, 15, 30, Math.PI * 2 - (secs * Math.PI * 2) / 60]}
          />
          <meshStandardMaterial color="#8f8f8f" />
        </mesh>
        <mesh>
          <torusGeometry
            args={[1.0, 0.2, 15, 40, -(secs * Math.PI * 2) / 60]}
          />
          <meshStandardMaterial color="#3efff2" />
        </mesh>
      </group>
      {/* -(secs*Math.PI * 2)/60  */}
    </>
  );
}
