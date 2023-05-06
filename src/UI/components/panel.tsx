import { FileUploader } from "react-drag-drop-files";
import upload from "../../../assets/import.svg";
import "../../styles/panel.css";
import download from "../../assets/export.svg";
import { useRecoilState } from "recoil";
import {
	graph_type,
	graph_error,
	is_plotly_graph,
} from "../recoil/atoms/dataAtom";
import { checkIfPlotlyGraph } from "../utils/PlotlyGraph";

const Panel = () => {
	const [graphType, setGraphType] = useRecoilState(graph_type);
	const [error, setError] = useRecoilState(graph_error);
	const [isPlotlyGraph, setIsPlotlyGraph] = useRecoilState(is_plotly_graph);
	const handleExport = () => {
		const canvas = document.getElementById("main_canvas") as HTMLCanvasElement;
		if (canvas) {
			const url = canvas.toDataURL("image/png");
			const link = document.createElement("a");
			link.download = "chart.png";
			link.href = url;
			link.click();
		}
	};

	const handleChange = (e: any) => {
		setGraphType(e.target.value);
		const ok = checkIfPlotlyGraph(e.target.value);
		setIsPlotlyGraph(ok);
	};
	return (
		<div className="side-panel">
			<div className="graph-dropdown">
				<select
					onChange={(e: any) => {
						handleChange(e);
					}}
					defaultValue={graphType ? graphType : ""}>
					<option value="">--</option>
					<option value="Stiff Diagram">Stiff Diagram</option>
					<option value="Scatter Plot">Scatter Plot</option>
					<option value="Line Graph">Line Graph</option>
					<option value="Pie Chart">Pie Chart</option>
					<option value="Tornado Diagram">Tornado Diagram</option>
					<option value="Bar Chart">Bar Chart</option>
					<option value="Box Plot">Box Plot</option>
					<option value="Histogram">Histogram</option>
					<option value="Joint Plot">Joint Plot</option>
					<option value="KDE Plot">KDE Plot</option>
					<option value="Violin Plot">Violin Plot</option>
					<option value="Contour Plot">Contour Plot</option>
					<option value="Donut Chart">Donut Chart</option>
					<option value="Disk Plot">Disk Plot</option>
					<option value="Timeseries Plot">Timeseries Plot</option>
				</select>
			</div>
			<div className="error-console">
				{/* <div className="error">This is an error</div>
				<div className="warning">This is an warning</div>
				<div className="info">This is an info</div> */}
				{error && <div className="error">INVALID DATA FORMAT</div>}
			</div>
			<div className="import-export">
				<div className="export">
					<img src={download} alt="Export" />
					<button onClick={handleExport}>Export</button>
				</div>
			</div>
		</div>
	);
};

export default Panel;
