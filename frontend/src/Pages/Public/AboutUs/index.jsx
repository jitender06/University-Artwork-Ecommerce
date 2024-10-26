import React from 'react'
import AnushkaVishwakarma from "../../../assets/Artists/AnushkaVishwakarma .jpg"
import SaurabhKumar from "../../../assets/Artists/SaurabhKumar.jpg"
import Aakritiverma from "../../../assets/Artists/aakritiverma.jpg"
import Sheetalchaya from "../../../assets/Artists/sheetalchaya.jpg"
import YuvrajSharma from "../../../assets/Artists/YuvrajSharma .jpg"
import ANNUSHRIMANDAL from "../../../assets/Artists/ANNUSHRIMANDAL.jpg"
import Yugsingh from "../../../assets/Artists/Yugsingh.jpg"
import shreyashukla from "../../../assets/Artists/shreyashukla .jpg"
import Sunidhi from "../../../assets/Artists/sunidhi.jpg"
import Img1 from '../../../assets/Carousel/img1.jpg'
import AmritaPandey from "../../../assets/Artists/AmritaPandey .jpeg"
import NewArtist from "../../../assets/Videos/newartist.PNG"
import ShreyaBhardwaj from "../../../assets/Artists/ShreyaBhardwaj.jpg"

const artistsData = [
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
    name: "Preraj",
    position: "preraj9569singh@gmail.com",
    Best: "Water Colour",
    imageSrc: ANNUSHRIMANDAL,
  },
  {
    name: "Yug Sharma",
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
    name: "Anushka Vishwakarma",
    position: "anushkavishwakarma269@gmail.com",
    Best: "Pencil Portrait, wall painting, Paintings",
    imageSrc: AnushkaVishwakarma,
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
];

export default function AboutUs() {
  return (
    <div className="refine-prose">
      <div className="not-prose mx-auto w-full max-w-[328px] pt-6 text-xl sm:max-w-[480px] md:max-w-[624px] md:pb-6 md:text-4xl lg:max-w-[912px] lg:py-10 xl:max-w-[944px] xl:py-16">
        <h1 className="dark:text-white !mb-0 text-xl font-semibold text-gray-900 md:text-[40px] md:leading-[56px]">
          <span className='text-5xl'>Welcome to University of Allahabad</span> <br />
          <span className="text-gradient-to-r bg-gradient-to-r from-[#0FBDBD] to-[#26D97F] bg-clip-text text-transparent"> – A Hub of Creativity</span> and
          <span className="text-gradient-to-r bg-gradient-to-r from-[#FF9933] to-[#FF4C4D] bg-clip-text text-transparent"> Artistic Expression & Oxford of East</span>.
        </h1>
      </div>
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="flex flex-col gap-4 xl:flex-row xl:gap-16">
          <div className="mx-auto flex w-[328px] items-center justify-center sm:w-[480px] md:w-[624px] lg:w-[912px] xl:w-[576px]"><img className="rounded-[12px]" src={Img1} alt="Refine Office" /></div>
          <div className="mx-auto flex w-[328px] flex-col text-gray-700 dark:text-white sm:w-[480px] md:w-[624px] lg:w-[912px] xl:w-[480px] xl:justify-center">
            <div className="max-w-[642px]">
              <p className="text-xs sm:text-2xl">At University of Allahabad we believe in the power of art to inspire, challenge, and transform the way we see the world. Our university is a dynamic space where creativity thrives, and innovation is at the forefront of everything we do.</p>
              {/* <p className="text-xs sm:text-base">With the aim of sustaining the growth and expanding the user base, the project was backed by prominent VC’s and angel investors on May 2022.</p>
              <p className="text-xs sm:text-base">Today, the US-based company has an international team of 10+ members leading the development of the open-core and building new products for the ecosystem.</p> */}
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Founded with the mission to nurture artistic talent.</h2>
            <p className="mb-4 font-light">we offer an environment where students and professionals alike can explore their passion for the arts. Our galleries showcase a wide array of works, ranging from classical masterpieces to contemporary creations, reflecting the diverse voices of our artists.</p>
            <p className="mb-4 font-medium">With a rich tradition of fostering creative minds, we aim to connect our community to the global art scene. Our campus is home to numerous exhibitions, workshops, and collaborative projects, offering a space for learning, sharing, and growing together.</p>
            <p className="mb-4 font-medium">Whether you are an aspiring artist, a passionate collector, or someone simply moved by art, we invite you to explore, engage, and be inspired by the extraordinary work on display.</p>
            <span className='font-bold'>Our Vision and Our Mission</span>
            <div className='mt-5 flex flex-col items-start gap-5'>
              <span className='flex items-center gap-3'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#26D97F" stroke-width="null" class="my-path"></path>
                  <path d="M8 11.7236L9.53269 13.2563C10.1994 13.923 10.5327 14.2563 10.9469 14.2563C11.3611 14.2563 11.6945 13.923 12.3611 13.2563L16.6704 8.94702" stroke="#26D97F" stroke-width="null" stroke-linecap="round" class="my-path"></path>
                </svg>
                To cultivate a global community of artists and art lovers through education, innovation, and creative expression.
              </span>

              <span className='flex items-center gap-3'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#26D97F" stroke-width="null" class="my-path"></path>
                  <path d="M8 11.7236L9.53269 13.2563C10.1994 13.923 10.5327 14.2563 10.9469 14.2563C11.3611 14.2563 11.6945 13.923 12.3611 13.2563L16.6704 8.94702" stroke="#26D97F" stroke-width="null" stroke-linecap="round" class="my-path"></path>
                </svg>
                Empowering artists to push boundaries and create transformative experiences through art and culture.
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[328px] py-10 sm:max-w-[480px] md:max-w-[624px] md:pb-20 lg:max-w-[912px] lg:pb-32">
        <h4 className="text-center text-sm leading-6 text-gray-800 md:text-2xl md:leading-8 dark:text-white" style={{ margin: 0 }}>Our Team</h4>
        <div className="mt-6 grid grid-cols-[repeat(2,144px)] gap-6 align-top sm:grid-cols-[repeat(3,144px)] md:mt-12 md:grid-cols-[repeat(3,176px)] lg:mt-16 lg:grid-cols-[repeat(4,192px)] lg:gap-12">
          {
            artistsData.map((artist, index) => (
              <div className="not-prose flex flex-col justify-start text-center">
                <img
                  srcSet={artist.imageSrc}
                  src={artist.imageSrc}
                  alt={artist.name}
                  className="m-0 mb-6 w-full object-cover h-52 rounded-full"
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
            ))
          }

        </div>
      </div>
      
      <div className="mx-auto w-full max-w-[328px] py-8 sm:max-w-[480px] md:max-w-[624px] md:pb-10 lg:max-w-[912px] lg:pb-16 xl:max-w-[1016px]">
        <h4 className="mb-8 text-center text-sm leading-6 text-gray-800 md:text-2xl md:leading-8 lg:mb-16 dark:text-white">We are Here</h4>
        <div className="flex flex-col md:gap-8 lg:flex-row lg:gap-10 xl:gap-24">
          <div className="w-full shrink-0 lg:order-last lg:h-[416px] lg:w-[624px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d57634.828899786335!2d81.857463!3d25.465771!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1729491287166!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="flex flex-col items-start justify-start gap-8 pt-6 lg:pt-12">
            <div className="flex w-max items-center justify-center gap-6">
              <div className="bg-refine-orange flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-opacity-10 dark:text-white">
                <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-refine-orange"><path fillRule="evenodd" clipRule="evenodd" d="M9 0C13.9706 0 18 4.02944 18 9C18 14.25 10.5 24 9 24C7.5 24 0 14.25 0 9C0 4.02944 4.02944 0 9 0ZM9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6Z" fill="currentColor"></path></svg>
              </div>
              <span className="text-gray-700 dark:text-white">Senate House, University Road, Old Katra<br />Prayagraj, Uttar Pradesh 211002</span>
            </div>
            <div className="flex items-center justify-center gap-6">
              <div className="bg-refine-pink flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-opacity-10">
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-refine-pink dark:text-white">
                  <path d="M3.00001 0.5C1.34315 0.5 5.72204e-06 1.84315 5.72204e-06 3.5V5L11.3292 10.6646C11.7515 10.8757 12.2485 10.8757 12.6708 10.6646L24 5V3.5C24 1.84315 22.6569 0.5 21 0.5H3.00001Z" fill="currentColor"></path>
                  <path d="M24 8.75L14.0125 13.7438C12.7456 14.3772 11.2544 14.3772 9.98754 13.7438L0 8.75L5.72204e-06 18.5C5.72204e-06 20.1568 1.34315 21.5 3.00001 21.5H21C22.6569 21.5 24 20.1569 24 18.5L24 8.75Z" fill="currentColor"></path>
                </svg>
              </div>
              <a href="mailto:info@refine.dev" className="text-gray-700 no-underline hover:no-underline dark:text-white">mail@contact.com</a>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}
