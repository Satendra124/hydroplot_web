import { FileUploader } from "react-drag-drop-files";
import upload from '../../../assets/import.svg'
import '../../../styles/panel.css'
import download from '../../../assets/export.svg'
import { useRecoilState } from "recoil";
import { graph_type } from "../../recoil/atoms/dataAtom";

const Panel = () => {
    const [graphType, setGraphType] = useRecoilState(graph_type);
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
    return (
        <div className="side-panel">
            <div className="graph-dropdown">
                <select onChange={(e:any)=>setGraphType(e.target.value)} defaultValue={graphType ? graphType : ""}>
                    <option value="Stiff Diagram">Stiff Diagram</option>
                    <option value="Piper Diagram">Piper Diagram</option>
                    <option value="Scatter Plot">Scatter Plot</option>
                    <option value="Line Graph">Line Graph</option>
                    <option value="Pie Chart">Pie Chart</option>
                    <option value="Tornado Diagram">Tornado Diagram</option>
                </select>
            </div>
            <div className="error-console">
                <div className="error">This is an error</div>
                <div className="warning">This is an warning</div>
                <div className="info">This is an info</div>
            </div>
            <div className="import-export">
                <div className="export">
                        <img src={download} alt="Export" />
                        <button onClick={handleExport}>Export</button>
                    </div>
            </div>
        </div>
    )
}

export default Panel;