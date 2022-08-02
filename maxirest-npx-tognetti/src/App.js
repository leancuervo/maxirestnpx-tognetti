import './App.css';
import {  BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import { Suspense } from 'react';
import { CartContext } from './context/CartContext';


function App() {

  let saludo = 'Hola!'

  return (
    <BrowserRouter>
      <CartContext.Provider>
          <div className="App border border-1 border-danger">
            <Navbar />
            <Routes>
                <Route index path='/' element={<ItemListContainer/>} />
                <Route index path='/categoria/:categoriaId' element={<ItemListContainer/>} />
                <Route path='/detalle/:productoId' element ={
                  <Suspense fallback={<div>Cargando...</div>}>
                    <ItemListContainer/>
                  </Suspense>
                } />
                {/* <Route path='/cart' element={<CartContainer/>}/> */}
                <Route path='*' element={<Navigate to='/'/>}/>
                

                {/* <ItemListContainer /> */}
            </Routes>
              
          </div>
      </CartContext.Provider>
    </BrowserRouter>
    
  );
}


// {/* <Routes>
//   <Route index path='/' element={ <ItemListContainer />}/>
//   <Route index path='/categoria/:categoriaId' element={ <ItemListContainer />}/>

//   <Route path='/detalle/productoId' element={
//     <Suspense fallback={<div> Cargando. . .</div>}>
//       <ItemDetailContainer/>
//     </Suspense>
//   } />
//   <Route path='/cart' element={<CartContainer />}/>
//   <Route path='*' element={<Navigate to='/' />}/>

// </Routes> */}


export default App;



