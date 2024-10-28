"use client";
// components/PieChart.tsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Container } from '@mui/material';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  score: number; // Type for score prop
}

const emojiCenterPlugin = {
  id: 'emojiCenter',
  afterDraw: (chart: { ctx: CanvasRenderingContext2D; chartArea: { left: number; right: number; top: number; bottom: number; }; }) => {
    const { ctx, chartArea } = chart;
    const xCenter = (chartArea.left + chartArea.right) / 2;
    const yCenter = (chartArea.top + chartArea.bottom) / 2;

    ctx.save();
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🎯', xCenter, yCenter);
    ctx.restore();
  },
};

// Dynamic DoughnutChart component that accepts score as a prop
const DoughnutChart: React.FC<DoughnutChartProps> = ({ score }) => {
  const maxScore = 15; // Maximum score possible
  const remainingScore = maxScore - score;

  const data = {
    labels: [],
    datasets: [
      {
        data: [score, remainingScore], // Dynamic data based on score prop
        backgroundColor: ['#1692e5', '#d0eafb'],
        borderColor: ['#1692e5', '#d0eafb'],
        borderWidth: 1,
        cutout: '60%', // Inner radius for doughnut chart
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const, // Legend at bottom
      },
      tooltip: {
        enabled: false,
      },
      // Add custom emoji plugin here
      emojiCenter: {},
    },
    rotation: Math.PI * 168, // Rotate the chart by 180 degrees (starts from bottom)
  };

  return (
    <Container style={{ width: '225px', height: '225px' }}>
      <Doughnut data={data} options={options} plugins={[emojiCenterPlugin]} />
    </Container>
  );
};

export default DoughnutChart;
