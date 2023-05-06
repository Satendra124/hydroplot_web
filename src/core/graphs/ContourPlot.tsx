//@ts-ignore
import Plot from "react-plotly.js";

var x = [];
var y = [];
for (var i = 0; i < 500; i++) {
	x[i] = Math.random();
	y[i] = Math.random() + 2;
}

var data = [
	{
		x: x,
		y: y,
		type: "histogram2dcontour",
		contours: {
			showlines: false,
		},
	},
];

const ContourPlot = () => {
	return <Plot data={data} layout={{ title: "Contour Plot" }} />;
};

export default ContourPlot;
