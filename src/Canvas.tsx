import React, { useState, useEffect, useRef } from "react";

import getFormattedData from "./UI/utils/dataParser";

import Stiff from "./core/graphs/stiff";
import ScatterPlot from "./core/graphs/scatterPlot";
import Piper from "./core/graphs/piper";
import LineGraph from "./core/graphs/lineGraph";
import PieChart from "./core/graphs/pieChart";
import TornadoDiagram from "./core/graphs/tornadoDiagram";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { graph_error } from "./UI/recoil/atoms/dataAtom";

const drawDiagram = (
	graph: any,
	graphType: string,
	userData: any,
	setError: SetterOrUpdater<boolean>
) => {
	if (userData.type === graphType && userData.data.length > 0) {
		console.log("Drawing User Data");
		graph.draw(getFormattedData(userData.data, graphType, setError), setError);
		// graph.draw(userData.data);
	} else {
		console.log("Error");
	}
};

const Canvas = ({ graph, userData }: { graph: any; userData: any }) => {
	const canvasRef = useRef(null);
	const [_, setError] = useRecoilState(graph_error);

	useEffect(() => {
		if (!canvasRef.current) return;
		const canvasElement: HTMLCanvasElement = canvasRef.current;
		canvasElement.height = 500;
		canvasElement.width = 500;
		const context = canvasElement.getContext("2d");
		if (!context) return;

		if (graph === "Stiff Diagram") {
			const stiffDiagram = new Stiff(context);
			drawDiagram(stiffDiagram, graph, userData, setError);
		} else if (graph === "Piper Diagram") {
			const piperDiagram = new Piper(context);
			piperDiagram.draw([]);
		} else if (graph === "Scatter Plot") {
			const scatterPlot = new ScatterPlot(context);
			drawDiagram(scatterPlot, graph, userData, setError);
		} else if (graph === "Line Graph") {
			const lineGraph = new LineGraph(context);
			drawDiagram(lineGraph, graph, userData, setError);
		} else if (graph === "Pie Chart") {
			const pieChart = new PieChart(context);
			drawDiagram(pieChart, graph, userData, setError);
		} else if (graph === "Tornado Diagram") {
			const tornadoDiagram = new TornadoDiagram(context);
			drawDiagram(tornadoDiagram, graph, userData, setError);
		}
	}, [canvasRef, graph, userData]);

	return <canvas id="main_canvas" ref={canvasRef}></canvas>;
};

export default Canvas;
