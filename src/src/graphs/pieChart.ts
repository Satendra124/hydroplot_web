import Canvas, { Scale } from "../canvas";
import Graph from "./Graph";

class PieChart implements Graph {
	context: Canvas;
	data: {
		name: string;
		value: number;
		color: string;
	}[] = [];
	zero: { x: number; y: number } = { x: 50, y: 400 };

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

		console.log(this.data);

		let sum = this.data.reduce((acc, curr) => acc + curr.value, 0);

		let prevAngle: number = 0;
		for (let i = 0; i < this.data.length; i++) {
			let angle: number = (this.data[i].value / sum) * 2 * Math.PI;
			// console.log(prevAngle, angle);
			context.beginPath();
			context.arc(150, 250, 80, prevAngle, prevAngle + angle);
			prevAngle += angle;
			context.lineTo(150, 250); // This line makes everything works. WHY?, idk! :(
			context.fillStyle = this.data[i].color;
			context.rect(300, 100 + i * 20, 10, 10);
			context.fill();

			context.beginPath();
			context.fillStyle = "gray";
			context.fillText(this.data[i].name, 360, 109 + i * 20);
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
