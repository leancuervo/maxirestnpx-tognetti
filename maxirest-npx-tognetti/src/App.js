import './App.css';
import {BrowserRouter as  Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import Inicio from './components/paginas/Inicio'

import ComponenteClase from './ComponenteClase';
import ItemListContainer from './components/navegacion/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <ItemListContainer/>
      </Router>
    </div>
  );
}



export default App;
