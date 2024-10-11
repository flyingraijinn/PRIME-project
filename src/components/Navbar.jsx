import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='w-full h-[70px] bg-black text-white flex justify-around px-10 duration-200 ease-in-out relative'>
      <h1 className='text-5xl font-bold  hover:text-green-400 duration-200 ease-in-out mt-2 font-[Poppins] cursor-pointer'>PRIME</h1>

      {/* Desktop Menu */}
      <div className='flex-row items-center justify-between gap-6 hidden md:flex font-[Poppins]'>
        <Link className='hover:text-green-400 duration-200 ease-out uppercase' to='/'>Home</Link>
        <Link className='hover:text-green-400 duration-200 ease-out uppercase' to='/Shop'>Products</Link>
        <Link className='hover:text-green-400 duration-200 ease-out uppercase' to='/About'>About Prime</Link>
        <Link className='mt-1 hover:text-green-400 duration-200 ease-out' to='/Cart'><i className="fa-solid fa-cart-shopping"></i></Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div onClick={handleClick} className='mt-3 absolute right-5 block md:hidden font-bold text-green-400 py-2 px-4 rounded-sm text-2xl flex items-center justify-center z-50'>
        {!isMenuOpen ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-[70px] right-0 bg-black w-full md:hidden flex-col items-center ${isMenuOpen ? 'flex' : 'hidden'} z-50`}>
        <Link className='py-4 hover:text-green-400 duration-200 ease-out uppercase' to='/' onClick={handleLinkClick}>Home</Link>
        <Link className='py-4 hover:text-green-400 duration-200 ease-out uppercase' to='/Shop' onClick={handleLinkClick}>Products</Link>
        <Link className='py-4 hover:text-green-400 duration-200 ease-out uppercase' to='/About' onClick={handleLinkClick}>About Prime</Link>
        <Link className='py-4 hover:text-green-400 duration-200 ease-out' to='/Cart' onClick={handleLinkClick}><i className="fa-solid fa-cart-shopping"></i></Link>
      </div>
    </div>
  );
};

export default Navbar;
