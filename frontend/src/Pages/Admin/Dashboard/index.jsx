import React from 'react'
import Charts from './Charts'
import { Paper } from '@mui/material'
import './style.css'
export default function Dashboard() {
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
                            <h3 className="mb-1 text-[#171717] font-bold text-2xl"><span>$82,373.21</span></h3>
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
                            <h3 className="mb-1 text-[#171717] font-bold text-2xl"><span>$82,373.21</span></h3>
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
                            <h3 className="mb-1 text-[#171717] font-bold text-2xl"><span>$82,373.21</span></h3>
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
                      <button className="button ring-primary hover:border-primary hover:text-primary button-press-feedback h-10 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-600 hover:ring-1 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 dark:ring-white dark:hover:border-white dark:hover:bg-transparent dark:hover:text-white">View all</button>
                    </div>
                    <div className="mt-5 text-black">
                      <div className="mb-2 flex items-center justify-between py-2 dark:border-gray-600">
                        <div className="flex items-center gap-2">
                          <span className="avatar avatar-round bg-white" style={{width: "50px", height: "50px", minWidth: "50px", lineHeight: "50px", fontSize: "12px"}}><img className="avatar-img avatar-round" src="https://ecme-react.themenate.net/img/products/product-7.jpg" loading="lazy" /></span>
                          <div>
                            <div className="heading-text font-bold">Maneki Neko Poster</div>
                            <div>Sold: 1249</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-success bg-success-subtle flex items-center rounded-lg px-2 py-0.5 font-bold"><span>+</span><span>15.2%</span></span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-between py-2 dark:border-gray-600">
                        <div className="flex items-center gap-2">
                          <span className="avatar avatar-round bg-white" style={{width: "50px", height: "50px", minWidth: "50px", lineHeight: "50px", fontSize: "12px"}}><img className="avatar-img avatar-round" src="https://ecme-react.themenate.net/img/products/product-7.jpg" loading="lazy" /></span>
                          <div>
                            <div className="heading-text font-bold">Echoes Necklace</div>
                            <div>Sold: 1145</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-success bg-success-subtle flex items-center rounded-lg px-2 py-0.5 font-bold"><span>+</span><span>13.9%</span></span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-between py-2 dark:border-gray-600">
                        <div className="flex items-center gap-2">
                          <span className="avatar avatar-round bg-white" style={{width: "50px", height: "50px", minWidth: "50px", lineHeight: "50px", fontSize: "12px"}}><img className="avatar-img avatar-round" src="https://ecme-react.themenate.net/img/products/product-7.jpg" loading="lazy" /></span>
                          <div>
                            <div className="heading-text font-bold">Spiky Ring</div>
                            <div>Sold: 1073</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-success bg-success-subtle flex items-center rounded-lg px-2 py-0.5 font-bold"><span>+</span><span>9.5%</span></span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-between py-2 dark:border-gray-600">
                        <div className="flex items-center gap-2">
                          <span className="avatar avatar-round bg-white" style={{width: "50px", height: "50px", minWidth: "50px", lineHeight: "50px", fontSize: "12px"}}><img className="avatar-img avatar-round" src="https://ecme-react.themenate.net/img/products/product-7.jpg" loading="lazy" /></span>
                          <div>
                            <div className="heading-text font-bold">Pastel Petals Poster</div>
                            <div>Sold: 1022</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-success bg-success-subtle flex items-center rounded-lg px-2 py-0.5 font-bold"><span>+</span><span>2.3%</span></span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-between py-2 dark:border-gray-600">
                        <div className="flex items-center gap-2">
                          <span className="avatar avatar-round bg-white" style={{width: "50px", height: "50px", minWidth: "50px", lineHeight: "50px", fontSize: "12px"}}><img className="avatar-img avatar-round" src="https://ecme-react.themenate.net/img/products/product-7.jpg" loading="lazy" /></span>
                          <div>
                            <div className="heading-text font-bold">Il Limone</div>
                            <div>Sold: 992</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-error bg-error-subtle flex items-center rounded-lg px-2 py-0.5 font-bold"><span></span><span>-0.7%</span></span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 dark:border-gray-600">
                        <div className="flex items-center gap-2">
                          <span className="avatar avatar-round bg-white" style={{width: "50px", height: "50px", minWidth: "50px", lineHeight: "50px", fontSize: "12px"}}><img className="avatar-img avatar-round" src="https://ecme-react.themenate.net/img/products/product-7.jpg" loading="lazy" /></span>
                          <div>
                            <div className="heading-text font-bold">Ringed Earring</div>
                            <div>Sold: 1201</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-error bg-error-subtle flex items-center rounded-lg px-2 py-0.5 font-bold"><span></span><span>-1.1%</span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      {/* <Paper elevation={3}>
        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-[#222] text-white">
          <div class="container px-6 py-8 mx-auto">
            <h3 class="text-3xl font-medium">Dashboard</h3>

            <div class="mt-4">
              <div class="flex flex-wrap -mx-6">
                <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
                  <Paper elevation={3} >
                    <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                      <div class="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
                        <svg class="w-8 h-8 text-white" viewBox="0 0 28 30" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                            fill="currentColor"></path>
                          <path
                            d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                            fill="currentColor"></path>
                          <path
                            d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                            fill="currentColor"></path>
                          <path
                            d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                            fill="currentColor"></path>
                          <path
                            d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                            fill="currentColor"></path>
                          <path
                            d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                            fill="currentColor"></path>
                        </svg>
                      </div>

                      <div class="mx-5">
                        <h4 class="text-2xl font-semibold text-gray-700">8,282</h4>
                        <div class="text-gray-500">New Users</div>
                      </div>
                    </div>
                  </Paper>
                </div>

                <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                  <Paper elevation={3} >
                    <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                      <div class="p-3 bg-orange-600 bg-opacity-75 rounded-full">
                        <svg class="w-8 h-8 text-white" viewBox="0 0 28 28" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z"
                            fill="currentColor"></path>
                          <path
                            d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z"
                            fill="currentColor"></path>
                          <path
                            d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z"
                            fill="currentColor"></path>
                        </svg>
                      </div>

                      <div class="mx-5">
                        <h4 class="text-2xl font-semibold text-gray-700">200,521</h4>
                        <div class="text-gray-500">Total Orders</div>
                      </div>
                    </div>
                  </Paper>
                </div>

                <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                  <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                    <div class="p-3 bg-pink-600 bg-opacity-75 rounded-full">
                      <svg class="w-8 h-8 text-white" viewBox="0 0 28 28" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z" fill="currentColor"
                          stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path>
                        <path
                          d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z"
                          stroke="currentColor" stroke-width="2"></path>
                      </svg>
                    </div>

                    <div class="mx-5">
                      <h4 class="text-2xl font-semibold text-gray-700">215,542</h4>
                      <div class="text-gray-500">Available Products</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col mt-8">
              <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">

                <Charts />
              </div>
            </div>
          </div>
        </main>
      </Paper> */}
    </>
  )
}
