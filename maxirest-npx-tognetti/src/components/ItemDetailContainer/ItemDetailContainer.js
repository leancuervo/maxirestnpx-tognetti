import React from 'react'

const ItemDetailContainer = () => {

    const [result, setResult] = useState ({ results :[]})

    
    useEffect(() => {
        fetch('html://pokeapi.co/api/v2/pokemon/?offset=20&limit=10')
        .then (resp => resp.json())
        .catch(json => setResult(json)) 
      
    }, [])
    


  return (
    <div>{result.results.slice(0,10).map(item => <div>{item.title}</div>)}</div>
  )
}

export default ItemDetailContainer