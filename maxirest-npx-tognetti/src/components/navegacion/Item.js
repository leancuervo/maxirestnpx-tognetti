import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';


// const promesa = () => useState ([])
// const productos = [
//     {id: 1, name: "trufa", price:150, stock: 5 },
//     {id: 2, name: "aceite de oliva", price:20, stock: 10 },
//     {id: 3, name: "papa", price:10, stock: 2 },

// ]

// const task = new Promise ((res, rej) => {
//     setTimeout(()=>
//     {
//         res(productos)
//     }, 2000)
// })

// useEffect(() => {

//     task.then (res => setItems(res))
//     .catch(error => console.log(error))

// }, [])

// // useEffect(() => {

// //     getTask()


// // }, [])

// // const getTask = async () => {
// //     try {
// //         let res = await task
// //         setItems(res)
// //     } catch (error) {
// //         console.log (error)
// //     }
// // }

// console.log (items)

const Item = ({item}) => {
    const onAdd = (count) =>{
          alert('Pedido de ' + name + ' por: ' + count + ' kg')
    }
    const { name, price, stock, image } = item
    return (
        <Card style={{ width: '18rem', margin: 20 }}>
      <Card.Img variant="top" src= {image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            $:{price}
            <br />
            Disponible: {stock}
        </Card.Text>
        <Button variant="primary">Mas Info</Button>
        <ItemCount initial={1} stock={10} onAdd={onAdd} /> 
      </Card.Body>
    </Card>
    )
}

export default Item

