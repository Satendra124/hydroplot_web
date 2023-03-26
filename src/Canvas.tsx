import React, { useState, useEffect, useRef } from "react";
import Stiff from "./core/graphs/stiff";
import ScatterPlot from "./core/graphs/scatterPlot";
import Piper from "./core/graphs/piper";
import LineGraph from "./core/graphs/lineGraph";
import PieChart from "./core/graphs/pieChart";
import TornadoDiagram from "./core/graphs/tornadoDiagram";
import stiffGraphMockData from "./core/data/mocks/stiff.mock";
import scatterPlotMockData from "./core/data/mocks/scatter.mock";
import lineGraphMockData from "./core/data/mocks/line.mock";
import pieChartMockData from "./core/data/mocks/pie.mock";
import tornadoDiagramMockData from "./core/data/mocks/tornado.mock";

const drawDiagram = (
	graph: any,
	graphType: string,
	userData: any,
	mockData: any
) => {
	if (userData.type === graphType && userData.data.length > 0) {
		console.log("Drawing User Data");
		graph.draw(userData.data);
	} else {
		console.log("Drawing Mock Data");
		graph.draw(mockData);
	}
};

const Canvas = ({ graph, userData }: { graph: string; userData: any }) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		if (!canvasRef.current) return;
		const canvasElement: HTMLCanvasElement = canvasRef.current;
		canvasElement.height = 500;
		canvasElement.width = 500;
		const context = canvasElement.getContext("2d");
		if (!context) return;

		if (graph === "Stiff Diagram") {
			const stiffDiagram = new Stiff(context);
			drawDiagram(stiffDiagram, graph, userData, stiffGraphMockData);
		} else if (graph === "Piper Diagram") {
			const piperDiagram = new Piper(context);
			piperDiagram.draw([]);
		} else if (graph === "Scatter Plot") {
			const scatterPlot = new ScatterPlot(context);
			drawDiagram(scatterPlot, graph, userData, scatterPlotMockData);
		} else if (graph === "Line Graph") {
			const lineGraph = new LineGraph(context);
			drawDiagram(lineGraph, graph, userData, lineGraphMockData);
		} else if (graph === "Pie Chart") {
			const pieChart = new PieChart(context);
			drawDiagram(pieChart, graph, userData, pieChartMockData);
		} else if (graph === "Tornado Diagram") {
			const tornadoDiagram = new TornadoDiagram(context);
			drawDiagram(tornadoDiagram, graph, userData, tornadoDiagramMockData);
		}
	}, [canvasRef, graph, userData]);

	return <canvas id="main_canvas" ref={canvasRef}></canvas>;
};

export default Canvas;
