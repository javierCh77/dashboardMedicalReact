import React from 'react'
import './crearAfiliado.css'

export default function CrearAfiliado() {
  return (
    <div>
    <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Crear Afiliado</button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Alta de Afiliado</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body"> 
                <div className='container-datos gap-4'>
                    <div className='datos1'>   
                        <div class="col-4 mb-3">
                            <label for="recipient-name" class="col-form-label">Nombre</label>
                            <input type="text" class="form-control" id="recipient-name"/>
                        </div>
                        <div class="col-2 mb-3">
                            <label for="recipient-name" class="col-form-label">Apellido</label>
                            <input type="text" class="form-control" id="recipient-name"/>
                        </div>
                        <div class="col-2 mb-3">
                            <label for="recipient-name" class="col-form-label">D.N.I</label>
                            <input type="text" class="form-control" id="recipient-name"/>
                        </div>
                        <div class="col-2 mb-3">
                            <label for="recipient-name" class="col-form-label">Fecha Nacimiento</label>
                            <input type="date" class="form-control" id="recipient-name"/>
                        </div>
                    </div>
                    <div className='datos2'>   
                        <div class="col-2 mb-3">
                            <label for="recipient-name" class="col-form-label">Cuil</label>
                            <input type="text" class="form-control" id="recipient-name"/>
                        </div>
                        <div class="col-2 mb-3">
                            <label for="recipient-name" class="col-form-label">Domicilio</label>
                            <input type="text" class="form-control" id="recipient-name"/>
                        </div>
                        <div class="col-4 mb-3">
                            <label for="recipient-name" class="col-form-label">Email</label>
                            <input type="mail" class="form-control" id="recipient-name"/>
                        </div> 
                        <div class="col-2 mb-3">
                            <label for="recipient-name" class="col-form-label">Sexo</label>
                            <select class="form-select" aria-label="Default select example">
                            <option selected>Seleccione</option>
                                <option value="1">Masculino</option>
                                <option value="2">Femenino</option>
                                <option value="3">No binario</option>
                                <option value="3">Prefiero no decirlo</option>
                            </select>
                        </div>
                    </div>

                    <div className='datos3'>   
                        <div class="col-2 mb-3">
                            <label for="recipient-name" class="col-form-label">Planta</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Seleccione</option>
                                <option value="1">Planta 2</option>
                                <option value="2">Planta 3</option>
                                <option value="3">Planta 5</option>
                                <option value="3">Planta 6</option>
                            </select>
                        </div>
                        <div class="col-2 mb-3">
                            <label for="recipient-name" class="col-form-label">Ingreso</label>
                            <input type="date" class="form-control" id="recipient-name"/>
                        </div>
                        <div class="col-2 mb-3">
                            <label for="recipient-name" class="col-form-label">Turno</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Seleccione</option>
                                <option value="1">Turno Manaña</option>
                                <option value="2">Turno Tarde</option>
                                <option value="3">Turno noche</option>
                            </select>
                        </div> 
                        <div class="col-4 mb-3">
                            <label for="recipient-name" class="col-form-label">Celular</label>
                            <input type="txt" class="form-control" id="recipient-name"/>
                        </div>
                    </div>


                    <div className='datos4'>   
                        <div class="col-4 mb-3">
                            <label for="recipient-name" class="col-form-label">T-AF</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Seleccione</option>
                                <option value="1">Titular</option>
                            </select>
                        </div>
                        <div class="col-3 mb-3">
                            <label for="recipient-name" class="col-form-label">N-AF</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Seleccione</option>
                                <option value="1">E/T</option>
                            </select>
                        </div>
                        <div class="col-3 mb-3">
                            <label for="recipient-name" class="col-form-label">SIT</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Seleccione</option>
                                <option value="1">E/T</option>
                            </select>
                        </div>
            
                    </div>


                </div>
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-success">Crear afiliado</button>
            </div>
            </div>
             </div>
</div>
    </div>
  )
}
