import React from 'react'
import Banner from '../components/Banner'
import AboutUs from '../components/AboutUs'
import Brands from '../components/Brands'
import Testimonials from '../components/Testimonials'
import ChooseUs from '../components/ChooseUs'
import Subscribe from '../components/Subscribe'

function About() {
  return (
    <>
      <Banner title="About Us" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
      <AboutUs />
      <Brands />
      <Testimonials background="no-bg"/>
      <ChooseUs />
      <Subscribe />
    </>
  )
}

export default About