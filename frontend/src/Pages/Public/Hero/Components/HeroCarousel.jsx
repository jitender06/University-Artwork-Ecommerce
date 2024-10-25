import React from 'react'
import { Carousel } from "@material-tailwind/react";
import Img1 from '../../../../assets/Carousel/img1.jpg'
import Img2 from '../../../../assets/Carousel/img2.jpg'
import Img3 from '../../../../assets/Carousel/img3.jpg'
import Img4 from '../../../../assets/Carousel/img4.jpg'
import carousel4 from '../../../../assets/carousel4.PNG'
import carousel5 from '../../../../assets/carousel5.PNG'
import carousel6 from '../../../../assets/carousel6.PNG'


const ImagesData = [
  Img1,
  Img2,
  Img3,
  'https://lh3.googleusercontent.com/p/AF1QipO9aAkXCAD7Z-5GW6IJSuKiCkjR6pWrIte-sHnf=s680-w680-h510',
  'https://www.allduniv.ac.in/public/assets/uploads/media-uploader/nirf-web-new-3a1723533553.jpg',
  'https://www.allduniv.ac.in/public/assets/uploads/media-uploader/41716277923.jpg',
  'https://www.allduniv.ac.in/public/assets/uploads/media-uploader/cms-22771706258681.jpg',
  'https://www.allduniv.ac.in/public/assets/uploads/media-uploader/finalslideimage1702638345.PNG',
  'https://www.allduniv.ac.in/public/assets/uploads/media-uploader/republic-day-02-20231675247711.jpeg',
  'https://www.allduniv.ac.in/public/assets/uploads/media-uploader/img-08301668052307.jpg',
  'https://www.allduniv.ac.in/public/assets/uploads/media-uploader/21627362613.jpg',
  'https://www.allduniv.ac.in/public/assets/uploads/media-uploader/161627363226.jpg',
  'https://www.allduniv.ac.in/public/assets/uploads/media-uploader/slider81636461048.jpeg',
  carousel4,
  carousel5,
  carousel6,
  Img4,
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