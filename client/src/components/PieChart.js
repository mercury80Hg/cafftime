import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ todaySum }) {
  const left = 400 - todaySum > 0 ? 400 - todaySum : 0;

  let backgroundColor;

  if (todaySum < 150) {
    backgroundColor = ["#10b981", "#fcd34d"];
  } else if (todaySum > 300) {
    backgroundColor = ["#ef4444", "#fcd34d"];
  } else {
    backgroundColor = ["#f59e0b", "#fcd34d"];
  }

  const data = {
    datasets: [
      {
        data: [todaySum, left],
        backgroundColor: backgroundColor,
        borderWidth: 0,
        scaleBeginAtZero: true,
      },
    ],
  };

  return <Doughnut data={data}/>;
}

export default PieChart
