import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnoutChart({ data }) {
  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Doughnut
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
        }}
      />
    </div>
  );
}
