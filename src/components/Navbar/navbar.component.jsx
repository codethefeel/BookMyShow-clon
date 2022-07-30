import React from 'react';
 
import {BiChevronRight,BiSearch,BiMenu, BiChevronDown} from "react-icons/bi";

const NavSm=()=>{
    return (
        <>
        <div className='text-white flex items-center justify-between'>
            <div>
                <h3 className='text-xl font-bold items-center'>It All Starts Here!</h3>
                <span className='text-xs text-gray-400 flex py-2 items-center'>Bangaluru <BiChevronRight/> </span>
            </div>
            <div className='w-8 h-8'>
                <BiSearch className='w-full h-full'/>
            </div>
        </div>
        </>
    )
};
const NavMd=()=>{
    return(
        <div className='w-full bg-white flex gap-2 p-2 m-3 rounded'>
            <BiSearch className='items-center w-6 h-6'/>
            <input type="search" 
            className='w-full bg-transparent border-none  focus:outline-none' 
            placeholder='Search for Movie, show, plays, and games'
            />
            
        </div>
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

export default function Navbar() {
  return (
    <>
    <nav className='bg-bms-800 px-4'>
        <div className="sm:flex md:hidden">
            {/*Mobile or small devices */}
            <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">
            {/*Tab or mideum devices */}
            <NavMd/>
        </div>
        <div className="hidden lg:flex">
            {/*Pc or large devices */}
            <NavLg/>
        </div>
    </nav>
    </>
  )
}
