import Canvas, { Scale } from "../canvas";

const fixTextPlacement = (angle: number) => {
	let xShift = 0,
		yShift = 0;

	if (angle >= 0 && angle <= Math.PI / 2) {
		yShift = 2;
		xShift = 10;
		if (angle < Math.PI / 4) {
			xShift = 2;
			yShift = -5;
		}
	} else if (angle > Math.PI / 2 && angle <= Math.PI) {
		xShift = -2;
		yShift = -5;
		if (angle < 3 * (Math.PI / 4)) {
			xShift = -10;
			yShift = -2;
		}
	} else if (angle > Math.PI && angle <= (3 * Math.PI) / 2) {
		xShift = 10;
		yShift = 2;
		if (angle < 5 * (Math.PI / 4)) {
			xShift = 2;
			yShift = -5;
		}
	} else if (angle > (3 * Math.PI) / 2 && angle < 2 * Math.PI) {
		xShift = -2;
		yShift = -5;
		if (angle < 7 * (Math.PI / 4)) {
			xShift = -10;
			yShift = -2;
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
	}
) => {
	if (!options) options = {};
	const defaultOptions = {
		majorMarks: true,
		minorMarks: true,
		negative: false,
		baseValue: false,
		markingUnit: 2,
	};
	options = { ...defaultOptions, ...options };

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

	let { xShift, yShift } = fixTextPlacement(angle);

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
				cnt.toString(),
				i * Math.cos(angle) + point.x + xShift,
				i * Math.sin(angle) + point.y + yShift,
				20
			);
			cnt++;
		}
	}
};
