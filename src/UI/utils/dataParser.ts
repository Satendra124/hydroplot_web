function getRandomIntInclusive(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const getFormattedData = (data: any, graph: string) => {
	switch (graph) {
		case "Stiff Diagram":
			let cnt = 0;
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
			break;
		case "Scatter Plot":
			return data.map((item: any) => {
				return [Number(item[0]), Number(item[1])];
			});
			break;
		case "Line Graph":
			return data.map((item: any) => {
				return [Number(item[0]), Number(item[1])];
			});
			break;
		case "Pie Chart":
			let colors: string[] = ["rgb(196, 244, 252)"];
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

			data.forEach((item: any) => {
				if (item[2] === "cation") {
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

			console.log(tornadoDiagramUserData);

			return tornadoDiagramUserData;
			break;
	}
};

export default getFormattedData;
