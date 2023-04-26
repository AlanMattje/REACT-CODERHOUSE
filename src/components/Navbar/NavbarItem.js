import React from 'react'

const NavbarItem = (props) => {
  return (
    <bloque>
    <li className="nav-item">
    <p className="nav-link active" aria-current="page">
        {props.texto}</p>
  </li>
  </bloque>
  )
}

export default NavbarItem