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
			return [
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
			break;
	}
};

export default getFormattedData;
