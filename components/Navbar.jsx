"use client"

import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const movileMenuController = () =>{
    setMenu(!menu);
}
  return (
    <section className='px-4 py-4 flex max-w-[1440px] items-center mx-auto'>
      <div className='flex w-full justify-start'>
       <a href="">
        <img src="../logo.svg" alt="" />
       </a>
      </div>

      <div className='hidden md:flex w-full justify-end items-center gap-12'>
        <a href="" className='text-dark-grayish-blue hover:text-soft-orange transition-all duration-300 ease-in'>Home</a>
        <a href="" className='text-dark-grayish-blue hover:text-soft-orange transition-all duration-300 ease-in'>New</a>
        <a href="" className='text-dark-grayish-blue hover:text-soft-orange transition-all duration-300 ease-in'>Popular</a>
        <a href="" className='text-dark-grayish-blue hover:text-soft-orange transition-all duration-300 ease-in'>Trending</a>
        <a href="" className='text-dark-grayish-blue hover:text-soft-orange transition-all duration-300 ease-in'>Categories</a>
      </div>
      
      <div onClick={movileMenuController} className='block md:hidden z-30 cursor-pointer'>
        {!menu ? <RxHamburgerMenu size={30} /> : <MdOutlineClose size={30} />}
      </div>

      <div className={`fixed inset-0 bg-black bg-opacity-50 z-9 transition-opacity duration-300 ${menu ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>


      <div className={!menu ? "fixed right-[-100%] h-full w-[50%] flex-col px-7 py-[20%] top-0 transition-all duration-400 ease-in bg-[#FEFDF9]" : "md:hidden bg-[#FEFDF9] z-20 fixed top-0 right-0 h-full w-[50%] flex-col px-7 py-[20%] transition-all ease-in duration-400"}>
        <a href="" className='block py-3 text-xl text-dark-grayish-blue hover:text-soft-orange transition-all duration-300 ease-in'>Home</a>
        <a href="" className='block py-3 text-xl text-dark-grayish-blue hover:text-soft-orange transition-all duration-300 ease-in'>New</a>
        <a href="" className='block py-3 text-xl text-dark-grayish-blue hover:text-soft-orange transition-all duration-300 ease-in'>Popular</a>
        <a href="" className='block py-3 text-xl text-dark-grayish-blue hover:text-soft-orange transition-all duration-300 ease-in'>Trending</a>
        <a href="" className='block py-3 text-xl text-dark-grayish-blue hover:text-soft-orange transition-all duration-300 ease-in'>Categories</a>
      </div>
    </section>
  )
}

export default Navbar