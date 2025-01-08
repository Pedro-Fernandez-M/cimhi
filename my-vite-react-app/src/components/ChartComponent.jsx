// filepath: src/components/ChartComponent.jsx
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ChartComponent = () => {
  const options = {
    title: {
      text: "My Chart",
    },
    series: [
      {
        name: "Example Series",
        data: [1, 2, 3, 4, 5],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ChartComponent;
