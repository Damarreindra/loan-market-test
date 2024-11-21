import React from 'react'
import { FaSortAlphaDown } from 'react-icons/fa'
import { SlMagnifier } from 'react-icons/sl'
import { loanProducts } from '../Utils/DummyData'
import { IoMdStar, IoMdStarOutline } from 'react-icons/io'

function ProductList() {
    return (
        <div className='p-10'>
            <div className='flex flex-col items-center '>
                <h1 className='font-bold md:text-3xl text-xl'>
                    Pilihan Produk & Bank
                </h1>
                <h3 className='text-gray-400 font-semibold md:text-xl text-lg'>Silahkan pilih produk bank yang sesuai</h3>
            </div>
            <div className='bg-white rounded p-10 mt-5 flex flex-col gap-3 flex-1'>
                <div className='flex gap-2 md:flex-row flex-col'>
                <div className='relative w-full'>
                    <input type="text"
                        placeholder='Cari berdasarkan nama'
                        className='border-2 w-full border-gray-300 rounded-xl md:p-5 p-2 focus:outline-none '
                    />
                    <span className='absolute inset-y-0 -ml-8 md:mt-6 mt-3'>
                        <SlMagnifier className='text-primary text-xl' />
                    </span>
                </div>
                <button
                    className='border-2 bg-white  md:w-1/6 w-full border-gray-300 rounded-xl md:p-5 p-2 focus:outline-none flex'
                >
                    <FaSortAlphaDown className='text-xl' />
                    <span className='mx-auto font-bold'>Sort</span>
                </button>
                </div>
                <div className='flex gap-3  items-center '>
                    <input cl type="checkbox" name="" id="" className='w-4 h-4 '/>
                    <label htmlFor="" className='font-semibold md:text-lg sm:text-sm'>Send to Pool (Pilih opsi ini jika Anda ingin mengirim leads ke semua bank rekanan Loan Market) </label>
                    <button className='p-1 rounded-full bg-primary h-6 w-6 flex items-center justify-center text-white font-bold'>?</button>
                </div>
                <div className='grid grid-cols-4 gap-8'>
                    {
                        loanProducts.map((item, index)=>(
                            <div className='rounded-xl shadow border border-gray-200 flex gap-4 justify-center flex-col p-5 relative md:col-span-1 xl:col-span-2 col-span-4'>
                                <img className='w-1/2 mx-auto' src={item.images} alt="" />
                                <div className='flex flex-col justify-center items-center'>
                                    <div className='flex'>
                                {
                                    Array(5).fill(0).map((_,index)=>(
                                      <h1 className='md:text-3xl text-xl'>
                                        {
                                            index < item.averageReview ? (
                                                <IoMdStar className='text-yellow-300'/>
                                            ) :    <IoMdStarOutline className='text-gray-300'/>
                                        }
                                      </h1>
                                    ))
                                }
                                </div>
                                <span className='font-bold md:text-base text-sm'>{item.reviews} Reviews</span>
                                </div>
                                <div className='min-h-44 flex flex-col gap-5'>
                                <span className='font-bold text-primary md:text-xl text-lg'>{item.product}</span>
                                <span className='md:text-lg text-sm'>{item.keterangan}</span>
                                </div>
                                <input   className="absolute top-8 w-6 h-6 " 
 type="checkbox" name="" value={item.slug} id="" />
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default ProductList