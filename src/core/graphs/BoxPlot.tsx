// @ts-ignore
import Plot from "react-plotly.js";

const data = [
	{
		y: [
			0.15, 5.35, 5.6, 6, 6.2, 6.6, 6.8, 7.0, 7.2, 7.4, 7.5, 7.75, 8.15, 8.45,
			8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.9, 22.3, 23.25,
		],
		type: "box",
		name: "Set 1",
		boxpoints: "Outliers",
		marker: { color: "#3D9970" },
	},
	{
		y: [
			0.15, 5.35, 5.6, 6, 6.2, 6.6, 6.8, 7.0, 7.2, 7.4, 7.5, 7.75, 8.15, 8.45,
			8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.9, 22.3, 23.25,
		],
		type: "box",
		name: "Set 2",
		marker: {
			color: "rgb(107,174,214)",
		},
		boxpoints: "Outliers",
	},
	{
		y: [
			0.75, 5.25, 5.5, 6, 6.2, 6.6, 6.8, 7.0, 7.2, 7.5, 7.5, 7.75, 8.15, 8.15,
			8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.9, 22.3, 23.25,
		],
		type: "box",
		name: "Set 3",
		marker: {
			color: "rgb(8,81,156)",
			// outliercolor: "rgba(219, 64, 82, 0.6)",
			// line: {
			// 	outliercolor: "rgba(219, 64, 82, 1.0)",
			// 	outlierwidth: 2,
			// },
		},
		boxpoints: "suspectedoutliers",
	},
];

const BoxPlot = () => {
	return (
		<Plot
			data={data}
			layout={{ width: 500, height: 400, boxMode: "group", title: "Box Plot" }}
		/>
	);
};

export default BoxPlot;
