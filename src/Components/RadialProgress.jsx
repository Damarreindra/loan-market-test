import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const RadialProgressChart = ({ value, maxValue }) => {
    const data = {
        datasets: [
            {
                data: [value, maxValue - value],
                backgroundColor: ['#17A9E2', '#E0E0E0'],
                cutout: '75%',
                borderRadius: 10,
            },
        ],
    };

    const percentage = ((value / maxValue) * 100).toFixed(0);

    return (
        <div className='flex justify-between flex-1 gap-5 flex-col items-center' >
            <h1 className="text-center font-bold md:text-xl text-lg mb-2">PINJAMAN DISETUJUI</h1>
            <div style={{ width: 180, height:180}} className='relative'> <Doughnut data={data} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="font-bold text-2xl">{percentage}%</h1>
                </div>
            </div>


            <h1 className="text-center text-base">
               {value}/{maxValue} pinjaman disetujui
            </h1>
        </div>
    );
};

export default RadialProgressChart;
