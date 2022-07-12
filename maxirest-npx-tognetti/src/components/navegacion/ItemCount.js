import React, { useState } from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] =useState(initial)

    const suma = () => {
      if (count < stock) {
        setCount(count + 1)
      } else {
        alert('¿Pedir mas del stock habitual?')
      }
    }

    
    const resta = () => {
      if (count > initial) {
      
        setCount(count - 1)

      }else {
        alert('Elegir al menos 1 unidad')
      }
    }


    return (
      <div> 
        
        <div className='border border-4 d-flex flex-row bd-highlight mb-3 justify-content-center' >

          <button type="button" className="btn btn-success"onClick={suma}> Sumar 1</button>
          <h1>{count}</h1>
          <button type="button" className="btn btn-warning"onClick={resta}>Eliminar 1</button>
          
          
        </div>
        <div className='border border-4 d-flex flex-row bd-highlight mb-3 justify-content-center' >

        <button type="button" class="btn btn-primary"onClick={() => onAdd(count)}>Agregar</button>
        
        </div>
      {/* // <div className="card" style="width: 18rem;">
      // <h1>{count}</h1>
      // <div className="card-body">
      //   
      //   
      //   
      // </div>
      // </div> */}
      </div>
      )
}

export default ItemCount