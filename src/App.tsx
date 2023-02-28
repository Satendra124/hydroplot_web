import React, { useEffect, useRef } from "react";
import "./App.css";
import Stiff from "./src/graphs/stiff";
import ScatterPlot from "./src/graphs/scatterPlot";
import Piper from "./src/graphs/piper";
import LineGraph from "./src/graphs/lineGraph";
import PieChart from "./src/graphs/pieChart";
import TornadoDiagram from "./src/graphs/tornadoDiagram";
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
		// const stiffDiagram = new Stiff(context);
		// stiffDiagram.draw([]);

		// const piperDiagram = new Piper(canvas);
		// piperDiagram.draw([]);

		// const scatterPlot = new ScatterPlot(context);
		// scatterPlot.draw([]);

		// const lineGraph = new LineGraph(context);
		// lineGraph.draw([]);

		// const pieChart = new PieChart(context);
		// pieChart.draw([]);

		// const tornadoDiagram = new TornadoDiagram(context);
		// tornadoDiagram.draw([]);
	}, [canvasRef]);
	return (
		<>
			<canvas id="main_canvas" ref={canvasRef}></canvas>
			<Home />
		</>
	);
}

export default App;
