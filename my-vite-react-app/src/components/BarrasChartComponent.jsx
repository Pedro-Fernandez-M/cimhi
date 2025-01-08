import React from "react";
import Highcharts, { chart } from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BarChartComponent = () => {
  const options = {
    chart: {
      type: "bar",
    },
    title: {
      text: "Consumo de frutasss",
    },
    xAxis: {
      categories: ["Manzanas", "Platanos", "Naranjas"],
    },
    yAxis: {
      title: {
        text: "Frutera",
      },
    },
    series: [
      {
        name: "Pedro",
        data: [1, 0, 4],
      },
      {
        name: "Luis",
        data: [5, 7, 3],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChartComponent;
