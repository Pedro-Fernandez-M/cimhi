import React from "react";
import ChartComponent from "./components/ChartComponent";
import BarChartComponent from "./components/BarrasChartComponent";
import CurvaChartComponent from "./components/CurvaChartComponent";
import UFChartComponent from "./components/UFChartComponents";

const App = () => {
  return (
    <div>
      <h1>My Vite React App with Highcharts</h1>
      <ChartComponent />
      <BarChartComponent />
      <CurvaChartComponent />
      <UFChartComponent />
    </div>
  );
};

export default App;
