import { useState } from 'react'
import './style.css'

function NavBar() {

  function DropDown(props){
    return(
    <li className='DropDown'>
      <a>{props.txt}</a>
    </li>
    )
  }


  return (
    <>

<nav className="navbar navbar-expand-lg IMFURCOLOR sticky ">
  <div className="container-fluid ">
  <a className="navbar-brand" href="#"><img src='./src/assets/IMFUR-Logo-NOBACK.png' className='img-fluid' width="60"></img></a>
    <a className="navbar-brand" href="#">IMFUR</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active colortxt" aria-current="page" href="#">Inicio</a>
        </li>
      <li className="nav-item">
      <a href="#" className='nav-link colortxt'>Eventos</a>
      </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">PawerCon 2024</a>
        </li>
        </ul>
        <ul className='navbar-nav mb-2 mb-lh-0 '>
          <li className='nav-item'><a className='nav-link active colortxt' href='#'>Registrarse</a>
          </li>
          <li className='nav-item'><a className='nav-link active colortxt' href='#'>Iniciar Sesión</a>
          </li>

          </ul>    
  </div>
  </div>
</nav>

    </>
  )
}

export default NavBar
