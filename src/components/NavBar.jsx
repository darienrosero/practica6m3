import React from 'react'
import iconMenu from '../assets/images/icon-menu.svg'
const Navar = () => {
  return (
    <>
      <ul className=' hidden sm:flex text-[18px] sm:w-[438px] sm: place-content-around sm:text-[16px] sm:items-center '>
        <li className='cursor-pointer hover:text-Softred'> <a href='#'> Home </a></li>
        <li className='cursor-pointer hover:text-Softred'> <a href='#'> Popular </a></li>
        <li className='cursor-pointer hover:text-Softred'> <a href='#'> Trending </a></li>
        <li className='cursor-pointer hover:text-Softred'> <a href='#'> Categories </a></li>
      </ul>
        <img className='w-10 h-4 cursor-pointer sm:hidden' src={iconMenu} alt="menu" />
    </>
  )
}

export default Navar
