import React from 'react'
import { NavLink } from 'react-router-dom'

const footer = () => {
  return (
    <div className='footer'>
            <p><NavLink to ="/" className={'nav-link'}><img src="/img/logoh.png" alt="Logoc Engel Repuestos" /></NavLink> </p>
    </div>
  )
}

export default footer