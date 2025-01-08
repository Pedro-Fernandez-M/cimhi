import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "./ClimaChartStyle.css"; // Importa el archivo CSS

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const ClimaChartComponent = () => {
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
        label: "Temperatura (°C)",
        data: [22, 19, 24, 21, 25, 20, 23],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
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
        text: "Variación del Clima en los Últimos 7 Días",
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
      <Bar data={data} options={options} />
    </div>
  );
};

export default ClimaChartComponent;
