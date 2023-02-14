import Canvas from "../canvas";

export const createPolygon = (
	context: Canvas,
	points: { x: number; y: number }[], // Changed
	angle: number,
	options?: { color?: string; shouldFill?: boolean; borderColor?: string }
) => {
	const defaultOptions = {
		color: "red",
		shouldFill: true,
		borderColor: "blue",
	};
	if (!options) options = defaultOptions;
	options = { ...defaultOptions, ...options };

	const ctx = context.canvasContext;
	if (points.length < 3)
		throw Error("Cannot draw a polygon with only 2 points");

	ctx.moveTo(points[0].x, points[0].y);
	ctx.rotate(angle);
	ctx.beginPath();
	ctx.strokeStyle = options.borderColor!;

	for (let i = 0; i < points.length; i++) {
		ctx.lineTo(points[i].x, points[i].y);
		ctx.stroke();
	}
	ctx.closePath();
	ctx.stroke();

	if (options.shouldFill) {
		ctx.fillStyle = options.color!;
		ctx.fill();
	}
};
