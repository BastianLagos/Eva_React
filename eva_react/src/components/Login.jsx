import React, { useState } from 'react'
import { MenuJefe } from "./MenuJefe"
import { MenuOperario } from "./MenuOperario"

export const Login = () => {

  const [miLogin, setLogin] = useState("false");
  const [car, setCargo] = useState("0")
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");
  const [per, setPer] = useState("");

  function iniciarSesion(e){
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;
    var perfil = document.getElementById("perfil").value;
    if(txtusu.length===0 || txtpas.length===0 || perfil.length===0){
      alert("Complete Los Datos Que Faltan!!")
    }else{
      if(usu === "jperez" && pas=== "123456" && per==="JEFE"){
        setLogin("true");
        setCargo("1");
        document.getElementById("form_login").style.display = "none";
      }else if(usu === "msoto" && pas=== "654321" && per==="OPERARIO"){
        setLogin("true");
        setCargo("2");
        document.getElementById("form_login").style.display = "none";
      }else{
        setLogin("false");
        alert("Error de Usuario y/o Contraseña y/o Perfil")
        document.getElementById("txtusu").value="";
        document.getElementById("txtpas").value="";
        document.getElementById("perfil").value="";
        document.getElementById("txtusu").focus();
      }
    }
  }

  return (
    <div className="container" style={{background:"lightgray", marginTop:20, padding:20}}>
        
    

    <form id="form_login">
        <div>
            <h1 style={{color:"blue"}}>INICIO DE SESION</h1>
            <label className="container" htmlFor="txtusu" style={{float:"left"}}><strong>LOGIN</strong></label>
            <input type="text" id="txtusu" style={{width:"20%", textAlign:"center"}} className="form-control container" onChange={ (e)=>setUsu(e.target.value)} required/>
        </div>
        <div>
            <label htmlFor="txtpas" className="container" style={{float:"left",paddingTop:20}}><strong>PASSWORD</strong></label>
            <input type="password" id="txtpas" style={{width:"20%", textAlign:"center"}} className="form-control container" onChange={ (e)=>setPas(e.target.value)} required/>
        </div><br/>
        <label for="perfil" className="form-label container" style={{float:"left"}}><strong>PERFIL</strong></label>
                    <div className="row">
                        <div className="col">
                            <select className="form-select container" id="perfil" style={{width:"20%", textAlign:"center"}} onChange={ (e)=>setPer(e.target.value)}>
                                <option value="">SELECCIONE</option>
                                <option value="JEFE">JEFE</option>
                                <option value="OPERARIO">OPERARIO</option>
                            </select>
                        </div>
                    </div>
        <input type="submit" className="btn btn-primary" value="Login" style={{marginTop:20}} onClick={ iniciarSesion }/>
    </form>

    { car === "1" && <MenuJefe usu={usu} per={per}/> }
    { car === "2" && <MenuOperario usu={usu} per={per}/> }
    
    </div>
  )
}

//    { car === "1" && <MenuJefe usu={usu} per={per}/> }
//  { car === "2" && <MenuOperario usu={usu} per={per}/> }