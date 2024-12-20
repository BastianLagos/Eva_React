import React, { useState, useEffect } from 'react'

export const Estadistica = () => {

  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registrosls");
    if(datos){
      return JSON.parse(datos);
    }else{
      return[];
    }
  }

  const [registrosls, setRegistrosLS] = useState(obtenerRegistros());

  function miEstadistica(opcion){
    var i = 0;
    var resultado = 0;
    var miObjeto;

    if(opcion === 1){
      for(i=0; i<registrosls.length; i++){
        miObjeto = registrosls[i];
        if(miObjeto.disponibilidad === "SI"){
        resultado += 1;
        }else{
          resultado += 0;
        }
      }
    }else if(opcion === 2){
      for(i=0; i<registrosls.length; i++){
        miObjeto = registrosls[i];
        if(miObjeto.disponibilidad === "NO"){
        resultado += 1;
        }else{
          resultado += 0;
        }
      }
    }else if(opcion === 3){
      for(i=0; i<registrosls.length; i++){
        miObjeto = registrosls[i];
        resultado += parseInt(miObjeto.cantidad)
      }
    }else if(opcion ===4){
      for(i=0; i<registrosls.length; i++){
        miObjeto = registrosls[i];
        resultado += parseInt(miObjeto.precio)
      }
      resultado = (resultado/registrosls.length).toFixed(2);
    }
    return resultado;
  }

  return (
      <div className="bg-light" style={{marginTop:20, padding:20}}> 

      <div className="h3">
      Estadistica de Productos
      </div>

      <div className="table-responsive">
        
        { registrosls.length > 0 ? 

          <div class="row row-cols-1 row-cols-md-3 g-2" style={{padding:5, width:"90%", margin:"0 auto"}}>
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Cantidad según Disponibilidad</h5>
                  <p class="card-text">Disponible:  {miEstadistica(1)} </p>
                  <p class="card-text">No Disponible:  {miEstadistica(2)} </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body">
                <h5 class="card-title">Suma Total de Productos</h5>
                  <p class="card-text"> {miEstadistica(3)} </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Promedio Total de Precios</h5>
                  <p class="card-text"> {miEstadistica(4)} </p>
                </div>
              </div>
            </div>
          </div>

        : <p className="h5" style={{color:"red"}}>"NO HAY REGISTROS PARA LA ESTADISTICA!!"</p>
        }
      </div>
  
    </div>
  )
}
