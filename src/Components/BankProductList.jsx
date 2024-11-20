import React from 'react'
import { SlMagnifier } from "react-icons/sl";
import { FaSortAlphaDown, FaPlus } from "react-icons/fa";
import { IoMdStarOutline, IoMdStar } from "react-icons/io";
import { GoGraph } from "react-icons/go";
import { IoTimeOutline, IoShieldCheckmarkOutline, IoPersonOutline } from "react-icons/io5";
import { BiTimer } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { loanProducts } from '../Utils/DummyData';

function BankProductList() {



    return (
        <div className='p-5 flex flex-col'>
            <div className='flex justify-between md:flex-row flex-col w-full gap-2'>
                <div className='relative md:w-1/3 w-full'>
                    <input type="text"
                        placeholder='Cari berdasarkan nama'
                        className='border-2 w-full border-gray-300 rounded-xl p-5 focus:outline-none '
                    />
                    <span className='absolute inset-y-0 -ml-8 mt-6'>
                        <SlMagnifier className='text-primary text-xl' />
                    </span>
                </div>
                <select className='border-2  md:w-1/4 w-full border-gray-300 rounded-xl p-5 focus:outline-none font-semibold' name="" id="">
                    <option value="kredit-kepemilikan">Kredit Kepemilikan</option>
                </select>
                <button
                    className='border-2 bg-white  md:w-1/6 w-full border-gray-300 rounded-xl p-5 focus:outline-none flex'
                >
                    <FaSortAlphaDown className='text-xl' />
                    <span className='mx-auto font-bold'>Sort</span>
                </button>
                <button
                    className='border-2 bg-primary  md:w-1/6 w-full border-gray-300 rounded-xl p-5 focus:outline-none flex text-white'
                >
                    <FaPlus className='text-xl' />
                    <span className='mx-auto font-bold'>Tambah Product</span>
                </button>
            </div>

            <div className='flex flex-col gap-5 mt-5'>
                {
                    loanProducts.map((item, index) => (
                        <div key={index}
                            className='bg-white rounded-xl p-5 flex md:flex-row flex-col items-center md:justify-between'
                        >
                            <div className='flex text-[#707A83] justify-center items-center gap-5 md:flex-row flex-col'>
                                <div className='flex flex-col justify-center items-center min-w-96 -mt-8  '>
                                    <img className='' src={item.images} alt="" />
                                    <div className='hidden gap-5 justify-center w-full items-center md:flex'>
                                        <div className='flex flex-col flex-1 justify-between items-center'>
                                            <h1>Rating:</h1>
                                            <div className='flex text-3xl'>
                                                {
                                                    Array(5).fill(0).map((_, index) => (
                                                        <h1 className='text-primary'>
                                                            {index < item.averageReview ? (
                                                                <IoMdStar />
                                                            ) : (
                                                                <IoMdStarOutline />
                                                            )
                                                            }
                                                        </h1>

                                                    ))}
                                            </div>

                                            <h1 className='font-bold text-black text-sm'>{item.reviews} Reviews</h1>
                                        </div>
                                        <span className="w-[2px] h-20 bg-gray-300 hidden md:block"></span>
                                        <div className='flex flex-col flex-1 justify-between items-center'>
                                            <h1>User:</h1>
                                            <h1 className='font-bold text-black'>{item.reviews}</h1>
                                            <h1 className='font-bold text-black text-sm'>User yearly</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col justify-center items-center md:items-start'>
                                    <div className='flex gap-2 md:text-2xl text-xl font-bold md:flex-row flex-col 
                                    items-center md:mt-0 -mt-8 justify-center md:justify-start'>
                                        <h1 className='text-bold '>{item.bank}</h1>
                                        <h1 className='text-primary text-bold'>{item.product}</h1>
                                    </div>
                                    <div className='flex md:gap-10 mt-3 flex-col md:flex-row gap-3 md:p-0 p-8 md:text-base text-sm'>
                                        <div className='flex flex-col gap-3 min-w-72'>
                                            <div className='flex items-center '>
                                                <GoGraph className='md:text-3xl text-xl mr-3' />
                                                <h1>Fix Rate (Year): <span>{item.fixRate}</span></h1>

                                            </div>
                                            <div className='flex items-center '>
                                                <BiTimer className='md:text-3xl text-xl mr-3' />
                                                <h1>Max Tenor: <span>{item.maxTenor}</span>
                                                </h1>
                                            </div>
                                            <div className='flex items-center '>
                                                <IoTimeOutline className='md:text-3xl text-xl mr-3' />
                                                <h1>Loan to Value (Year):  <span>{item.loanToValue}</span></h1>

                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <div className='flex items-center'>
                                                <IoShieldCheckmarkOutline className='md:text-3xl text-xl mr-3' />
                                                <h1>Jaminan: <span>{item.collateral.join(", ")}</span></h1>

                                            </div>
                                            <div className='flex items-center '>
                                                <IoPersonOutline className='md:text-3xl text-xl mr-3' />
                                                <h1>Target:  <span>{item.target.join(", ")}</span></h1>

                                            </div>
                                            <div className='flex items-center '>
                                                <BiTimer className='md:text-3xl text-xl mr-3' />
                                                <h1>Komisi:  <span>{item.commission}</span></h1>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className='flex gap-5 justify-center w-full items-center md:hidden mb-5'>
                                        <div className='flex flex-col flex-1 justify-between items-center'>
                                            <h1>Rating:</h1>
                                            <div className='flex text-xl'>
                                                {
                                                    Array(5).fill(0).map((_, index) => (
                                                        <h1 className='text-primary'>
                                                            {index < item.averageReview ? (
                                                                <IoMdStar />
                                                            ) : (
                                                                <IoMdStarOutline />
                                                            )
                                                            }
                                                        </h1>

                                                    ))}
                                            </div>

                                            <h1 className='font-bold text-black text-sm'>{item.reviews} Reviews</h1>
                                        </div>
                                        <span className="w-[2px] h-20 bg-gray-300 hidden md:block"></span>
                                        <div className='flex flex-col flex-1 justify-between items-center'>
                                            <h1>User:</h1>
                                            <h1 className='font-bold text-black'>{item.reviews}</h1>
                                            <h1 className='font-bold text-black text-sm'>User yearly</h1>
                                        </div>
                                    </div>
                            <Link to={`${item.slug}/detail`}>
                                <button className='text-primary rounded-md px-5 py-3 flex justify-center text-xl items-center border border-gray-300 border-b-4 font-semibold shadow-lg'>Detail</button>

                            </Link>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default BankProductList