import React from 'react'

const GetFetch = () => {

    fetch('/assets/Json/DATA.json')
    .then(respuesta => {
        return respuesta.json()
    })
    .then (resp => console.table(resp.productos))
    .catch(err=> console.log(err))
    

  return (
    <div>GetFetch</div>
  )
}

export default GetFetch