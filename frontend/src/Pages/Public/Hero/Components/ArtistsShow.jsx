import React from 'react';
import { motion } from 'framer-motion';

export default function ArtistsShow() {
    return (
        <div className="relative h-full overflow-hidden py-12 mx-auto">
            <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white dark:before:from-black before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white dark:after:from-black after:to-transparent after:filter after:blur-3"></div>
            <motion.div
                className="flex gap-20"
                animate={{
                    x: ['0%', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 15,
                        repeat: Infinity,
                    }
                }}
            >
                {/* Artist Card Component */}
                {duplicatedSlides.map((artist, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / artistsData.length}%` }}>
                        <div key={artist.name} className="not-prose flex flex-col justify-start text-center">
                            <img
                                srcSet={artist.imageSrc}
                                src={artist.imageSrc}
                                alt={artist.name}
                                className="m-0 mb-6 w-full"
                            />
                            <span className="dark:text-white text-xs font-semibold leading-4 text-gray-900 lg:text-base lg:leading-6">
                                {artist.name}
                            </span>
                            <span className="text-xs leading-4 text-gray-500 lg:text-base lg:leading-6 dark:text-white">
                                {artist.position}
                            </span>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

// Sample data for artists
const artistsData = [
    {
        name: "Civan Özseyhan",
        position: "Co-Founder, CEO",
        imageSrc: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/civan.png",
    },
    {
        name: "Ömer Aplak",
        position: "Co-Founder, CTO",
        imageSrc: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/omer.png",
    },
    {
        name: "Eren Erkalkan",
        position: "Co-Founder, CPO",
        imageSrc: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/eren.png",
    },
    {
        name: "Batuhan Özgür Özdemir",
        position: "Tech Lead",
        imageSrc: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/batuhan.png",
    },
    {
        name: "Ali Emir Şen",
        position: "Senior Software Developer",
        imageSrc: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/ali.png",
    },
    {
        name: "Alican Erdurmaz",
        position: "Software Developer",
        imageSrc: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/alican.png",
    },
    {
        name: "Necati Ozmen",
        position: "Head of Growth",
        imageSrc: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/necati.png",
    },
    {
        name: "Recep Kütük",
        position: "Senior Product Designer",
        imageSrc: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/recep.png",
    },
];
const duplicatedSlides = [...artistsData, ...artistsData];