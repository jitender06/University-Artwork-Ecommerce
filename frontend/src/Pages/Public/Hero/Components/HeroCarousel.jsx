import React from 'react'
import { Carousel } from "@material-tailwind/react";
import Img1 from '../../../../assets/Carousel/img1.jpg'
import Img2 from '../../../../assets/Carousel/img2.jpg'
import Img3 from '../../../../assets/Carousel/img3.jpg'
import Img4 from '../../../../assets/Carousel/img4.jpg'
import carousel4 from '../../../../assets/carousel4.PNG'
import carousel5 from '../../../../assets/carousel5.PNG'
import carousel6 from '../../../../assets/carousel6.PNG'

import newcar1 from "../../../../assets/Carousel/newcar1.jpg"
import newcar2 from "../../../../assets/Carousel/newcar2.jpg"
import newcar3 from "../../../../assets/Carousel/newcar3.jpg"
import newcar4 from "../../../../assets/Carousel/newcar4.jpg"
import newcar5 from "../../../../assets/Carousel/newcar5.jpg"
import newcar6 from "../../../../assets/Carousel/newcar6.jpg"
import newcar7 from "../../../../assets/Carousel/newcar7.JPG"
import newcar8 from "../../../../assets/Carousel/newcar8.JPG"
import newcar9 from "../../../../assets/Carousel/newcar9.jpg"
import newcar10 from "../../../../assets/Carousel/newcar10.JPG"
import newcar11 from "../../../../assets/Carousel/newcar11.PNG"



const ImagesData = [
  Img1,
  Img2,
  Img3,
  newcar1,
  newcar2,
  newcar3,
  newcar4,
  newcar5,
  newcar6,
  newcar7,
  newcar8,
  newcar9,
  newcar10,
  newcar11,
  'https://www.allduniv.ac.in/public/assets/uploads/media-uploader/img-08301668052307.jpg',
]
export default function HeroCarousel() {
  return (
    <Carousel
      autoplay={true}
      loop={true}
      className="h-[300px] md:h-[700px]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {
        ImagesData.map((file, index) => (
          <img
            key={index}
            src={file}
            alt="image 1"
            className="h-full w-full object-cover"
          />
        ))
      }
      {/* <img
        src={Img2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={Img3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src={Img4}
        alt="image 3"
        className="h-full w-full object-cover"
      /> */}
    </Carousel>
  )
}