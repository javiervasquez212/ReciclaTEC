import React from "react";
import MainTopBar from "../../components/MainTopBar/MainTopBar";
import "./ChartsPage.css";
import { BarChart } from "@mui/x-charts/BarChart";

const RecyclingChart = () => {
  return (
    <div>
      <MainTopBar />
      <div className="chart-page">
        <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: ["bar A", "bar B", "bar C"],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: [2, 5, 3],
            },
          ]}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default RecyclingChart;
