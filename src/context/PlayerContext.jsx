import { createContext,useEffect,useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext =createContext();

export const PlayerContextProvider =(props)=>{
    const audioRef =useRef();
const seekBgRef =useRef();
const seekBarRef =useRef();
const [time ,settime] =useState({
    startSec:'00',
    startMin:'00',
    endSec:'00',
    endMin:'00'
})
const [track, settrack] =useState(songsData[0]);
const [trackStatus, settrackStatus] =useState(false);
const [bgstate,setbgstate]=useState('0%');
console.log('current',audioRef.current);
const play = ()=>{
    audioRef.current.play();
    settrackStatus(true);

}
const pause = ()=>{
    audioRef.current.pause();
    settrackStatus(false);

}

const playWithId = async(id)=>{
    settrack(()=>songsData[id]);
   await audioRef.current.load();
    await audioRef.current.play()
    settrackStatus(true)
   
    

}


useEffect(()=>{
    setTimeout(()=>{
        seekBarRef.current.style.width=(audioRef.current.currentTime/audioRef.current.duration) * 100 +'%';
        if(audioRef.current.currentTime==audioRef.current.duration)settrackStatus(false);
        settime({
            startSec:String(Math.floor(audioRef.current.currentTime % 60)).padStart(2,'0'),
            startMin:String(Math.floor(audioRef.current.currentTime/60)).padStart(2,'0'),
           endSec:String(Math.floor(audioRef.current.duration%60)).padStart(2,'0'),
            endMin:String(Math.floor(audioRef.current.duration/60)).padStart(2,'0'),
            
        }
           
            
            )
    },1000)
},[time])

console.log(audioRef);
    const contextValue ={
        audioRef,
        seekBgRef,
        seekBarRef,
        track,
        settrack,
        trackStatus,
        play,
        pause,
        time,
        bgstate,
        playWithId
    }





    return(
        <PlayerContext.Provider value={{contextValue}}>
            {props.children}
        </PlayerContext.Provider>
    )
}