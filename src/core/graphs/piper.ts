// Average line not working

import Canvas, { Scale } from "../canvas";
import { createAxis } from "../components/axis";
import Graph from "./Graph";

class ScatterPlot implements Graph {
	context: Canvas;
	data: [] = [];
	zero: { x: number; y: number } = { x: 50, y: 400 };
	graphData: number[][] = [
		[1, 2],
		[3, 4],
		[5, 6],
		[7, 8],
		[9, 10],
		[11, 12],
		[2, 1],
		[4, 3],
		[6, 5],
		[8, 7],
		[10, 9],
		[12, 11],
		[1 + 1, 2 + 1],
		[3 + 1, 4 + 1],
		[5 + 1, 6 + 1],
		[7 + 1, 8 + 1],
		[9 + 1, 10 + 1],
		[11 + 1, 12 + 1],
		[2 + 1, 1 + 1],
		[4 + 1, 3 + 1],
		[6 + 1, 5 + 1],
		[8 + 1, 7 + 1],
		[10 + 1, 9 + 1],
		[12 + 1, 11 + 1],
		[1 + 0.5, 2 + 0.5],
		[3 + 0.5, 4 + 0.5],
		[5 + 0.5, 6 + 0.5],
		[7 + 0.5, 8 + 0.5],
		[9 + 0.5, 10 + 0.5],
		[11 + 0.5, 12 + 0.5],
		[2 + 0.5, 1 + 0.5],
		[4 + 0.5, 3 + 0.5],
		[6 + 0.5, 5 + 0.5],
		[8 + 0.5, 7 + 0.5],
		[10 + 0.5, 9 + 0.5],
		[12 + 0.5, 11 + 0.5],
		[1 + 0.25, 2 + 0.25],
		[3 + 0.25, 4 + 0.25],
		[5 + 0.25, 6 + 0.25],
		[7 + 0.25, 8 + 0.25],
		[9 + 0.25, 10 + 0.25],
		[11 + 0.25, 12 + 0.25],
		[2 + 0.25, 1 + 0.25],
		[4 + 0.25, 3 + 0.25],
		[6 + 0.25, 5 + 0.25],
		[8 + 0.25, 7 + 0.25],
		[10 + 0.25, 9 + 0.25],
		[12 + 0.25, 11 + 0.25],
		[1 + 0.75, 2 + 0.75],
		[3 + 0.75, 4 + 0.75],
		[5 + 0.75, 6 + 0.75],
		[7 + 0.75, 8 + 0.75],
		[9 + 0.75, 10 + 0.75],
		[11 + 0.75, 12 + 0.75],
		[2 + 0.75, 1 + 0.75],
		[4 + 0.75, 3 + 0.75],
		[6 + 0.75, 5 + 0.75],
		[8 + 0.75, 7 + 0.75],
		[10 + 0.75, 9 + 0.75],
		[12 + 0.75, 11 + 0.75],
		[],
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
			position: "right",
		});
		createAxis(this.context, this.zero, 270, 20, {
			markingUnit: 5,
			position: "left",
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
		let average: [number, number] = [0, 0];

		let avgX = 0,
			avgY = 0;

		for (let i = 0; i < this.graphData.length; i++) {
			avgX += this.graphData[i][0];
			avgY += this.graphData[i][1];
			context.beginPath();
			context.moveTo(
				this.zero.x + this.context.scale.calculateVirtual(this.graphData[i][0]),
				this.zero.y - this.context.scale.calculateVirtual(this.graphData[i][1])
			);
			context.lineTo(
				this.zero.x +
					this.context.scale.calculateVirtual(this.graphData[i][0]) +
					1,
				this.zero.y -
					this.context.scale.calculateVirtual(this.graphData[i][1]) -
					1
			);
			context.stroke();
			average = [
				this.zero.x +
					this.context.scale.calculateVirtual(avgX / this.graphData.length),
				this.zero.y -
					this.context.scale.calculateVirtual(avgY / this.graphData.length),
			];
		}

		console.log(avgX, avgY);
		console.log(average);

		context.beginPath();
		context.moveTo(this.zero.x, this.zero.y);
		context.lineTo(average[0], average[1]);
		context.stroke();

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
export default ScatterPlot;
