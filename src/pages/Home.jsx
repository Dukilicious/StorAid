import React from 'react'
import Hero from "../components/Hero"
import AboutUs from '../components/AboutUs'
import Brands from '../components/Brands'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import ChooseUs from '../components/ChooseUs'
import Pricing from '../components/Pricing'

function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Brands />
      <Services />
      <Testimonials background="bg" />
      <ChooseUs bgColor="beige" />
      <Pricing />
    </>
  )
}

export default Home