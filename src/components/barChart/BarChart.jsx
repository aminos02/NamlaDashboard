import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import "./barchart.css";
import Chart from "chart.js/auto"; //Dont remove this Line ;you will get an error if y remove it
import { useState } from "react";
import { getChartData, getCircleData } from "../../helpers/timerData";
import { useEffect } from "react";

const organizationLabels = ["Facebook", "Amazon", "Youtube"];
const serviceDataLabels = [
  "Virtual Machine",
  "Virtual Network",
  "Compute Engine",
];
const ociDataLabels = ["Virtual Machine", "Virtual Network", "Compute Engine"];
const chartLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "Juin",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const BarChart = () => {
  const [organizationData, setOrganizationData] = useState(
    getCircleData(organizationLabels)
  );
  const [serviceData, setServiceData] = useState(
    getCircleData(serviceDataLabels)
  );
  const [ociData, setOciData] = useState(getCircleData(ociDataLabels));
  const [chartData, setChartData] = useState(getChartData(chartLabels));

  useEffect(() => {
    const timer = setTimeout(() => {
      setOrganizationData(getCircleData(organizationLabels));
      setServiceData(getCircleData(serviceDataLabels));
      setOciData(getCircleData(ociDataLabels));
      setChartData(getChartData(chartLabels));
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <div className="graphBox">
        <div className="box">
          <div className="title">
            <h3>Cost per Organization</h3>
          </div>
          <Doughnut data={organizationData} options={{ responsive: true }} />
        </div>
        <div className="box">
          <div className="title">
            <h3>Cost per Service</h3>
          </div>
          <Doughnut data={serviceData} options={{ responsive: true }} />
        </div>
        <div className="box">
          <div className="title">
            <h3>Cost per OCI Tenant</h3>
          </div>
          <Doughnut data={ociData} options={{ responsive: true }} />
        </div>
      </div>
      <div className="lineChart">
        <Bar data={chartData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default BarChart;
