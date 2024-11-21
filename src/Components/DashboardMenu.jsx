import React from 'react'
import { AiOutlineBank } from 'react-icons/ai';
import { BsBag } from 'react-icons/bs';
import { CiFileOn } from 'react-icons/ci';
import { MdOutlineContactPhone } from 'react-icons/md';

function DashboardMenu() {
     const menu = [

        { name: "Contact", icon: <MdOutlineContactPhone/>, qty: 51 },
        { name: "Loan", icon: <CiFileOn />, qty: 56 },
        { name: "Product", icon: <BsBag />, qty: 80 },
        { name: "Bank", icon: <AiOutlineBank />, qty: 30 },
    
    ];
  return (
    <>
    {
        menu.map((item) => {
            return (
                <div className='flex flex-col md:flex-row bg-white rounded-xl items-center justify-between col-span-3 md:col-span-1 gap-5 p-3 xl:justify-normal'>
                    <div className='text-primary text-base md:text-xl xl:text-base bg-blue-200 p-1 md:p-3 flex justify-center items-center rounded-full'>
                        {item.icon}
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <span className='text-black font-bold text-lg md:text-xl xl:text-base'>{item.name.toUpperCase()}</span>
                        <span className='text-primary font-bold text-center text-lg md:text-xl xl:text-base'>{item.qty}</span>

                    </div>
                </div>
            )
        })
    }
    </>
  )
}

export default DashboardMenu