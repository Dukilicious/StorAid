import React from 'react'
import Banner from "../components/Banner"
import GetInTouch from '../components/GetInTouch'
import FindUs from '../components/FindUs'
import Faq from '../components/Faq'

function Contact() {
  return (
    <>
      <Banner title="Contact Us" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
      <GetInTouch />
      <FindUs />
      <Faq />
    </>
  )
}

export default Contact