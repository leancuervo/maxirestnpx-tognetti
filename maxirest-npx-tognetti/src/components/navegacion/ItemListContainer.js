import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import Item from './Item'
import ItemList from './ItemList'

import Productos from '../helpers/Productos'
// import ItemCount from './ItemCount'


const ItemListContainer = ({ greeting }) => {

        const [productos, setProductos] = useState([])
        const {categoriaId} = useParams()

        useEffect(() =>{
        if (categoriaId){
          getFetch()
          .then(resp => setProductos(resp.filter (productos => productos.categoria === categoriaId)))
          .catch(err => console.log(err))

        }else {
          getFetch()
          .then(resp=> setProductos(resp))
          .catch(err => console.log(err))
        }}, [categoriaId])

        console.table(categoriaId)
        
        
        return(
              <ItemList productos={productos}/>
            // loading ? 
            //     <h1>Aguarde un momento..</h1>:
            // <ItemList productos ={productos}/>
            // <div style= {{ textAlign:'center', marginTop: 50}}>
            //   {greeting} 
            //   {/* <ItemCount initial={1} stock={10} onAdd={onAdd} /> */}
            //   <ItemList items ={items} />
            // </div>
          )

    }       


    
    // const onAdd = (count) =>{
    //   alert('Pedido de zzzz por: ' + count + ' kg')
    // }
  //   const [productos, setProductos] = useState ([])
  //   const [loading, setLoading] = useState (true)
  //   const { categoriaId} = useParams()

  // useEffect(() => {
  //   if (categoriaId) {
  //     getFetch  ()
  //     .then(resp => setProductos(resp.filter(productos => productos.categoria === categoriaId)))
  //     .catch( err => console.log(err))
  //     .finaly (()=> setLoading(false))
  //   } else {
  //     getFetch()
  //     .then(resp => setProdutos(resp))
  //     .catch( err => console.log(err))
  //     .finaly (()=> setLoading(false))
  //   }
  
  // }, [categoriaId])
  

  //   const[items, setItems ] = useState ([])
    


  //   const task = new Promise ((res, rej) => {
  //       setTimeout(()=>
  //       {
  //           res(productos)
  //       }, 2000)
  //   })

  //   useEffect(() => {

  //       task
  //           .then (res => setItems(res))
  //           .catch(error => console.log(error))

  //   }, [])
    



  //   console.log (items)
export default ItemListContainer