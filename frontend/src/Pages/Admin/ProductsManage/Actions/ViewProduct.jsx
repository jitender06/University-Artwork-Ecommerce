import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Button, IconButton, Tooltip } from '@material-tailwind/react';
import { PencilIcon, UserPlusIcon, PhotoIcon, EyeIcon } from "@heroicons/react/24/solid";
import axios from 'axios';
import { Alert } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewProduct({ productData }) {
    const [open, setOpen] = React.useState(false);
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const data = JSON.parse(localStorage.getItem('data'));
    // let token = data?.accessToken;
    // console.log(productData?._id, productData, "::345345dfg")
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (maksad === 'add') {
    //         try {
    //             // API request to add product
    //             const { data } = await axios.post('http://localhost:8000/api/products', formData, {
    //                 headers: {
    //                     'Content-Type': 'multipart/form-data',
    //                     'Authorization': `Bearer ${token}`,
    //                 },
    //             });
    //             console.log('Response data:', data);
    //             setFormData({
    //                 title: '',
    //                 price: '',
    //                 status: 'active',
    //                 description: '',
    //                 productImage: null,
    //             })
    //             toast.success('Product added successfully', {
    //                 position: "top-right",
    //                 autoClose: 3000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //             });
    //             handleClose();
    //         } catch (error) {
    //             console.log('Response data:', error.response.data.message);
    //             let message = error?.response?.data?.message;
    //             toast.error(message, {
    //                 position: "top-right",
    //                 autoClose: 3000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //             });
    //         }
    //     } else if (maksad === 'edit') {
    //         try {
    //             // API request to edit product
    //             await axios.put(`http://localhost:8000/api/product/${productData?._id}`, formData, {
    //                 headers: {
    //                     'Content-Type': 'multipart/form-data',
    //                     'Authorization': `Bearer ${token}`
    //                 },
    //             });
    //             toast.success('Product updated successfully', {
    //                 position: "top-right",
    //                 autoClose: 3000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //             });
    //             handleClose();
    //         } catch (error) {
    //             console.log('Response data:', error.response.data.message);
    //             let message = error?.response?.data?.message;
    //             toast.error(message, {
    //                 position: "top-right",
    //                 autoClose: 3000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //             });
    //         }
    //     }
    // };

    return (
        <React.Fragment>
            <Tooltip content="Edit Product">
                <IconButton variant="text" onClick={handleClickOpen}>
                    <EyeIcon className="h-4 w-4" />
                </IconButton>
            </Tooltip>

            <Dialog
                fullWidth={true}
                maxWidth={"sm"}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>View Product</DialogTitle>
                <DialogContent>
                    <div className="bg-white">
                        <div className="pt-6">


                            {/* Image gallery */}
                            <div className=" h-96">
                                <img
                                    alt={product.images[0].alt}
                                    src={`http://localhost:8000/${productData?.productImage?.path}`}
                                    className="h-full w-full object-contain object-center"
                                />

                            </div>

                            {/* Product info */}
                            <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
                                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{productData?.title?.charAt(0).toUpperCase() + productData?.title?.slice(1)}</h1>
                                </div>

                                {/* Options */}
                                <div className="mt-4 lg:row-span-3 lg:mt-0">
                                    <h2 className="sr-only">Product information</h2>
                                    <p className="text-3xl tracking-tight text-gray-900">₹{productData.price}</p>

                                    {/* Reviews */}
                                    <div className="mt-6">
                                        <h3 className="sr-only">Reviews</h3>
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                {[0, 1, 2, 3, 4].map((rating) => (
                                                    <StarIcon
                                                        key={rating}
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                                            'h-5 w-5 flex-shrink-0',
                                                        )}
                                                    />
                                                ))}
                                            </div>
                                            <p className="sr-only">{reviews.average} out of 5 stars</p>
                                            {/* <div className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                {reviews.totalCount} reviews
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pr-8 lg:pt-6">
                                    {/* Description and details */}
                                    <div>
                                        <h3 className="sr-only">Description</h3>

                                        <div className="space-y-6">
                                            <p className="text-base text-gray-900">{productData.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="outlined" size="sm" color="blue-gray" style={{ width: "auto" }}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
