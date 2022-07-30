import React,{useContext} from 'react'

//context
import { MovieContext } from '../../context/Movie.context'

//components
import MovieInfo from './MovieInfo.component'

export default function MovieHero() {
    const {movie} = useContext(MovieContext)
  return (
    <>
    <div>
        {/* Mobile Devices */}

    <div className='relative md:hidden' style={{height:"calc(180vw)"}}>
        <div className='absolute bottom-0 bg-black bg-opacity-60 h-56 w-full z-10'/>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt="shamshera" 
        className='w-full h-full'
        />
        <div className='absolute bottom-4 left-4 z-20'>
            <MovieInfo/>
        </div>
    </div>

        {/* Medium Devices */}
    <div className='relative hidden md:block lg:hidden' style={{height:"calc(100vw)"}}>
    <div className='absolute bottom-0 bg-black bg-opacity-60 h-56 w-full z-10'/>
    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt="shamshera" 
        className='w-full h-full'
        />
        <div className='absolute bottom-4 z-20'>
            <MovieInfo/>
        </div>
    </div>
        {/* Large Devices */}
    <div className='relative z-5 hidden lg:block' style={{height:"30rem"}}>
        
        <div className='w-full h-full z-10 absolute'
        style={{backgroundImage:"linear-gradient(90deg, rgb(34,34,34) 24.97% , rgb(34,34,34) 38.3% , rgba(34,34,34,0.04) 97.47% ,rgb(34,34,34) 100%)"}} />
        
        
        <div className='absolute z-10  left-24 top-12 flex items-center gap-8'>
            <div className='w-64 h-96'>
            <img 
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="poster"
            className='w-full h-full rounded-xl' 
            />
            </div>
            <div>
                <MovieInfo/>
            </div>
        </div>

        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt="shamshera" 
        className='w-full h-full'
        />
        
    </div>
    </div>
    </>
  )
}
