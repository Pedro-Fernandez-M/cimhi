import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const CurvaChartComponent = () => {
  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Caudal del Agua",
    },
    xAxis: {
      categories: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
    },
    yAxis: {
      title: {
        text: "Caudal (m³/s)",
      },
    },
    series: [
      {
        name: "Río A",
        data: [10, 15, 12, 14, 18],
      },
      {
        name: "Río B",
        data: [8, 12, 9, 11, 13],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default CurvaChartComponent;
