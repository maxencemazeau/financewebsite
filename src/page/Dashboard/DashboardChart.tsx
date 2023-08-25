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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);


const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      data: [10, 20, 15, 25, 30, 22, 18],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};


const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  maintainAspectRatio: false, // Allow chart to resize based on container size
  responsive: true, // Make chart responsive
  plugins: {
    legend: {
      display: false, // Hide legend for more space
    },
  },
  height: 300,
  width : 600 // Set the height of the chart
};


const DashboardChart = () => {
  return (
    <section>
      <div className="w-full mx-auto px-4 md:px-8">
      <ul className="border px-4 w-full rounded-lg md:px-8">
        <div className="flex items-center p-4">
          <div className='h-80 w-full'>
            <Line data={data} options={options} />
          </div>
        </div>
      </ul>
      </div>
    </section>
  );
};


export default DashboardChart;
