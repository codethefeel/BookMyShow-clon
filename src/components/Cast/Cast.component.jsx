import React from 'react'

export default function Cast(props) {
  return (
    <>
    <div className='flex flex-col items-center gap-1'>
    <div className='w-32 h-32'>
        <img className='w-full h-full rounded-full'  src={props.src} alt="cast" />
    </div>
    <div className=''>
    <h4 className='font-semibold text-lg '>{props.castName}</h4>
    <p className='text-md '> as {props.castRole}</p>
    </div>
    </div>
    </>
  )
}
