import './App.css';
import {BrowserRouter as  Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import Inicio from './components/paginas/Inicio'
import ComponenteClase from './ComponenteClase';
import ItemListContainer from './components/navegacion/ItemListContainer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <ItemListContainer greeting='Bienvenido a Maxirest'/>
        
      </Router>
    </div>
  );
}



export default App;
