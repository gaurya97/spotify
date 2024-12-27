import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

function SongItem({image,name,desc,id}) {
    // console.log(image)
    // console.log(name)
    // console.log(desc)
    const context =useContext(PlayerContext);
    console.log('context',context.contextValue.playWithId);
  return (
    <div onClick={()=>context.contextValue.playWithId(id)} className='min-w-[100px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounde' src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
      
    </div>
  )
}

export default SongItem
