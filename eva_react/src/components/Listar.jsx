import React, { useState, useEffect } from 'react'

export const Listar = () => {

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

  useEffect(()=>{
    localStorage.setItem("registrosls",JSON.stringify(registrosls))
  },[registrosls])

  return (
    <div className="bg-light" style={{marginTop:20, padding:20}}>

    <div className="h3">
      Listado De Registro De Productos
    </div>

    <div className="table-responsive">
      
      { registrosls.length > 0 ? 

      <>
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
      </> 
      
      : <p className="h5" style={{color:"red"}}>"NO HAY REGISTROS PARA LISTAR!!"</p>
      }
    </div>
 
  </div>
  )
}
