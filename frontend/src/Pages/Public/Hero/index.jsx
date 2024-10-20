import React from 'react'
import HeroCarousel from './Components/HeroCarousel'
import HeroBody from './Components/HeroBody'
import ProductFeature from './Components/ProductFeature'
import PromoSection from './Components/PromoSection'
export default function Hero() {
  return (
    <>
      <HeroCarousel/>
      <HeroBody/>
      <ProductFeature/>
      <PromoSection/>
    </>
  )
}
