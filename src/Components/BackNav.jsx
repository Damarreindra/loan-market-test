import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


function BackNav({ text, children }) {
    const navigate = useNavigate();
    const handleBack=()=>{
        navigate(-1)
    }
    return (
    <div className='bg-white border border-gray-200 px-8 py-3 flex items-center gap-5 md:justify-between justify-center md:flex-row flex-col'>
    <div className='flex items-center gap-5'> 
      <button onClick={handleBack} className='rounded-full  bg-primary flex justify-center items-center text-white text-xl md:text-3xl p-3'><IoArrowBack /></button>
        <h1 className='md:text-3xl text-xl text-gray-500'>{text}</h1></div>
    
    <div className='flex'>
        {children}
    </div>
    </div> 



    )
}

export default BackNav
