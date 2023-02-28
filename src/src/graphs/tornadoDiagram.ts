import Canvas, { Scale } from "../canvas";
import { createAxis } from "../components/axis";
import Graph from "./Graph";

class TornadoDiagram implements Graph {
	context: Canvas;
	data: [] = [];
	zero: { x: number; y: number } = { x: 250, y: 50 };
	graphData: {
		ionType: string;
		color: string;
		ions: { name: string; value: number }[];
	}[] = [
		{
			ionType: "Cation",
			color: "red",
			ions: [
				{ name: "Na+", value: 1 },
				{ name: "K+", value: 2 },
				{ name: "Li+", value: 3 },
				{ name: "Mg2+", value: 4 },
				{ name: "Ca2+", value: 5 },
				{ name: "NH4+", value: 6 },
				{ name: "Mn2+", value: 7 },
				{ name: "Fe2+", value: 8 },
				{ name: "Fe3+", value: 9 },
			],
		},
		{
			ionType: "Anion",
			color: "blue",
			ions: [
				{ name: "Cl-", value: 1 },
				{ name: "SO4-2", value: 2 },
				{ name: "NO3-", value: 3 },
				{ name: "CO3-2", value: 4 },
				{ name: "PO4-3", value: 5 },
				{ name: "F-", value: 6 },
				{ name: "HCO3-", value: 7 },
				{ name: "OH-", value: 8 },
				{ name: "H2PO4-", value: 9 },
			],
		},
	];

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

		for (let ionData of this.graphData) {
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
