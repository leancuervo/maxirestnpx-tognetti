import React, {useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import {getFetch} from '../../components/helpers/getFetch'
import {Productos} from '../../components/helpers/Productos'


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState ({})
  const {productoId} = useParams()

  useEffect( () =>{
        getFetch(productoId)
        .then (data => setProducto(data))
  }, [productoId])





  
  return (
    
  <div style = {{textAlign:'center', marginTop: 200 }}>
    <ItemDetail producto={producto}/>
    {/* { detalleId.map(prod =><ItemDetail key={prod.id} prod={prod}/>)} */}
  </div>
)
}

















export default ItemDetailContainer




// const [data, setData] = useState({});

// useEffect(() =>{
    //   const getData = new Promise ( resolve =>{
      //     setTimeout(() => {
        //       resolve(producto);
        //     }, 3000);
        //   });
        //   getData.then(res => setData(res))
        // }, [])
        
        
        
        //   const [itemsDetail, setItemsDetail] = useState([])
        //   const { detalleId } = useParams()
        //   const [loading, setLoading] = useState(true)
        
        //       useEffect(() =>{
        //         if (detalleId) {
                  
        //           getFetch()
        //           .then(resp => setItemsDetail(resp.filter(item => item.detalle === detalleId))
        //           .catch(error => console.log(error)))
        //           .finally(() => setLoading(false))
        //         }else{
        //           getFetch()
        //             .then(resp => setItemsDetail(resp))
        //             .catch(error => console.log(error))
        //             .finally( setLoading(false))
        //           }
                
        //       }, [detalleId])
            
        //       useEffect(()=>{
        //         getFetch()
              
        //     },[])
               
        
        // console.table(detalleId)