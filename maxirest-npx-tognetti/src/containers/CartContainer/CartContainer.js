import React from 'react'
import { useCartContext } from '../../context/CartContext'

const CartContainer = () => {
    const {cartList, vaciarCarrito, eliminarProducto} = useCartContext()
  return (
    <div>
        {cartList.map(producto => <li>
                                        {producto.name} {producto.price} {producto.stock}
                                        <button onClick={() => eliminarProducto(producto.id)}>Borrar</button>
                                  </li>)}
        <button onClick={vaciarCarrito}>Vaciar</button>

        <div>
            <label htmlFor="" className='alert alert-danger'>
              blablabla
            </label>
        </div>

    </div>
  )
}

export default CartContainer