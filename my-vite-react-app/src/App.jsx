import React from "react";
import ChartComponent from "./components/ChartComponent";
import BarChartComponent from "./components/BarrasChartComponent";
import CurvaChartComponent from "./components/CurvaChartComponent";
import UFChartComponent from "./components/UFChartComponent";
import ClimaChartComponent from "./components/ClimaChartComponent";
import "./App.css";
import ValdiviaTemperatureChart from "./components/ValdiviaTemperatureChart";
import ChileClimaMap from "./components/ChileClimaMap";

const App = () => {
  return (
    <div>
      <h1>Gráficos</h1>
      <div className="chart-container">
        <ChartComponent />
      </div>
      <div className="chart-container">
        <BarChartComponent />
      </div>
      <div className="chart-container">
        <CurvaChartComponent />
      </div>
      <div className="chart-container">
        <UFChartComponent />
      </div>
      <div className="chart-container">
        <ClimaChartComponent />
      </div>
      <div className="chart-container">
        <ValdiviaTemperatureChart />
      </div>
      <div className="chart-container">
        <ChileClimaMap />
      </div>
    </div>
  );
};

export default App;
