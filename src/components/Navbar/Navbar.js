import React from 'react'
import NavbarItem from './NavbarItem'
import Carrito from './Carrito'

const Navbar = (props) => {
  const items = ["Inicio" , "Productos" , "Nosotros" , "Contacto"]
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <p className="navbar-brand"> ENGEL <img className='logo' src="./img/logo.ico" alt="logo engel" /></p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {items.map((texto) => (
        <NavbarItem key={texto} texto={texto}/>
        ))}
      </ul>
      <div className="ms-auto">
      <Carrito/>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar