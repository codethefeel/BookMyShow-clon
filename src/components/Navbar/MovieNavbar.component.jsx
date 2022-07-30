import React,{useContext} from 'react';

 
import {BiShareAlt,BiChevronRight,BiSearch,BiMenu, BiChevronDown} from "react-icons/bi";

//import context
import { MovieContext } from '../../context/Movie.context';

const NavSm=()=>{
    const { movie } = useContext(MovieContext);
    console.log(movie.original_title)
    return (
        <>
        <div className='text-white flex items-center justify-between p-2'>
            <div className=''>
                <h3 className='text-xl text-white font-bold items-center'>{movie.original_title}</h3>
            </div>
            <div className='w-8 h-8'>
                <BiShareAlt className='w-full h-full'/>
            </div>
        </div>
        </>
    )
};

const NavLg=()=>{
    return(
        <>
    <div className='container mx-auto px-6 py-0 flex items-center justify-between'>
        <div className='flex items-center w-full gap-4'>
            <div className='w-12 h-12'>
                <img 
                src="https://lh6.ggpht.com/7DyCd4vhU-gz6iXhqk8aOiKQEo_Vt8fWRZRuU_jDYFmPosvcASchS3i_n9nDOiOAYQ=w300" alt="BOOK MY SHOW"
                className='w-full h-full' 
                />

            </div>
            <div className='w-1/2 h-8 bg-white flex p-2 gap-2 items-center rounded'>
                <BiSearch className=' items-center'/>
                <input type="search" 
                className='w-full bg-transparent border-none  focus:outline-none' 
                placeholder='Search for Movie, show, plays, and games'
                />
            </div>
        </div>
        <div className='flex items-center gap-4'>
            <span className=' text-gray-200 flex items-center hover:cursor-pointer text-gray-400'>Bangaluru <BiChevronDown/> </span>
            <button className='bg-red-600 h-8 text-white w-full px-2 py-1 text-sm rounded'>Sign In</button>
            <div className='text-white h-16 w-16'>
                <BiMenu className='w-full h-full' />
            </div>
        </div>
    </div>
    </>
    );
    
};

export default function MovieNavbar() {
  return (
    <>
    <nav className=' absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg px-4 lg:bg-bms-700 lg:relative  '>
        <div className="sm:flex md:hidden">
            {/*Mobile or small devices */}
            <NavSm />
        </div>
        <div className="hidden md:block lg:hidden">
            {/*Tab or mideum devices */}
            <NavSm/>
        </div>
        <div className="hidden lg:flex">
            {/*Pc or large devices */}
            <NavLg/>
        </div>
    </nav>
    </>
  )
}
