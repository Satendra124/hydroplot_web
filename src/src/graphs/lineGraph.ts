// Average line not working

import Canvas, { Scale } from "../canvas";
import { createAxis } from "../components/axis";
import Graph from "./Graph";

class LineGraph implements Graph {
	context: Canvas;
	data: [] = [];
	zero: { x: number; y: number } = { x: 50, y: 400 };
	graphData: [number, number][][] = [
		[
			[1, 2],
			[2, 1],
			[3, 4],
			[4, 3],
			[5, 6],
			[6, 5],
			[7, 8],
			[8, 7],
			[9, 10],
			[10, 9],
			[11, 12],
			[12, 11],
		],
		[
			[1, 2 + 1],
			[2, 1 + 1],
			[3, 4 + 1],
			[4, 3 + 1],
			[5, 6 + 1],
			[6, 5 + 1],
			[7, 8 + 1],
			[8, 7 + 1],
			[9, 10 + 1],
			[10, 9 + 1],
			[11, 12 + 1],
			[12, 11 + 1],
		],
	];

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
		});
	}

	validateData(data: []): void {
		const error = false;
		if (error) throw Error("Data format incorrect");
	}

	loadData(data: []) {
		this.validateData(data);
		this.data = data;
	}

	plotData() {
		const context = this.context.canvasContext;

		for (let j = 0; j < this.graphData.length; j++) {
			const lineData = this.graphData[j];
			for (let i = 0; i < lineData.length - 1; i++) {
				context.beginPath();
				context.moveTo(
					this.zero.x + this.context.scale.calculateVirtual(lineData[i][0]),
					this.zero.y - this.context.scale.calculateVirtual(lineData[i][1])
				);

				context.lineTo(
					this.zero.x + this.context.scale.calculateVirtual(lineData[i + 1][0]),
					this.zero.y - this.context.scale.calculateVirtual(lineData[i + 1][1])
				);
				context.stroke();
			}
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

	draw(data: []) {
		this.drawAxis();
		this.loadData(data);
		this.plotData();
	}
}
export default LineGraph;
