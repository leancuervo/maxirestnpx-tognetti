import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const producto = {id: 1, name: "trufa", price:150, stock: 5, image: 'https://definicion.de/wp-content/uploads/2012/11/trufa-1.jpg' }

export const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    useEffect(() =>{
      const getData = new Promise ( resolve =>{
        setTimeout(() => {
          resolve(producto);
        }, 3000);
      });
      getData.then(res => setData(res))
    }, [])
    
    
  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer