import React from 'react'
import { Link } from 'react-router-dom'


export default function Posters(props) {


  return (
    <Link to={`/movie/${props.id}`}>
    <div className='flex flex-col gap-2 px-3'>
        <div className='h-full w-full'>
            <img 
            className='w-full h-full rounded-xl'
            //src={props.src}
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`} 
            alt={`https://image.tmdb.org/t/p/original${props.original_title}`} 
            />
        </div>
        <h3 className={`text-lg font-bold ${props.isDark? "text-white":"text-gray-700"} `}  >{props.original_title}</h3>
        <p  className={`text-lg  ${props.isDark? "text-white":"text-gray-700"}`}>{props.subTitle}</p>
    </div>
    </Link>
    
  )
}
