import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { loanProducts } from '../Utils/DummyData';
import { FaRegSave } from "react-icons/fa";

function BankProductEdit() {
    const { slug } = useParams();
    const [promo, setPromo] = useState(false)
    const product = loanProducts.find((item) => item.slug === slug);
    const banks = [...new Set(loanProducts.map((item) => item.bank))].map(name => ({ name }));
    const products = [...new Set(loanProducts.map((item) => item.product))].map(name => ({ name }));
    return (
        <section className='p-10'>
            <div className='bg-white rounded-lg p-10 flex flex-col md:flex-row md:gap-16 gap-3 md:text-xl'>
                <div className='w-full flex-1 flex flex-col gap-3'>
                    <div className='flex flex-col gap-3 justify-start items-start'>
                        <label className='w-40 font-bold ' htmlFor="">Bank</label>
                        <select type="text" className='rounded p-3 border border-gray-300 w-full '

                        >
                            <option value="" defaultValue>{product.bank}</option>
                            {
                                banks.map((item, index) => (
                                    <option value="" key={index}>{item.name}</option>

                                ))

                            }

                        </select>
                    </div>
                    <div className='flex items-start flex-col gap-3 justify-start'>
                        <label className='w-40 font-bold ' htmlFor="">Nama Product</label>
                        <select type="text" className='rounded p-3 border border-gray-300 w-full '

                        >
                            <option value="" defaultValue>{product.product}</option>

                            {
                                products.map((item, index) => (
                                    <option value="" key={index}>{item.name}</option>
                                ))
                            }

                        </select>
                    </div>
                    <div>
                        <div className='flex gap-3 w-full'>
                            <input type="checkbox" name="" onChange={() => setPromo(prevPromo => !prevPromo)} id="" />
                            <label className='font-bold ' htmlFor="">Promotional Product</label>
                        </div>

                        <div className='flex md:gap-10 gap-2 md:items-center md:w-full flex-col md:flex-row'>
                            <div className='flex flex-col md:w-full'>
                                <label className='font-bold ' htmlFor="">Mulai Promo</label>
                                <input type="date" name="" className='border border-gray-300 p-3 rounded-lg read-only:bg-gray-200' id="" readOnly={!promo} />
                            </div>
                            <div className='flex flex-col md:w-full'>
                                <label className='font-bold ' htmlFor="">Akhir Promo</label>
                                <input type="date" name="" className='border border-gray-300 p-3 rounded-lg read-only:bg-gray-200' id="" readOnly={!promo} />
                            </div>
                        </div>


                    </div>
                    <div>
                        <label className='font-bold ' htmlFor="">Jaminan</label>
                        <div className='flex gap-12'>
                            <div className='w-52'>
                                <div className='flex gap-3'>
                                    <input type="checkbox" name="" id=""
                                        defaultChecked={product.collateral.includes('Ruko')}
                                    />
                                    <label className='md:font-base text-sm md:text-xl' htmlFor="">Ruko</label>

                                </div>
                                <div className='flex gap-3'>
                                    <input type="checkbox" name="" id=""
                                        defaultChecked={product.collateral.includes('Rumah')}
                                    />
                                    <label className='md:font-base text-sm md:text-xl' htmlFor="">Rumah</label>
                                </div>
                                <div className='flex gap-3'>
                                    <input type="checkbox" name="" id=""
                                        defaultChecked={product.collateral.includes('Kendaraan Pribadi')}
                                    />
                                    <label className='md:font-base text-sm md:text-xl ' htmlFor="">Kendaraan Pribadi</label>
                                </div>
                                <div className='flex gap-3'>
                                    <input type="checkbox" name="" id=""
                                        defaultChecked={product.collateral.includes('Slip Gaji')}
                                    />
                                    <label className='md:font-base text-sm md:text-xl' htmlFor="">Slip Gaji</label>
                                </div>
                            </div>
                            <div>
                                <div className='flex gap-3'>
                                    <input type="checkbox" name="" id=""
                                        defaultChecked={product.collateral.includes('Rukan')}
                                    />
                                    <label className='md:font-base text-sm md:text-xl' htmlFor="">Rukan</label>
                                </div>
                                <div className='flex gap-3'>
                                    <input type="checkbox" name="" id=""
                                        defaultChecked={product.collateral.includes('Apartemen')} />
                                    <label className='md:font-base text-sm md:text-xl' htmlFor="">Apartemen</label>
                                </div>
                                <div className='flex gap-3'>
                                    <input type="checkbox" name="" id=""
                                        defaultChecked={product.collateral.includes('Sertifikat Perusahaan')}
                                    />
                                    <label className='md:font-base text-sm md:text-xl' htmlFor="">Sertifikat Perusahaan</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className='font-bold ' htmlFor="">Target Market</label>
                        <div className='flex gap-12 text-sm md:text-xl'>
                            <div className='w-52'>
                                <div className='flex gap-3'>
                                    <input type="checkbox" name="" id=""
                                        defaultChecked={product.target.includes('Pengusaha')}
                                    />
                                    <label className='font-base ' htmlFor="">Pengusaha</label>
                                </div>
                                <div className='flex gap-3'>
                                    <input type="checkbox" name="" id=""
                                        defaultChecked={product.target.includes('Profesional')} />
                                    <label className='font-base ' htmlFor="">Profesional</label>
                                </div>
                                <div className='flex gap-3'>
                                    <input type="checkbox" name="" id=""
                                        defaultChecked={product.target.includes('ASN')} />

                                    <label className='font-base ' htmlFor="">ASN</label>
                                </div>
                                <div className='flex gap-3'>
                                    <input type="checkbox" name="" id=""
                                        defaultChecked={product.target.includes('Profesional')}
                                    />

                                    <label className='font-base ' htmlFor="">TNI</label>
                                </div>
                            </div>
                            <div>
                                <div className='flex gap-3'>
                                    <input type="checkbox" name="" id=""
                                        defaultChecked={product.target.includes('Karyawan')}

                                    />
                                    <label className='font-base ' htmlFor="">Karyawan</label>
                                </div>
                                <div className='flex gap-3'>
                                    <input type="checkbox" name="" id=""
                                        defaultChecked={product.target.includes('Milenial')}

                                    />
                                    <label className='font-base ' htmlFor="">Milenial</label>
                                </div>
                                <div className='flex gap-3'>
                                    <input type="checkbox" name="" id=""
                                        defaultChecked={product.target.includes('POLRI')}
                                    />
                                    <label className='font-base ' htmlFor="">POLRI</label>
                                </div>
                                <div className='flex gap-3'>
                                    <input type="checkbox" name="" id=""
                                        defaultChecked={product.target.includes(product.target)}
                                    />
                                    <label className='font-base ' htmlFor="">Lainnya</label>
                                </div>


                            </div>
                        </div>
                        <div className='flex flex-col mt-3 gap-3 justify-start items-start'>
                            <label className='w-40 font-bold ' htmlFor="">Komisi</label>
                            <div className='relative w-full'>
                                <input
                                    id="komisi"
                                    type="text"
                                    className='rounded p-3 border border-gray-300 w-full pr-10'
                                    value={product.commission}
                                />
                                <span className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'>%</span>
                            </div>
                        </div>
                        <div className='flex flex-col mt-3 gap-3 justify-start items-start'>
                            <label className='w-40 font-bold ' htmlFor="">Appraisal</label>
                            <div className='relative w-full'>
                                <input
                                    id="appraisal"
                                    type="text"
                                    className='rounded p-3 border border-gray-300 w-full pr-10'
                                    value={product.appraisal}
                                />
                                <span className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'>%</span>
                            </div>
                        </div>
                        <div className='flex flex-col mt-3 gap-3 justify-start items-start'>
                            <label className='w-40 font-bold' htmlFor="floating">Floating</label>
                            <div className='relative w-full'>
                                <input
                                    id="floating"
                                    type="text"
                                    className='rounded p-3 border border-gray-300 w-full pr-10'
                                    value={product.floating}
                                />
                                <span className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'>%</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-full flex-1 flex flex-col gap-3'>



                    <div className='flex flex-col  gap-3 justify-start items-start'>
                        <label className='w-40 font-bold ' htmlFor="">Loan to Value</label>
                        <div className='relative w-full'>
                                <input
                                    id="loanToValue"
                                    type="text"
                                    className='rounded p-3 border border-gray-300 w-full pr-10'
                                    value={product.loanToValue}
                                />
                                <span className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'>%</span>
                            </div>
                    </div>
                    <div className='flex flex-col gap-3 justify-start items-start'>
                        <label className='w-40 font-bold ' htmlFor="">Penalty Fee</label>
                        <div className='relative w-full'>
                                <input
                                    id="penaltyfee"
                                    type="text"
                                    className='rounded p-3 border border-gray-300 w-full pr-10'
                                    value={product.penaltyFee === "-" ? 0 : product.penaltyFee}
                                />
                                <span className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'>%</span>
                            </div>
                    </div>
                    <div className='flex flex-col gap-3 justify-start items-start'>
                        <label className='w-40 font-bold ' htmlFor="">Interest Rate</label>
                        <div className='relative w-full'>
                                <input
                                    id="interestRate"
                                    type="text"
                                    className='rounded p-3 border border-gray-300 w-full pr-10'
                                    value={product.interestRate}
                                />
                                <span className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'>%</span>
                            </div>
                    </div>
                    <div className='flex flex-col gap-3 justify-start items-start'>
                        <label className='w-40 font-bold ' htmlFor="">Fix Rate</label>
                        <div className='relative w-full'>
                                <input
                                    id="fixRate"
                                    type="text"
                                    className='rounded p-3 border border-gray-300 w-full pr-10'
                                    value={product.fixRate}
                                />
                                <span className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'>%</span>
                            </div>
                    </div>
                    <div className='flex flex-col gap-3 justify-start items-start'>
                        <label className='font-bold ' htmlFor="">Fix Rate (Year)</label>
                        <input type="text" className='rounded p-3 border border-gray-300 w-full'
                        value={product.fixRateYear}
                        />
                    </div>
                    <div className='flex flex-col gap-3 justify-start items-start'>
                        <label className=' font-bold ' htmlFor="">Max Tenor (Year)</label>
                        <input type="text" className='rounded p-3 border border-gray-300 w-full'
                         value={product.maxTenor}
                        />
                    </div>
                    <div className='flex flex-col gap-3 justify-start items-start'>
                        <label className='font-bold ' htmlFor="">Keterangan</label>
                        <textarea className='rounded p-3 border border-gray-300 w-full' name="" id="">{product.keterangan}</textarea>
                    </div>
                    <div className='flex flex-col gap-3 justify-start items-start'>
                        <label className='w-40 font-bold ' htmlFor="">URL</label>
                        <input type="text" className='rounded p-3 border border-gray-300 w-full'
                         value={product.url || "-"}
                        />
                    </div>
                    <button className='p-3 rounded-lg bg-[#005274] flex justify-center items-center text-white font-bold gap-3 mt-3'><FaRegSave /> UPDATE</button>
                </div>

            </div>
        </section>
    );
}

export default BankProductEdit;
