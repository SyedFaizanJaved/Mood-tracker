// src/components/MoodChart.js
import React from 'react';
import Chart from 'chart.js/auto';
import { Line, Bar } from 'react-chartjs-2';

const MoodChart = ({ moods }) => {
  const data = {
    labels: moods.map(mood => mood.date),
    datasets: [
      {
        label: 'Mood',
        data: moods.map(mood => mood.mood),
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue',
      },
    ],
  };

  const barData = {
    labels: moods.map(mood => mood.date),
    datasets: [
      {
        label: 'Mood',
        data: moods.map(mood => mood.mood),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Line Chart</h2>
      
      <Line data={data} />
      <h2>Bar Chart</h2>
      
      <Bar data={barData} />
    </div>
  );
};

export default MoodChart;
