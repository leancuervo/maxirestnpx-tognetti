import './App.css';
import {BrowserRouter as  Router, Switch, Route, BrowserRouter, Routes} from 'react-router-dom'
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
    
        <div className="App">
          <Router>
            <Navbar/>
            <ItemListContainer greeting='Bienvenido a Maxirest'/>
            <ItemDetailContainer/>
          </Router>
        </div>
    
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
