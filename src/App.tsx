import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas, { Scale } from './src/canvas';
import Stiff from './src/graphs/stiff';

function App() {
  const canvasRef = useRef(null);
  useEffect(()=>{
    if(!canvasRef.current) return;
    const canvasElement:HTMLCanvasElement = canvasRef.current;
    canvasElement.height = 500;
		canvasElement.width = 500;
    const context = canvasElement.getContext("2d");
    if(!context) return;
    const canvas = new Canvas(context,new Scale().fromValue(1,10));
    const stiffDiagram = new Stiff(canvas);
    stiffDiagram.draw([]);
  },[canvasRef]);
  return (
    <canvas id="main_canvas" ref={canvasRef}></canvas>
  );
}

export default App;
