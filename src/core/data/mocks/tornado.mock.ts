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
			{ name: "Na+", value: 1.5 },
			{ name: "K+", value: 2.5 },
			{ name: "Li+", value: 3.5 },
			{ name: "Mg2+", value: 4.5 },
			{ name: "Ca2+", value: 5.5 },
			{ name: "NH4+", value: 6.5 },
			{ name: "Mn2+", value: 7.5 },
			{ name: "Fe2+", value: 8.5 },
			{ name: "Fe3+", value: 9.5 },
		],
	},
	{
		ionType: "Anion",
		color: "blue",
		ions: [
			{ name: "Cl-", value: 1.5 },
			{ name: "SO4-2", value: 2.5 },
			{ name: "NO3-", value: 3.5 },
			{ name: "CO3-2", value: 4.5 },
			{ name: "PO4-3", value: 5.5 },
			{ name: "F-", value: 6.5 },
			{ name: "HCO3-", value: 7.5 },
			{ name: "OH-", value: 8.5 },
			{ name: "H2PO4-", value: 9.5 },
		],
	},
];

export default tornadoDiagramMockData;
