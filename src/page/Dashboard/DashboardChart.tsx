import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import useAxios from '../../hooks/useAxios';
import useLocalStorage from '../../hooks/useLocalStorage';

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

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  height: 200,
  width: 500,
};

const items = [
  {
    title: "Expenses",
    desc: "1450"
  },
  {
    title: "Total",
    desc: "1450"
  },
  {
    title: "Used",
    desc: "1450"
  },
  {
    title: "Month",
    desc: "2300"
  },
]

interface ExpenseChart {
  expenseId : number,
  expenseAmount: number,
  purchaseDate: string
}

interface ChartParams{
  labels: string[];
    datasets: {
      data: number[];
      borderColor: string,
      backgroundColor: string
    }[];
}

const DashboardChart = () => {

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [user] = useLocalStorage('user', []);
  const [userExpenseData, setUserExpenseData] = useState<ExpenseChart[]>([]);

  const [data, setData] = useState<ChartParams>({
    labels: [],
    datasets: [
      {
        data: [],
        borderColor: 'rgba(96, 165, 250)',
        backgroundColor: 'rgba(244, 244, 244)',
      },
    ]});

  useEffect(() => {
      if(startDate && endDate){
        dateCharts();
      }
  }, [startDate, endDate])

  const formattedDate = (purchaseDate: string) => {
      const date = new Date(purchaseDate);
      return date.getDate();
  }

  const dateCharts = async() => {
      const start = new Date(startDate);
      const end = new Date(endDate)
      const response = await useAxios.get(`/expenseByDate`, { params :{ userId: user.userId, startDate: start, endDate: end}});
      const dateFormat: ExpenseChart[] = response.data.map((item: any) => ({
          ...item,
          purchaseDate: formattedDate(item.purchaseDate)
      })); 

    const labelData = dateFormat.map((item) => item.purchaseDate);
    const dataData = dateFormat.map((item) => item.expenseAmount);

    setData({labels: labelData, datasets: [{data: dataData, borderColor: 'rgba(96, 165, 250)',
    backgroundColor: 'rgba(244, 244, 244)',}]})

  }

  return (
    <section className="pb-14">
      <div className="w-full mx-auto px-4 md:px-8">
        <ul className="border px-4 w-full rounded-lg md:px-8">
          <div className="flex flex-col h-96">
            <div className='flex items-center'>
              {items.map((item, id) => (
                <div key={id} className='py-4'>
                  <p className='text-sm'>{item.title}</p>
                  <h4 className="text-gray-800 mr-8 font-semibold">
                    {item.desc}
                  </h4>
                </div>
              ))}

            </div>
            <div className='flex pb-4'>
                <label className='bg-blue-400 rounded-l-lg px-4 py-2 border-gray-300 font-semibold text-white h-10'>Start</label>
                <input type="date" onChange={(e) => setStartDate(e.target.value)} className='border-t border-r border-b p-2 mr-4 border-gray-300 rounded-r-lg h-10'></input>
                <label className='bg-orange-400 rounded-l-lg px-4 py-2 border-gray-300 font-semibold text-white h-10'>End</label>
                <input type='date' onChange={(e) => setEndDate(e.target.value)} className='border-t border-r border-b p-2 border-gray-300 rounded-r-lg h-10'></input>
              </div>
            <div className="w-full h-60">
              <Line data={data} options={options} />
            </div>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default DashboardChart;
