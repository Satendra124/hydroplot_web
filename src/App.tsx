import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Home from "./UI/pages/Home";
import Upload from "./UI/pages/Upload";
import { useRecoilState } from "recoil";
import { graph_data } from "./UI/recoil/atoms/dataAtom";

function App() {
	const [data, _] = useRecoilState(graph_data);
	return (
		<>
			{
				data ? <Home/> : <Upload/>
			}
		</>
	);
}

export default App;
