
import './App.css';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

export const data = {
  labels,
  datasets: [
    {//план
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'green'
    },
    {//факт
      label: '# of Votes',
      data: [4, 9, 3, 5, 2, 3],
      backgroundColor: 'red'
    },
    
   
  ],
};
export default function App() {
  return <Bar options={options} data={data} />;
}
