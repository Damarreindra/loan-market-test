import React, { useState } from 'react'
import DashboardLayout from '../Layout/DashboardLayout'
import BankProductMenu from '../Components/BankProductMenu'
import BankProductList from '../Components/BankProductList'
import UnderConstruction from '../Components/UnderConstruction'

function BankProduct() {
  const [active, setActive] = useState("bank")
  return (
    <DashboardLayout>
      <div className="flex justify-center bg-white p-3  border-b border-gray-300 ">
        <button
          className={`px-6 py-2 md:text-2xl text-xl font-medium ${
            active === 'bank' ? 'text-blue-500 border-b-4 border-blue-500' : 'text-black'
          }`}
          onClick={() => setActive('bank')}
        >
          Bank
        </button>
        <button
          className={`px-6 py-2  md:text-2xl text-xl font-medium ${
            active === 'dev' ? 'text-blue-500 border-b-4 border-blue-500' : 'text-black'
          }`}
          onClick={() => setActive('dev')}
        >
          Developer
        </button>
      </div>
      {
        active === "bank" ? (
          <>
          <BankProductMenu/>
          <BankProductList/>
          </>
        ) : (
          <UnderConstruction/>
        )
      }
     

    </DashboardLayout>
  )
}

export default BankProduct