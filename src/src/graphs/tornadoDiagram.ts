import Canvas, { Scale } from "../canvas";
import { createAxis } from "../components/axis";
import Graph from "./Graph";

class TornadoDiagram implements Graph {
	context: Canvas;
	data: {
		ionType: string;
		color: string;
		ions: { name: string; value: number }[];
	}[] = [];
	zero: { x: number; y: number } = { x: 250, y: 50 };

	constructor(context: CanvasRenderingContext2D) {
		const canvas = new Canvas(context, new Scale().fromValue(1, 15));
		this.context = canvas;
	}

	drawAxis() {
		const context = this.context.canvasContext;
		context.clearRect(0, 0, 500, 500);

		createAxis(this.context, this.zero, 0, 20, {
			majorMarks: false,
		});
		createAxis(this.context, this.zero, 180, 20, {
			majorMarks: false,
		});
		createAxis(this.context, this.zero, 90, 30, {
			majorMarks: false,
		});
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

		for (let ionData of this.data) {
			context.beginPath();
			let direction = ionData.ionType === "Anion" ? 1 : -1;

			ionData.ions.sort((a, b) => b.value - a.value);

			for (let i = 0; i < ionData.ions.length; i++) {
				context.fillStyle = ionData.color;
				const ion = ionData.ions[i];
				context.fillRect(
					this.zero.x,
					this.zero.y + (i + 1) * 30,
					ion.value * 15 * direction,
					15
				);
				context.stroke();
			}
		}

		context.beginPath();
		context.font = "bold 13px Arial";
		context.fillStyle = "black";
		context.fillText("Meq/L", this.zero.x, this.zero.y - 20);
		context.fillText("Anions", this.zero.x - 100, this.zero.y - 10);
		context.fillText("Cations", this.zero.x + 100, this.zero.y - 10);
		context.fill();
	}

	draw(data: any) {
		this.drawAxis();
		this.loadData(data);
		this.plotData();
	}
}
export default TornadoDiagram;
