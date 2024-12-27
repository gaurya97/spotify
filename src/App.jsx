import { useState,useContext } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/Sidebar'
import Player from './Components/Player'
import Display from './Components/Display'
import Navbar from './Components/Navbar'
import { PlayerContext } from './context/PlayerContext'
function App() {
  const audioStat =useContext(PlayerContext);
  // console.log(audioStat.contextValue.track.file);
  return (
    <>
     <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio preload='auto'  ref={audioStat.contextValue.audioRef}  src={audioStat.contextValue.track.file} ></audio>
     </div>
    </>
  )
}

export default App
