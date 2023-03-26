import React from "react";
// @ts-ignore
import Plot from "react-plotly.js";

const data = [
	{
		y: [1, 3, 3, 4, 5, 6, 7, 8, 9, 10],
		type: "box",
		name: "Data Set 1",
	},
	{
		y: [2, 4, 4, 5, 6, 7, 8, 9, 9, 11],
		type: "box",
		name: "Data Set 2",
	},
];

const BoxPlot = () => {
	return (
		<Plot data={data} layout={{ width: 500, height: 400, title: "Box Plot" }} />
	);
};

export default BoxPlot;
