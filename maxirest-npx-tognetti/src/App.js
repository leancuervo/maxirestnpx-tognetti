import './App.css';
import {  BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import { Suspense } from 'react';
import CartContextProvider, { CartContext } from './context/CartContext';
import CartContainer from './containers/CartContainer/CartContainer';

// const ItemDetailContainer = lazy(() => import('./containers/ItemDetailContainer/ItemDetailContainer'))

function App() {

  let saludo = 'Hola!'

  return (
    <BrowserRouter>
      <CartContextProvider>
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
                <Route path='/cart' element={<CartContainer/>}/>
                <Route path='*' element={<Navigate to='/'/>}/>
                

                {/* <ItemListContainer /> */}
            </Routes>
              
          </div>
      </CartContextProvider>
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



