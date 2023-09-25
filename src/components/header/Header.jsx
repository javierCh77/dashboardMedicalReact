import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
//import logo uom
import logos from '../../assets/logos.png'
// importacion de los iconos
import users from '../../assets/users.svg'
import list from '../../assets/list.svg'
import stock from '../../assets/stock.svg'
import orders from '../../assets/orders.svg'
import history from '../../assets/history.svg'
import dental from '../../assets/dental.svg'

export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark fixed-top">
         <div class="container-fluid">
                <Link class="navbar-brand container-header" to={'/dashboard'}>
                    <div>
                      <img className='header-logo' src={logos} alt="" />
                    </div>
                    <div>
                        <h5>C.M.E.P</h5>
                    </div>
                    </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item" className='container-menu'>
                <img src={users} alt="" />
                <Link class="nav-link active" aria-current="page" to={"/afiliado"}>Afiliado</Link> 
            </li>
            <li class="nav-item"className='container-menu'>
                <img src={list} alt="" />
                <Link class="nav-link active" aria-current="page" to={"/padron"}>Padron</Link>
            </li>
            <li class="nav-item" className='container-menu'>
                <img src={orders} alt="" />
                <Link class="nav-link active" aria-current="page" to={"/insumos"}>Insumos</Link>
            </li>
            <li class="nav-item" className='container-menu'>
                <img src={stock} alt="" />
                <Link class="nav-link active" aria-current="page" to={"/stock"}>Stock</Link>
            </li>
            <li class="nav-item" className='container-menu'>
                <img src={history} alt="" />
                <Link class="nav-link active" aria-current="page" to={"/historia-clinica"}>Historia clinica Odontologica</Link>
            </li>
            
            <li class="nav-item dropdown" className='container-menu'>
                <img src={dental} alt="" />
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Odontologia
                </a>
                <ul class="dropdown-menu dropdown-menu-dark">
                 <li><a class="dropdown-item disabled" >Grilla Profesionales</a></li>
                    <li>
                       <hr class="dropdown-divider"/>
                   </li>
                <li><Link class="dropdown-item" to={"/odontologia/rosa"}>DRA: Rosa Analia</Link></li>
                <li><Link class="dropdown-item" to={"/odontologia/blass"}>DRA: Blass</Link></li>
                <li><Link class="dropdown-item" to={"/odontologia/bernarth"}>DR: Bernarth</Link></li>

                </ul>
            </li>
            </ul>
                <form class="d-flex mt-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                <button class="btn btn-success" type="submit">Buscar</button>
                </form>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}
