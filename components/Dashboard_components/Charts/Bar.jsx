import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";


export default function Bars({array_ventas}) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );


  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const mis_options = {
    responsive: true,
    animation: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 20,
      },
      x: {
        ticks: { color: "rgba(0, 0, 0)" },
      },
    },
  };

  const mi_data = {
    labels: meses,
    datasets: [
      {
        label: "Cant. ventas en c/mes",
        data: array_ventas,
        backgroundColor: "rgba(0, 220, 195, 0.5)",
      },
    ],
  };
  return <Bar data={mi_data} options={mis_options} />;
}
