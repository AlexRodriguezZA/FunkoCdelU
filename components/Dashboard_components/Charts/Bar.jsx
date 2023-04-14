import { Bar } from 'react-chartjs-2';
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
} from 'chart.js';

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
var beneficios = [72, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var misoptions = {
    responsive : true,
    animation : true,
    plugins : {
        legend : {
            display : true
        }
    },
    scales : {
        y : {
            min : 0,
            max : 100
        },
        x: {
            ticks: { color: 'rgba(0, 0, 0)'}
        }
    }
};

var midata = {
    labels: meses,
    datasets: [
        {
            label: 'Cant. ventas en c/mes',
            data: beneficios,
            backgroundColor: 'rgba(0, 220, 195, 0.5)'
        }
    ]
};

export default function Bars() {
    return <Bar data={midata} options={misoptions} />
}