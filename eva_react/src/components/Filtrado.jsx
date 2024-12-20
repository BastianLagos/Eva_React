import React, { useState, useEffect } from 'react'

export const Filtrado = () => {

  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registrosls");
    if(datos){
      return JSON.parse(datos);
    }else{
      return[];
    }
  }

  const [registrosls, setRegistrosLS] = useState(obtenerRegistros());

  const botonEliminar = (miIdp) => {
    if(window.confirm("¿Estas seguro que deseas eliminar el registro?")){
      var registrosFiltrados = registrosls.filter((e, index) =>{
        return miIdp !== index
      });
      setRegistrosLS(registrosFiltrados);
    }
  }

  const [nomfil, setNombreFiltrado] = useState("");

  function botonFiltrar(){
    var registrosFiltrados = registrosls.filter((e, nombre) =>{
      return nomfil === nombre
    });
    setRegistrosLS(registrosFiltrados);
  }

  function cantidadRegistros(){
    var resultado = registrosls.length;

    return resultado
  }

  useEffect(()=>{
    localStorage.setItem("registrosls",JSON.stringify(registrosls))
  },[registrosls])

  return (
    <div className="bg-light" style={{marginTop:20, padding:20}}>

    <div className="h3">
      Listado Filtrado De Productos
    </div>

    <div className="table-responsive">
      
      { registrosls.length > 0 ? 

      <>

        <div className="row g-3 align-items-center" style={{marginTop:20, padding:20}}>
          <div class="col-2">
            <label for="txtnom" className="form-label" style={{fontSize:20}}><strong>Nombre : </strong></label>
          </div>
          <div class="col-7">
            <input type="text" id="nomfil" class="form-control" onChange={(e)=>setNombreFiltrado(e.target.value)}/>
          </div>
          <div class="col-3">
            <button className="btn btn-primary btn-lg" onClick={botonFiltrar} style={{paddingLeft:30,paddingRight:30,paddingTop:15,paddingBottom:15}} >Filtrar</button>
          </div>
        </div>

        <table className="table table-bordered table-hover" style={{marginTop:12}}>
            <thead className="text-center" style={{background:"lightgray"}}>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Marca</th>
                    <th>Tipo de Envase</th>
                    <th>Nombre Proveedor</th>
                    <th>Pais de Importación</th>
                    <th>Disponibilidad</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Tipo de Producto</th>
                    <th>Tipo de Contenido</th>
                    <th>Tamaño</th>
                    <th>ELIMINAR</th>
                </tr>
            </thead>
            <tbody className="text-center align-baseline">
                {
                  registrosls.map((x, index) => (
                    <tr key={index}>
                      <th> { x.id } </th>
                      <td> { x.nombre } </td>
                      <td> { x.marca } </td>
                      <td> { x.tipoe } </td>
                      <td> { x.nombrep } </td>
                      <td> { x.pais } </td>
                      <td> { x.disponibilidad } </td>
                      <td> { x.cantidad } </td>
                      <td> { x.precio } </td>
                      <td> { x.tipop } </td>
                      <td> { x.tipoc } </td>
                      <td> { x.tamaño } </td>
                      <td className='text-center'>
                        <button className='btn btn-outline-danger' onClick={()=>botonEliminar(index)}>
                        <i class="bi bi-trash3-fill"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                }
            </tbody>
        </table>

        <div className="row row-cols-1 row-cols-md-3 g-2 container" style={{padding:5, width:"90%", margin:"0 auto",textAlign:"center"}}>
            <div className="col container">
              <div className="card container">
                <div className="card-body container">
                  <h5 className="card-title">Cantidad de Registros</h5>
                  <p className="card-text"> {cantidadRegistros()} </p>
                </div>
              </div>
            </div>
          </div>
      </> 
      
      : <p className="h5" style={{color:"red"}}>"NO HAY REGISTROS PARA FILTRAR!!"</p>
      }
    </div>
 
  </div>
  )
}

