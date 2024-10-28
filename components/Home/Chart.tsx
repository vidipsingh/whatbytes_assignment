"use client"
// LineChartWithDots.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Container } from '@mui/material';

// Register necessary components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChartWithDots = () => {
  const data = {
    labels: ['0', '', '', '25', '', '', '', '50', '', '', '', '75', '', '', '', '100'],
    datasets: [
      {
        label: 'Percentile Score',
        data: [1, 3, 5, 10, 12, 15, 18, 20, 27, 23, 13, 6, 3, 7, 2, 1],
        borderColor: '#000000',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        pointRadius: 5, // Size of the dots
        pointBackgroundColor: '#495cff', // Color of the dots
        pointBorderColor: '#fff', // Border color of the dots
        pointHoverRadius: 8, // Hover size of the dots
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const, // Must use a specific allowed value like 'top'
      },
      title: {
        display: false,
        text: '',
      },
    },
    elements: {
      line: {
        tension: 0.4, // Smoothness of the line
      },
      point: {
        pointStyle: 'circle', // Shape of the dots
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
