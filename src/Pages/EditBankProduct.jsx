import React from 'react'
import DashboardLayout from '../Layout/DashboardLayout'
import BackNav from '../Components/BackNav'
import BankProductEdit from '../Components/BankProductEdit'

function EditBankProduct() {
  return (
    <DashboardLayout>
        <BackNav text={"Edit Product"}/>
        <BankProductEdit/>
    </DashboardLayout>
  )
}

export default EditBankProduct