let producto = [
        {id: '1', name: 'trufa', price:'150', stock: '5', categoria: 'caro' , image: 'https://definicion.de/wp-content/uploads/2012/11/trufa-1.jpg' },
        {id: '2', name: 'aceite de oliva', price:'20', categoria: 'aceites' , stock: '10', image: 'https://http2.mlstatic.com/D_NQ_NP_841076-MLA43642883689_102020-V.jpg' },
        {id: '3', name: 'papa', price:'10', stock: '2', categoria: 'tuberculo' , image: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2019/09/papa.jpg?resize=1080%2C608&quality=80&ssl=1'},
        {id: '4', name: 'asado', price:'100', stock: '20', categoria: 'carnes' , image: 'https://resizer.glanacion.com/resizer/YwJjC66xmnez5NY25Nm_6x_kNWA=/1920x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/P3I7EMRO7BBSBGC3TULJSQZG5Q.jpg' },
        {id: '5', name: 'harina', price:'5', stock: '35', categoria: 'secos', image: 'https://ardiaprod.vteximg.com.br/arquivos/ids/219870-1000-1000/Harina-000-Ca%C3%B1uelas-Ultra-Refinada-1-Kg-_1.jpg?v=637790488563100000' }
]

export const getFetch =() => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            if (id) {
                resolve(producto.find( prod => prod.id === id))
            } else {
                resolve(producto)
            }
        }, 2000)
    })
}


// import React, { useEffect, useState } from 'react'

// const getFetch = () => {

//   const [result, setResult] = useState ({result : []});

//       useEffect(() => {
//         fetch('/assets/Json/DATA.json')
//         .then(res => res.json())
//         .then(json => setResult(json))
//         .catch(err=> console.log(err))
      
        
//       }, []);
      

// return (
//   {result.slice(0,10).map(item => <div>{item.name}</div>)}
// )
// }

// export default getFetch