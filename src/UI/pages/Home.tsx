import React, { useState } from "react";
import Canvas from "../../Canvas";

const Home = () => {
	const diagramTypes: string[] = [
		"Stiff Diagram",
		"Piper Diagram",
		"Scatter Plot",
		"Line Graph",
		"Pie Chart",
		"Tornado Diagram",
		"Stiff Diagram",
		"Piper Diagram",
		"Scatter Plot",
		"Line Graph",
		"Pie Chart",
		"Tornado Diagram",
	];

	const [graph, setGraph] = useState("Stiff Diagram");

	const handleImport = () => {
		console.log("import data");
	};

	const handleExport = () => {
		console.log("export data");
	};

	return (
		<div className="w-screen h-screen bg-slate-200">
			<div className="w-full h-24 bg-slate-300 flex justify-end items-center gap-6 p-6 fixed left-0 top-0">
				<div
					className="w-48 h-12 bg-white rounded-lg p-2 text-center hover:cursor-pointer"
					onClick={handleImport}>
					Import Data
				</div>
				<div
					className="w-48 h-12 bg-white rounded-lg p-2 text-center hover:cursor-pointer"
					onClick={handleExport}>
					Export Data
				</div>
			</div>
			<div className="h-[calc(100vh-6rem)] w-1/6 bg-gray-300 fixed overflow-y-scroll left-0 top-24 flex flex-col gap-8 pb-2">
				{diagramTypes.map((diagramType, index) => (
					<div
						key={index}
						onClick={() => {
							setGraph(diagramType);
							console.log(graph);
						}}
						className="w-full h-36 bg-white p-2 text-center grid place-items-center hover:cursor-pointer">
						{diagramType}
					</div>
				))}
			</div>
			<div className="h-[calc(100vh-6rem)] w-5/6 fixed bg-white right-0 top-24">
				<Canvas graph={graph} />
			</div>
		</div>
	);
};

export default Home;
