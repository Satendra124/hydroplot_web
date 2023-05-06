//@ts-ignore
import Plot from "react-plotly.js";

const xParam = ["param1", "param2", "param3", "param4"];
let xValues = [];
let yValues = [];

for (let i = 0; i < 200; i++) {
	xValues.push(xParam[Math.floor(Math.random() * xParam.length)]);
	yValues.push(Math.random() * 23 + 8);
}

var data = [
	{
		type: "violin",
		x: xValues,
		y: yValues,
		points: "none",
		box: {
			visible: true,
		},
		line: {
			color: "green",
		},
		meanline: {
			visible: true,
		},
		transforms: [
			{
				type: "groupby",
				groups: xValues,
				styles: [
					{ target: "param1", value: { line: { color: "blue" } } },
					{ target: "param2", value: { line: { color: "orange" } } },
					{ target: "param3", value: { line: { color: "green" } } },
					{ target: "param4", value: { line: { color: "red" } } },
				],
			},
		],
	},
];

var layout = {
	title: "Violin Plot",
	yaxis: {
		zeroline: false,
	},
};

const ViolinPlot = () => {
	return <Plot data={data} layout={layout} />;
};

export default ViolinPlot;
