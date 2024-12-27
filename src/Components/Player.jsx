import React, { useContext } from "react";
import { assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

function Player() {
  const audioContext =useContext(PlayerContext);
  // console.log(audioContext.contextValue.time.startSec);
  // console.log(audioContext.contextValue.time.startMin);
  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={audioContext.contextValue.track.image} alt="" />
        <p>{audioContext.contextValue.track.name}</p>
        <p>{audioContext.contextValue.track.desc}</p>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt=""
          />
          <img onClick={(e)=>{
            if(audioContext.contextValue.track.id>0){
              audioContext.contextValue.settrack(songsData[audioContext.contextValue.track.id -1]);
              audioContext.contextValue.pause();
            }
            else{
              audioContext.contextValue.settrack(songsData[songsData.length-1]);
              audioContext.contextValue.pause();
            }
            
          }} className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
          
          {audioContext.contextValue.trackStatus?<img className="w-4 cursor-pointer" onClick={()=>{
            audioContext.contextValue.pause();
          }}
           src={assets.pause_icon} alt="" />:<img className="w-4 cursor-pointer" onClick={()=>{
            audioContext.contextValue.play();
          }} src={assets.play_icon} alt="" />}
          
          
          <img className="w-4 cursor-pointer"
            onClick={()=>{
              if(audioContext.contextValue.track.id<songsData.length-1){
                audioContext.contextValue.settrack(songsData[audioContext.contextValue.track.id + 1]);
                audioContext.contextValue.pause();
              }
              else{
                audioContext.contextValue.settrack(songsData[0]);
                audioContext.contextValue.pause();
              }
              
            }}
          src={assets.next_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>
        <div className="flex items-center gap-5">
          <p>{audioContext.contextValue.time.startMin}:{audioContext.contextValue.time.startSec}</p>
          <div ref={audioContext.contextValue.seekBgRef} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr ref={audioContext.contextValue.seekBarRef} className="h-1 border-none w-0 bg-green-800 rounded-full" />
          </div>
          <p>{audioContext.contextValue.time.endMin}:{audioContext.contextValue.time.endSec}</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
      <img className="w-4" src={assets.play_icon} alt="" />
      <img className="w-4" src={assets.mic_icon} alt="" />
      <img className="w-4" src={assets.queue_icon} alt="" />
      <img className="w-4" src={assets.speaker_icon} alt="" />
      <img className="w-4" src={assets.volume_icon} alt="" />
      <div className="w-20 bg-slate-50 h-1 rounded">
        
      </div>
      <img className="w-4" src={assets.mini_player_icon} alt="" />
      <img className="w-4" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
}

export default Player;
