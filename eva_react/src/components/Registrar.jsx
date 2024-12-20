import React, { useState, useEffect } from 'react'

export const Registrar = () => {

  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registrosls");
    if(datos){
      return JSON.parse(datos);
    }else{
      return[];
    }
  }

  const [registrosls, setRegistrosLS] = useState(obtenerRegistros());

  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [tipoe, setTipoE] = useState("");
  const [nombrep, setNombreP] = useState("");
  const [pais, setPais] = useState("");
  const [disponibilidad, setDisponibilidad] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [tipop, setTipoP] = useState("");
  const [tipoc, setTipoC] = useState("");
  const [tamaño, setTamaño] = useState("");

  const botonRegistrar = (e) => {
    e.preventDefault();
    var miObjeto = {id, nombre, marca, tipoe, nombrep, pais, disponibilidad, cantidad, precio, tipop, tipoc, tamaño}
    setRegistrosLS([...registrosls, miObjeto]);
    limpiarFormulario();
  }

  const limpiarFormulario = () => {
    setId("");
    setNombre("");
    setMarca("");
    setTipoE("");
    setNombreP("");
    setPais("");
    setDisponibilidad("");
    setCantidad("");
    setPrecio("");
    setTipoP("");
    setTipoC("");
    setTamaño("");
    document.getElementById("miFormulario").reset();
  }

  useEffect(() =>{
    localStorage.setItem("registrosls",JSON.stringify(registrosls));
  }, [registrosls]);



  return (

    <div className="bg-light" style={{marginTop:20, padding:20}}>

    <div className="h3">
      Formulario De Registro De Productos
      <br/>
      <form id="miFormulario"  >
        <div className="row" style={{marginTop:20}}>
          <div className="col-4">
            <label for="txtid" class="form-label" style={{fontSize:20}}>Identificador</label>
            <input className="form-control form-control-lg text-center" type="number"  min="1"  onChange={(e)=>setId(e.target.value)} required  />
          </div>

          <div className="col-4">
            <label for="txtnom" class="form-label" style={{fontSize:20}}>Nombre</label>
            <input className="form-control form-control-lg text-center" type="text"  onChange={(e)=>setNombre(e.target.value)}  required  />
          </div>

          <div className="col-4">
            <label for="txtmar" class="form-label" style={{fontSize:20}}>Marca</label>
            <input className="form-control form-control-lg text-center" type="text"  onChange={(e)=>setMarca(e.target.value)}   required  />
          </div>
        </div>
        
        <div className="row" style={{marginTop:20}}>
          <div className="col-4">
            <label for="txten" class="form-label" style={{fontSize:20}}>Tipo de Envase</label>
            <input className="form-control form-control-lg text-center" type="text"   onChange={(e)=>setTipoE(e.target.value)}  required  />
          </div>

          <div className="col-4">
            <label for="txtnomp" class="form-label" style={{fontSize:20}}>Nombre de Proveedor</label>
            <input className="form-control form-control-lg text-center" type="text"  onChange={(e)=>setNombreP(e.target.value)}  required  />
          </div>

          <div className="col-4">
          <label for="selpai" class="form-label" style={{fontSize:20}}>Indique Pais de Importacion</label>
                <select className="form-select form-select-lg text-center" id="selpai"  onChange={(e)=>setPais(e.target.value)}  required  >
                  <option value="">SELECCIONE UNA OPCION</option>
                  <option value="CHINA">CHINA</option>
                  <option value="ALEMANIA">ALEMANIA</option>
                  <option value="INGLATERRA">INGLATERRA</option>
                  <option value="ESTADOS UNIDOS">ESTADOS UNIDOS</option>
                  <option value="ARGENTINA">ARGENTINA</option>
                </select>
              </div>
        </div>

        <div className="row" style={{marginTop:20}}>
          <div className="col-4">
          <label for="iddis" class="form-label" style={{fontSize:20}}>Indique Disponibilidad </label>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="opdis" id="op1" value="SI" style={{width:15,height:15}}  onChange={(e)=>setDisponibilidad(e.target.value)}  required/>
                <label className="form-check-label" htmlFor="op1" style={{fontSize:18,float:'left'}} >Disponible</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="opdis" id="op2" value="NO"  style={{width:15,height:15}}  onChange={(e)=>setDisponibilidad(e.target.value)} required />
                <label className="form-check-label" htmlFor="op2" style={{fontSize:18,float:'left'}} >No Disponible</label>
              </div>
          </div>

          <div className="col-4">
            <label for="txtcan" class="form-label" style={{fontSize:20}}>Cantidad</label>
            <input className="form-control form-control-lg text-center" type="number" min="1" max="100" required  onChange={(e)=>setCantidad(e.target.value)}  />
          </div>

          <div className="col-4">
            <label for="txtpre" class="form-label" style={{fontSize:20}}>Precio</label>
            <input className="form-control form-control-lg text-center" type="number"  min="1" required  onChange={(e)=>setPrecio(e.target.value)}  />
          </div>
        </div>

        <div className="row" style={{marginTop:20}}>
        <div className="col-4">
          <label for="tippro" class="form-label" style={{fontSize:20}}>Indique el Tipo de Producto</label>
                <select className="form-select form-select-lg text-center" id="tippro"  onChange={(e)=>setTipoP(e.target.value)}  required  >
                  <option value="">SELECCIONE UNA OPCION</option>
                    <option value="SNACK">SNACK</option>
                    <option value="BEBESTIBLE">BEBESTIBLE</option>
                    <option value="CONSERVANTES">CONSERVANTES</option>
                </select>
              </div>

              <div className="col-4">
                <label for="idcon" class="form-label" style={{fontSize:20}}>Indique Tipo de Contenido </label>
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="opcon" id="op1" value="GRAMOS" style={{width:15,height:15}}  onChange={(e)=>setTipoC(e.target.value)}  required/>
                      <label className="form-check-label" htmlFor="op1" style={{fontSize:18,float:'left'}} >Gramos</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="opcon" id="op2" value="LITROS"  style={{width:15,height:15}}  onChange={(e)=>setTipoC(e.target.value)} required />
                      <label className="form-check-label" htmlFor="op2" style={{fontSize:18,float:'left'}} >Litros</label>
                    </div>
                </div>

          <div className="col-4">
          <label for="tam" class="form-label" style={{fontSize:20}}>Indique el Tamaño</label>
                <select className="form-select form-select-lg text-center" id="tam"  onChange={(e)=>setTamaño(e.target.value)}  required  >
                  <option value="">SELECCIONE UN TAMAÑO</option>
                  <option value="PEQUEÑA">PEQUEÑA</option>
                  <option value="MEDIANA">MEDIANA</option>
                  <option value="GRANDE">GRANDE</option>
                  <option value="750 CC ">750 CC</option>
                  <option value="1 LITRO">1 LITRO</option>
                  <option value="2 LITROS">2 LITROS</option>
                  <option value="3 LITROS">3 LITROS</option>
                </select>
              </div>
        </div>

        <div className="row" style={{marginTop:20,padding:20}}>
          <div className="col">
            <button className="btn btn-primary btn-lg" onClick={ botonRegistrar } >Registrar</button>
          </div>
        </div>
      </form>
    </div>
            
  </div>
            
  )
}
