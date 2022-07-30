import React from 'react';
import Slider from 'react-slick';

//components
import Posters from '../Posters/posters.component';


//config
import PostersCarouselSettings from "../../config/PosterCarouselSettings.config"


export default function PosterSlider(props) {
  return (
    <>
    <div className="flex flex-col gap-1">
    <h2 className={`text-black text-3xl font-bold ${props.isDark? "text-white":"text-gray-700"} `}>{props.title}</h2>
    <p className={`text-sm ${props.isDark? "text-white":"text-gray-700"} `}>
              {props.subTitle}
    </p>
    <Slider {...PostersCarouselSettings}> 
        {props.images.map((image)=>{
            return(
                <Posters {...image} isDark = {props.isDark}/>
            )
        })}
    </Slider>
    </div>
    </>
  )
}
