import { Button } from '@material-tailwind/react'
import React from 'react'
import gallery7 from '../../../../assets/galleryImages/gallery7.JPG';
import { NavLink } from "react-router-dom";



export default function HeroBody() {
    return (
        <div
            className="p-[20px] md:py-10 max-w-[1700px] mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-between dark:bg-[#222]">
            <div className="lg:w-[650px] lg:px-5 flex flex-col gap-y-5">
                <h1
                    className="text-4xl md:text-5xl xl:text-[40px] leading-[1.2] md:max-w-xl md:mx-auto md:text-center lg:text-left lg:mx-0 lg:max-w-full font-semibold dark:text-white">
                    Welcome to University of Allahabad
                    <span className="text-gradient-to-r bg-gradient-to-r from-[#0FBDBD] to-[#26D97F] bg-clip-text text-transparent"> Art Marketplace</span>
                </h1>
                <p className="text-sm md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left dark:text-gray-300">
                    At University of Allahabad we believe in the power of art to inspire, challenge, and transform the way we see the world. Our university is a dynamic space where creativity thrives, and innovation is at the forefront of everything we do.
                </p>
                <span className='font-bold'>Our Purpose & Passion</span>
                <div className='flex flex-col items-start gap-5'>
                    <span className='flex items-center gap-3'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#26D97F" stroke-width="null" class="my-path"></path>
                            <path d="M8 11.7236L9.53269 13.2563C10.1994 13.923 10.5327 14.2563 10.9469 14.2563C11.3611 14.2563 11.6945 13.923 12.3611 13.2563L16.6704 8.94702" stroke="#26D97F" stroke-width="null" stroke-linecap="round" class="my-path"></path>
                        </svg>
                        To cultivate a global community of artists and art lovers through education, innovation, and creative expression.
                    </span>

                    <span className='flex items-center gap-3'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#26D97F" stroke-width="null" class="my-path"></path>
                            <path d="M8 11.7236L9.53269 13.2563C10.1994 13.923 10.5327 14.2563 10.9469 14.2563C11.3611 14.2563 11.6945 13.923 12.3611 13.2563L16.6704 8.94702" stroke="#26D97F" stroke-width="null" stroke-linecap="round" class="my-path"></path>
                        </svg>
                        Empowering artists to push boundaries and create transformative experiences through art and culture.
                    </span>
                </div>
                <div className="flex gap-x-5 flex-col gap-y-2.5 lg:flex-row mt-4">
                    <NavLink to="/painting">
                        <Button variant="outlined" size="sm" color="blue-gray" style={{ width: "auto" }}>
                            Explore
                        </Button>
                    </NavLink>
                    <NavLink to="/about">
                        <Button variant="gradient" size="sm" style={{ width: "auto" }}>
                            Learn More
                        </Button>
                    </NavLink>
                </div>
            </div>
            <div className="hero-image md:px-5 lg:px-0 w-full lg:w-1/2 rounded-3xl md:pt-2 lg:pt-0 relative isolate z-10">
                <img className="rounded-3xl w-full"
                    src={gallery7}
                    alt="" />
            </div>
        </div>
    )
}
