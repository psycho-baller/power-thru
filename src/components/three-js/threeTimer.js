import { useControls } from 'leva'
import React, {useState, useEffect, useRef, ref, setGlobalCoords} from "react"
import {Canvas, useThree, useFrame } from "@react-three/fiber";
import { Vector2 } from 'three';

export default function Timer({ secs, mins, hrs, days}) {

let mousePos = new Vector2(0,0);
window.addEventListener("mousemove", (event) =>
{
    let x = event.clientX  - window.innerWidth*0.5;
    let y = event.clientY - window.innerHeight*0.5;


    mousePos.x = x * 0.001;
    mousePos.y = y * 0.001;
   
});
const daysRef = useRef()
const hrsRef = useRef()
const minsRef = useRef()
const secsRef = useRef()

	useFrame(() =>
    {
        secsRef.current.rotation.x = secsRef.current.rotation.x * 0.95 + (mousePos.y * 1.7) * 0.05;
        secsRef.current.rotation.y = secsRef.current.rotation.y * 0.95 + (mousePos.x * 1.7) * 0.05;

        minsRef.current.rotation.x = minsRef.current.rotation.x * 0.95 + (mousePos.y * 0.5) * 0.05;
        minsRef.current.rotation.y = minsRef.current.rotation.y * 0.95 + (mousePos.x * 0.5) * 0.05;

        hrsRef.current.rotation.x = hrsRef.current.rotation.x * 0.95 + (mousePos.y * 0.3) * 0.05;
        hrsRef.current.rotation.y = hrsRef.current.rotation.y * 0.95 + (mousePos.x * 0.3) * 0.05;

        daysRef.current.rotation.x = daysRef.current.rotation.x * 0.95 + (mousePos.y * 0.1) * 0.05;
        daysRef.current.rotation.y = daysRef.current.rotation.y * 0.95 + (mousePos.x * 0.1) * 0.05;
    })
    
    return(
<>

            <ambientLight />
            <pointLight position={[10, 10, 10]} />
{/* <mesh >
            <boxGeometry  />
            <meshStandardMaterial  color="mediumpurple" />
        </mesh> */}
            <mesh mesh ref={ daysRef } rotation-z={  Math.PI * 0.5 }>
            <torusGeometry args={ [ 3.6 , 0.20 , 90 , 90 , -(days*Math.PI * 2)/90 ] } />
            <meshStandardMaterial  color="#C8963E" />
        </mesh>
        <mesh mesh ref={ hrsRef } rotation-z={  Math.PI * 0.5 } >
            <torusGeometry args={ [ 2.8 , 0.20 , 90 , 90 , -(hrs*Math.PI * 2)/24 ] } />
            <meshStandardMaterial  color="#6f71ff" />
        </mesh>

                                                                     <mesh ref={ minsRef } rotation-z={  Math.PI * 0.5 }>
            <torusGeometry args={ [ 1.9 , 0.20 , 90 , 90 , -(mins*Math.PI * 2)/60 ] } />
            <meshStandardMaterial  color="#ff4e4e" />
        </mesh>


<mesh ref={ secsRef } rotation-z={  Math.PI * 0.5 }   >
            <torusGeometry args={ [ 1.0 , 0.20 , 90 , 90 , -(secs*Math.PI * 2)/60 ] } />
            <meshStandardMaterial  color="#3efff2" />
        </mesh>
 {/* -(secs*Math.PI * 2)/60  */}
</>
    );
}
