import React, { useState, useEffect } from 'react';
// axions es para trabajar con json
import axios from 'axios';
import '../global.css'
import './afiliado.css'
// importo los modales de componente crear editar y borrar
import CrearAfiliado from '../../components/crearAfiliado/CrearAfiliado'

import Header from '../../components/header/Header'


export default function Afiliado() {
  const [data, setData] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    import('./afiliados.json')
    .then(response => {
      setData(response);
    })
    .catch(error => {
      console.error('Error al cargar los datos JSON:', error);
    });
}, []);

const fetchData = async () => {
  try {
    const response = await fetch("./afiliados.json");
    const jsonData = await response.json();
    setData(jsonData);
  } catch (error) {
    console.log("Error al obtener los datos de la API:", error);
  }
};


   const handleSearch = async () => {
     try {
       if (searchKeyword.trim() !== "") { // Evita hacer la búsqueda si el campo está vacío o contiene solo espacios en blanco
       const response = await fetch(`./afiliados.json/${searchKeyword}`);
       const jsonData = await response.json();
       setData(jsonData);
      } else {
        // Si el campo de búsqueda está vacío, vuelve a cargar todos los usuarios
        fetchData();
       }
      } catch (error) {
      console.log("Error al buscar los datos:", error);
  }
};

  return (
    <div className='container-afiliado'>
    <div className='header'>
      <Header />
     </div>
    <div className='afiliado'>
      <div className='title'>
          <h3>Afiliado</h3>
      </div> 

      <div className='container-form-buscar'>
          <div class="form-buscar">
            <div>
            <label htmlFor="">Buscar afiliado :</label>
            </div>
             <div class="d-flex mt-2" role="search">
                <input class="col-sm-12 form-control  input-buscar " 
                type="search" 
                id="clienteBuscar"
                placeholder="Ingrese el nombre o dni del afiliado a buscar"
                aria-label="Search"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                  
                  />
                <button class="btn btn-success" type="button" id='buscarCliente'  onClick={handleSearch}>BUSCAR</button>
             </div>
             <hr />
             <div className='form-button'>
                <CrearAfiliado />
                <button class="btn btn-outline-primary" type="submit"id='buscarCliente'><b>Editar Afiliado</b></button>
                <button class="btn btn-outline-danger" type="submit"id='buscarCliente'><b>Borrar Afiliado</b></button>
             </div>
             <hr />
             <div>
             </div>
           </div>

           <div class="test">
              <div>
                <h4 class="h4">Datos de afiliados</h4>
              </div>

                <div className='container-fluid d-flex'>
                  <table class="table">
                    <thead>
                      <tr class="table-primary">
                        <th scope="col">DNI</th>
                        <th scope="col">T-AF</th>
                        <th scope="col">N-AF</th>
                        <th scope="col">SIT</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">F.Nac</th>
                        <th scope="col">Cuil</th>
                        <th scope="col">Sexo</th>
                        <th scope="col">Ingreo</th>
                        <th scope="col">Domicilio</th>
                        <th scope="col">Celular</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Planta</th>
                        <th scope="col">Turno</th>
                      </tr>
                    </thead>
                    {data &&( 
                    <tbody >
                       {data.afiliados.map(afiliado => ( 
                      <tr scope="row" key={afiliado.id} >
                            <th>{afiliado.dni}</th>
                            <td>{afiliado.taf}</td>
                            <td>{afiliado.et}</td>
                            <td>{afiliado.sit}</td>
                            <td>{afiliado.nombre}</td>
                            <td>{afiliado.apellido}</td>
                            <td>{afiliado.fecha}</td>
                            <td>{afiliado.cuil}</td>
                            <td>{afiliado.sexo}</td>
                            <td>{afiliado.alta}</td>
                            <td>{afiliado.direccion}</td>
                            <td>{afiliado.celular}</td>
                            <td>{afiliado.email}</td>
                            <td>{afiliado.planta}</td>
                            <td>{afiliado.turno}</td>
                      </tr>
                      ))}
                    </tbody>
                    )}
                </table>
                </div>
             </div> 
      </div>
    </div>
</div>
  )
}
