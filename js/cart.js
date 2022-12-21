
function EliminarProductosEnCarro(EliminarCarro) {

    let UnidadesEnCarro = localStorage.getItem('ProductosEnCarro');
    UnidadesEnCarro = JSON.parse(UnidadesEnCarro);
  
    if(UnidadesEnCarro != null) {
  
       if(UnidadesEnCarro[EliminarCarro.nombre] == undefined ) {
  
           UnidadesEnCarro = {
            ...delete Productos[EliminarCarro],
             [EliminarCarro.nombre]: EliminarCarro
           }
  
       }
           UnidadesEnCarro[EliminarCarro.nombre].CopiasEnCarro == 0;
    } else { 
       EliminarCarro.CopiasEnCarro = 1;
       UnidadesEnCarro = {
         [EliminarCarro.nombre]: EliminarCarro
       }
    }
           localStorage.setItem("ProductosEnCarro", JSON.stringify(UnidadesEnCarro));
           
  }; 