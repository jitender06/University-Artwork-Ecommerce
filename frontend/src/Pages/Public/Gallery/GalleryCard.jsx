import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Splide's CSS
import { motion } from 'framer-motion';

const images = [
    "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg",
    "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg",
    "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg",
    "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg",
    "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg",
    "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg",
    "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg",
    "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg",
    "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg",
    "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg",
    "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg",
    "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg",
    "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg",
    "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg",
];

export default function GalleryCard() {
    const [selectedImage, setSelectedImage] = useState(null);

    // To close the large image view
    const closeLargeImage = () => {
        setSelectedImage(null);
    };

    return (
        <div className="relative py-10">
            {/* Carousel Section */}
            <Splide
                options={{
                    type: 'loop',
                    perPage: 5,
                    autoplay: true,
                    pauseOnHover: false,
                    interval: 4000, // Adjust for smoother auto-scroll timing
                    speed: 1000, // Slower speed for smoother transitions
                    gap: '1rem',
                    pagination: false,
                    arrows: false,
                    drag: true, // Enable dragging for user control
                }}
            >
                {images.map((image, index) => (
                    <SplideSlide key={index}>
                        <motion.img
                            src={image}
                            alt={`Gallery ${index}`}
                            className="cursor-pointer rounded-md"
                            whileHover={{ scale: 1.05 }} // Framer Motion hover effect
                            onClick={() => setSelectedImage(image)} // Click to enlarge image
                        />
                    </SplideSlide>
                ))}
            </Splide>


            {/* Large Image Modal */}
            {selectedImage && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="relative">
                        <img src={selectedImage} alt="Selected" className="max-w-full max-h-screen rounded-lg" />
                        <button
                            className="absolute top-4 right-4 text-white bg-red-500 rounded-full p-2"
                            onClick={closeLargeImage}
                        >
                            X
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
