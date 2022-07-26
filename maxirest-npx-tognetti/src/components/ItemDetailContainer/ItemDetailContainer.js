import React from 'react'

const ItemDetailContainer = () => {

    const [result, setResult] = useState ({ results :[]})

    
    useEffect(() => {
        fetch('')
        .then (resp => resp.json())
        .catch(json => setResult(json)) 
      
    }, [])
    


  return (
    <div>{result.results.slice(0,10).map(item => <div>{item.title}</div>)}</div>
  )
}

export default ItemDetailContainer