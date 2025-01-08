import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import BellCurve from "highcharts/modules/histogram-bellcurve";

BellCurve(Highcharts);

const BellCurveChartComponent = () => {
  useEffect(() => {
    if (typeof Highcharts === "object") {
      BellCurve(Highcharts);
    }
  }, []);

  const options = {
    title: {
      text: "Curva de Campana",
    },
    xAxis: [
      {
        title: { text: "Observaciones" },
        alignTicks: false,
      },
      {
        title: { text: "Curva de Campana" },
        alignTicks: false,
        opposite: true,
      },
    ],
    yAxis: [
      {
        title: { text: "Frecuencia" },
      },
      {
        title: { text: "Distribución" },
        opposite: true,
      },
    ],
    series: [
      {
        name: "Observaciones",
        type: "histogram",
        xAxis: 0,
        yAxis: 0,
        baseSeries: "s1",
        zIndex: -1,
      },
      {
        name: "Curva de Campana",
        type: "bellcurve",
        xAxis: 1,
        yAxis: 1,
        baseSeries: "s1",
        zIndex: -1,
      },
      {
        name: "Datos",
        type: "scatter",
        data: [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5],
        id: "s1",
        marker: {
          radius: 1.5,
        },
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BellCurveChartComponent;
