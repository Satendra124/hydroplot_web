import React, { useState } from "react";
import { Button } from "@mui/material";
import { useCSVReader } from "react-papaparse";
import getFormattedData from "../utils/dataParser";

export default function CSVReader({
	graph,
	setFormattedData,
}: {
	graph: string;
	setFormattedData: any;
}) {
	const { CSVReader } = useCSVReader();

	const [file, setFile] = useState([]);

	const uploadFile = () => {
		if (file.length === 0) {
			return;
		}
		setFormattedData({
			type: graph,
			data: getFormattedData(file, graph),
		});
	};

	return (
		<CSVReader
			onUploadAccepted={(results: any) => {
				setFile(results.data);
				console.log(results);
			}}>
			{({ getRootProps, acceptedFile, getRemoveFileProps }: any) => (
				<>
					<div className="flex items-center">
						<div className="w-84 h-16 bg-white rounded-lg p-2 text-center flex justify-around items-center">
							<Button
								variant="contained"
								sx={{
									height: "2.5rem",
								}}
								{...getRootProps()}>
								Browse file
							</Button>
							<div className="w-40 h-12 bg-white rounded-lg p-2 text-center">
								{file.length !== 0 ? (
									<p>{acceptedFile.name}</p>
								) : (
									<p>No File Chosen</p>
								)}
							</div>
							<div className="flex flex-col">
								<Button
									onClick={uploadFile}
									variant="contained"
									sx={{
										backgroundColor: "green",
										padding: "0.2rem 1.5rem",
									}}>
									Upload
								</Button>
								<Button
									{...getRemoveFileProps()}
									onClick={() => setFile([])}
									variant="contained"
									sx={{
										backgroundColor: "red",
										padding: "0.2rem 1.5rem",
									}}>
									Remove
								</Button>
							</div>
						</div>
					</div>
				</>
			)}
		</CSVReader>
	);
}
