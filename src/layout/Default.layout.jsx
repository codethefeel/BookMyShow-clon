import React from 'react';
import HeroCarousel from '../components/HeroCarousel/heroCarousel.components';

//components
import Navbar from '../components/Navbar/navbar.component';

export default function DefaultLayout(props) {
  return (
    <>
    <Navbar/>
    <HeroCarousel/>
    {props.children}
    </>
  )
}
