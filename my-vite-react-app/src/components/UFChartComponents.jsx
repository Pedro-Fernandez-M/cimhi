import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

const UFChartComponent = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://mindicador.cl/api/uf");
        const ufData = response.data.serie.slice(0, 30).reverse();
        setData(ufData.map((item) => item.valor));
        setCategories(
          ufData.map((item) => new Date(item.fecha).toLocaleDateString())
        );
      } catch (error) {
        console.error("Error fetching UF data:", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    title: {
      text: "Variación de la UF en los últimos 30 días",
    },
    xAxis: {
      categories: categories,
    },
    yAxis: {
      title: {
        text: "Valor UF",
      },
    },
    series: [
      {
        name: "UF",
        data: data,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default UFChartComponent;
