import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
function Navbar({length}) {
  const navigate =useNavigate();
  const {id}=useParams();
  console.log('idnavbar',parseInt(id)+1);
 
  return (
    <div className='md:w-[75%] w-[100%] fixed top-2 right-2 pl-5'>
    <div className='w-full  flex justify-between items-center font-semibold'>
        <div className='flex  items-center gap-2'>
            <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' onClick={()=> id >=1 ? navigate(`/album/${parseInt(id)-1}`):navigate(`/`)} src={assets.arrow_left} alt="" />
            <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer'  
           onClick={()=> id<=parseInt(length)-2 ? navigate(`/album/${parseInt(id)+1}`):navigate(`/`)}  src={assets.arrow_right} alt="" />
        </div>
      <div className='flex  items-center  gap-4'>
        <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block'>Explore Premium</p>
        <p className='bg-black py-1  px-3 rounded-2xl text-[15px]'>Install App</p>
        <p className='bg-purple-500  text-black w-7 h-7 rounded-full flex items-center justify-center'>G</p>
      </div>
    </div>
    <div className='flex    items-center gap-2 mt-4 '>
        <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
        <p className='bg-black px-4 py-1   rounded-2xl cursor-pointer'>Music</p>
        <p className='bg-black px-4 py-1   rounded-2xl cursor-pointer '>Podcasts</p>
    </div>
    </div>
    
  )
}

export default Navbar
