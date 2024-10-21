import React from 'react'
import HeroCarousel from './Components/HeroCarousel'
import HeroBody from './Components/HeroBody'
import ProductFeature from './Components/ProductFeature'
import PromoSection from './Components/PromoSection'
import MovingCard from './Components/MovingCard'
import Card3d from './Components/Card3d'
export default function Hero() {
  return (
    <>
      <HeroCarousel/>
      <HeroBody/>
      <ProductFeature/>
      <Card3d/>
      <PromoSection/>
    </>
  )
}
