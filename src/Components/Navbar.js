import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='navbar navbar-expand-lg navbar-light bg-primary'>
           <h3 className='navbar-brand'>E_Learn</h3>
           <div className=''>
           <ul className='navbar-nav'>
              <Link className='nav-item' to='/'><li className='nav-links'>Home</li></Link>
              <Link className='nav-item' to='/about'><li className='nav-links'>About</li></Link>
              <Link className='nav-item' to='/cources'><li className='nav-links'>Cources</li></Link>
              <Link className='nav-item' to='contact'><li className='nav-links'>Contact</li></Link>
           </ul>
           </div>
        </nav>
    </>
  )
}

export default Navbar