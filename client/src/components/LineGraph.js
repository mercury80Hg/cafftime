import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";

function LineGraph() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        type: "line",
        label: "Dataset 1",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 2,
        data: [1, 2, 3, 4, 5],
      },
    ],
  };

  return <Line type="line" data={data} />;
}

export default LineGraph;
