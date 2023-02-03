/* Funcion que muestra las unidades en el carrito de compras de la navbar en las distintas secciones de la pagina */
function MostrarEnCarro() {
    let ItemsEnCarro = localStorage.getItem("ProductosEnCarro");
    ItemsEnCarro = JSON.parse(ItemsEnCarro);
    let ContenedorDeProductos = document.querySelector(".CarroProducto");
  
    if (ItemsEnCarro && ContenedorDeProductos) {
      ContenedorDeProductos.innerHTML = "";
      Object.values(ItemsEnCarro).map((item) => {
        ContenedorDeProductos.innerHTML += `
         
                <button class="EliminarProductoCarro" onclick="" >
                <img src="../img/icons/delete.png">
              </button>
  
              <img src="../front-covers/${item.imagenURL}">
  
              <p>
              <span class="NombreProducto">${item.nombre}</span>
              </p>
  
              <div>
                <button class="RestarUnidadJS" onclick=""><img src="../img/icons/minus.png"></button>
                <p class="cantidadEnElCarro">${item.CopiasEnCarro}</p>
                <button class="AgregarUnidadJS" onclick=""><img src="../img/icons/plus.png"></button>
              </div>
              <p class="CarroProductoTotal">
              ${item.precio * item.CopiasEnCarro}
              </p> 
              `;
      });
    }
  }
  
  /* Elimina el producto del carro de compras, de la variable local de productos y refresca la pagina para mostrar el carro actualizado. */
  
  function BorrarProducto() {
    let listaCarro = document.getElementsByClassName("NombreProducto");
  
    let ItemsEnCarro = localStorage.getItem("ProductosEnCarro");
    ItemsEnCarro = JSON.parse(ItemsEnCarro);
  
    document
      .querySelectorAll(".EliminarProductoCarro")
      .forEach((EliminarProductoCarro, index) => {
        EliminarProductoCarro.onclick = (event) => {
          console.log("You clicked button number " + index);
          console.log(listaCarro[index].innerHTML);
          delete ItemsEnCarro[listaCarro[index].innerHTML];
          localStorage.setItem("ProductosEnCarro", JSON.stringify(ItemsEnCarro));
          document.location.reload(true);
        };
      });
  }
  
  /* Funcion que agrega unidades a los productos en el carro segun quiera el usuario */
  
  function AgregarUnidadCarro() {
    let CarritoJS = localStorage.getItem("ProductosEnCarro");
    CarritoJS = JSON.parse(CarritoJS);
  
    document
      .querySelectorAll(".AgregarUnidadJS")
      .forEach((AgregarUnidadJS, index) => {
        AgregarUnidadJS.onclick = (event) => {
          console.log("You clicked button number " + index);
          CarritoJS[Object.keys(CarritoJS)[index]].CopiasEnCarro =
            CarritoJS[Object.keys(CarritoJS)[index]].CopiasEnCarro + 1;
          localStorage.setItem("ProductosEnCarro", JSON.stringify(CarritoJS));
          document.location.reload(true);
        };
      });
  }
  
  /* Funcion que resta unidades a los productos en el carro segun quiera el usuario */
  
  function RestarUnidadCarro() {
    let listaCarro = document.getElementsByClassName("RestarUnidadJS");
  
    let CarritoJS = localStorage.getItem("ProductosEnCarro");
    CarritoJS = JSON.parse(CarritoJS);
  
    document
      .querySelectorAll(".RestarUnidadJS")
      .forEach((RestarUnidadJS, index) => {
        RestarUnidadJS.onclick = (event) => {
          if (CarritoJS[Object.keys(CarritoJS)[index]].CopiasEnCarro < 2) {
          } else {
            console.log("You clicked button number " + index);
            CarritoJS[Object.keys(CarritoJS)[index]].CopiasEnCarro =
              CarritoJS[Object.keys(CarritoJS)[index]].CopiasEnCarro - 1;
            localStorage.setItem("ProductosEnCarro", JSON.stringify(CarritoJS));
            document.location.reload(true);
          }
        };
      });
  }
  
  /* Funcion que muestra el total del costo del carro sacando los valores de los productos y sumandolos para llegar a un total
     Tambien muestra las unidades seleccionadas en el carrito de compras*/
  
  function MostrarTotal() {
    let listaCarro = document.getElementsByClassName("CarroProductoTotal");
    let listaUnidades = document.getElementsByClassName("cantidadEnElCarro");
  
    var TotalCosto = 0;
    var Unidades = 0;
  
    for (var i = 0; i < listaUnidades.length; i++) {
      Unidades = Unidades + Number(listaUnidades[i].innerHTML);
    }
  
    for (var i = 0; i < listaCarro.length; i++) {
      TotalCosto = TotalCosto + Number(listaCarro[i].innerHTML);
    }
    localStorage.setItem("CostoTotal", TotalCosto);
    localStorage.setItem("CantidadCarro", Unidades);
    document.getElementById("CosteFinalTotal").innerHTML = TotalCosto + "$";
  }

function MostrarCarro(){
    ProCont = window.localStorage.getItem('CantidadCarro'); 
    document.getElementById('CartCont').innerHTML = ProCont;
};

/*Funcion que inhabilita el boton de pagar en el carro en caso de no tener productos agregados al mismo */

function VerificarCompra(){
        var Carro = localStorage.getItem("ProductosEnCarro");
    if( Carro == null  || Carro == "{}" ){ 
        document.getElementById("FinCompra").innerHTML = "";
     } else {}

};