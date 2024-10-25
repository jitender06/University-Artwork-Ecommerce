import React from "react";

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
    
  ];
 
  const [active, setActive] = React.useState(gallery1);
 
  return (
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-contain object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-9 gap-4">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 w-32 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}