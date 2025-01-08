import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "./ClimaChartStyle.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const ValdiviaTemperatureChart = () => {
  const data = {
    labels: [
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo",
    ],
    datasets: [
      {
        label: "Temperatura Máxima (°C)",
        data: [22, 24, 23, 25, 26, 27, 28],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: false,
        tension: 0.1,
      },
      {
        label: "Temperatura Mínima (°C)",
        data: [12, 14, 13, 15, 16, 17, 18],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Temperatura Máxima y Mínima en Valdivia en los Últimos 7 Días",
      },
      datalabels: {
        anchor: "end",
        align: "end",
        formatter: (value) => `${value}°C`,
        color: "black",
        font: {
          weight: "bold",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Temperatura (°C)",
        },
      },
    },
    animation: {
      duration: 1000,
      easing: "easeOutBounce",
    },
  };

  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default ValdiviaTemperatureChart;
