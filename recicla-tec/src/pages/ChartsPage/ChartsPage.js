import React from "react";
import { Doughnut } from "react-chartjs-2";

const RecyclingChart = ({ recycledItems }) => {
  // Calcular la cantidad de cada tipo de material reciclado
  const materialCount = {};
  recycledItems.forEach((item) => {
    if (materialCount[item.material]) {
      materialCount[item.material] += item.quantity;
    } else {
      materialCount[item.material] = item.quantity;
    }
  });

  // Crear un arreglo de colores para los segmentos del gráfico
  const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33", "#33FFFF"];

  // Crear los datos para el gráfico de dona
  const data = {
    labels: Object.keys(materialCount),
    datasets: [
      {
        data: Object.values(materialCount),
        backgroundColor: colors,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default RecyclingChart;
