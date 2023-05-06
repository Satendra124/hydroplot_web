//@ts-ignore
import Plot from "react-plotly.js";

var data = [
	{
		values: [16, 15, 12, 6, 5, 4, 42],
		labels: [
			"Param 1",
			"Param 2",
			"Param 3",
			"Param 4",
			"Param 5",
			"Param 6",
			"Param 7",
		],
		domain: { column: 0 },
		name: "Donut Plot",
		hoverinfo: "label+percent+name",
		hole: 0.4,
		type: "pie",
	},
];

var layout = {
	title: "Donut Plot",
	annotations: [
		{
			font: {
				size: 20,
			},
			showarrow: false,
			text: "Plot 1",
			x: 0.17,
			y: 0.5,
		},
	],
	height: 400,
	width: 600,
	showlegend: false,
	grid: { rows: 1, columns: 2 },
};

const DonutChart = () => {
	return <Plot data={data} layout={layout} />;
};

export default DonutChart;
