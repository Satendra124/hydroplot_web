import { atom } from "recoil";
import { GRAPH_DATA, GRAPH_TYPE, GRAPH_ERROR, PLOTLY_GRAPH } from "../keys";

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

export const graph_error = atom({
	key: GRAPH_ERROR,
	default: false,
	effects_UNSTABLE: [
		({ onSet }) => {
			onSet((e) => {
				console.debug("Current Data", e);
			});
		},
	],
});

export const is_plotly_graph = atom({
	key: PLOTLY_GRAPH,
	default: false,
	effects_UNSTABLE: [
		({ onSet }) => {
			onSet((e) => {
				console.debug("Current Data", e);
			});
		},
	],
});
