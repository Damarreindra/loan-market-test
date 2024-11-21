import React from 'react'
import RadialProgressChart from './RadialProgress'
import RadialTargetChart from './RadialTarget'
import { FaRegEdit } from "react-icons/fa";
import TopBanksChart from './TopBanksChart'
import NotificationTimeline from './NotificationTimeline'
import DashboardMenu from './DashboardMenu'

function MainDashboard() {

   
    return (
        <div className='p-10 grid grid-cols-6 md:grid-rows-8 gap-12 font-inter overflow-hidden'>
            <DashboardMenu/>
            <div className='md:col-span-2 md:row-span-4 col-span-6 row-span-6 rounded-xl bg-white'>
            <NotificationTimeline/>
            </div>
            <div className='md:col-span-4 col-span-6  row-span-3 rounded-xl px-30 py-10 relative bg-white flex md:flex-row flex-col items-center'>
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