import { SetterOrUpdater } from "recoil";

function getRandomIntInclusive(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const getFormattedData = (
	data: any,
	graph: any,
	setError: SetterOrUpdater<boolean>
) => {
	switch (graph) {
		case "Stiff Diagram":
			let cnt = 0;
			try {
				// setError(false);
				return data.map((item: any, index: number) => {
					if (index < data.length / 2) {
						cnt++;
					} else if (index > data.length / 2) {
						cnt--;
					}
					return {
						name: item[0],
						value: Number(item[1]),
						position: cnt,
					};
				});
			} catch {
				// setError(true);
				return;
			}
			break;
		case "Scatter Plot":
			try {
				// setError(false);
				return data.map((item: any) => {
					return [Number(item[0]), Number(item[1])];
				});
			} catch {
				// setError(true);
				return;
			}
			break;
		case "Line Graph":
			try {
				// setError(false);
				return data.map((item: any) => {
					return [Number(item[0]), Number(item[1])];
				});
			} catch {
				// setError(true);
				return;
			}
			break;
		case "Pie Chart":
			let colors: string[] = ["rgb(196, 244, 252)"];
			try {
				// setError(false);
				return data.map((item: any) => {
					let randomColor = `rgb(${getRandomIntInclusive(
						0,
						255
					)}, ${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(
						0,
						255
					)})`;
					while (colors.includes(randomColor)) {
						randomColor = `rgb(${getRandomIntInclusive(
							0,
							255
						)}, ${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(
							0,
							255
						)})`;
					}
					colors.push(randomColor);

					return {
						name: item[0],
						value: Number(item[1]),
						color: randomColor,
					};
				});
			} catch {
				// setError(true);
				return;
			}
			break;
		case "Tornado Diagram":
			const tornadoDiagramUserData: any = [
				{
					ionType: "Cation",
					color: "red",
					ions: [],
				},
				{
					ionType: "Anion",
					color: "blue",
					ions: [],
				},
			];

			try {
				// setError(false);
				data.forEach((item: any) => {
					if (item[0].at(-1) === "-") {
						tornadoDiagramUserData[0].ions.push({
							name: item[0],
							value: Number(item[1]),
						});
					} else {
						tornadoDiagramUserData[1].ions.push({
							name: item[0],
							value: Number(item[1]),
						});
					}
				});
			} catch {
				// setError(true);
				console.log("error");
				return;
			}

			console.log(tornadoDiagramUserData);

			return tornadoDiagramUserData;
			break;
	}
};

export default getFormattedData;
