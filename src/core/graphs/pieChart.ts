import { SetterOrUpdater } from "recoil";
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

	validateData(data: any): boolean {
		console.log(data);
		let error = false;
		try {
			if (
				!(
					Object.keys(data[0]).length === 3 &&
					typeof data[0].name === "string" &&
					typeof data[0].value === "number"
				)
			) {
				error = true;
			}
		} catch {
			error = true;
		}
		return !error;
	}

	loadData(data: any) {
		// let colors: string[] = ["rgb(196, 244, 252)"];
		// data = data.split("\n").map((line: string) => {
		// 	const [name, value, color] = line.split(",");
		// 	let randomColor = `rgb(${randInt(0, 255)}, ${randInt(0, 255)}, ${randInt(
		// 		0,
		// 		255
		// 	)})`;
		// 	while (colors.includes(randomColor)) {
		// 		randomColor = `rgb(${randInt(0, 255)}, ${randInt(0, 255)}, ${randInt(
		// 			0,
		// 			255
		// 		)})`;
		// 	}
		// 	colors.push(randomColor);

		// 	return { name, value: Number(value), color };
		// });
		this.data = data;
	}

	plotData() {
		const context = this.context.canvasContext;

		console.log(this.data);

		let sum = this.data.reduce((acc, curr) => acc + curr.value, 0);

		let prevAngle: number = 0;
		for (let i = 0; i < this.data.length; i++) {
			let angle: number = (this.data[i].value / sum) * 2 * Math.PI;
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

const randInt = (min: number, max: number) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
};

export default PieChart;
