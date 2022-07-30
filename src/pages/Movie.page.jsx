import React,{useContext, useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//components
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/Cast/Cast.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import Slider from "react-slick";

//config
import PosterImages from "../config/PosterImages.config";
import CastCarouselSettings from "../config/CastCarouselSettings";

//context
import { MovieContext } from "../context/Movie.context";

export default function MoviePage() {
  const {movie} = useContext(MovieContext);

  const {id}= useParams();

  const [cast, setCast] = useState([])
  const [similarMovies, setSimilarMovies] = useState([])
  const [recommendedMovies, setRecommendedMovies] = useState([])

  useEffect(()=>{
    const requestCast = async() =>{
      const getCast= await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast)
    }
    requestCast();
  },[id])

  useEffect(()=>{
    const requestSimilarMovies = async() =>{
      const getSimilarMovies= await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results)
    }
    requestSimilarMovies();
  },[id])
   
  useEffect(()=>{
    const requestRecommendedMovies = async() =>{
      const getRecommendedMovies= await axios.get(`/movie/${id}/recommendations`);
      setRecommendedMovies(getRecommendedMovies.data.results)
    }
    requestRecommendedMovies();
  },[id])
  
  return (
    <>
      <MovieHero />
      <div className="container px-6 py-8 lg:ml-20 lg:w-3/4">
        <div className="flex flex-col gap-3 item-start">
          <h2 className="text-black font-bold text-3xl">About The Movie</h2>
          <p className="">
            {movie.overview}
          </p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-black font-bold text-3xl">About The Movie</h2>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="border-dashed border-2 border-yellow-500 p-4 bg-yellow-200 flex gap-2 rounded-lg w-full">
              <div className="w-8 h-8">
                <img
                  className="w-full h-full"
                  src="https://in.bmscdn.com/offers/tnclogo/rs-75--off-for-super-star-users-movie75.jpg?19112021220632"
                  alt=""
                />
              </div>
              <div>
                <h4 className="font-semibold">DUBBED</h4>
                <p>Add some entertainment </p>
              </div>
            </div>
            <div className="border-dashed border-2 border-yellow-500 p-4 bg-yellow-200 flex gap-2 rounded-lg w-full">
              <div className="w-8 h-8">
                <img
                  className="w-full h-full"
                  src="https://in.bmscdn.com/offers/tnclogo/rs-75-off-on-next-3-movies-on-bookmyshow-filmypass99.jpg?14022019180218"
                  alt=""
                />
              </div>
              <div>
                <h4 className="font-semibold">Use code STREAMSAVE</h4>
                <p>Offer of the week- rent @ 50% off</p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="flex flex-col gap-4">
        <h2 className="text-black font-bold text-3xl">Cast & Crew</h2>
        
          <Slider {...CastCarouselSettings}>
          {cast.map((castdata)=>(
            <Cast 
            src={`https://image.tmdb.org/t/p/original${castdata.profile_path}`}
            castName= {castdata.original_name} 
            castRole={castdata.character}
            />
          ))}
          </Slider>
        
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div>
        <PosterSlider
            images={similarMovies}
            title="You Might Also Like"
            subTitle=""
            isDark={false}
            />
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div>
        <PosterSlider
            images={recommendedMovies}
            title="Recommended by AI"
            subTitle=""
            isDark={false}
            />
        </div>

      </div>
    </>
  );
}
