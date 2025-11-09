import React from 'react'
import Hero from "../components/Hero"
import AboutUs from '../components/AboutUs'
import Brands from '../components/Brands'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'

function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Brands />
      <Services />
      <Testimonials background="bg" />
    </>
  )
}

export default Home