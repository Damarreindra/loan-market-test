import React, { useState } from 'react';
import DashboardLayout from '../Layout/DashboardLayout';
import Stepper from '../Components/Stepper';
import ProductList from '../Components/ProductList';

const EditApplication = () => {
 
  return (
    <DashboardLayout>
      {/* <div >
       <Stepper />
       </div> */}

       <ProductList/>
    </DashboardLayout>
  );
};

export default EditApplication;
