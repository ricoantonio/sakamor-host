import { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
const TinyChartStats = dynamic(
  () => import("../../../../core/components/widgets/stats/TinyChartStats"),
  { ssr: false }
);

const ProfitLineChart = ({ info }) => {
  const [data, setData] = useState(null);

  debugger;

  useEffect(() => {
    axios
      .get("/card/card-statistics/profit-line-chart")
      .then((res) => setData(res.data));
  }, []);

  console.log(data);
  debugger;

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    grid: {
      borderColor: "#EBEBEB",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: -30,
        bottom: -10,
      },
    },
    stroke: {
      width: 3,
    },
    colors: [info],
    series: [
      {
        data: [0, 20, 5, 30, 15, 45],
      },
    ],
    markers: {
      size: 2,
      colors: info,
      strokeColors: info,
      strokeWidth: 2,
      strokeOpacity: 1,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 5,
          fillColor: "#ffffff",
          strokeColor: info,
          size: 5,
        },
      ],
      shape: "circle",
      radius: 2,
      hover: {
        size: 3,
      },
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          fontSize: "0px",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      x: {
        show: false,
      },
    },
  };

  return data !== null ? (
    <TinyChartStats
      height={70}
      type="line"
      options={options}
      title="123"
      stats="1"
      series="1"
    />
  ) : null;
};

export default ProfitLineChart;
