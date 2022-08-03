import React, { useState, useEffect } from "react";
import axios from 'axios';

//Components
import EntertainmentCardSlider from "../components/EntertainmentCarousel/EntertainmentCard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//config
import PosterImages from "../config/PosterImages.config"
import EntertainmentImages from "../config/EntertainmentImages.config"

export default function HomePage() {
  
  const [popularMovies, setPopularMovies] = useState([]); 
  const [topRatedMovies, setTopRatedMovies] = useState([]); 
  const [upcomingMovies, setUpcomingMovies] = useState([]); 

  useEffect( () => {
    const requestPopularMovies= async() => {
      const getPopularMovies= await axios.get("/movie/popular");
      
      setPopularMovies(getPopularMovies.data.results);
    }
    
    requestPopularMovies();
  },[])

  useEffect( () => {
    const requestTopRatedMovies= async() => {
      const getTopRatedMovies= await axios.get("/movie/top_rated");
      
      setTopRatedMovies(getTopRatedMovies.data.results);
    }
    
    requestTopRatedMovies();
  },[])

  useEffect( () => {
    const requestUpcomingMovies= async() => {
      const getUpcomingMovies= await axios.get("/movie/upcoming");
      
      setUpcomingMovies(getUpcomingMovies.data.results);
    }
    
    requestUpcomingMovies();
  },[])

  return (
    <>
      <div className="flex flex-col gap-16" >
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-700 p-2">The Best of Entertainment</h1>
          <EntertainmentCardSlider />
        </div>
        <div className="bg-bms-600 py-4">
          <div className="container mx-auto px-6">
          <div className="hidden md:flex">
            <img
              className="w-full"
              src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-rupay-banner-web-collection-202104230555.png"
              alt="primier image"
            />
          </div>
          <div className="py-6">
            <PosterSlider
            images= {popularMovies}
            title="Primiers"
            subTitle="Brand new realeses every friday"
            isDark
            />
          </div>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <PosterSlider
            images={topRatedMovies}
            title="Top Rated Movies"
            subTitle=""
            isDark={false}
            />
          </div>
        <div className="container mx-auto px-6">
          <PosterSlider
            images={upcomingMovies}
            title="Up Coming Movies"
            subTitle=""
            isDark={false}
            />
          </div>
      </div>
    </>
  );
}
