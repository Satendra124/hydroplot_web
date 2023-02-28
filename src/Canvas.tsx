import React, { useEffect, useRef } from "react";
import Stiff from "./src/graphs/stiff";
import ScatterPlot from "./src/graphs/scatterPlot";
import Piper from "./src/graphs/piper";
import LineGraph from "./src/graphs/lineGraph";
import PieChart from "./src/graphs/pieChart";
import TornadoDiagram from "./src/graphs/tornadoDiagram";

const Canvas = ({ graph }: { graph: string }) => {
	const canvasRef = useRef(null);
	useEffect(() => {
		if (!canvasRef.current) return;
		const canvasElement: HTMLCanvasElement = canvasRef.current;
		canvasElement.height = 500;
		canvasElement.width = 500;
		const context = canvasElement.getContext("2d");
		if (!context) return;
		const stiffDiagram = new Stiff(context);
		stiffDiagram.draw([]);

		if (graph === "Stiff Diagram") {
			const stiffDiagram = new Stiff(context);
			stiffDiagram.draw([]);
		} else if (graph === "Piper Diagram") {
			const piperDiagram = new Piper(context);
			piperDiagram.draw([]);
		} else if (graph === "Scatter Plot") {
			const scatterPlot = new ScatterPlot(context);
			scatterPlot.draw([]);
		} else if (graph === "Line Graph") {
			const lineGraph = new LineGraph(context);
			lineGraph.draw([]);
		} else if (graph === "Pie Chart") {
			const pieChart = new PieChart(context);
			pieChart.draw([]);
		} else if (graph === "Tornado Diagram") {
			const tornadoDiagram = new TornadoDiagram(context);
			tornadoDiagram.draw([]);
		}

		// const scatterPlot = new ScatterPlot(context);
		// scatterPlot.draw([]);

		// const lineGraph = new LineGraph(context);
		// lineGraph.draw([]);

		// const pieChart = new PieChart(context);
		// pieChart.draw([]);

		// const tornadoDiagram = new TornadoDiagram(context);
		// tornadoDiagram.draw([]);
	}, [canvasRef, graph]);

	return <canvas id="main_canvas" ref={canvasRef}></canvas>;
};

export default Canvas;
