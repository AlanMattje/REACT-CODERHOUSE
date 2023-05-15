import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../pages/home'
import Categoria from '../pages/ItemDetailContainer'
import Checkout from '../pages/Checkout'
import ItemDetail from '../pages/ItemListContainer'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Navbar/footer'

const Rutas = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/Category/item/:id' element={<ItemDetail/>} />
            <Route path='/Category' element={<Categoria/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default Rutas