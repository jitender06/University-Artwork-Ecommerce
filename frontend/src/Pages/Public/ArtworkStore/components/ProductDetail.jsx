
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, Radio, RadioGroup } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { toast } from 'react-toastify'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';

const product = {
    name: 'Basic Tee 6-Pack ',
    price: '$192',
    rating: 3.9,
    reviewCount: 117,
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-quick-preview-02-detail.jpg',
    imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: true },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: 'XXL', inStock: true },
        { name: 'XXXL', inStock: false },
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetail({ Finalproduct, cate }) {
    const [open, setOpen] = useState(false);
    const data = JSON.parse(localStorage.getItem('data'));
    let token = data?.accessToken;
    const addToCart = async (productId, quantity) => {
        if (!token) {
            toast.error("Please Register or Login to start buying products.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            try {
                const { data } = await axios.post('https://university-artwork-ecommerce.onrender.com/api/cart', { productId, quantity }, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                await setOpen(false);
            } catch (error) {
                console.log(error)
            }
        }
    }

    const [qtyValue, setQtyValue] = useState(1);

    const handleChange = (event) => {
        setQtyValue(event.target.value);
    };


    return (
        <>
            <div key={Finalproduct.id} className="group relative" onClick={() => setOpen(true)}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                        alt={Finalproduct._id}
                        src={`https://university-artwork-ecommerce.onrender.com/${Finalproduct?.productImage?.path}`}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-md text-[#222] font-black dark:text-white">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {Finalproduct?.title ? Finalproduct?.title?.charAt(0).toUpperCase() + Finalproduct?.title?.slice(1) : ""}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{Finalproduct?.category ? Finalproduct?.category?.charAt(0).toUpperCase() + Finalproduct?.category?.slice(1) : ""}</p>
                    </div>
                    {
                        (cate == "painting" || cate == "drawing") && <p className="text-sm font-medium text-gray-900 dark:text-white">₹{Finalproduct.price}</p>
                    }
                </div>
            </div>

            <Dialog open={open} onClose={setOpen} className="relative z-50">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:block"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                        <DialogPanel
                            transition
                            className="flex w-full transform text-left text-base transition data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:my-8 md:max-w-2xl md:px-4 data-[closed]:md:translate-y-0 data-[closed]:md:scale-95 lg:max-w-4xl"
                        >
                            <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                                >
                                    <span className="sr-only">Close</span>
                                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                </button>

                                <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                                    <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5 my-auto">
                                        <img
                                            alt={Finalproduct._id}
                                            src={`https://university-artwork-ecommerce.onrender.com/${Finalproduct?.productImage?.path}`}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="sm:col-span-8 lg:col-span-7">
                                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{Finalproduct?.title ? Finalproduct?.title?.charAt(0).toUpperCase() + Finalproduct?.title?.slice(1) : ""}</h2>

                                        <section aria-labelledby="information-heading" className="mt-2">
                                            <h3 id="information-heading">
                                                {Finalproduct?.description ? Finalproduct?.description?.charAt(0).toUpperCase() + Finalproduct?.description?.slice(1) : ""}
                                            </h3>
                                            {
                                                (cate == "painting" || cate == "drawing") &&  <p className="text-2xl text-gray-900">₹{Finalproduct.price}</p>
                                            }

                                            {/* Reviews */}
                                            <div className="mt-6">
                                                <h4 className="sr-only">Reviews</h4>
                                                <div className="flex items-center">
                                                    <div className="flex items-center">
                                                        {[0, 1, 2, 3, 4].map((rating) => (
                                                            <StarIcon
                                                                key={rating}
                                                                aria-hidden="true"
                                                                className={classNames(
                                                                    product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                                                    'h-5 w-5 flex-shrink-0',
                                                                )}
                                                            />
                                                        ))}
                                                    </div>
                                                    <p className="sr-only">{product.rating} out of 5 stars</p>
                                                    {/* <div className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                        {product.reviewCount} reviews
                                                    </div> */}
                                                </div>
                                            </div>
                                        </section>

                                        <section className='mt-4'>
                                            <FormControl sx={{ minWidth: 120 }} size="small">
                                                <InputLabel id="demo-simple-select-label">Qty</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={qtyValue}
                                                    label="qty"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={1}>1</MenuItem>
                                                    <MenuItem value={2}>2</MenuItem>
                                                    <MenuItem value={3}>3</MenuItem>
                                                    <MenuItem value={4}>4</MenuItem>
                                                    <MenuItem value={5}>5</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </section>

                                        <section aria-labelledby="options-heading" className="mt-10">
                                            <h3 id="options-heading" className="sr-only">
                                                Product options
                                            </h3>
                                            {
                                                (cate === "digitalart" || cate === "sculpture") ?
                                                    <div className='flex gap-4 items-center cursor-pointer'
                                                        // onClick={() => window.open('https://wa.me/919335514303?text=Hello', '_blank')}
                                                        onClick={() => {
                                                            const message = `Product ID: ${Finalproduct?._id}, Name: ${Finalproduct?.title}, Category: ${Finalproduct?.category}`;

                                                            const url = `https://wa.me/919335514303?text=${encodeURIComponent(message)}`;
                                                            window.open(url, '_blank');
                                                        }}
                                                    >
                                                        <span className="[&>svg]:h-10 [&>svg]:w-10 text-green-500">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="currentColor"
                                                                viewBox="0 0 448 512">
                                                                <path
                                                                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                                            </svg>
                                                        </span>
                                                        <span>
                                                            Plese contact us on whatsapp <b>( +919335514303 )</b>
                                                        </span>
                                                    </div>
                                                    :
                                                    <button
                                                        onClick={() => addToCart(Finalproduct._id, qtyValue)}
                                                        type="submit"
                                                        className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    >
                                                        Add to bag
                                                    </button>
                                            }
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
