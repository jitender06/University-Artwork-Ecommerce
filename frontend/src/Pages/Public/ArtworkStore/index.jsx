import React, { useEffect, useState } from 'react';
import ProductDetail from './components/ProductDetail';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Backdrop, CircularProgress } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { toast } from 'react-toastify';

export default function ArtworkStore({ cate }) {
  const [allProducts, setProducts] = useState([]);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const fetchProductData = async () => {
    setOpen(true);
    try {
      const { data } = await axios.get("http://localhost:8000/api/getproducts");
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setOpen(false);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const data = urlParams.get('data');
    if (data) {
      localStorage.setItem('data', data);
      navigate('/painting');
    }
  }, [navigate]);

  const data = JSON.parse(localStorage.getItem('data'));
  let token = data?.accessToken;

  const handleWishlist = (product) => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const isItemInWishlist = wishlist.some(item => item._id === product._id);

    if (!token) {
      toast.error("Please log in before adding to wishlist", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (isItemInWishlist) {
      wishlist = wishlist.filter(item => item._id !== product._id);
    } else {
      wishlist.push(product);
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    setProducts(products =>
      products.map(prod =>
        prod._id === product._id ? { ...prod, isWishlisted: !isItemInWishlist } : prod
      )
    );
  };

  const products = allProducts?.filter((item) => item?.category === cate);

  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="bg-white dark:bg-[#222]">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {products?.length > 0 && (
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2>
          )}
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products?.length > 0 ? (
              products?.map((product) => {
                const isWishlisted = JSON.parse(localStorage.getItem('wishlist'))?.some(item => item._id === product._id);
                return (
                  <div key={product._id} className="flex flex-col relative">
                    <ProductDetail Finalproduct={product} cate={cate} />
                    <div
                      className="absolute top-5 p-2 bg-[#222] rounded-full cursor-pointer"
                      onClick={() => handleWishlist(product)}
                    >
                      {isWishlisted ? (
                        <FavoriteIcon sx={{ color: "red" }} />
                      ) : (
                        <FavoriteBorderIcon sx={{ color: "white" }} />
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full">
                <img
                  src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544961.jpg"
                  alt="no-data-found"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
