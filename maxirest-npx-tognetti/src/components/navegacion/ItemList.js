import React, { useState } from 'react'

import Productos from '../helpers/Productos'
import Item from './Item'


const ItemList = ({items}) => {

      // let [productos, setProductos] = useState ([]);

      // useEffect (() => {
      //   let promesa = productos(true, 2000);
      //   promesa.then (( response) => {
      //     setProductos (response);
      //     console.log(productos);
      //   });
      // },[])

  return (
          <div style= { { display:'flex', flexDirection: 'row', justifyContent: 'center', flexWarp: 'warp'}}>
              {items.map( item => 
              
                      <Item item={item} key={item.id}/>

              )}
        </div>
    // <div style={{ display: 'flex', justifyContent: 'center', flexWarp: 'wrap'}}>
    //     {items.map(item => <Item item={item} key={item.id}/>)}
    // </div>
  )
}

export default ItemList