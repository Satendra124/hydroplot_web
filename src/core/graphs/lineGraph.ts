import Canvas, { Scale } from "../canvas";
import { createAxis } from "../components/axis";
import Graph from "./Graph";

class LineGraph implements Graph {
	context: Canvas;
	data: [] = [];
	zero: { x: number; y: number } = { x: 50, y: 400 };

	constructor(context: CanvasRenderingContext2D) {
		const canvas = new Canvas(context, new Scale().fromValue(1, 15));
		this.context = canvas;
	}

	drawAxis() {
		const context = this.context.canvasContext;
		context.clearRect(0, 0, 500, 500);

		createAxis(this.context, this.zero, 0, 20, {
			markingUnit: 5,
			baseValue: true,
		});
		createAxis(this.context, this.zero, 270, 20, {
			markingUnit: 5,
			position: "left",
		});
	}

	validateData(data: any): void {
		const error = false;
		if (error) throw Error("Data format incorrect");
	}

	loadData(data: any) {
		this.validateData(data);
		data = data.split("\n").map((line:string)=>{
			const [x, y] = line.split(",");
			return [x,y]
		})
		this.data = data;
	}

	plotData() {
		const context = this.context.canvasContext;

		for (let i = 0; i < this.data.length - 1; i++) {
			context.beginPath();
			context.moveTo(
				this.zero.x + this.context.scale.calculateVirtual(this.data[i][0]),
				this.zero.y - this.context.scale.calculateVirtual(this.data[i][1])
			);

			context.lineTo(
				this.zero.x + this.context.scale.calculateVirtual(this.data[i + 1][0]),
				this.zero.y - this.context.scale.calculateVirtual(this.data[i + 1][1])
			);
			context.stroke();
		}

		context.font = "bold 13px Arial";
		context.fillStyle = "black";
		context.fill();
		context.moveTo(this.zero.x, this.zero.y);
		context.rotate((270 * Math.PI) / 180);
		context.fillText("Y-Parameter", -250, 30); // Didn't understand the maths behind this but it works
		context.rotate((90 * Math.PI) / 180);
		context.fillText("X-Parameter", this.zero.x + 200, this.zero.y + 20);
		// context.fillStyle = "red";
		context.fill();
	}

	draw(data: any) {
		this.drawAxis();
		this.loadData(data);
		this.plotData();
	}
}
export default LineGraph;
