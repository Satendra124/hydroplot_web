import Canvas from "../canvas";

interface Graph {
	context: Canvas;
	drawAxis: () => void;
	validateData: (data: any) => void;
	loadData: (data: any) => void;
	plotData: () => void;
}
export default Graph;
