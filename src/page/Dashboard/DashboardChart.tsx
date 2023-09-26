import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import useAxios from '../../hooks/useAxios';
import useLocalStorage from '../../hooks/useLocalStorage';
import ChatsDropDown from '../../components/ChartDropDown';

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
import ChartsTitle from '../../components/ChartTitle';
import ChartDateModal from '../../components/ChartDateModal';

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
  const [dateModal, setDateModal] = useState<boolean>(false);
  

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
              <ChartsTitle />
            </div>
            <div className='flex pb-4'>
              <ChatsDropDown dateModal={dateModal} setDateModal={setDateModal}/>
              { dateModal && <ChartDateModal onClose={() => setDateModal(false)} />}
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
