//@ts-ignore
import Plot from "react-plotly.js";

const xValues = ["Param 1", "Param 2", "Param 3", "Param 4"];
let x = [],
	y = [];

for (let i = 0; i < 40; i++) {
	x.push(xValues[Math.floor(Math.random() * xValues.length)]);
	y.push(Math.random() * 1000 + 900);
}

var trace1 = {
	type: "scatter",
	mode: "lines",
	name: "AAPL High",
	x: x,
	y: y,
	line: { color: "#17BECF" },
};

var data = [trace1];

var layout = {
	title: "Time Series Plot",
};

const TimeseriesPlot = () => {
	return <Plot data={data} layout={layout} />;
};

export default TimeseriesPlot;
