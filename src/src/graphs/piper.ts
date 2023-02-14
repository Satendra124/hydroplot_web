import Canvas from "../canvas";
import { createAxis } from "../components/axis";
import { createPolygon } from "../components/polygon";
import Graph from "./Graph";

class Piper implements Graph {
	context: Canvas;
	data: [] = [];
	zero: { x: number; y: number } = { x: 300, y: 300 };
	r: number = Math.min(this.zero.x, this.zero.y) * 0.9;
	constructor(context: Canvas) {
		this.context = context;
	}
	vertices: [number, number][] = [
		[this.zero.x, this.zero.y - this.r],
		[
			this.zero.x + this.r * Math.cos(Math.PI / 6),
			this.zero.y + this.r * Math.sin(Math.PI / 6),
		],
		[
			this.zero.x - this.r * Math.cos(Math.PI / 6),
			this.zero.y + this.r * Math.sin(Math.PI / 6),
		],
	];

	drawAxis() {
		createAxis(this.context, this.zero, 0, 13, {
			baseValue: true,
		});
		createAxis(this.context, this.zero, 180, 13);
		createAxis(this.context, this.zero, 90, 18, {
			majorMarks: false,
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
		console.log(this.data);

		// context.moveTo(xInitial, yInitial - 10);
		context.font = "bold 13px Arial";
		context.fillStyle = "black";
		context.fill();
		context.fillText("Meq/L", this.zero.x, this.zero.y - 20);
		context.fillText("Cations", this.zero.x - 100, this.zero.y - 20);
		context.fillText("Anions", this.zero.x + 100, this.zero.y - 20);
		context.fillStyle = "red";
		context.fill();
	}

	plotPoint(
		ctx: CanvasRenderingContext2D,
		x: number,
		y: number,
		r: number,
		color: string
	) {
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.arc(x, y, r, 0, 2 * Math.PI);
		ctx.fill();
	}

	transformToTrilinearCoords(data: number[]) {
		const x =
			this.vertices[0][0] +
			(data[0] / (data[0] + data[1] + data[2])) *
				(this.vertices[1][0] - this.vertices[0][0]);
		const y =
			this.vertices[0][1] +
			(data[0] / (data[0] + data[1] + data[2])) *
				(this.vertices[1][1] - this.vertices[0][1]);
		return [x, y];
	}

	draw(pqr: []) {
		const ctx = this.context.canvasContext;
		ctx.beginPath();
		ctx.moveTo(this.vertices[0][0], this.vertices[0][1]);
		ctx.lineTo(this.vertices[1][0], this.vertices[1][1]);
		ctx.lineTo(this.vertices[2][0], this.vertices[2][1]);
		ctx.lineTo(this.vertices[0][0], this.vertices[0][1]);
		ctx.stroke();

		const data: number[] = [0.2, 0.3, 0.5];
		const coords = this.transformToTrilinearCoords(data);
		this.plotPoint(ctx, coords[0], coords[1], 5, "red");
	}
}

export default Piper;
