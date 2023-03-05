import React, { useEffect, useRef } from "react";
import Stiff from "./src/graphs/stiff";
import ScatterPlot from "./src/graphs/scatterPlot";
import Piper from "./src/graphs/piper";
import LineGraph from "./src/graphs/lineGraph";
import PieChart from "./src/graphs/pieChart";
import TornadoDiagram from "./src/graphs/tornadoDiagram";
import stiffGraphMockData from "./src/data/stiff.mock";
import scatterPlotMockData from "./src/data/scatter.mock";
import lineGraphMockData from "./src/data/line.mock";
import pieChartMockData from "./src/data/pie.mock";
import tornadoDiagramMockData from "./src/data/tornado.mock";

const Canvas = ({ graph }: { graph: string }) => {
	const canvasRef = useRef(null);

	console.log(canvasRef.current);
	useEffect(() => {
		if (!canvasRef.current) return;
		const canvasElement: HTMLCanvasElement = canvasRef.current;
		canvasElement.height = 500;
		canvasElement.width = 500;
		const context = canvasElement.getContext("2d");
		if (!context) return;

		if (graph === "Stiff Diagram") {
			const stiffDiagram = new Stiff(context);
			stiffDiagram.draw(stiffGraphMockData);
		} else if (graph === "Piper Diagram") {
			const piperDiagram = new Piper(context);
			piperDiagram.draw([]);
		} else if (graph === "Scatter Plot") {
			const scatterPlot = new ScatterPlot(context);
			scatterPlot.draw(scatterPlotMockData);
		} else if (graph === "Line Graph") {
			const lineGraph = new LineGraph(context);
			lineGraph.draw(lineGraphMockData);
		} else if (graph === "Pie Chart") {
			const pieChart = new PieChart(context);
			pieChart.draw(pieChartMockData);
		} else if (graph === "Tornado Diagram") {
			const tornadoDiagram = new TornadoDiagram(context);
			tornadoDiagram.draw(tornadoDiagramMockData);
		}
	}, [canvasRef, graph]);

	return <canvas id="main_canvas" ref={canvasRef}></canvas>;
};

export default Canvas;
