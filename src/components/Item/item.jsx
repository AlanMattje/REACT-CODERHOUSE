import React from 'react'
import {useNavigate} from 'react-router-dom'

const Item = (props) => {
    const {id,imagen,titulo,precio,descripcion} = props;
    const navigate = useNavigate()
    
  return (
    <div className="Product">
        <div>{imagen}</div>
        <h1>{titulo}</h1>
        <h3>{precio}</h3>
        <h3>{descripcion}</h3>
        <button className='VerMas' onClick={()=>navigate(`/Category/item/${id}`)}>Ver mas</button>
    </div>
  )
}

export default Item