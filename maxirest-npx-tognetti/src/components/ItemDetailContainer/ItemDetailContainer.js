import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'


export const ItemDetailContainer = () => {


  const [itemsDetail, setItemsDetail] = useState([])
  const { detalleId } = useParams()
  // const [loading, setLoading] = useState(true, 2000)

      useEffect(() =>{
        if (detalleId) {
          
          fetch('https:/rickandmortyapi.com/api/character')
          .then(resp => setItemsDetail(resp.filter(item => item.detalle === detalleId))
          .catch(error => console.log(error)))
          // .finally(() => setLoading(false))
        }else{
            fetch('https:/rickandmortyapi.com/api/character')
            .then(resp => setItemsDetail(resp))
          }
        
      }, [detalleId])
    
       

console.table(detalleId)


        


        

    // const [data, setData] = useState({});

    // useEffect(() =>{
    //   const getData = new Promise ( resolve =>{
    //     setTimeout(() => {
    //       resolve(producto);
    //     }, 3000);
    //   });
    //   getData.then(res => setData(res))
    // }, [])
    
    
  return (
    
    <div style = {{textAlign:'center', marginTop: 200 }}>
      <ItemDetail itemsDetail={itemsDetail}/>
    </div>
  )
}

export default ItemDetailContainer