import React from 'react'
import Navbar from './Navbar'
import { albumsData ,songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
function DisplayHome() {
  return (
    <>
      <Navbar/>
      <br />
      <br />
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
        {albumsData.map((e,index)=>{
      return <AlbumItem key={index} image ={e.image} name={e.name} desc={e.desc} id={e.id}/>
       })}
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
        <div className='flex overflow-auto'>
        {songsData.map((e,index)=>{
      return <SongItem key={index} image ={e.image} name={e.name} desc={e.desc} id={e.id}/>
       })}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
