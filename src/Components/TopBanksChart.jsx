import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const TopBanksChart = () => {
  const data = {
    labels: ['BRI', 'Mandiri', 'BTN', 'KEB Hana Bank', 'Artha Graha'],
    datasets: [
      {
        data: [30, 15, 20, 10, 25],
        backgroundColor: ['#5F3B7E', '#1DA1F2', '#3E92CC', '#708FB2', '#4EE9D9'],
        cutout: '70%',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#FFFFFF',
      },
    ],
  };

  

  return (
    <div  className='flex justify-center items-center h-full w-[350px] md:w-[500px]'>
      <Doughnut data={data}  />
    </div>
  );
};

export default TopBanksChart;
