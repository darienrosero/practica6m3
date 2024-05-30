import React from 'react'
import logo from '../assets/images/logo.svg'
import Navar from './NavBar'

const Heder = () => {
  return (
    <header className='flex place-content-between items-center mb-8'>
      <img src={logo} alt="" />
      <Navar />
    </header>
  )
}

export default Heder
