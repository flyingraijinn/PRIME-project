import React from 'react'
import prime from '../assets/Prime.jpg';
import New from '../assets/New.png';
import j8 from '../assets/9.png';
import {useNavigate} from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='relative'>
        <div className='relative w-full h-full '>
        <img className='flex sm:object-cover'  src={prime} alt="background" />
        <div className='absolute top-[3%] md:top-[10%] text-white flex-col right-[70%]'>
            <h1 className='hidden xl:flex text-5xl font-[Poppins] font-bold text-green-400 hover:text-white duration-200 cursor-pointer'>DRINK PRIME</h1>
            <p className='mt-5 hidden md:flex'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Necessitatibus iste quam at enim dolorem odit maxime,<br />numquam eveniet exercitationem dicta.</p>
            <button className='bg-gradient-to-r from-white to black py-2 px-5 mt-5 hover:bg-gray-500 duration-200 ease-in-out hover:text-white text-black font-semibold uppercase'>Join the Hunt</button>
        </div>
        <h1 className='text-[10rem] text-center font-[Poppins] hidden xl:flex item-center justify-center mt-5'>H Y D R A T I O N</h1>
        <div className='grid md:grid-cols-2 container mx-auto'>
        <div className=''>
          <img className='w-[700px]' src={New} alt="New" />
        </div>
        <div className='w-full h-full place-items-center item justify-center flex-col flex'>
        <img className='w-[400px]' src={j8} alt="j8" />
        <button onClick={()=> navigate("/Shop")} className='bg-black mb-10 text-white px-5 py-2 font-semibold font-[Poppins] text-xl hover:bg-gray-500 hover:text-black duration-200 ease-in'>Shop Now</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home