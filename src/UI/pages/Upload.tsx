import React, { useEffect, useRef, useState } from "react";
import "../../styles/upload.css";
import { FileUploader } from "react-drag-drop-files";
import upload from "../../assets/import.svg";
import transparentLogo from "../../assets/logo-no-background.svg";
import { useRecoilState } from "recoil";
import { graph_data } from "../recoil/atoms/dataAtom";
import Papa from "papaparse";

const fileTypes = ["CSV"];

const Upload = () => {
	const [data, setData] = useRecoilState(graph_data);
	const handleChange = async (file: any) => {
		const textData = await file.text();

		let parsedData = [];
		const lineData = textData.split("\n");
		for (let i = 0; i < lineData.length; i++) {
			if (i === 0) continue;

			let words = lineData[i];
			let row = words.split(",");
			let data = [];
			for (let word of row) {
				if (isNaN(word)) {
					data.push(word);
				} else {
					data.push(Number(word));
				}
			}
			parsedData.push(data);
		}
		// console.log(parsedData);
		// setData(textData);
		setData(parsedData);
	};

	for (let words in data);
	return (
		<div className="upload">
			<div>
				<img src={transparentLogo} alt="Hydroplot" className="logo" />
				<FileUploader handleChange={handleChange} name="file" types={fileTypes}>
					<div className="drag-drop-container">
						<img src={upload} alt="Upload" />
						<button>Choose a File or drag it here</button>
					</div>
				</FileUploader>
			</div>
		</div>
	);
};

export default Upload;
