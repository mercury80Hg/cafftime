import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ todaySum }) {
  const left = 400 - todaySum > 0 ? 400 - todaySum : 0;
  const data = {
    datasets: [
      {
        data: [todaySum, left],
        backgroundColor: ["#92400e", "#fcd34d"],
        borderWidth: 0,
        scaleBeginAtZero: true,
      },
    ],
    options: {
      animation: {
        duration: 0, // general animation time
      },
      rotation: 1 * Math.PI,
      circumference: 1 * Math.PI,
    },
  };
  return <Doughnut data={data}/>;
}

export default PieChart;
