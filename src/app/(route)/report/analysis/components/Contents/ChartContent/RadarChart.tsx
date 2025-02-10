import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, Filler, Legend, LineElement, PointElement, RadialLinearScale, Tooltip } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function RadarChart({ data }: { data: number[] }) {
  const mathData = {
    labels: ['자기주도', '활력', '안전', '보수', '성취', '박애', '보편'],
    datasets: [
      {
        data,
        backgroundColor: 'rgba(189, 209, 255, 0.5)',
        borderColor: '#3F78FF',
        borderWidth: 2,
        pointRadius: 0,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          display: false,
        },
        grid: {
          //display: false,
        },
      },
    },
    elements: {
      line: {
        tension: 0,
        borderColor: '#3F78FF',
        borderWidth: 1,
      },
    },
  };

  return <Radar data={mathData} options={options} />;
}
