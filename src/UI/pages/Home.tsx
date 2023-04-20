import React, { useEffect, useRef, useState } from "react";
import Canvas from "./components/canvas";
import "../../styles/home.css";
import Splitter, { SplitDirection } from "@devbookhq/splitter";
import logo from "../../assets/logo-no-background.svg";
import Panel from "./components/panel";
import Sheet from "./components/sheet";
import { useRecoilState } from "recoil";
import { graph_data, graph_type } from "../recoil/atoms/dataAtom";
import { WorkbookInstance } from "@fortune-sheet/react";

const Home = () => {
	const diagramTypes: string[] = [
		"Stiff Diagram",
		"Piper Diagram",
		"Scatter Plot",
		"Line Graph",
		"Pie Chart",
		"Tornado Diagram",
	];
	const [graphType, setGraphType] = useRecoilState(graph_type);
	const [data, setData] = useRecoilState(graph_data);
	console.log(data);
	return (
		<div className="home">
			<div className="app-bar">
				<img src={logo} alt="Hydroplot" />
				<div className="active">Home</div>
				<div className="app-route">Guide</div>
				<div className="app-route">About</div>
			</div>
			<div className="app-main">
				<Splitter
					direction={SplitDirection.Horizontal}
					initialSizes={[25, 75]}
					gutterClassName="gutter"
					draggerClassName="dragger">
					<Panel />
					<Splitter
						direction={SplitDirection.Vertical}
						initialSizes={[55, 45]}
						gutterClassName="gutter"
						draggerClassName="dragger">
						<Canvas />
						<Sheet />
					</Splitter>
				</Splitter>
			</div>
		</div>
	);
};

export default Home;
