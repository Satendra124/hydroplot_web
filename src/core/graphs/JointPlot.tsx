//@ts-ignore
import Plot from "react-plotly.js";

// Sample from a normal distribution with mean 0, stddev 1.
function normal() {
	var x = 0,
		y = 0,
		rds,
		c;
	do {
		x = Math.random() * 2 - 1;
		y = Math.random() * 2 - 1;
		rds = x * x + y * y;
	} while (rds === 0 || rds > 1);
	c = Math.sqrt((-2 * Math.log(rds)) / rds); // Box-Muller transform
	return x * c; // throw away extra sample y * c
}

var N = 2000,
	a = -1,
	b = 1.2;

var step = (b - a) / (N - 1);
var t = new Array(N),
	x = new Array(N),
	y = new Array(N);

for (let i = 0; i < N; i++) {
	t[i] = a + step * i;
	x[i] = Math.pow(t[i], 3) + 0.3 * normal();
	y[i] = Math.pow(t[i], 6) + 0.3 * normal();
}

var trace1 = {
	x: x,
	y: y,
	mode: "markers",
	name: "points",
	marker: {
		color: "rgb(102,0,0)",
		size: 3,
		opacity: 0.4,
	},
	type: "scatter",
};
var trace2 = {
	x: x,
	name: "x density",
	marker: { color: "rgb(102,0,0)" },
	yaxis: "y2",
	type: "histogram",
};
var trace3 = {
	y: y,
	name: "y density",
	marker: { color: "rgb(102,0,0)" },
	xaxis: "x2",
	type: "histogram",
};
var data = [trace1, trace2, trace3];
var layout = {
	title: "Joint Plot",
	showlegend: false,
	autosize: false,
	width: 600,
	height: 450,
	margin: { t: 50 },
	hovermode: "closest",
	bargap: 0,
	xaxis: {
		domain: [0, 0.85],
		showgrid: false,
		zeroline: false,
	},
	yaxis: {
		domain: [0, 0.85],
		showgrid: false,
		zeroline: false,
	},
	xaxis2: {
		domain: [0.85, 1],
		showgrid: false,
		zeroline: false,
	},
	yaxis2: {
		domain: [0.85, 1],
		showgrid: false,
		zeroline: false,
	},
};

const JointPlot = () => {
	return <Plot data={data} layout={layout} />;
};

export default JointPlot;
