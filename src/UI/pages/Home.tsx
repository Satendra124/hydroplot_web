import React, { useState } from "react";
import Canvas from "../../Canvas";
import CSVReader from "../components/CSVReader";
import Button from "@mui/material/Button";

const Home = () => {
	const diagramTypes: { name: string; type: string }[] = [
		{ name: "Stiff Diagram", type: "canvas" },
		{ name: "Scatter Plot", type: "canvas" },
		{ name: "Line Graph", type: "canvas" },
		{ name: "Pie Chart", type: "canvas" },
		{ name: "Tornado Diagram", type: "canvas" },
		{ name: "Box Plot", type: "div" },
		{ name: "Stiff Diagram", type: "canvas" },
		{ name: "Scatter Plot", type: "canvas" },
		{ name: "Line Graph", type: "canvas" },
		{ name: "Pie Chart", type: "canvas" },
		{ name: "Tornado Diagram", type: "canvas" },
		{ name: "Box Plot", type: "div" },
	];

	const checkIfCanvas = (graph: string) => {
		let res = false;
		diagramTypes.forEach((diagram) => {
			if (diagram.name === graph && diagram.type === "canvas") {
				res = true;
			}
		});
		return res;
	};

	const [graph, setGraph] = useState("Stiff Diagram");

	const [formattedDataFromCSV, setFormattedDataFromCSV] = useState<any>([]);
	console.log(formattedDataFromCSV);

	const handleExport = () => {
		console.log("export data");

		const canvas = document.getElementById("main_canvas") as HTMLCanvasElement;
		console.log(canvas);

		if (canvas) {
			const url = canvas.toDataURL("image/png");
			const link = document.createElement("a");
			link.download = "chart.png";
			link.href = url;
			link.click();
		}
	};

	console.log(graph);

	return (
		<div className="w-screen h-screen bg-slate-200">
			<div className="w-full h-24 dark-primary-bg flex justify-between items-center gap-6 px-6 fixed left-0 top-0">
				<div className="text-white text-3xl italic">HYDROPLOT-WEB</div>
				<CSVReader graph={graph} setFormattedData={setFormattedDataFromCSV} />
			</div>
			<div className="sidebar h-[calc(100vh-6rem)] w-1/6 light-tertiary-bg fixed overflow-y-scroll left-0 top-24 flex flex-col gap-8 pb-2">
				{diagramTypes.map((diagramType, index) => (
					<div
						key={index}
						onClick={() => {
							setGraph(diagramType.name);
							// console.log(graph);
						}}
						className="w-full h-24 light-primary-bg p-3 text-lg text-white text-center grid place-items-center hover:cursor-pointer">
						{diagramType.name}
					</div>
				))}
			</div>
			<div className="h-[calc(100vh-6rem)] w-5/6 fixed light-tertiary-bg right-0 top-24 grid place-items-center ">
				<Button
					variant="contained"
					onClick={handleExport}
					className="export-button">
					Export Diagram
				</Button>
				{checkIfCanvas(graph) ? (
					<Canvas graph={graph} userData={formattedDataFromCSV} />
				) : (
					<div id="plotly_graph"></div>
				)}

				{/* <Canvas graph={graph} userData={formattedDataFromCSV} /> */}
			</div>
		</div>
	);
};

export default Home;
