import React from 'react'
import { useCartContext } from '../../context/CartContext'

const CartContainer = () => {
    const {cartList, vaciarCarrito} = useCartContext()
  return (
    <div>
        {cartList.map(producto => <li>{producto.name} {producto.price} {producto.stock}</li>)}
        <button onClick={vaciarCarrito}>Vaciar</button>
    </div>
  )
}

export default CartContainer