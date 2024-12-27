import React, { useEffect, useRef } from 'react'
import { Route,Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets';
function Display() {
  const useReff =useRef();
  const location =useLocation();
  // const id =location.pathname.slice(-1);
  const isAlbum =location.pathname.includes('album')
  const id =isAlbum?location.pathname.slice(-1):" ";
  const bgColor =albumsData[Number(id)].bgColor;
  useEffect(()=>{
    if(isAlbum){
      useReff.current.style.background=`linear-gradient(${bgColor},#121212)`;
    }
    else{
      useReff.current.style.background=`#121212`;
    }
  })
  return (
    <div ref={useReff} className='w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayHome/>}></Route>
        <Route path='/album/:id' element={<DisplayAlbum/>}></Route>
      </Routes>
    </div>
  )
}

export default Display
