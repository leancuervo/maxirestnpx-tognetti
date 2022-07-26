import './App.css';
import {  BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import Inicio from './components/paginas/Inicio'
import ComponenteClase from './ComponenteClase';
import ItemListContainer from './components/navegacion/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Suspense } from 'react';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          
            <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting='Bienvenido a Maxirest'/>}/>
              <Route path='/detalle' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<CartContainer/>}/> 
              <Route path='*' element={<Navigate to='/'/>}/>

              
            </Routes>
          
        </div>
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
