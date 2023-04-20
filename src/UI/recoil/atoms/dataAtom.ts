import { atom } from "recoil";
import { GRAPH_DATA, GRAPH_TYPE } from "../keys";

const def: unknown[] = [];

export const graph_data = atom({
	key: GRAPH_DATA,
	default: def,
	effects_UNSTABLE: [
		({ onSet }) => {
			onSet((e) => {
				console.debug("Current Data", e);
			});
		},
	],
});

export const graph_type = atom({
	key: GRAPH_TYPE,
	default: null,
	effects_UNSTABLE: [
		({ onSet }) => {
			onSet((e) => {
				console.debug("Current Data", e);
			});
		},
	],
});
