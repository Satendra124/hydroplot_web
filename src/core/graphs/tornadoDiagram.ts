import { SetterOrUpdater } from "recoil";
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

	validateData(data: any): boolean {
		let error = false;

		try {
			if (
				!(
					data.length === 2 &&
					(data[0].ionType === "Cation" || data[0].ionType === "Anion") &&
					(data[1].ionType === "Cation" || data[1].ionType === "Anion") &&
					typeof data[0].ions[0].name === "string" &&
					typeof data[0].ions[0].value === "number" &&
					typeof data[1].ions[0].name === "string" &&
					typeof data[1].ions[0].value === "number"
				)
			)
				error = true;
		} catch {
			error = true;
		}
		return !error;
	}

	loadData(data: any) {
		// const tornadoDiagramUserData: any = [
		// 	{
		// 		ionType: "Cation",
		// 		color: "red",
		// 		ions: [],
		// 	},
		// 	{
		// 		ionType: "Anion",
		// 		color: "blue",
		// 		ions: [],
		// 	},
		// ];

		// data.split("\n").forEach((line: any) => {
		// 	const item = line.split(",");
		// 	if (item[2] === "cation") {
		// 		tornadoDiagramUserData[0].ions.push({
		// 			name: item[0],
		// 			value: Number(item[1]),
		// 		});
		// 	} else {
		// 		tornadoDiagramUserData[1].ions.push({
		// 			name: item[0],
		// 			value: Number(item[1]),
		// 		});
		// 	}
		// });
		// this.data = tornadoDiagramUserData;

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

	draw(data: any, setError: SetterOrUpdater<boolean>) {
		const validated = this.validateData(data);
		if (!validated) {
			// alert("Data format incorrect");
			setError(true);
			return;
		}
		setError(false);
		this.drawAxis();
		this.loadData(data);
		this.plotData();
	}
}
export default TornadoDiagram;
