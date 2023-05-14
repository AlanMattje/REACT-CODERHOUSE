import React from 'react'
import Item from '../components/Item/item';

const Categoria = () => {
    const ItemDetail = [
        {
            id: "1",
            imagen: <img src="./img/motosierra.jpg" alt="imagen de motosierra"/>,
            titulo: "Motosierra",
            precio: "$50000",
            descripcion: "Esto es una Motosierra",
            },
        {
            id: "2",
            imagen: <img src="./img/compresor.jpg" alt="imagen de compresor"/>,
            titulo: "Compresor",
            precio: "$30000",
            descripcion: "Esto es un compresor",
            },
        {
            id: "3",
            imagen: <img src="./img/Pulverizador.jpg" alt="imagen de un pulverizador"/>,
            titulo: "Pulverizador",
            precio: "$20000",
            descripcion: "Esto es un Pulverizador",
            }
        ]
 
    return (
    <div>
        <div className='Items'>
          {ItemDetail.map((item) => (
          <Item key={item.id} {...item} />
        ))}
        </div>
    </div>
  )
}

export default Categoria