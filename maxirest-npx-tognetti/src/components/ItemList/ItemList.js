import React, { useEffect, useState } from 'react'
import { getFetch } from '../helpers/getFetch'
import Productos from '../helpers/Productos'
import Item from '../navegacion/Item'


const ItemList = ({products}) => {

       let [productos, setProductos] = useState ([]);

       useEffect (() => {
         let promesa = Productos(true, 2000);
         promesa.then (( response) => {
           setProductos (response);
           console.log(productos);
         });
       },[])

  return (
          <div style= { { display:'flex', flexDirection: 'row', justifyContent: 'center', flexWarp: 'warp'}}>
              {productos.map( item => 
              
                      <Item item={item} key={item.id}/>

              )}
        </div>
    // <div style={{ display: 'flex', justifyContent: 'center', flexWarp: 'wrap'}}>
    //     {items.map(item => <Item item={item} key={item.id}/>)}
    // </div>
  )
}

export default ItemList