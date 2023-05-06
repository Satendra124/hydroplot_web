//@ts-ignore
import Plot from "react-plotly.js";

var data = [
	{
		name: "Area 1",
		type: "scatterpolar",
		mode: "lines",
		r: [0, 1.5, 1.5, 0, 2.5, 2.5, 0],
		theta: [0, 10, 25, 0, 205, 215, 0],
		fill: "toself",
		fillcolor: "#709BFF",
		line: {
			color: "black",
		},
	},
	{
		name: "Area 2",
		type: "scatterpolar",
		mode: "lines",
		r: [0, 3.5, 3.5, 0],
		theta: [0, 55, 75, 0],
		fill: "toself",
		fillcolor: "#E4FF87",
		line: {
			color: "black",
		},
	},
	{
		name: "Area 3",
		type: "scatterpolar",
		mode: "lines",
		r: [0, 4.5, 4.5, 0, 4.5, 4.5, 0],
		theta: [0, 100, 120, 0, 305, 320, 0],
		fill: "toself",
		fillcolor: "#FFAA70",
		line: {
			color: "black",
		},
	},
	{
		name: "Area 4",
		type: "scatterpolar",
		mode: "lines",
		r: [0, 4, 4, 0],
		theta: [0, 165, 195, 0],
		fill: "toself",
		fillcolor: "#FFDF70",
		line: {
			color: "black",
		},
	},
	{
		name: "Area 5",
		type: "scatterpolar",
		mode: "lines",
		r: [0, 3, 3, 0],
		theta: [0, 262.5, 277.5, 0],
		fill: "toself",
		fillcolor: "#B6FFB4",
		line: {
			color: "black",
		},
	},
];

var layout = {
	polar: {
		radialaxis: {
			visible: true,
			range: [0, 5],
		},
	},
	showlegend: false,
	title: "Disk Plot",
};

const DiskPlot = () => {
	return <Plot data={data} layout={layout} />;
};

export default DiskPlot;
