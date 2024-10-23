
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, Radio, RadioGroup } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'

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

export default function ProductDetail({ Finalproduct }) {
    const [open, setOpen] = useState(false)
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])

    return (
        <>
            <div key={Finalproduct.id} className="group relative" onClick={() => setOpen(true)}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                        alt={Finalproduct._id}
                        src={`http://localhost:8000/${Finalproduct?.productImage?.path}`}
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
                    <p className="text-sm font-medium text-gray-900 dark:text-white">₹{Finalproduct.price}</p>
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
                                        {/* <img alt={product.imageAlt} src={product.imageSrc} className="object-cover object-center" /> */}
                                        <img
                                            alt={Finalproduct._id}
                                            src={`http://localhost:8000/${Finalproduct?.productImage?.path}`}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="sm:col-span-8 lg:col-span-7">
                                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{Finalproduct?.title ? Finalproduct?.title?.charAt(0).toUpperCase() + Finalproduct?.title?.slice(1) : ""}</h2>

                                        <section aria-labelledby="information-heading" className="mt-2">
                                            <h3 id="information-heading">
                                            {Finalproduct?.description ? Finalproduct?.description?.charAt(0).toUpperCase() + Finalproduct?.description?.slice(1) : ""}
                                            </h3>

                                            <p className="text-2xl text-gray-900">₹{Finalproduct.price}</p>

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
                                                    <div className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                        {product.reviewCount} reviews
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        <section aria-labelledby="options-heading" className="mt-10">
                                            <h3 id="options-heading" className="sr-only">
                                                Product options
                                            </h3>

                                            <form>

                                                <button
                                                    type="submit"
                                                    className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                >
                                                    Add to bag
                                                </button>
                                            </form>
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
