import React, { useEffect, useRef, useState } from "react";
import '../../styles/upload.css'
import { FileUploader } from "react-drag-drop-files";
import upload from '../../assets/import.svg'
import transparentLogo from '../../assets/logo-no-background.svg'
import { useRecoilState } from "recoil";
import { graph_data } from "../recoil/atoms/dataAtom";

const fileTypes = ["CSV"];

const Upload = () => {
	const [data, setData] = useRecoilState(graph_data);
	const handleChange = async (file: any) => {
		const data = await file.text();
		setData(data);
	};
	return (
		<div className="upload">
			<div>
				<img src={transparentLogo} alt="Hydroplot" className="logo" />
				<FileUploader handleChange={handleChange} name="file" types={fileTypes} >
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
