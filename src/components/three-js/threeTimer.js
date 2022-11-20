import { useControls } from 'leva'
import {Canvas} from "@react-three/fiber";

export default function Timer({ secs, mins, hrs, days}) {
const { radius, tube, radialSegments, tubularSegments, arc } = useControls({radius: 1, tube: 0.4, radialSegments: 8, tubularSegments: 6,  arc: Math.PI * 2 }, )
   
    
    return(
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <mesh  rotation-z={  Math.PI * 0.5 } >
            <torusGeometry args={ [ 3.6 , 0.20 , 90 , 90 , -(days*Math.PI * 2)/90 ] } />
            <meshStandardMaterial  color="#C8963E" />
        </mesh>
        <mesh rotation-z={  Math.PI * 0.5 } >
            <torusGeometry args={ [ 2.8 , 0.20 , 90 , 90 , -(hrs*Math.PI * 2)/90 ] } />
            <meshStandardMaterial  color="#6f71ff" />
        </mesh>

                                                                                                                <mesh rotation-z={  Math.PI * 0.5 } >
            <torusGeometry args={ [ 1.9 , 0.20 , 90 , 90 , -(mins*Math.PI * 2)/90 ] } />
            <meshStandardMaterial  color="#ff4e4e" />
        </mesh>


<mesh rotation-z={  Math.PI * 0.5 } >
            <torusGeometry args={ [ 1.0 , 0.20 , 90 , 90 , -(secs*Math.PI * 2)/90 ] } />
            <meshStandardMaterial  color="#3efff2" />
        </mesh>
        </Canvas>
    );
}
