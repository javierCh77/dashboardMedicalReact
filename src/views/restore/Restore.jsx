import React from 'react'
import './restore.css'

import { Link } from "react-router-dom"
import  password  from '../../assets/password.svg'
import logos from '../../assets/logos.png'

function Restore() {
  return (

<div className="container-restore">
      <div>
         <img  className='container-logo-restore'src={password} alt="" />
      </div>
       <div className='container-form-restore'>
             <div className='container-title-restore' >
                 <img  className='logo-password'src={logos} alt="" />
                 <h3>Recuperar contraseña</h3>
             </div>
         <form  id="form"  >
            <div className="form-floating mb-3">
                <input type="email" formControlName="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email</label>
              </div>
              <div className="d-grid gap-2">
              <Link to={"/login"} className="btn btn-success btn-lg mb-3" type="submit">Recuperar contraseña</Link>
              </div>
              <p id='copy'><b>Developed by Javier Chavarria</b></p>
         </form>
       </div>        
</div>  
  )
}
// line 30 <Particle/>
export default Restore;