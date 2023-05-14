import React from 'react'
import Item from '../components/Item/item';
import ItemDetail from './ItemDetailContainer'

const home = () => {
    return (
    <div>
        <div>
          {ItemDetail.map((item) => (
          <Item key={item.id} {...item} />
        ))}
        </div>
    </div>
  )
}

export default home