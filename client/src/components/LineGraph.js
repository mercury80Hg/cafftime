import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Tooltip } from 'chart.js';
import { Chart as ChartJS } from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(annotationPlugin, CategoryScale, Tooltip);



function LineGraph({ remainingByTime }) {
  const data = {
    labels: [
      6, 8, 10, 12, 14, 16, 18, 20, 24, 2, 4
    ],
    datasets: [
      {
        type: "line",
        label: "Caffeine in body (mg)",
        borderColor: "#92400e",
        backgroundColor: "transparent",
        borderWidth: 1,
        data: remainingByTime, // change this according to calculator
      },
    ],
  };

  const options = {

  animation: false,
  plugins: {
    annotation: {
      annotations: {
        line1: {
          type: "line",
          yMin: 50,
          yMax: 50,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 2,
          borderDash: [10, 10],
          drawTime: "beforeDatasetsDraw",
        },
        
      },
    },
  },
  };
  
  return <Line type="line" data={data} options={options}/>;
}

export default LineGraph;
