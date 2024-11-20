import React from 'react';
import { useParams } from 'react-router-dom';
import { loanProducts } from '../Utils/DummyData';

function BankProductDetail() {
 

const {slug} = useParams();

const product = loanProducts.find((item)=>item.slug === slug);

  return (
    <section className='p-10'>
      <div className='bg-white rounded-lg p-10 flex flex-col gap-3 text-xl'>
        <div className='flex md:flex-row flex-col justify-start md:justify-between  md:items-center gap-3 '>
          <label className='w-40 font-bold ' htmlFor="">Bank</label>
          <input type="text" className='rounded p-3 border border-gray-300 w-full read-only:bg-gray-300' readOnly
            value={product.bank}
          />
        </div> 
        <div className='flex md:flex-row flex-col justify-start md:justify-between  md:items-center gap-3 '>
          <label className='w-40 font-bold ' htmlFor="">Nama Product</label>
          <input type="text" className='rounded p-3 border border-gray-300 w-full read-only:bg-gray-300' readOnly 
                      value={product.product}

          />
        </div> 
        <div className='flex md:flex-row flex-col justify-start md:justify-between  md:items-center gap-3 '>
          <label className='w-40 font-bold ' htmlFor="">Jaminan</label>
          <input type="text" className='rounded p-3 border border-gray-300 w-full read-only:bg-gray-300' readOnly
                      value={product.collateral.join(", ")}

          />
        </div> 
        <div className='flex md:flex-row flex-col justify-start md:justify-between  md:items-center gap-3 '>
          <label className='w-40 font-bold ' htmlFor="">Target Market</label>
          <input type="text" className='rounded p-3 border border-gray-300 w-full read-only:bg-gray-300' readOnly
                      value={product.target.join(", ")}

          />
        </div> 
        <div className='flex md:flex-row flex-col justify-start md:justify-between  md:items-center gap-3 '>
          <label className='w-40 font-bold ' htmlFor="">Komisi</label>
          <input type="text" className='rounded p-3 border border-gray-300 w-full read-only:bg-gray-300' readOnly 
                                  value={product.commission+" %"}

          />
        </div> 
        <div className='flex md:flex-row flex-col justify-start md:justify-between  md:items-center gap-3 '>
          <label className='w-40 font-bold' htmlFor="">Appraisal</label>
          <input type="text" className='rounded p-3 border border-gray-300 w-full read-only:bg-gray-300' readOnly 
                                            value={product.appraisal+" %"}

          />
        </div> 
        <div className='flex md:flex-row flex-col justify-start md:justify-between  md:items-center gap-3 '>
          <label className='w-40 font-bold' htmlFor="">Floating</label>
          <input type="text" className='rounded p-3 border border-gray-300 w-full read-only:bg-gray-300' readOnly
              value={product.floating+" %"}/>
        </div> 
        <div className='flex md:flex-row flex-col justify-start md:justify-between  md:items-center gap-3 '>
          <label className='w-40 font-bold' htmlFor="">Loan to Value</label>
          <input type="text" className='rounded p-3 border border-gray-300 w-full read-only:bg-gray-300' readOnly
              value={product.loanToValue+" %"}
          />
        </div> 
        <div className='flex md:flex-row flex-col justify-start md:justify-between  md:items-center gap-3 '>
          <label className='w-40 font-bold' htmlFor="">Penalty Fee</label>
          <input type="text" className='rounded p-3 border border-gray-300 w-full read-only:bg-gray-300' readOnly
              value={product.penaltyFee}
          
          />
        </div> 
        <div className='flex md:flex-row flex-col justify-start md:justify-between  md:items-center gap-3 '>
          <label className='w-40 font-bold' htmlFor="">Interest Rate</label>
          <input type="text" className='rounded p-3 border border-gray-300 w-full read-only:bg-gray-300' readOnly
              value={product.interestRate+" %"}
          
          />
        </div> 
        <div className='flex md:flex-row flex-col justify-start md:justify-between  md:items-center gap-3 '>
          <label className='w-40 font-bold' htmlFor="">Fix Rate %</label>
          <input type="text" className='rounded p-3 border border-gray-300 w-full read-only:bg-gray-300' readOnly
              value={product.fixRate+" %"}
          
          />
        </div> 
        <div className='flex md:flex-row flex-col justify-start md:justify-between  md:items-center gap-3 '>
          <label className='w-40 font-bold' htmlFor="">Fix Rate (year)</label>
          <input type="text" className='rounded p-3 border border-gray-300 w-full read-only:bg-gray-300' readOnly 
              value={product.fixRateYear}
          
          />
        </div> 
        <div className='flex md:flex-row flex-col justify-start md:justify-between  md:items-center gap-3 '>
          <label className='w-40 font-bold' htmlFor="">Max Tenor (year)</label>
          <input type="text" className='rounded p-3 border border-gray-300 w-full read-only:bg-gray-300' readOnly
              value={product.maxTenor}
          
          />
        </div> 
        <div className='flex md:flex-row flex-col justify-start md:justify-between  md:items-center gap-3 '>
          <label className='w-40 font-bold' htmlFor="">Keterangan</label>
         
          <textarea name="" id=""
          className='rounded p-3 border border-gray-300 w-full read-only:bg-gray-300' readOnly
         
      
          > {product.keterangan}</textarea>
        </div> 
        <div className='flex md:flex-row flex-col justify-start md:justify-between  md:items-center gap-3 '>
          <label className='w-40 font-bold' htmlFor="">URL</label>
          <input type="text" className='rounded p-3 border border-gray-300 w-full read-only:bg-gray-300' readOnly
              value={product.url || "-"}
          
          />
        </div> 
      </div>
    </section>
  );
}

export default BankProductDetail;
