import { StiffGraphData } from "../graphs/stiff";

const stiffGraphMockData: StiffGraphData[][] = [
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
export default stiffGraphMockData;