// import React from "react";

import gallery1 from '../../../assets/gallery1.jpeg'
import gallery2 from '../../../assets/gallery2.jpeg'
import gallery3 from '../../../assets/gallery3.jpeg'
import gallery4 from '../../../assets/gallery4.jpeg'
import gallery5 from '../../../assets/galleryImages/gallery5.JPG'
import gallery6 from '../../../assets/galleryImages/gallery6.JPG'
import gallery7 from '../../../assets/galleryImages/gallery7.JPG'
import gallery8 from '../../../assets/galleryImages/gallery8.PNG'
import gallery9 from '../../../assets/galleryImages/gallery9.PNG'

import carousel1 from '../../../assets/carousel1.PNG'
import carousel2 from '../../../assets/carousel2.PNG'
import carousel3 from '../../../assets/carousel3.PNG'
import carousel4 from '../../../assets/carousel4.PNG'
import carousel5 from '../../../assets/carousel5.PNG'
import carousel6 from '../../../assets/carousel6.PNG'

import newgal1 from '../../../assets/galleryImages/newgal1.jpg'
import newgal2 from '../../../assets/galleryImages/newgal2.jpg'
import newgal3 from '../../../assets/galleryImages/newgal3.jpg'
import newgal4 from '../../../assets/galleryImages/newgal4.jpg'
import newgal5 from '../../../assets/galleryImages/newgal5.jpg'

import newgal6 from '../../../assets/galleryImages/newgal6.JPG'
import newgal7 from '../../../assets/galleryImages/newgal7.JPG'
import newgal8 from '../../../assets/galleryImages/newgal8.JPG'

import newgal9 from '../../../assets/galleryImages/newgal9.jpg'

import newgal10 from '../../../assets/galleryImages/newgal10.JPG'
import newgal11 from '../../../assets/galleryImages/newgal11.JPG'
import newgal12 from '../../../assets/galleryImages/newgal12.JPG'
import newgal13 from '../../../assets/galleryImages/newgal13.JPG'
import newgal14 from '../../../assets/galleryImages/newgal14.JPG'
import newgal15 from '../../../assets/galleryImages/newgal15.JPG'
import newgal16 from '../../../assets/galleryImages/newgal16.JPG'
import newgal17 from '../../../assets/galleryImages/newgal17.JPG'





// export function GalleryImages() {
//   const data = [
//     {
//       imgelink: gallery1
//     },
//     {
//       imgelink: gallery2
//     },
//     {
//       imgelink: gallery3
//     },
//     {
//       imgelink: gallery4
//     },
//     {
//       imgelink: gallery5
//     },
//     {
//       imgelink: gallery6
//     },
//     {
//       imgelink: gallery7
//     },
//     {
//       imgelink: gallery8
//     },
//     {
//       imgelink: gallery9
//     },
//     {
//       imgelink: carousel1
//     },
//     {
//       imgelink: carousel2
//     },
//     {
//       imgelink: carousel3
//     },
//     {
//       imgelink: carousel4
//     },
//     {
//       imgelink: carousel5
//     },
//     {
//       imgelink: carousel6
//     },
//     {
//       imgelink: newgal1
//     },
//     {
//       imgelink: newgal2
//     },
//     {
//       imgelink: newgal3
//     },
//     {
//       imgelink: newgal4
//     },
//     {
//       imgelink: newgal5
//     },
//     {
//       imgelink: newgal6
//     },
//     {
//       imgelink: newgal7
//     },
//     {
//       imgelink: newgal8
//     },
//     {
//       imgelink: newgal9
//     },
//     {
//       imgelink: newgal10
//     },
//     {
//       imgelink: newgal11
//     },
//     {
//       imgelink: newgal12
//     },
//     {
//       imgelink: newgal13
//     },
//     {
//       imgelink: newgal14
//     },
//     {
//       imgelink: newgal15
//     },
//     {
//       imgelink: newgal16
//     },
//     {
//       imgelink: newgal17
//     },
    
//   ];
 
//   const [active, setActive] = React.useState(gallery1);
 
//   return (
//     <div className="grid gap-4">
//       <div>
//         <img
//           className="h-auto w-full max-w-full rounded-lg object-contain object-center md:h-[480px]"
//           src={active}
//           alt=""
//         />
//       </div>
//       <div className="grid grid-cols-9 gap-4">
//         {data.map(({ imgelink }, index) => (
//           <div key={index}>
//             <img
//               onClick={() => setActive(imgelink)}
//               src={imgelink}
//               className="h-20 w-32 max-w-full cursor-pointer rounded-lg object-cover object-center"
//               alt="gallery-image"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";


export function GalleryImages() {
  const data = [
    {
      imgelink: gallery1
    },
    {
      imgelink: gallery2
    },
    {
      imgelink: gallery3
    },
    {
      imgelink: gallery4
    },
    {
      imgelink: gallery5
    },
    {
      imgelink: gallery6
    },
    {
      imgelink: gallery7
    },
    {
      imgelink: gallery8
    },
    {
      imgelink: gallery9
    },
    {
      imgelink: carousel1
    },
    {
      imgelink: carousel2
    },
    {
      imgelink: carousel3
    },
    {
      imgelink: carousel4
    },
    {
      imgelink: carousel5
    },
    {
      imgelink: carousel6
    },
    {
      imgelink: newgal1
    },
    {
      imgelink: newgal2
    },
    {
      imgelink: newgal3
    },
    {
      imgelink: newgal4
    },
    {
      imgelink: newgal5
    },
    {
      imgelink: newgal6
    },
    {
      imgelink: newgal7
    },
    {
      imgelink: newgal8
    },
    {
      imgelink: newgal9
    },
    {
      imgelink: newgal10
    },
    {
      imgelink: newgal11
    },
    {
      imgelink: newgal12
    },
    {
      imgelink: newgal13
    },
    {
      imgelink: newgal14
    },
    {
      imgelink: newgal15
    },
    {
      imgelink: newgal16
    },
    {
      imgelink: newgal17
    },
    
  ];

  const mainSliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    if (mainSliderRef.current) {
      mainSliderRef.current.splide.go(index); // Move the main slider to the clicked thumbnail
    }
  };

  return (
    <div className="grid gap-4">
      {/* Main Image Slider */}
      <Splide
        ref={mainSliderRef}
        options={{
          type: "fade",
          rewind: true,
          arrows: true,
          pagination: false,  // Disable dots
          autoplay: true,
        }}
        onMove={(splide) => setActiveIndex(splide.index)}  // Update active index on slide change
        className="mb-4"
      >
        {data.map(({ imgelink }, index) => (
          <SplideSlide key={index}>
            <img
              src={imgelink}
              alt={`gallery-${index}`}
              className="h-auto w-full max-w-full rounded-lg object-contain object-center md:h-[480px]"
            />
          </SplideSlide>
        ))}
      </Splide>

      {/* Thumbnails Slider */}
      <div className="grid grid-cols-5 gap-4 md:grid-cols-9">
        {data.map(({ imgelink }, index) => (
          <div key={index} onClick={() => handleThumbnailClick(index)}>
            <img
              src={imgelink}
              alt={`thumbnail-${index}`}
              className={`h-20 w-32 cursor-pointer rounded-lg object-cover object-center ${
                activeIndex === index ? "border-2 border-blue-500" : ""
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
