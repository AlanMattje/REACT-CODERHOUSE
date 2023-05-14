import React from 'react'
import Carrito from './Carrito'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <p className="navbar-brand"><NavLink to ="/" className={'nav-link'}>ENGEL <img className='logo'  src="./img/logo.ico" alt="logo engel" /></NavLink> </p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to ="/" className={'nav-link'}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to ="/Category" className={'nav-link'}>Category</NavLink>
        </li>
      </ul>
      <div className="ms-auto">
      <NavLink to ="/Checkout" className={'nav-link'}><Carrito/></NavLink>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar