import React from 'react'
import DashboardLayout from '../Layout/DashboardLayout'
import BackNav from '../Components/BackNav'
import { FaRegEdit,FaRegTrashAlt  } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import BankProductDetail from '../Components/BankProductDetail';

function DetailBankProduct() {
    const {slug} = useParams()
    
    return (
        <DashboardLayout>
            <BackNav text={"Bank Product Detail"}
                children={<div className='flex gap-5'>
                   <Link to={`/dashboard/product/bank-product/${slug}/edit`}>
                    <button className="bg-[#005274] text-white p-2 rounded text-sm md:text-base flex items-center justify-center gap-3"><FaRegEdit/>Edit Product</button></Link> 
                    <button className="bg-red-500 text-white p-2 rounded text-sm md:text-base flex items-center justify-center gap-3"><FaRegTrashAlt/> Delete Product</button>
                    </div>
                }
            />
            <BankProductDetail/>
        </DashboardLayout>
    )
}

export default DetailBankProduct