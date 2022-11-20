import "./index.css";
import App from "./App";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/three-js/experience";

export default function Main() {

     
  return (
    <>
      <Canvas
      className="!absolute three"
      >
        <Experience/>
      </Canvas>
      <App  />
    </>
  );
}
