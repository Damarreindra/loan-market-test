import React, { useState } from 'react';
import DashboardLayout from '../Layout/DashboardLayout';
import Stepper from '../Components/Stepper';
import ProductList from '../Components/ProductList';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";


const EditApplication = () => {
  const [currentStep, setCurrentStep] = useState(8);
  const steps = [
    'Pinjaman',
    'Pekerjaan',
    'Alamat',
    'Informasi Asset',
    'Informasi Tambahan',
    'Upload Dokumen',
    'Review',
    'Pilihan Produk & Bank',
    'Bank Officer',
    'Surat Keterangan',
    'PDF CPA',
    'Summary',
  ]; 
  const decrement =()=>{
    if(currentStep === 1){
      setCurrentStep(1)
    }else{
      setCurrentStep(currentStep-1)
    }
  }
  const increment=()=>{
    if(currentStep === steps.length){
      setCurrentStep(currentStep)
    }else{
      setCurrentStep(currentStep+1)
    }
  }
  return (
    <DashboardLayout>
    
     <Stepper  currentStep={currentStep} steps={steps} />
     <div className='w-full flex-1 px-14 flex justify-between'>
     <button className='p-2 bg-primary rounded-full text-white' onClick={decrement}><FaArrowLeft/></button>
      <button className='p-2 bg-primary rounded-full text-white' onClick={increment}><FaArrowRight/></button>
      </div>
       <ProductList/>
    </DashboardLayout>
  );
};

export default EditApplication;
