import { NavLink } from "react-router-dom";
import MovingCard from "./MovingCard";
import { Button } from "@material-tailwind/react";

export default function PromoSection() {
  // for 1
  const slides = [
    { icon: "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" },
    { icon: "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" },
  ];
  const duplicatedSlides = [...slides, ...slides];

  // for 2

  const slides2 = [
    { icon: "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" },
    { icon: "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" },
    { icon: "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" },
    { icon: "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" },
    { icon: "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" },
    { icon: "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" },
    { icon: "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" },
    { icon: "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" },
  ];
  const duplicatedSlides2 = [...slides2, ...slides2];

  // for 3

  const slides3 = [
    { icon: "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" },
    { icon: "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" },
    { icon: "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" },
    { icon: "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" },
    { icon: "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" },
    { icon: "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" },
    { icon: "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" },
    { icon: "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" },
  ];
  const duplicatedSlides3 = [...slides3, ...slides3];


  return (
    <div className="relative overflow-hidden bg-white mb-8 dark:bg-[#222]">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Summer styles are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
              if you live or die.
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
              <NavLink to={'/artwork'}>
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
