import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Button, IconButton, Tooltip } from '@material-tailwind/react';
import { PencilIcon, UserPlusIcon, PhotoIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import axios from 'axios';
import { Alert } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateEditProduct({ maksad, productData, fetchProductData }) {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({
        title: productData?.title || '',
        price: productData?.price || '',
        status: productData?.status || 'active',
        category: productData?.category || 'painting',
        description: productData?.description || '',
        productImage: productData?.productImage || null,
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            productImage: e.target.files[0],
        }));
    };

    console.log(formData,"::DFasd")
    
    const data = JSON.parse(localStorage.getItem('data'));
    let token = data?.accessToken;
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Create a new FormData object
        const formDataToSend = new FormData();

        // Append all fields to FormData
        formDataToSend.append('title', formData.title);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('status', formData.status);
        formDataToSend.append('category', formData.category); // category will now be correctly sent
        formDataToSend.append('description', formData.description);

        if (formData.productImage) {
            formDataToSend.append('productImage', formData.productImage); // Append the image file
        }

        try {
            if (maksad === 'add') {
                // API request to add a product
                const { data } = await axios.post('http://localhost:8000/api/products', formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (data) {
                    // Reset the form after successful submission
                    setFormData({
                        title: '',
                        price: '',
                        status: 'active',
                        description: '',
                        productImage: null,
                        category: 'painting'
                    });

                    toast.success('Product added successfully', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                    // Fetch updated product data
                    await fetchProductData();
                    handleClose();
                }
            } else if (maksad === 'edit') {
                // API request to update product
                await axios.put(`http://localhost:8000/api/product/${productData?._id}`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`,
                    },
                });

                toast.success('Product updated successfully', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                // Fetch updated product data
                await fetchProductData();
                handleClose();
            }
        } catch (error) {
            const message = error?.response?.data?.message || 'An error occurred';
            toast.error(message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };


    return (
        <React.Fragment>
            {maksad === "add" ? (
                <Button className="flex items-center gap-3" size="sm" onClick={handleClickOpen}>
                    <ShoppingCartIcon strokeWidth={2} className="h-4 w-4" /> Add Product
                </Button>
            ) : (
                <Tooltip content="Edit Product">
                    <IconButton variant="text" onClick={handleClickOpen}>
                        <PencilIcon className="h-4 w-4" />
                    </IconButton>
                </Tooltip>
            )}

            <Dialog
                fullWidth={true}
                maxWidth={"sm"}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{maksad === "add" ? "Add Product" : "Edit Product"}</DialogTitle>
                <DialogContent>
                    <form>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                                            Title
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="title"
                                                name="title"
                                                type="text"
                                                value={formData.title}
                                                onChange={handleInputChange}
                                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                            Price
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="price"
                                                name="price"
                                                type="number"
                                                value={formData.price}
                                                onChange={handleInputChange}
                                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
                                            Status
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="status"
                                                name="status"
                                                value={formData.status}
                                                onChange={handleInputChange}
                                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            >
                                                <option>Active</option>
                                                <option>inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                                            Category
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="category"
                                                name="category"
                                                value={formData.category}
                                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                                // onChange={handleInputChange}
                                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            >
                                                <option value="painting">painting</option>
                                                <option value="digitalart">digitalart</option>
                                                <option value="drawing">drawing</option>
                                                <option value="sculpture">sculpture</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                            Description
                                        </label>
                                        <div className="mt-2">
                                            <textarea
                                                id="description"
                                                name="description"
                                                value={formData.description}
                                                onChange={handleInputChange}
                                                rows={3}
                                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                        <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about Product.</p>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="productimage" className="block text-sm font-medium leading-6 text-gray-900">
                                            Product Image
                                        </label>
                                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                            <div className="text-center">
                                                <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                    <label
                                                        htmlFor="productimage"
                                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                    >
                                                        <span>Upload a file</span>
                                                        <input
                                                            id="productimage"
                                                            name="productimage"
                                                            type="file"
                                                            onChange={handleFileChange}
                                                            className="sr-only"
                                                        />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="outlined" size="sm" color="blue-gray" style={{ width: "auto" }}>
                        Close
                    </Button>
                    <Button onClick={handleSubmit} variant="gradient" size="sm" style={{ width: "auto" }}>
                        {maksad === "add" ? "Add" : "Update"}
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
