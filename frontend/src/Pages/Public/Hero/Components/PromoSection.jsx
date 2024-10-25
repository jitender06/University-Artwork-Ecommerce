import { NavLink } from "react-router-dom";
import MovingCard from "./MovingCard";
import { Button } from "@material-tailwind/react";
// paintings
import pain1 from '../../../../assets/Paintings/pain1.jpg'
import pain2 from '../../../../assets/Paintings/pain2.jpg'
import pain3 from '../../../../assets/Paintings/pain3.jpg'
import pain4 from '../../../../assets/Paintings/pain4.jpg'
import pain5 from '../../../../assets/Paintings/pain5.jpg'
import pain6 from '../../../../assets/Paintings/pain6.jpg'
import pain7 from '../../../../assets/Paintings/pain7.jpg'
import pain8 from '../../../../assets/Paintings/pain8.JPG'
import pain9 from '../../../../assets/Paintings/pain9.JPG'
import pain10 from '../../../../assets/Paintings/pain10.JPG'
import pain11 from '../../../../assets/Paintings/pain11.JPG'
import pain12 from '../../../../assets/Paintings/pain12.JPG'
import pain13 from '../../../../assets/Paintings/pain13.JPG'
import pain14 from '../../../../assets/Paintings/pain14.JPG'
import pain15 from '../../../../assets/Paintings/pain15.JPG'
import pain16 from '../../../../assets/Paintings/pain16.JPG'
import pain17 from '../../../../assets/Paintings/pain17.JPG'

// drawings
import dra1 from '../../../../assets/Drawings/dra1.jpg'
import dra2 from '../../../../assets/Drawings/dra2.jpg'
import dra3 from '../../../../assets/Drawings/dra3.jpg'
import dra4 from '../../../../assets/Drawings/dra4.jpg'
import dra5 from '../../../../assets/Drawings/dra5.jpg'
import dra6 from '../../../../assets/Drawings/dra6.jpg'
import dra7 from '../../../../assets/Drawings/dra7.jpg'
import dra8 from '../../../../assets/Drawings/dra8.jpg'
import dra9 from '../../../../assets/Drawings/dra9.jpg'
import dra10 from '../../../../assets/Drawings/dra10.jpg'
import dra11 from '../../../../assets/Drawings/dra11.jpg'
import dra12 from '../../../../assets/Drawings/dra12.jpg'
import dra13 from '../../../../assets/Drawings/dra13.jpg'
import dra14 from '../../../../assets/Drawings/dra14.jpg'





import back1 from '../../../../assets/back1.png';
import back2 from '../../../../assets/back2.png';
import back3 from '../../../../assets/back3.png';
import back4 from '../../../../assets/back4.png';

export default function PromoSection() {
  // for 1
  const slides = [
    { icon: dra1 },
    { icon: dra2 },
    { icon: dra3 },
    { icon: dra4 },
    { icon: dra5 },
    { icon: dra6 },
    { icon: dra7 },
    { icon: dra8 },
    { icon: dra9 },
    { icon: dra10 },
    { icon: dra11 },
    { icon: dra12 },
    { icon: dra13 },
    { icon: dra14 },


  ];
  const duplicatedSlides = [...slides, ...slides];

  // for 2

  const slides2 = [
    { icon: pain1 },
    { icon: pain2 },
    { icon: pain3 },
    { icon: pain4 },
    { icon: pain5 },
    { icon: pain6 },
    { icon: pain7 },
    { icon: pain8 },
    { icon: pain9 },
    { icon: pain10 },
    { icon: pain11 },
    { icon: pain12 },
    { icon: pain13 },
    { icon: pain14 },
    { icon: pain15 },
    { icon: pain16 },
    { icon: pain17 },
  ];
  const duplicatedSlides2 = [...slides2, ...slides2];

  // for 3

  const slides3 = [
    { icon: back3 },
    { icon: back1 },
    { icon: back2 },
    { icon: back3 },
    { icon: back4 },
    // { icon: back5 },
  ];
  const duplicatedSlides3 = [...slides3, ...slides3];


  return (
    <div className="relative overflow-hidden bg-white mb-8 dark:bg-[#222]">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Discover Our Most Loved Creations
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Explore the art that has captivated our community. From striking visuals to intricate details, each piece in our popular collection has a story to tell and a style that resonates. Find your next favorite among the masterpieces that are turning heads and inspiring imaginations.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <MovingCard slides={slides} duplicatedSlides={duplicatedSlides} full={false} />
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <MovingCard slides={slides2} duplicatedSlides={duplicatedSlides2} full={true} />
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <MovingCard slides={slides3} duplicatedSlides={duplicatedSlides3} full={false} />
                    </div>
                  </div>
                </div>
              </div>
              <NavLink to={'/painting'}>
                <Button variant="gradient" size="md" style={{ width: "auto" }}>
                  Shop Collection
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
