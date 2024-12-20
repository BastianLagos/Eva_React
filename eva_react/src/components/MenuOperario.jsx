import React ,{ useState } from 'react'
import { NavLink } from "react-router-dom"
import { Registrar } from "./Registrar"
import { Listar } from "./Listar"
import { Filtrado } from "./Filtrado"
import fen from "../images/fenixazul.jpg"

export const MenuOperario = (props) => {

  const [reg, setReg] = useState("");
  const [lis, setLis] = useState("");
  const [fil, setFil] = useState("");

  function cerrarSesion(){
    document.getElementById("caja_menu").style.display = "none";
    document.getElementById("form_login").style.display = "block";
    document.getElementById("txtusu").value = "";
    document.getElementById("txtpas").value = "";
    document.getElementById("perfil").value = "";
    document.getElementById("txtusu").focus();
  }

  function op_registrar(){
    setReg("1");
    setLis("0");
    setFil("0");
  }
  function op_listar(){
    setReg("0");
    setLis("1");
    setFil("0");
  }

  function op_filtrado(){
    setReg("0");
    setLis("0");
    setFil("1");
  }


  return (
    <>
        
    <div id="caja_menu" style={{textAlign:"left"}}>
              
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginTop:20}}>
      <div className="container-fluid">

        <img src={fen} alt="..." style={{width:80,height:80}}  />
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="" className="nav-link  h5  text-center" style={{paddingLeft:20}} onClick={ op_registrar } >Registrar</NavLink>
            <NavLink to="" className="nav-link  h5  text-center" style={{paddingLeft:20}} onClick={ op_listar } >Listar</NavLink>
            <NavLink to="" className="nav-link  h5  text-center" style={{paddingLeft:20}} onClick={ op_filtrado } >Filtros</NavLink>
            <a className="nav-link  h5  text-center" style={{paddingLeft:300}} >Usuario: {props.usu.toUpperCase()} </a>
            <a className="nav-link  h5  text-center" style={{paddingLeft:20}} >Perfil: {props.per} </a>
            <a className="nav-link  h5  text-center" style={{paddingLeft:20}} href=" " onClick={ cerrarSesion }  ><u>Cerrar Sesión</u></a>
          </div>
        </div>
      </div>
    </nav>
  </div>

  { reg === "1" && <Registrar/> }
  { lis === "1" && <Listar/> }
  { fil === "1" && <Filtrado/> }

</>
  
  )
}
