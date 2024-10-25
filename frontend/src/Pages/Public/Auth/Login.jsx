import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginWithEmail, loginWithGoogle } from '../../../api.js';
import { toast } from 'react-toastify';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await loginWithEmail(email, password);
            localStorage.setItem('data', JSON.stringify(res.data));

            if (res.data && res?.data?.user?.role === "admin") {
                navigate('/admin/dashboard');
            } else {
                navigate('/painting');
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

    const handleGoogleLogin = async () => {
        window.location.href = 'https://university-artwork-ecommerce.onrender.com/auth/google';
    };

    return (
        <div className="mx-auto h-screen flex items-center justify-center max-w-lg overflow-hidden rounded-lg bg-white lg:max-w-5xl lg:space-x-8 dark:bg-gray-900">
            <div className="hidden items-center lg:flex lg:w-1/2">
                <img src="https://www.creative-tim.com/twcomponents/svg/secure-login-animate.svg" alt="Login Illustration" />
            </div>
            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                <h2 className="text-center text-2xl font-semibold text-gray-700 dark:text-white">Welcome Back</h2>
                <p className="mt-2 text-center text-xl text-gray-600 dark:text-gray-200">
                    We are <span className="text-primary">Happy</span> to see you back
                </p>
                <div className="mt-4 space-y-3 sm:flex sm:items-center sm:space-x-4 sm:space-y-0 justify-center">
                    <button onClick={handleGoogleLogin} className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150" style={{ width: "auto" }}>
                        <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                        <span>Login with Google</span>
                    </button>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <span className="w-1/5 border-b lg:w-1/4 dark:border-gray-600"></span>
                    <div className="text-center text-xs uppercase text-gray-500 hover:underline dark:text-gray-400">
                        or use your email
                    </div>
                    <span className="w-1/5 border-b lg:w-1/4 dark:border-gray-600"></span>
                </div>

                <form onSubmit={handleLogin}>
                    <div className="mt-4">
                        <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">E-Mail Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="focus:border-primary w-full rounded-lg border bg-white px-4 py-2 text-gray-700 dark:bg-gray-900 dark:text-gray-300"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="focus:border-primary w-full rounded-lg border bg-white px-4 py-2 text-gray-700 dark:bg-gray-900 dark:text-gray-300"
                        />
                    </div>

                    <div className="mt-8">
                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/70 px-4 py-2 text-white transition-colors"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                <div className="mt-4 flex items-center justify-between">
                    <span className="w-1/5 border-b dark:border-gray-600"></span>
                    <NavLink to="/register" className="text-xs uppercase text-gray-500 dark:text-gray-400">Create an account</NavLink>
                    <span className="w-1/5 border-b dark:border-gray-600"></span>
                </div>
            </div>
        </div>
    );
}
