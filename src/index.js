import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Canvas} from "@react-three/fiber";
import Experience from './components/experience';
import {Html} from "@react-three/drei";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Canvas className="z-0 !absolute">
      <Experience/>
      <Html>
        <App />
      </Html>
    </Canvas>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
