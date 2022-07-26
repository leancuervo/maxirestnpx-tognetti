import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ItemCount from '../navegacion/ItemCount';

const ItemDetail = () => {
  return (
          // <Carousel>
          //   <Carousel.Item>
          //     <img
          //       className="d-block w-100"
          //       src="holder.js/800x400?text=First slide&bg=373940"
          //       alt="First slide"
          //     />
          //     <Carousel.Caption>
          //       <h3>First slide label</h3>
          //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          //     </Carousel.Caption>
          //   </Carousel.Item>
          //   <Carousel.Item>
          //     <img
          //       className="d-block w-100"
          //       src="holder.js/800x400?text=Second slide&bg=282c34"
          //       alt="Second slide"
          //     />

          //     <Carousel.Caption>
          //       <h3>Second slide label</h3>
          //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          //     </Carousel.Caption>
          //   </Carousel.Item>
          //   <Carousel.Item>
          //     <img
          //       className="d-block w-100"
          //       src="holder.js/800x400?text=Third slide&bg=20232a"
          //       alt="Third slide"
          //     />

          //     <Carousel.Caption>
          //       <h3>Third slide label</h3>
          //       <p>
          //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          //       </p>
          //     </Carousel.Caption>
          //   </Carousel.Item>
          // </Carousel>

          <div className='row'>
              <div className='col'>
                  <div className='row'>
                      <div className='col'>
                          <img src= {Producto.image} alt={Producto.name} className="w-100" />
                      </div>    
                      <div className='col'>
                        <h2>Nombre: {productos.name}</h2>
                        <p>Precio: {productos.price} </p>
                        <p>Stock: {productos.stock}</p>
                      </div>
                  </div>
              </div>
              <div className='col'>
                <ItemCount initial={1} stock={5} onAdd={onAdd} />
              </div>
          </div>
  )
}

export default ItemDetail