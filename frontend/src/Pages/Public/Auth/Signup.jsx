import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== passwordConfirmation) {
            setError("Passwords don't match");
            toast.error("Passwords don't match", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            return;
        }

        try {
            const response = await fetch('https://university-artwork-ecommerce.onrender.com/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Optionally redirect or show a success message
                navigate('/login'); // Redirect to login page after successful registration
            } else {
                setError(data.message || 'Something went wrong');
                toast.error(data.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
        } catch (error) {
            setError('Server error');
        }
    };

    return (
        <div className="mx-auto my-16 flex max-w-lg overflow-hidden rounded-lg bg-white lg:max-w-5xl lg:space-x-8 dark:bg-gray-900">
            <div className="hidden items-center lg:flex lg:w-1/2">
                <img src="https://www.creative-tim.com/twcomponents/svg/queue-animate.svg" alt="queue-animate.svg" />
            </div>
            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                <h2 className="text-center text-2xl font-semibold text-gray-700 dark:text-white">Welcome</h2>
                <p className="mt-2 text-center text-xl text-gray-600 dark:text-gray-200">Explore Masterpieces: 200+ Unique Artworks</p>
                {/* {error && <p className="text-red-500">{error}</p>} */}
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="focus:border-primary dark:focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-opacity-20 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-400"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">E-Mail Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="focus:border-primary dark:focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-opacity-20 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-400"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="focus:border-primary dark:focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-opacity-20 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-400"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">Confirm Password</label>
                        <input
                            type="password"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            required
                            className="focus:border-primary dark:focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-opacity-20 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-400"
                        />
                    </div>
                    <div className="mt-8">
                        <button type="submit" className="bg-primary hover:bg-primary/70 w-full transform rounded-md px-4 py-2 tracking-wide text-white transition-colors duration-300 focus:bg-teal-300 focus:outline-none">
                            Register
                        </button>
                    </div>
                </form>
                <div className="mt-4 flex items-center justify-between">
                    <span className="w-1/5 border-b md:w-1/4 dark:border-gray-600"></span>
                    <NavLink to="/login" className="text-xs uppercase text-gray-500 hover:underline dark:text-gray-400">Do you have an account?</NavLink>
                    <span className="w-1/5 border-b md:w-1/4 dark:border-gray-600"></span>
                </div>
            </div>
        </div>
    );
}
