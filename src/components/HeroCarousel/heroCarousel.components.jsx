import React, {useState,useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";

//components
import {NextArrow, PrevArrow} from './Arrow.component'



export default function HeroCarousel() {

  const [Images, setImages] = useState ([]);

  useEffect( ()=>{
    const requestNowPlayingMovies= async()=>{
      const getImages= await axios.get("/movie/now_playing");
      setImages(getImages.data.results);
    }
    requestNowPlayingMovies();
  }, [])

  const settingsLg = {
    className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "220px",
      slidesToShow: 1,
      speed: 500,
      nextArrow: <NextArrow/>,
      prevArrow: <PrevArrow/>
  };

  const settings = {
    className: "center",
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      nextArrow: <NextArrow/>,
      prevArrow: <PrevArrow/>
  }

  // const Images = [
  //   "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //   "https://images.unsplash.com/photo-1573496130141-209d200cebd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
  //   "https://images.unsplash.com/photo-1504270997636-07ddfbd48945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  //   "https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //   "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  //   "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/art-and-crafts-collection-202007220710.png",
  // ];

  return (
    <>
    <div className="hidden lg:block">
        <HeroSlider {...settingsLg}>
      
        {Images.map((image) => {
          return (<div className="w-80 h-80 px-2 py-3">
            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="images" className="w-full h-full rounded-md" />
          </div>);
        
        })}
      </HeroSlider>
    </div>

    <div className="lg:hidden">
      <HeroSlider {...settings}>
      
        {Images.map((image) => {
          return (<div className="w-80 h-64 px-2 py-3">
            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="images" className="w-full h-full rounded-md" />
          </div>);
        })}
      </HeroSlider>
      </div>

    </>
  );
}
