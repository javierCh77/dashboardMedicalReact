import React from 'react'
import './login.css'
//import Particle from '../../components/Praticle';
//import login1 from '../assets/login1.svg';
import { Link } from "react-router-dom"
import  login  from '../../assets/login.svg'
import logos from '../../assets/logos.png'

function Login() {
  return (

<div className="container-login">
      <div>
         <img  className='container-logo'src={login} alt="" />
      </div>
       <div className='container-form'>
       <div className='container-title' >
         <img  className='logo-uom'src={logos} alt="" />
         <h3>Centro médico Eva Perón</h3>
      </div>
         <form  id="form"  >
            <div className="form-floating mb-3">
                <input type="email" formControlName="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" formControlName="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Contraseña</label>
              </div>
              <div className='reset-password'>
                  <Link id='link' to='/restore-password'>Olvidaste tu clave ?</Link>
              </div> 
              <div className="d-grid gap-2">
              <Link to={"/Dashboard"} className="btn btn-success btn-lg mb-3" type="submit">Ingresar</Link>
              </div>
              <p id='copy'><b>Developed by Javier Chavarria</b></p>
         </form>
       </div>        
</div>  
  )
}
// line 30 <Particle/>
export default Login