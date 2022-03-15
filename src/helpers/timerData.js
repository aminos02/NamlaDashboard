import faker from "faker";

export const getLineData = (labels) => {
  return {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
      },
    ],
  };
};
export const getChartData = (labels) => {
  return {
    labels: labels,
    datasets: [
      {
        label: "Earnings",
        data: Array.from(Array(10).keys()).map(i=>getRandomValue()),
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],

        borderWidth: 1,
      },
    ],
  };
};
export const getCircleData = (labels) => {
  return {
    labels: labels,
    datasets: [
      {
        label: "Views",
        data: [getRandomValue(), getRandomValue(), getRandomValue()],
        backgroundColor: [
          "rgba(255, 99, 132, .7)",
          "rgba(54, 162, 235, .7)",
          "rgba(255, 206, 86, .7)",
        ],

        borderWidth: 1,
      },
    ],
  };
};
export const getRandomValue = () => parseInt(Math.random() * 100);
