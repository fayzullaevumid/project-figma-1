import React from 'react'
import Navbar from './Navbar/page';
import Section from './Section/page';
import './global.css'
import Footer from './Footer/page';

const page = () => {
  return (
    <div>
      <Navbar/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default page;