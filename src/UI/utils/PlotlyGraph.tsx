import React from "react";
import { useRecoilState } from "recoil";

import { graph_type } from "../recoil/atoms/dataAtom";

import BoxPlot from "../../core/graphs/BoxPlot";
import Histogram from "../../core/graphs/Histogram";
import BarChart from "../../core/graphs/BarChart";
import JointPlot from "../../core/graphs/JointPlot";
import KDEPlot from "../../core/graphs/KDEPlot";
import ViolinPlot from "../../core/graphs/ViolinPlot";
import ContourPlot from "../../core/graphs/ContourPlot";
import DonutChart from "../../core/graphs/DonutChart";
import DiskPlot from "../../core/graphs/DiskPlot";
import TimeseriesPlot from "../../core/graphs/TimeseriesPlot";

export const checkIfPlotlyGraph = (graphType: string) => {
	switch (graphType) {
		case "Bar Chart":
			return true;

		case "Box Plot":
			return true;

		case "Histogram":
			return true;

		case "Joint Plot":
			return true;

		case "KDE Plot":
			return true;

		case "Violin Plot":
			return true;

		case "Contour Plot":
			return true;

		case "Donut Chart":
			return true;

		case "Disk Plot":
			return true;

		case "Timeseries Plot":
			return true;

		default:
			return false;
	}
};

const PlotlyGraph = () => {
	const [graphType, _] = useRecoilState(graph_type);
	if (graphType === null) {
		return <div>Select a graph type</div>;
	}
	switch (graphType) {
		case "Bar Chart":
			return <BarChart />;
		case "Box Plot":
			return <BoxPlot />;
		case "Histogram":
			return <Histogram />;
		case "Joint Plot":
			return <JointPlot />;
		case "KDE Plot":
			return <KDEPlot />;
		case "Violin Plot":
			return <ViolinPlot />;
		case "Contour Plot":
			return <ContourPlot />;
		case "Donut Chart":
			return <DonutChart />;
		case "Disk Plot":
			return <DiskPlot />;
		case "Timeseries Plot":
			return <TimeseriesPlot />;
		default:
			return <div></div>;
	}
};

export default PlotlyGraph;
