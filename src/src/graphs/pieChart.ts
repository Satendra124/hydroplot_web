import Canvas, { Scale } from "../canvas";
import Graph from "./Graph";

class PieChart implements Graph {
	context: Canvas;
	data: [] = [];
	zero: { x: number; y: number } = { x: 50, y: 400 };
	graphData: {
		name: string;
		value: number;
		color: string;
	}[] = [
		{ name: "Parameter1", value: 20, color: "red" },
		{ name: "Parameter2", value: 30, color: "blue" },
		{ name: "Parameter3", value: 15, color: "green" },
		{ name: "Parameter4", value: 5, color: "yellow" },
		{ name: "Parameter5", value: 13, color: "orange" },
		{ name: "Parameter6", value: 5, color: "purple" },
		{ name: "Parameter7", value: 7, color: "pink" },
		{ name: "Parameter8", value: 3, color: "brown" },
		{ name: "Parameter9", value: 2, color: "black" },
	];

	constructor(context: CanvasRenderingContext2D) {
		const canvas = new Canvas(context, new Scale().fromValue(1, 15));
		this.context = canvas;
	}

	drawAxis() {
		const context = this.context.canvasContext;
		context.clearRect(0, 0, 500, 500);
	}

	validateData(data: any): void {
		const error = false;
		if (error) throw Error("Data format incorrect");
	}

	loadData(data: any) {
		this.validateData(data);
		this.data = data;
	}

	plotData() {
		const context = this.context.canvasContext;

		let sum = this.graphData.reduce((acc, curr) => acc + curr.value, 0);

		console.log(sum);

		// context.arc(250, 250, 70, 0, Math.PI);
		let prevAngle: number = 0;
		for (let i = 0; i < this.graphData.length; i++) {
			let angle: number = (this.graphData[i].value / sum) * 2 * Math.PI;
			console.log(prevAngle, angle);
			context.beginPath();
			context.arc(150, 250, 80, prevAngle, prevAngle + angle);
			prevAngle += angle;
			context.lineTo(150, 250); // This line makes everything works. WHY?, idk! :(
			context.fillStyle = this.graphData[i].color;
			context.rect(300, 100 + i * 20, 10, 10);
			context.fill();

			context.beginPath();
			context.fillStyle = "gray";
			context.fillText(this.graphData[i].name, 360, 109 + i * 20);
			context.fill();
		}
	}

	draw(data: any) {
		this.drawAxis();
		this.loadData(data);
		this.plotData();
	}
}
export default PieChart;
