import React from 'react'
import Item from '../components/Item/item';


const home = () => {
  const ItemDetail = [
    {
        id: "1",
        imagen: <img src="./img/motosierra.jpg" alt="imagen de motosierra"/>,
        titulo: "Motosierra",
        precio: "$50000",
        },
    {
        id: "2",
        imagen: <img src="./img/generador.jpg" alt="imagen de generador"/>,
        titulo: "Generador",
        precio: "$30000",
        },
    {
        id: "3",
        imagen: <img src="./img/fumigador.jpg" alt="imagen de un fumigador"/>,
        titulo: "Fumigador",
        precio: "$20000",
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

export default home