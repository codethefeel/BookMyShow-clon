import axios from 'axios';
import React from 'react';

//Pages
import HomePage from './pages/Home.page';
import MoviePage from './pages/Movie.page';
import PlayPage from './pages/Play.page';

//import HOC
import DefaultHOC from './HOC/Default.HOC';
import MovieHOC from './HOC/Movie.HOC';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings
axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;



export default function App() {
  
  return (
    <>
    <DefaultHOC path={'/'} element={<HomePage/>}/>
    <MovieHOC path={'/movie/:id'} element={<MoviePage/>}/>
    <DefaultHOC path={'/plays'} element={<PlayPage/>}/>
    </>
  )
}
