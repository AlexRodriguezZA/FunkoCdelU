import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

export default function Pies({ data_categoria }) {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const array_nombre = data_categoria
    .map((categoria) => categoria.porcentaje !== 0 ?  categoria.nombre : undefined)
    .filter((nombre) => nombre !== undefined);

  const array_porcentaje = data_categoria
    .map(categoria => categoria.porcentaje !== 0 ? categoria.porcentaje : undefined)
    .filter(porcentaje => porcentaje !== undefined);
  

  const IntegereAleatorio = () => {
    return Math.floor(Math.random() * (255 + 1));
  };
  const Generar_RGB_Aleatorio = () => {
    let array_colores = [];

    for (let i = 0; i < array_nombre.length; i++) {
      let r = IntegereAleatorio(255);
      let g = IntegereAleatorio(255);
      let b = IntegereAleatorio(255);
      array_colores.push(`rgba(${r}, ${g}, ${b}, 0.4)`);
    }

    return array_colores;
  };
  const array_colores = Generar_RGB_Aleatorio();


  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };
  const data = {
    labels: array_nombre,
    datasets: [
      {
        label: "Ventas de la categoría %",
        data: array_porcentaje,
        backgroundColor: array_colores,
        borderColor: array_colores,
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} options={options} />;
}
