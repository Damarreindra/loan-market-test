import React from 'react'
import { AiOutlineBank } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
import { CiFileOn } from 'react-icons/ci'
import { MdOutlineContactPhone } from 'react-icons/md'
import Chart from 'chart.js/auto';
import RadialProgressChart from './RadialProgress'
import RadialTargetChart from './RadialTarget'
import { FaRegEdit } from "react-icons/fa";
import TopBanksChart from './TopBanksChart'
import NotificationTimeline from './NotificationTimeline'

function MainDashboard() {

    const menu = [

        { name: "Contact", icon: <MdOutlineContactPhone />, qty: 51 },
        { name: "Loan", icon: <CiFileOn />, qty: 56 },
        { name: "Product", icon: <BsBag />, qty: 80 },
        { name: "Bank", icon: <AiOutlineBank />, qty: 30 },

    ]
    return (
        <div className='p-10 grid grid-cols-6 md:grid-rows-8 gap-12 font-inter overflow-hidden'>
            {
                menu.map((item) => {
                    return (
                        <div className='flex flex-col md:flex-row bg-white rounded-xl items-center col-span-3 md:col-span-1 gap-5 p-5'>
                            <div className='text-primary text-lg md:text-2xl bg-blue-200 p-1 md:p-5 flex justify-center items-center rounded-full'>
                                {item.icon}
                            </div>
                            <div className='flex flex-col mx-auto text-[25px]'>
                                <span className='text-black font-bold text-lg md:text-2xl'>{item.name.toUpperCase()}</span>
                                <span className='text-primary font-bold text-center text-lg md:text-2xl'>{item.qty}</span>

                            </div>
                        </div>
                    )
                })
            }
            <div className='md:col-span-2 md:row-span-4 col-span-6 row-span-6 rounded-xl bg-white'>
            <NotificationTimeline/>
            </div>
            <div className='md:col-span-4 col-span-6 row-span-3 rounded-xl px-40 py-10 relative bg-white flex md:flex-row flex-col items-center justify-between'>
                <button className='text-primary font-bold text-2xl absolute md:top-5 md:right-10 right-3 top-3'><FaRegEdit /></button>
                <RadialProgressChart value={2} maxValue={5} />
                <span className="w-px h-full bg-gray-300 hidden md:block"></span>
                <RadialTargetChart value={14000000000} maxValue={5000000000} />
            </div>
            <div className='md:col-span-4 md:row-span-6 col-span-6 row-span-2 h-[700px] bg-white rounded-xl flex py-12 items-center flex-col'>
                <h1 className='font-bold  md:text-3xl text-xl w-2/3 text-center mb-5'>Top 5 Bank Approval Tertinggi</h1>
                <TopBanksChart />
            </div>
        </div>
    )
}

export default MainDashboard