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
        <div className='flex justify-center flex-col items-center md:mt-0 mt-5' >
            <h1 className="text-center font-bold md:text-2xl text-lg mb-2">PINJAMAN DISETUJUI</h1>
            <div style={{ width: 200, height:200}} className='relative'> <Doughnut data={data} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="font-bold text-2xl">{percentage}%</h1>
                </div>
            </div>


            <h1 className="text-center text-lg mt-2">
               {value}/{maxValue} pinjaman disetujui
            </h1>
        </div>
    );
};

export default RadialProgressChart;
