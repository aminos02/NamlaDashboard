import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Table from "../../components/table/Table";
import Recent from "../../components/recent/Recent";
import { getLineData, getRandomValue } from "../../helpers/timerData";
import { useEffect } from "react";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Cluster Health",
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];

export default () => {
  const [data, setData] = useState(getLineData(labels));
  const [memory, setMemory] = useState(getRandomValue());
  const [cpu, setCpu] = useState(getRandomValue());
  const [edgeConnected, setEdgeConnected] = useState(getRandomValue());
  const [nbDevices, setNbDevices] = useState(getRandomValue());
  useEffect(() => {
    const timer = setTimeout(() => {
      setData(getLineData(labels));
      setMemory(getRandomValue());
      setCpu(getRandomValue());
      setEdgeConnected(getRandomValue());
      setNbDevices(getRandomValue());
    }, 3000);
    return () => clearTimeout(timer);
  });
  return (
    <div className="main">
      <Line options={options} data={data} />
      <FeaturedInfo
        memory={memory}
        cpu={cpu}
        edgeConnected={edgeConnected}
        nbDevices={nbDevices}
      />
      <div className="homeWidgets">
        <Table />
        <Recent />
      </div>
    </div>
  );
};
