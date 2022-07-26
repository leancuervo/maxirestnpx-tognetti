import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import Item from './Item'
import ItemList from './ItemList'
import {getFetch} from "../../"
import Productos from './Productos'
// import ItemCount from './ItemCount'


const ItemListContainer = ({ greeting }) => {

        const [productos, setProductos] = useState([])
        const {categoriaId} = useParams()

        useEffect(() =>{
        if (categoriaId){
          getFetch()
          .then(resp => setProductos(resp.filter (productos => productos.categoria === categoriaId)))

        }else {
          getFetch()
          .then(resp=> setProductos(resp))
        }}, [categoriaId])

        console.table(categoriaId)
        
        
        return(
          <div style= { { display:'flex', flexDirection: 'row', flexWarp: 'warp'}}>
              {productos?.map( prod => 
              
                      <div key = {prod.id} className='col-md-4 p-1'> 

                          <div className='card w-100 mt-5'> 
                          
                            <div className= "card-header">
                            {`${prod.name} - ${prod.stock}`}  
                            </div>
                            <div className='card-body'>
                            <center>
                              <img src={prod.imag} alt={prod.name} className='w-50'></img>  
                            </center>  
                            </div>
                          </div>

                      </div> 

              )}
            </div>
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