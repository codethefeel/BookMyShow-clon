// import React from 'react'
import React from 'react';

import { Routes,Route,Link } from 'react-router-dom';
import DefaultLayout from '../layout/Default.layout';

const Layout=(props)=>{
  return(
    <>
    <DefaultLayout>
      {props.element}
    </DefaultLayout>
    </>
  )
  
}
    
export default function DefaultHOC(props){
  
  return (
    <>
    <Routes>
      <Route path={props.path} element={Layout(props)}/>
    </Routes> 
    </>
  )
}
