import React from 'react'
import { PiPiggyBank } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa6";
import { MdOutlinePerson3 } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";

const menu = [
  {name:'KPR dan Multiguna', icon:<IoHomeOutline/>},
  {name:'Refinancing', icon:<MdOutlinePerson3/>},
  {name:'Kredit Modal Usaha dan Investasi', icon:<FaRegCreditCard/>},
  {name:'Deposito', icon:<PiPiggyBank/>},
  {name:'Take Over dan Bridging Loan', icon:<FaRegBuilding/>},
]

function BankProductMenu() {
  return (
    <div className='grid grid-cols-5 md:gap-12 gap-3 p-5'>
      {
        menu.map((item)=>{
          return(
            <div className='bg-white rounded-xl flex text-center justify-center items-center gap-2 flex-col md:col-span-1 col-span-6 p-5'>
              <span className='text-gray-400  text-2xl md:text-5xl xl:text-2xl'>{item.icon}</span>
              <span className='text-gray-400 text-sm md:text-xl xl:text-lg'>{item.name}</span>

            </div>
          )
        })
      }

    </div>
  )
}

export default BankProductMenu