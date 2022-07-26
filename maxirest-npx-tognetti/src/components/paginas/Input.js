import React from 'react'

export const Input = () => {

    const inputHandler = (event) =>{
        event.preventDefault()
        console.log(event)

}

  return (
    <div className="box">
    
        <div className="border border-1 border-warning">
            <input className="m-5"
            onClick= { inputHandler }
            type="text"
            name="nombre"
            id="i"/>
            
        </div>
    
    </div>
  )
}
