import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import MovieLayout from "../layout/Movie.layout"

const Layout=(props)=>{
  return(
    <>
    <MovieLayout>
      {props.element}
    </MovieLayout>
    </>
  )
  
}
    
export default function MovieHOC(props){
  
  return (
    <>
    <Routes>
      <Route path={props.path} element={Layout(props)}/>
    </Routes> 
    </>
  )
}