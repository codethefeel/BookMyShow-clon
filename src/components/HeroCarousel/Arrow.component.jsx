import React from 'react'

export function PrevArrow(props) {
  return (
    <>
    <div 
    className={props.className} 
    style={{...props.style, backgroundColor:"black"}}
    onClick={props.onClick}
    />
    </>
  )
}
export function NextArrow(props) {
  return (
    <>
    <div
     className={props.className} 
    style={{...props.style, backgroundColor:"black"}}
    onClick={props.onClick}/>
    </>
  )
}
