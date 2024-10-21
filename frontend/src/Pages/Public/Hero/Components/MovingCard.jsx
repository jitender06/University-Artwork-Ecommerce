import React, { useState } from 'react'
import { motion } from 'framer-motion';


export default function MovingCard({ slides, duplicatedSlides, full }) {
    return (
        <div className={`relative overflow-hidden ${full ? 'h-100' : 'h-96'}`}>
            {/* <div className="absolute inset-0 z-20 before:absolute before:top-0 before:left-0 before:w-full before:h-1/3 before:bg-gradient-to-b before:from-white dark:before:from-black before:to-transparent before:filter before:blur-sm after:absolute after:bottom-0 after:left-0 after:w-full after:h-1/3 after:bg-gradient-to-t after:from-white dark:after:from-black after:to-transparent after:filter after:blur-sm"></div> */}
            <motion.div
                className="flex flex-col gap-10"
                animate={{
                    y: full ? ['-50%', '0%'] : ['0%', '-50%'],
                }}
                transition={{
                    ease: 'linear',
                    duration: full ? 15 : 20, // Control speed
                    repeat: Infinity, // Loop infinitely
                }}
            >
                {duplicatedSlides?.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides?.length}%` }}>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                alt=""
                                src={slide.icon}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
