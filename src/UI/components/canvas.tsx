import { useRecoilState } from "recoil";
import {
	graph_data,
	graph_type,
	is_plotly_graph,
} from "../recoil/atoms/dataAtom";
import Canvas from "../../Canvas";

import PlotlyGraph from "../utils/PlotlyGraph";

const UICanvas = () => {
	const [data, setData] = useRecoilState(graph_data);
	const [graphType, _] = useRecoilState(graph_type);
	const [isPlotlyGraph, __] = useRecoilState(is_plotly_graph);
	console.log(graphType);
	return (
		<div>
			{data.length === 0 ? (
				<div>Upload a file to get started</div>
			) : (
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "flex-end",
						paddingTop: "20px",
					}}>
					{isPlotlyGraph ? (
						<PlotlyGraph />
					) : (
						<>
							<div>{graphType}</div>
							<Canvas
								graph={graphType}
								userData={{ type: graphType, data: data }}
							/>
						</>
					)}
				</div>
			)}
			<div></div>
		</div>
	);
};

export default UICanvas;
