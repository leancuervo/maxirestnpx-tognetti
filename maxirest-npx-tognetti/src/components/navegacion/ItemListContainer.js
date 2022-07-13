import React, { useEffect, useState } from 'react'
import Item from './Item'
import ItemList from './ItemList'
// import ItemCount from './ItemCount'


const ItemListContainer = ({ greeting }) => {

        // const onAdd = (count) =>{
        //   alert('Pedido de zzzz por: ' + count + ' kg')
        // }
            
        const[items, setItems ] = useState ([])
        

        const productos = [
            {id: 1, name: "trufa", price:150, stock: 5, image: 'https://definicion.de/wp-content/uploads/2012/11/trufa-1.jpg' },
            {id: 2, name: "aceite de oliva", price:20, stock: 10, image: 'https://http2.mlstatic.com/D_NQ_NP_841076-MLA43642883689_102020-V.jpg' },
            {id: 3, name: "papa", price:10, stock: 2, image: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2019/09/papa.jpg?resize=1080%2C608&quality=80&ssl=1'},

        ]

        const task = new Promise ((res, rej) => {
            setTimeout(()=>
            {
                res(productos)
            }, 2000)
        })

        useEffect(() => {

            task
                .then (res => setItems(res))
                .catch(error => console.log(error))

        }, [])
        



        console.log (items)


          return(
            
        
            <div style= {{ textAlign:'center', marginTop: 50}}>
              {greeting} 
              {/* <ItemCount initial={1} stock={10} onAdd={onAdd} /> */}
              <ItemList items ={items} />
            </div>
          )

    }       



export default ItemListContainer