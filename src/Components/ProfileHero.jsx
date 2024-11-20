import React from 'react'
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

function ProfileHero() {
    const user = 
        {name:  "YOHANNES AFFANDY (JOJO)",
            id: "LM9990001",
            pos:"Loan Market Office Dev",
            email: "it@loanmarket.co.id",
            telp:6281234567890
        }
    
  return (
    <div className='bg-white  px-10  md:w-full flex items-center gap-5 md:py-10 py-5 font-inter '>
        <img src="../images/profile.png" className='w-[100px] h-[100px] md:w-[100px] md:h-[100px]' alt="" />
        <div className='flex flex-col gap-3'>
            <span className='font-semibold text-primary text-lg md:text-2xl'>
            {user.name}
            </span>
            <div className='flex md:gap-5 gap-2 md:flex-row flex-col'>
            <div className='text-primary md:text-xl text-sm font-semibold flex flex-col gap-2'>
                <div className='flex w-full gap-4 items-center justify-center'>
                <div className='w-8 h-8 bg-blue-200 rounded-full flex justify-center items-center'>
                    <HiOutlineBuildingOffice2/>
                </div>
                <span className='text-black'>{user.pos}</span>
                </div>
                <div className='flex w-full gap-4 items-center'>
                <div className='w-8 h-8 bg-blue-200 rounded-full flex justify-center items-center'>
                    <span className='font-semibold'>ID:</span>
                </div>
                <span className='text-black'>{user.id}</span>
                </div>
              
            </div>
            <span className="w-px h-16 bg-gray-300 hidden md:block"></span>
            <div className='text-primary md:text-xl text-sm font-semibold flex flex-col gap-2'>
                <div className='flex w-full gap-4 items-center'>
                <div className='w-8 h-8 bg-blue-200 rounded-full flex justify-center items-center'>
                    <CiMail/>
                </div>
                <span className='text-black'>{user.email}</span>
                </div>
                <div className='flex w-full gap-4 items-center'>
                <div className='w-8 h-8 bg-blue-200 rounded-full flex justify-center items-center'>
                <IoCallOutline/>
                </div>
                <span className='text-black'>{user.telp}</span>
                </div>
              
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileHero