import React, { useRef, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ChartConfiguration } from 'chart.js';


export default function ExpenseChart() {
  

  return (
    <div className="border rounded-lg px-4 h-80 md:px-8 lg:pl-2 lg:pr-8">
      <div className="flex items-center justify-between p-4">
        <canvas id="expense-chart"></canvas>
      </div>
    </div>
  );
}
