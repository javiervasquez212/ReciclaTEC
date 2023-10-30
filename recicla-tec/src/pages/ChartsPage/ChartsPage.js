import React from "react";
import MainTopBar from "../../components/MainTopBar/MainTopBar";
import "./ChartsPage.css";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import Typography from "@mui/material/Typography";
import AppServices from "../../Services/AppServices";

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

const set = await AppServices.obtenerDatosPorMes();
const data = await AppServices.obtenerTop5Materiales();

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
              data
            },
          ]}
          width={400}
          height={200}
        />

        <BarChart
          dataset={set}
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
