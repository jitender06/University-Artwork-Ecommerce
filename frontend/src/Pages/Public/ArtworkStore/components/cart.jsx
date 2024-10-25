import { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Box, FormControl, IconButton, InputLabel, MenuItem, Select, Tooltip } from '@mui/material'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export default function Cart() {
    const [open, setOpen] = useState(false)

    const [products, setProducts] = useState()
    const data = JSON.parse(localStorage.getItem('data'));
    let token = data?.accessToken;

    const fetchCartData = async () => {
        try {
            const { data } = await axios.get("https://university-artwork-ecommerce.onrender.com/api/cart", {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
            setProducts(data)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchCartData();
    }, [open])

    const removeItem = async (productId) => {
        try {
            await axios.delete(`https://university-artwork-ecommerce.onrender.com/api/cart/${productId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            });
            toast.success('Product Removed successfully', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            await fetchCartData();
        } catch (error) {
            console.log(error)
        }
    }

    let totalAmount = products?.reduce((previousValue, currentValue) => {
        return previousValue + currentValue?.quantity * currentValue?.product?.price
    }, 0)

    return (
        <>
            <Tooltip title="Cart">
                <IconButton
                    onClick={() => setOpen(true)}
                    size="large"
                    aria-controls='account-menu'
                    aria-haspopup="true"
                >

                    <div className="flex">
                        <a href="#" className="group flex items-center">
                            <ShoppingBagIcon
                                aria-hidden="true"
                                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            />
                            {/* <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{products?.length || 0}</span> */}
                            <span className="sr-only">items in cart, view bag</span>
                        </a>
                    </div>
                </IconButton>
            </Tooltip>
            <Dialog open={open} onClose={setOpen} className="relative z-50">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <DialogPanel
                                transition
                                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                            >
                                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <DialogTitle className="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button
                                                    type="button"
                                                    onClick={() => setOpen(false)}
                                                    className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                >
                                                    <span className="absolute -inset-0.5" />
                                                    <span className="sr-only">Close panel</span>
                                                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="flow-root">
                                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                    {products?.length > 0 ?
                                                        products?.map((product) => (
                                                            <li key={product._id} className="flex py-6">
                                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                    <img
                                                                        alt={product?._id}
                                                                        src={`https://university-artwork-ecommerce.onrender.com/${product?.product?.productImage?.path}`}
                                                                        className="h-full w-full object-cover object-center"
                                                                    />
                                                                </div>

                                                                <div className="ml-4 flex flex-1 flex-col">
                                                                    <div>
                                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                                            <h3>
                                                                                {/* <a href={product.href}> */}
                                                                                {product?.product?.title}
                                                                                {/* </a> */}
                                                                            </h3>
                                                                            <p className="ml-4">₹{(product?.product?.price) * (product?.quantity)}</p>
                                                                        </div>
                                                                        <p className="mt-1 text-sm text-gray-500">{product?.product?.category}</p>
                                                                    </div>
                                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                                        <p className="text-gray-500">Qty
                                                                            {product?.quantity}
                                                                        </p>

                                                                        <div className="flex">
                                                                            <button onClick={() => removeItem(product?.product?._id)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                                Remove
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))
                                                        :
                                                        <li className='flex justify-center items-center h-full flex-col gap-4'>
                                                            <ShoppingBagOutlinedIcon sx={{ fontSize: "300px", color: "#ededed" }} />
                                                            <p className='text-gray-600'>Please add products...</p>
                                                        </li>
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <p>Subtotal</p>
                                            <p>₹{totalAmount}</p>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                        <div className="mt-6 cursor-pointer">
                                            <div
                                                onClick={() => {
                                                    const message = products.map(product =>
                                                        `Product ID: ${product.product._id}, Name: ${product.product.title}, Category: ${product.product.category}`
                                                    ).join('\n');

                                                    const url = `https://wa.me/919335514303?text=${encodeURIComponent(message)}`;
                                                    window.open(url, '_blank');
                                                }}
                                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                            >
                                                Checkout
                                            </div>
                                        </div>
                                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                            <p>
                                                or{' '}
                                                <button
                                                    type="button"
                                                    onClick={() => setOpen(false)}
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Continue Shopping
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
