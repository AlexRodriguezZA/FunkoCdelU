import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

export default function Pies() {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const IntegereAleatorio = () => {
    return Math.floor(Math.random() * (255 + 1));
  };
  const Generar_RGB_Aleatorio = () => {
    let array_colores = [];
   
    for (let i = 0; i < 5; i++) {
      let r = IntegereAleatorio(255);
      let g = IntegereAleatorio(255);
      let b = IntegereAleatorio(255);
      array_colores.push(`rgba(${r}, ${g}, ${b}, 0.4)`)
    }

    return array_colores;
  };

  let array_colores = Generar_RGB_Aleatorio();
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const data = {
    labels: ["Carne", "Jamón", "Dulces", "Turrón", "Vino"],
    datasets: [
      {
        label: "Ventas de la categoria %",
        data: [35, 20, 20, 15, 10],
        backgroundColor: array_colores,
        borderColor: array_colores,
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} options={options} />;
}
