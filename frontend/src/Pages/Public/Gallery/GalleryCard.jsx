import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Splide's CSS
import { motion } from 'framer-motion';
import gallery1 from '../../../assets/gallery1.jpeg'
import gallery2 from '../../../assets/gallery2.jpeg'
import gallery3 from '../../../assets/gallery3.jpeg'
import gallery4 from '../../../assets/gallery4.jpeg'
import gallery5 from '../../../assets/galleryImages/gallery5.JPG'
import gallery6 from '../../../assets/galleryImages/gallery6.JPG'
import gallery7 from '../../../assets/galleryImages/gallery7.JPG'
import gallery8 from '../../../assets/galleryImages/gallery8.PNG'
import gallery9 from '../../../assets/galleryImages/gallery9.PNG'


const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9
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
                    // gap: '0.5rem',
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
                            className="cursor-pointer rounded-md object-cover h-4/5 w-96"
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
