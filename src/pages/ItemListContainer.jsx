import React, {Fragment, useEffect, useState} from 'react';
import {useNavigate,useParams} from "react-router-dom";

const ItemListContainer = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const [quantity, setQuantity] = useState(1);

  const subir = () => {
    setQuantity(quantity + 1);
  };

  const bajar = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const items = [
    {
        id: "1",
        imagen: <img src="/img/motosierra.jpg" alt="imagen de motosierra"/>,
        titulo: "Motosierra",
        precio: "$50000",
        descripcion: "Esto es una Motosierra",
        },
    {
        id: "2",
        imagen: <img src="/img/generador.jpg" alt="imagen de generador"/>,
        titulo: "Generador",
        precio: "$30000",
        descripcion: "Esto es un generador",
        },
    {
        id: "3",
        imagen: <img src="/img/fumigador.jpg" alt="imagen de un fumigador"/>,
        titulo: "Fumigador",
        precio: "$20000",
        descripcion: "Esto es un fumigador",
        }
    ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const filter = items.find((item) => item.id === id);
    setItem(filter)
    setLoading(false)
    },);

  const agregarAlCarrito = () => {
    navigate('/Checkout')
  }

  return (
    <Fragment>
      <button className="Volver" onClick={() => navigate(-1)}>Volver</button>
      <hr />
      {item && !loading && (
        <div className='Productoind'>
          <div>{item.imagen}</div>
          <div className='ProductoCont'>
          <h1>{item.titulo}</h1>
          <h1>{item.precio}</h1>
          <p>{item.descripcion}</p>
          <div className='cantidades'>
          <span>{quantity}</span>
          <button onClick={subir}>+</button>
          <button onClick={bajar}>-</button>
          </div>
          <button onClick={agregarAlCarrito} >Agregar al carrito </button>
          </div>
          </div>
      )}
    </Fragment>
  )
}

export default ItemListContainer