import React from 'react'
import ItemCount from './ItemCount'


const ItemListContainer = ({ greeting }) => {

    

    const onAdd = (count) =>{
      alert('Pedido de zzzz por: ' + count + ' kg')
    }

    return(
      
  
      <div style= {{ textAlign:'center', marginTop: 50}}>
        {greeting} <br></br>
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
      </div>
    )

}


export default ItemListContainer