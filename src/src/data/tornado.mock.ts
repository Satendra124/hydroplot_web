const tornadoDiagramMockData: {
	ionType: string;
	color: string;
	ions: {
		name: string;
		value: number;
	}[];
}[] = [
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

export default tornadoDiagramMockData;
