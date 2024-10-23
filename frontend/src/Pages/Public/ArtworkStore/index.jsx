import React, { useEffect, useState } from 'react'
import ProductDetail from './components/ProductDetail'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ArtworkStore({ cate }) {
  console.log(cate, "::cate34")

  const [allProducts, setProducts] = useState()

  let products = allProducts?.filter((item, index) => item?.category === cate);

  const fetchProductData = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/getproducts")
      setProducts(data)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchProductData();
  }, [])
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const data = urlParams.get('data');

    if (data) {
      // Store data in localStorage
      localStorage.setItem('data', data);
      navigate('/artwork'); // Redirect or update state as needed
    }
  }, [navigate]);
  return (
    <>
      <div className="bg-white dark:bg-[#222]">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {products?.length > 0 ? <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>:""}
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products?.length > 0 ?
              products?.map((product) => (
                <ProductDetail Finalproduct={product} />
              ))
              :
              <div className='col-span-full'>
                <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544961.jpg" alt="no-data-found" />
              </div>

            }
          </div>
        </div>
      </div>
    </>
  )
}
