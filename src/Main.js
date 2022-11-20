import {useState} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/three-js/experience";

export default function Main() {

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
  return (
    <>
      <Canvas className="!absolute three">
        <Experience showQuote={showQuote} />
      </Canvas>
      <App showQuote={showQuote} />
    </>
  );
}
