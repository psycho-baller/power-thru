import { useControls } from 'leva'
import {Canvas} from "@react-three/fiber";

export default function Timer() {
const { radius, tube, radialSegments, tubularSegments, arc } = useControls({radius: 1, tube: 0.4, radialSegments: 8, tubularSegments: 6,  arc: Math.PI * 2 }, )
   
    
    return(
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <mesh >
            <torusGeometry args={ [ radius , tube , radialSegments , tubularSegments , arc ] } />
            <meshStandardMaterial  color="mediumpurple" />
        </mesh>
        </Canvas>
    );
}
