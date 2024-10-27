import React from 'react';
import { motion } from 'framer-motion';
import AnushkaVishwakarma from "../../../../assets/Artists/AnushkaVishwakarma .jpg"
import SaurabhKumar from "../../../../assets/Artists/SaurabhKumar.jpg"
import Aakritiverma from "../../../../assets/Artists/aakritiverma.jpg"
import Sheetalchaya from "../../../../assets/Artists/sheetalchaya.jpg"
import YuvrajSharma from "../../../../assets/Artists/YuvrajSharma .jpg"
import ANNUSHRIMANDAL from "../../../../assets/Artists/ANNUSHRIMANDAL.jpg"
import Yugsingh from "../../../../assets/Artists/Yugsingh.jpg"
import shreyashukla from "../../../../assets/Artists/shreyashukla .jpg"
import Sunidhi from "../../../../assets/Artists/sunidhi.jpg"
import NewArtist from "../../../../assets/Videos/newartist.PNG"
import ShreyaBhardwaj from "../../../../assets/Artists/ShreyaBhardwaj.jpg"
import AmritaPandey from "../../../../assets/Artists/AmritaPandey .jpeg"
import ANNUSHRIMANDALorig from "../../../../assets/Artists/ANNUSHRIMANDALorig.jpg"
import AnamikaRao from "../../../../assets/Artists/AnamikaRao.jpg"

import BhoomiSingh from "../../../../assets/Artists/BhoomiSingh.jpg"
import Shivangi from "../../../../assets/Artists/Shivangi.jpg"



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
                                className="m-0 mb-6 w-full object-cover md:h-56 rounded-full"
                            />
                            <span className="dark:text-white text-xs font-semibold leading-4 text-gray-900 lg:text-base lg:leading-6">
                                {artist.name}
                            </span>
                            <span className="text-xs leading-4 text-gray-500 lg:text-base lg:leading-6 dark:text-white">
                                {artist.position}
                            </span>
                            <span className="text-xs leading-4 text-gray-500 lg:text-base lg:leading-6 dark:text-white">
                                {artist.Best}
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
        name: "Anushka Vishwakarma",
        position: "anushkavishwakarma269@gmail.com",
        Best: "Pencil Portrait, wall painting, Paintings",
        imageSrc: AnushkaVishwakarma,
    },
    {
        name: "Saurabh Kumar",
        position: "krsaurabh7488@gmail.com",
        Best: "Portrait, Miniature Drawing",
        imageSrc: SaurabhKumar,
    },
    {
        name: "Akriti Verma",
        position: "akritiv0202@gmail.com",
        Best: "Oil Painting, Portrait, Craft",
        imageSrc: Aakritiverma,
    },
    {
        name: "Sheetal Chhaya",
        position: "mynameissheetalchhaya@gmail.com",
        Best: "Landscape Painting",
        imageSrc: Sheetalchaya,
    },
    {
        name: "Yuvraj sharma",
        position: "yuvraj1992002@gmail.com",
        Best: "Water Colour",
        imageSrc: YuvrajSharma,
    },
    {
        name: "Annushri Mandal",
        position: "annushrimandal@gmail.com",
        Best: "Oil Painting, Water Colour, Sketching",
        imageSrc: ANNUSHRIMANDALorig,
    },
    {
        name: "Preraj",
        position: "preraj9569singh@gmail.com",
        Best: "Water Colour",
        imageSrc: ANNUSHRIMANDAL,
    },
    {
        name: "Yug Singh",
        position: "yugsingh.era@gmail.com",
        Best: "Watercolour, Painting",
        imageSrc: Yugsingh
    },
    {
        name: "Shreya Shukla",
        position: "shuklashreya5123@gmail.com",
        Best: "Painting",
        imageSrc: shreyashukla,
    },
    {
        name: "Sunidhi Kumari",
        position: "sunidhikri2389@gmail.com",
        Best: "Clay modelling, wax sculpting, welding",
        imageSrc: Sunidhi
    },
    {
        name: "Shagun Mishra",
        position: "gdshagunmishra@gmail.com",
        Best: "Digital Art, Logo design",
        imageSrc: NewArtist
    },
    {
        name: " Shreya Bhardwaj",
        position: "shreyamishu24@gmail.com",
        Best: "Painting",
        imageSrc: ShreyaBhardwaj
    },
    {
        name: "Amrita Pandey",
        position: "amritapandey60@gmail.com",
        Best: "Digital Art",
        imageSrc: AmritaPandey
    },
    {
        name: "Anamika Rao",
        position: "anamikarsrao04@gmail.com",
        Best: "Oil Painting, Portrait",
        imageSrc: AnamikaRao
    },
    {
        name: "Bhoomi Singh",
        position: "singhbhoomi779@gmail.com",
        Best: "pencil colour, poster colour, Portrait",
        imageSrc: BhoomiSingh
    },
    {
        name: "Shivangi Verma",
        position: "vermashivangi6394@gmail.com",
        Best: "Painting",
        imageSrc: Shivangi
    },
];
const duplicatedSlides = [...artistsData, ...artistsData];