import {Canvas, useThree, useFrame } from "@react-three/fiber";
import ThreeTimer from './threeTimer';



export default function threeTimerCanvas({secs, mins, hrs, days}){

	return(
		<Canvas
>
	<ThreeTimer secs={secs} mins={mins} hrs={hrs} days={days}/>

	</Canvas>
	)


}