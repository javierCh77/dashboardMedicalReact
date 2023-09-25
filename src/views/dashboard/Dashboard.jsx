import React from 'react'
import '../global.css'
// import componentes 
import Header from '../../components/header/Header'


export default function Dashboard() {
  return (
    <div className='container-dashboard'>
    <div className='header'>
      <Header />
     </div>
    <div className='dashboard'>
      <div className='title'>
          <h3>Dashboard</h3>
      </div> 
      <div className='content'>
          <h2>Data Management System</h2>
          <p>Sistema de gestion y datos sanatorial centro medico eva peron ushuaia by <b>Javier Chavarria</b></p>
          <hr />
          <h4>Funcionabilidades: </h4>
            <ul>
              <li><b>Afiliado:</b>  Vas a poder realizar pedidos a planta 3 referentes a insumos y consumibles a su ves el seguimiento del mismo.</li>
              <li><b>Envios:</b>  Vas a poder informar sobre un despacho hacia otras plantas y su estado.</li>
              <li><b>Documentación:</b>  Acceso a la ultima informacion y manuales vigente para NPI y nuevas tecnologias.</li>
              <li><b>Archivos:</b>  Encontraras todos los archivos para update y script de estaciones de Testing.</li>
              <li><b>Reportes:</b>  Encontraras reportes en tiempo real sobre metricas de NTF sobre lineas.</li>
              <li><b>Estadisticas:</b> Informacion sobre lineas de produccion y rendimientos.</li>
             </ul>
            
      </div>
    </div>
</div>
  )
}
