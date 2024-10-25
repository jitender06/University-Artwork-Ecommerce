import React, { useEffect, useState } from 'react'
import Charts from './Charts'
import { Paper } from '@mui/material'
import './style.css'
import Tables from './Tables/Tables'
import axios from 'axios'
import { Avatar } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom';

export default function Dashboard() {
  const [TABLE_ROWS, setTABLE_ROWS] = useState()
  const fetchProductData = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/getproducts")
      console.log(data, "dataproduct5656")
      setTABLE_ROWS(data)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchProductData();
  }, [])

  console.log(TABLE_ROWS, "::TABLE_ROWS")
  return (
    <>
      <div className="page-container container relative mx-auto flex h-full flex-auto flex-col px-4 py-4 sm:px-6 sm:py-6 md:px-8" >
        <div className="container mx-auto h-full">
          <div className="flex max-w-full flex-col gap-4 overflow-x-hidden">
            <div className="flex flex-col gap-4 xl:flex-row">
              <div className="flex flex-1 flex-col gap-4 xl:col-span-3 text-black">
                <div className="card card-border" role="presentation">
                  <div className="p-[1.25rem]">
                    <div className="flex items-center justify-between">
                      <h4>Overview</h4>
                    </div>
                    <div className="mt-4 grid grid-cols-1 gap-4 rounded-2xl bg-gray-100 p-3 md:grid-cols-3 dark:bg-gray-700">
                      <button className="cursor-pointer rounded-2xl bg-white p-4 shadow-md outline-none transition duration-150 ltr:text-left rtl:text-right dark:bg-gray-900">
                        <div className="relative flex justify-between gap-2 md:flex-col-reverse 2xl:flex-row">
                          <div className='text-start'>
                            <div className="mb-4 text-sm font-semibold">Total profit</div>
                            <h3 className="mb-1 text-[#171717] font-bold text-2xl"><span>₹1,373</span></h3>
                            <div className="inline-flex flex-wrap items-center gap-1">
                              <span className="text-green-500 flex items-center font-bold"><span>+</span><span>3.4%</span></span><span>from last month</span>
                            </div>
                          </div>
                          <div className="flex max-h-12 min-h-12 min-w-12 max-w-12 items-center justify-center rounded-full bg-blue-200 text-2xl text-gray-900">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                              <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1"></path>
                              <path d="M12 7v10"></path>
                            </svg>
                          </div>
                        </div>
                      </button>
                      <button className="cursor-pointer rounded-2xl bg-white p-4 shadow-md outline-none transition duration-150 ltr:text-left rtl:text-right dark:bg-gray-900">
                        <div className="relative flex justify-between gap-2 md:flex-col-reverse 2xl:flex-row">
                          <div className='text-start'>
                            <div className="mb-4 text-sm font-semibold">Total Orders</div>
                            <h3 className="mb-1 text-[#171717] font-bold text-2xl"><span>₹2,540</span></h3>
                            <div className="inline-flex flex-wrap items-center gap-1">
                              <span className="text-green-500 flex items-center font-bold"><span>+</span><span>3.4%</span></span><span>from last month</span>
                            </div>
                          </div>
                          <div class="flex max-h-12 min-h-12 min-w-12 max-w-12 items-center justify-center rounded-full bg-green-200 text-2xl text-gray-900">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.5 21h-2.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.5 3.248"></path>
                              <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
                              <path d="M15 19l2 2l4 -4"></path>
                            </svg>
                          </div>
                        </div>
                      </button>
                      <button className="cursor-pointer rounded-2xl bg-white p-4 shadow-md outline-none transition duration-150 ltr:text-left rtl:text-right dark:bg-gray-900">
                        <div className="relative flex justify-between gap-2 md:flex-col-reverse 2xl:flex-row">
                          <div className='text-start'>
                            <div className="mb-4 text-sm font-semibold">Impression</div>
                            <h3 className="mb-1 text-[#171717] font-bold text-2xl"><span>₹12,000</span></h3>
                            <div className="inline-flex flex-wrap items-center gap-1">
                              <span className="text-green-500 flex items-center font-bold"><span>+</span><span>3.4%</span></span><span>from last month</span>
                            </div>
                          </div>
                          <div class="flex max-h-12 min-h-12 min-w-12 max-w-12 items-center justify-center rounded-full bg-purple-200 text-2xl text-gray-900">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                              <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                            </svg>
                          </div>

                        </div>
                      </button>
                    </div>
                    <Charts />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 2xl:min-w-[360px]">
                {/* right side */}
                <div className="card card-border" role="presentation">
                  <div className="card-body p-[1.25rem]">
                    <div className="mb-4 flex items-center justify-between">
                      <h4 className='text-2xl font-bold text-[#171717]'>Sales target</h4>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex flex-col">
                        <h2 className='righth2'>1.3K<span className="text-base font-bold opacity-60"> / 1.8K Units</span></h2>
                        <div className="mt-1 text-gray-500">Made this month year</div>
                      </div>
                      <div className="relative size-20">
                        <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" stroke-width="2"></circle>
                          <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-blue-500" stroke-width="2" stroke-dasharray="100" stroke-dashoffset="65" stroke-linecap="round"></circle>
                        </svg>

                        <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                          <span className="text-center text-2xl font-bold text-blue-600 dark:text-blue-500">35%</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="card card-border" role="presentation">
                  <div className="card-body p-[1.25rem]">
                    <div className="flex items-center justify-between">
                      <h4 className='text-2xl font-bold text-[#171717]'>Top product</h4>
                      <NavLink to={"/admin/products"}>
                        <button className="button ring-primary hover:border-primary hover:text-primary button-press-feedback h-10 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-600 hover:ring-1 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 dark:ring-white dark:hover:border-white dark:hover:bg-transparent dark:hover:text-white">View all</button>
                      </NavLink>
                    </div>
                    <div className="mt-5 text-black">
                      {TABLE_ROWS?.length > 0 ?
                        TABLE_ROWS?.slice(0, 6).map(({ title, description, status, price, category, createdAt, updatedAt, productImage, _id }, index) => (
                          <div key={_id} className="mb-2 flex items-center justify-between py-2 dark:border-gray-600">
                            <div className="flex items-center gap-2">
                              <Avatar src={`http://localhost:8000/${productImage?.path}`} alt={title} size="sm" />
                              <div>
                                <div className="heading-text font-bold">{title?.charAt(0).toUpperCase() + title?.slice(1)}</div>
                                <div className='max-w-16 text-sm'>
                                  {description?.charAt(0).toUpperCase() + description?.slice(0, 22) + "..."}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-success bg-success-subtle flex items-center rounded-lg px-2 py-0.5 font-bold"><span>{category?.charAt(0).toUpperCase() + category?.slice(1)}</span></span>
                            </div>
                          </div>
                        ))
                        :
                        <div className="flex item-center justify-center w-72 mt-10 flex-col mx-auto text-center">
                          <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544961.jpg" alt="no-data-found" />
                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
