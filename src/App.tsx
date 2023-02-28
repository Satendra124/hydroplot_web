import React, { useEffect, useRef } from "react";
import "./App.css";
import Home from "./UI/pages/Home";

function App() {
	const canvasRef = useRef(null);
	useEffect(() => {
		if (!canvasRef.current) return;
		const canvasElement: HTMLCanvasElement = canvasRef.current;
		canvasElement.height = 500;
		canvasElement.width = 500;
		const context = canvasElement.getContext("2d");
		if (!context) return;
	}, [canvasRef]);
	return (
		<>
			<canvas id="main_canvas" ref={canvasRef}></canvas>
			<Home />
		</>
	);
}

export default App;
