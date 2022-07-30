import axios from 'axios';
import React, {useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';


//components
import MovieNavbar from '../components/Navbar/MovieNavbar.component';

//context
import { MovieContext } from '../context/Movie.context';

export default function MovieLayout(props) {
  const {id} = useParams();
  const { movie,setMovie }= useContext(MovieContext);

  useEffect( () => {
    const requestMovie= async () =>{
      const getMovieData = await axios.get(`/movie/${id}`)
      setMovie(getMovieData.data)
    }
    requestMovie();
  },[id])

  return (
    <>
    <MovieNavbar/>
    {props.children}
    </>
  )
}
