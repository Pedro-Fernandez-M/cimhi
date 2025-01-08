import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMap from "highcharts/modules/map";
import mapData from "@highcharts/map-collection/countries/cl/cl-all.geo.json";

// Inicializa el módulo de mapas
if (typeof Highcharts === "object" && !Highcharts.Map) {
  HighchartsMap(Highcharts);
}

const ChileClimaMap = () => {
  useEffect(() => {
    if (typeof Highcharts === "object" && !Highcharts.Map) {
      HighchartsMap(Highcharts);
    }
  }, []);

  const chartOptions = {
    chart: {
      map: mapData,
    },
    title: {
      text: "Clima en Chile",
    },
    colorAxis: {
      min: 0,
      minColor: "#FFFFFF",
      max: 40,
      maxColor: "#FF0000",
      stops: [
        [0, "#0000FF"], // Azul para frío
        [0.5, "#FFFFFF"], // Blanco para temperaturas medias
        [1, "#FF0000"], // Rojo para calor
      ],
    },
    series: [
      {
        data: [
          ["cl-ar", 15], // Región de Arica y Parinacota
          ["cl-ta", 18], // Región de Tarapacá
          ["cl-an", 20], // Región de Antofagasta
          ["cl-at", 22], // Región de Atacama
          ["cl-co", 25], // Región de Coquimbo
          // Agrega más regiones según sea necesario
        ],
        mapData: mapData,
        joinBy: "hc-key",
        name: "Temperatura",
        states: {
          hover: {
            color: "#BADA55",
          },
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
      },
    ],
    accessibility: {
      enabled: false, // Desactiva la accesibilidad para eliminar la advertencia
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"mapChart"}
      options={chartOptions}
    />
  );
};

export default ChileClimaMap;
