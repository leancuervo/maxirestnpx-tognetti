import React from 'react'

import PropGreeting from './PropGreeting'

const ItemListContainer =({ greeting }) => {
  return(
    <div>{greeting}</div>
  )
}




// const ItemListContainer = () => {

//     const saludo =()=> {
//         alert('Bienvenido')
//     }

//   return (

//     <div>
//         <PropGreeting/>
//       ItemListContainer
//     </div>
//   )
// }

export default ItemListContainer