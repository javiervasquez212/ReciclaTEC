import React from "react";
import MainTopBar from "../../components/MainTopBar/MainTopBar";
import "./ChartsPage.css";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import Typography from "@mui/material/Typography";

const valueFormatter = (value: number) => `${value}kg`;
const chartSetting = {
  xAxis: [
    {
      label: "Kilograms (KG)",
    },
  ],
  width: 500,
  height: 400,
};
const dataset = [
  {
    quantity: 21,
    month: "Jan",
  },
  {
    quantity: 28,
    month: "Fev",
  },
  {
    quantity: 41,
    month: "Mar",
  },
  {
    quantity: 73,
    month: "Apr",
  },
  {
    quantity: 99,
    month: "May",
  },
  {
    quantity: 144,
    month: "June",
  },
  {
    quantity: 319,
    month: "July",
  },
  {
    quantity: 249,
    month: "Aug",
  },
  {
    quantity: 131,
    month: "Sept",
  },
  {
    quantity: 55,
    month: "Oct",
  },
  {
    quantity: 48,
    month: "Nov",
  },
  {
    quantity: 25,
    month: "Dec",
  },
];

const RecyclingChart = () => {
  return (
    <div>
      <MainTopBar />
      <div className="header">
        <h1>
          {" "}
          <Typography variant="h6" component="div">
            Estadísticas
          </Typography>
        </h1>
      </div>

      <div className="chart-page">
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "Plástico", color: "#235434" },
                { id: 1, value: 15, label: "Vidrio", color: "#3a7658" },
                { id: 2, value: 20, label: "Papel", color: "#a7dcb2" },
                { id: 2, value: 20, label: "Metal", color: "#81be4d" },
              ],
            },
          ]}
          width={400}
          height={200}
        />

        <BarChart
          dataset={dataset}
          yAxis={[{ scaleType: "band", dataKey: "month" }]}
          series={[
            {
              dataKey: "quantity",
              label: "Total reciclado por mes",
              valueFormatter,
              color: "#235434",
            },
          ]}
          layout="horizontal"
          {...chartSetting}
        />
      </div>
    </div>
  );
};

export default RecyclingChart;
