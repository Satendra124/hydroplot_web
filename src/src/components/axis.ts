import Canvas from "../canvas";

const sin = (angle: number) => Math.sin(angle);
const cos = (angle: number) => Math.cos(angle);
const pi = Math.PI;

const fixTextPlacement = (angle: number, position: string) => {
	let xShift = 0,
		yShift = 0;

	const right: boolean = position === "right" ? true : false;

	// BEWARE: COMPLEX STUFF AHEAD. This is a hacky solution to the problem of text placement
	if (angle >= 0 && angle <= Math.PI / 2) {
		if (right) {
			xShift = -10 * sin(angle);
			yShift = 10 * cos(angle);
		} else {
			xShift = 7 * sin(angle);
			yShift = -7 * cos(angle);
		}
	} else if (angle > Math.PI / 2 && angle <= Math.PI) {
		if (right) {
			xShift = -7 * sin(angle);
			yShift = 7 * cos(angle);
		} else {
			xShift = 9 * sin(angle);
			yShift = -9 * cos(angle);
		}
	} else if (angle > Math.PI && angle <= (3 * Math.PI) / 2) {
		if (right) {
			xShift = -7 * sin(angle);
			yShift = 7 * cos(angle);
		} else {
			xShift = 10 * sin(angle);
			yShift = -10 * cos(angle);
		}
	} else if (angle > (3 * Math.PI) / 2 && angle < 2 * Math.PI) {
		if (right) {
			xShift = -10 * sin(angle);
			yShift = 10 * cos(angle);
		} else {
			xShift = 9 * sin(angle);
			yShift = -9 * cos(angle);
		}
	}

	return { xShift, yShift };
};

export const createAxis = (
	context: Canvas,
	point: { x: number; y: number },
	angle: number,
	length: number,
	options?: {
		majorMarks?: boolean;
		minorMarks?: boolean;
		negative?: boolean;
		baseValue?: boolean;
		markingUnit?: number;
		position?: string;
		axisName?: string;
	}
) => {
	if (!options) options = {};
	const defaultOptions = {
		majorMarks: true,
		minorMarks: true,
		negative: false,
		baseValue: false,
		markingUnit: 2,
		position: "right",
	};
	options = { ...defaultOptions, ...options };

	// console.log(options);

	angle = angle * (Math.PI / 180);

	length = context.scale.calculateVirtual(length);

	if (angle < 0) {
		angle += 2 * Math.PI;
	}
	angle %= 2 * Math.PI;
	const ctx = context.canvasContext;
	ctx.strokeStyle = "black";
	ctx.beginPath();
	ctx.moveTo(point.x, point.y);
	ctx.lineTo(
		length * Math.cos(angle) + point.x,
		length * Math.sin(angle) + point.y
	);
	ctx.stroke();

	ctx.textAlign = "center";

	let { xShift, yShift } = fixTextPlacement(angle, options.position!);

	if (options.majorMarks) {
		let cnt = 0;
		if (options.minorMarks) {
			for (
				let i = 0;
				i <= length;
				i += context.scale.calculateVirtual(options.markingUnit! / 2)
			) {
				ctx.beginPath();
				ctx.fillStyle = "black";
				ctx.ellipse(
					i * Math.cos(angle) + point.x,
					i * Math.sin(angle) + point.y,
					0.75,
					1,
					angle + Math.PI / 2,
					0,
					2 * Math.PI
				);
				ctx.fill();
				ctx.stroke();
			}
		}

		for (
			let i = 0;
			i < length;
			i += context.scale.calculateVirtual(options.markingUnit!)
		) {
			ctx.beginPath();
			ctx.fillStyle = "black";
			ctx.ellipse(
				i * Math.cos(angle) + point.x,
				i * Math.sin(angle) + point.y,
				1.5,
				1,
				angle + Math.PI / 2,
				0,
				2 * Math.PI
			);
			ctx.fill();
			ctx.stroke();
			if (i === 0 && options.baseValue === false) {
				cnt++;
				continue;
			}
			ctx.fillText(
				//@ts-ignore
				(cnt * options.markingUnit).toString(),
				i * Math.cos(angle) + point.x + xShift,
				i * Math.sin(angle) + point.y + yShift,
				20
			);
			cnt++;
		}
	}
};
