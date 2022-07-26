import React, { useState } from 'react'
import Productos from '../Productos'

const ItemList = ({items}) => {

      let [productos, setProductos] = useState ([]);

      useEffect (() => {
        let promesa = productos(true, 2000);
        promesa.then (( response) => {
          setProductos (response);
          console.log(productos);
        });
      },[])

  return (
    <div>
      <p>Esta es la lista de Items</p>
      <p>Cargando. . . </p>
      <div>
        {productos?.map(function(producto){
          return < Item key = {producto.id} item = {producto} />
        })}
      </div>
    </div>
    // <div style={{ display: 'flex', justifyContent: 'center', flexWarp: 'wrap'}}>
    //     {items.map(item => <Item item={item} key={item.id}/>)}
    // </div>
  )
}

export default ItemList