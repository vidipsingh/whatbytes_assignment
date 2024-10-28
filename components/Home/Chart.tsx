"use client";
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Container } from '@mui/material';

// Register necessary components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const LineChartWithDots: React.FC = () => {
  const data = {
    labels: ['0', '', '', '25', '', '', '', '50', '', '', '', '75', '', '', '', '100'],
    datasets: [
      {
        label: 'Percentile Score',
        data: [1, 3, 5, 10, 12, 15, 18, 20, 27, 23, 13, 6, 3, 7, 2, 1],
        borderColor: '#000000',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        pointRadius: 5,
        pointBackgroundColor: '#495cff',
        pointBorderColor: '#fff',
        pointHoverRadius: 8,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        pointStyle: 'circle',
      },
    },
  };

  return (
    <Container>
      <Line data={data} options={options} />
    </Container>
  );
};

export default LineChartWithDots;
