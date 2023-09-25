import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";
import './App.css'
// import de los componentes
import Login from './views/login/Login';
import Dashboard from './views/dashboard/Dashboard';
import Restore from './views/restore/Restore'
// import bs5
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// importacion de las vistas
import Afiliado from './views/afiliado/Afiliado'
import Padron from "./views/padron/Padron";
import Insumos from "./views/insumos/insumos";
import Stock from "./views/stock/Stock";
import HistoriaClinica from "./views/hc/HistoriaClinica";

// importacion de las grillas de medicos


function App() {
  return (
    <>
     <Router>
            <Routes> 
                <Route path="*" element = { < Login /> } />
                <Route path="/dashboard" element = { < Dashboard /> } />
                <Route path="/restore-password" element = { < Restore /> } />
                <Route path="/afiliado" element = { < Afiliado /> } />
                <Route path="/padron" element = { < Padron /> } />
                <Route path="/insumos" element = { < Insumos /> } />
                <Route path="/stock" element = { < Stock /> } />
                <Route path="/historia-clinica" element = { < HistoriaClinica /> } />
            </Routes>
        </Router>
    </>
  );
}

export default App;
 