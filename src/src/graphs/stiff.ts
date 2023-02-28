import Canvas, { Scale } from "../canvas";
import { createAxis } from "../components/axis";
import { createPolygon } from "../components/polygon";
import Graph from "./Graph";

interface StiffGraphData {
	name: string;
	value: number;
	position: number;
}

const graphData: StiffGraphData[][] = [
	[
		{ name: "Na+", value: -7.2, position: 1 },
		{ name: "Ca++", value: -2.3, position: 2 },
		{ name: "Mg++", value: -6.3, position: 3 },
		{ name: "So4--", value: 4.3, position: 3 },
		{ name: "HCO3-", value: 2.3, position: 2 },
		{ name: "Cl-", value: 1.3, position: 1 },
	],
	[
		{ name: "Na+", value: -7.2, position: 1 + 3 },
		{ name: "Ca++", value: -2.3, position: 2 + 3 },
		{ name: "Mg++", value: -6.3, position: 3 + 3 },
		{ name: "So4--", value: 4.3, position: 3 + 3 },
		{ name: "HCO3-", value: 2.3, position: 2 + 3 },
		{ name: "Cl-", value: 1.3, position: 1 + 3 },
	],
	[
		{ name: "Na+", value: -7.2, position: 1 + 6 },
		{ name: "Ca++", value: -2.3, position: 2 + 6 },
		{ name: "Mg++", value: -6.3, position: 3 + 6 },
		{ name: "So4--", value: 4.3, position: 3 + 6 },
		{ name: "HCO3-", value: 2.3, position: 2 + 6 },
		{ name: "Cl-", value: 1.3, position: 1 + 6 },
	],
];

class Stiff implements Graph {
	context: Canvas;
	data: StiffGraphData[] = [];
	zero: { x: number; y: number } = { x: 300, y: 300 };
	constructor(context: CanvasRenderingContext2D) {
		const canvas = new Canvas(context, new Scale().fromValue(1, 15));
		this.context = canvas;
	}
	setOriginPoint(point: { x: number; y: number }) {
		this.zero.x = point.x;
		this.zero.y = point.y;
	}

	drawAxis() {
		const context = this.context.canvasContext;
		context.clearRect(0, 0, 500, 500);

		createAxis(this.context, this.zero, 0, 13, {
			baseValue: true,
		});
		createAxis(this.context, this.zero, 180, 13);
		createAxis(this.context, this.zero, 90, 18, {
			majorMarks: false,
		});
	}

	validateData(data: StiffGraphData[]): void {
		const error = false;
		if (error) throw Error("Data format incorrect");
	}

	loadData(data: StiffGraphData[]) {
		this.validateData(data);
		this.data = data;
	}

	plotData() {
		const context = this.context.canvasContext;

		for (let i = 0; i < graphData.length; i++) {
			const points = graphData[i].map((item: StiffGraphData) => ({
				x: this.context.scale.calculateVirtual(item.value) + this.zero.x,
				y: this.context.scale.calculateVirtual(item.position) + this.zero.y,
			}));
			createPolygon(this.context, points, 0, {
				color: "red",
				shouldFill: true,
				borderColor: "blue",
			});
		}

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

	draw(data: StiffGraphData[]) {
		this.drawAxis();
		this.loadData(data);
		this.plotData();
	}
}
export default Stiff;
