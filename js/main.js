
let Productos;
ObtenerDatos();

function ObtenerDatos(){
	fetch('../js/Productos.json')
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			Productos = data;
		});
}

setTimeout(() => {   
  let productoTarjetas = { ...Productos };
  let productoContenedor = document.querySelector(".Container1Tienda");
  
  productoContenedor.innerHTML = "";
  Object.values(productoTarjetas).map((item) => {
    productoContenedor.innerHTML += `
  
        <div class="Producto"> 
              
        <div class="ProductoTitulo"><P>${item.nombre}</P></div>
        
        <div class="ImgProducto">
            <img src="../front-covers/${item.imagenURL}"> 
        </div>
  
        <div class="DetallesProducto">
            <div class="PrecioProducto"><p><span>${item.precio}</span>$</p></div>
            <div class="AgregarProducto"><button class="AgregarCarro AgregarCarroJS"><img src="../img/icons/Cart.png"></button></div>
        </div>
  
        </div>
  
          `;
  });
  
  let Carro = document.querySelectorAll(".AgregarCarroJS");
  console.log(Carro);
  
  for (let i = 0; i < Carro.length; i++) {
    Carro[i].addEventListener("click", () => {
      CostoTotal(Productos[i]);
      CantidadCarro();
      MostrarProductosEnCarro(Productos[i]);
    });
  }
  
  /* Funcion que suma el valor total de todos los productos agregados al carro en la seccion de la tienda */
  
  function CostoTotal(producto) {
    let CostoEnCarro = localStorage.getItem("CostoTotal");
    if (CostoEnCarro != null) {
      CostoEnCarro = parseInt(CostoEnCarro);
      localStorage.setItem("CostoTotal", CostoEnCarro + producto.precio);
    } else {
      localStorage.setItem("CostoTotal", producto.precio);
    }
  }
  
  /* Funcion que suma la cantidad total de todos los productos agregados al carro en la seccion de la tienda*/
  
  function CantidadCarro() {
    let CantidadEnCarro = localStorage.getItem("CantidadCarro");
  
    if (CantidadEnCarro != null) {
      CantidadEnCarro = parseInt(CantidadEnCarro);
      localStorage.setItem("CantidadCarro", CantidadEnCarro + 1);
    } else {
      localStorage.setItem("CantidadCarro", CantidadEnCarro + 1);
    }
  
    ProCont = window.localStorage.getItem("CantidadCarro");
    document.getElementById("CartCont").innerHTML = ProCont;
  }
  
  /* Funcion que agregar el producto a las variables locales */
  
  function MostrarProductosEnCarro(MostrarCarro) {
    let UnidadesEnCarro = localStorage.getItem("ProductosEnCarro");
    UnidadesEnCarro = JSON.parse(UnidadesEnCarro);
  
    if (UnidadesEnCarro != null) {
      if (UnidadesEnCarro[MostrarCarro.nombre] == undefined) {
        UnidadesEnCarro = {
          ...UnidadesEnCarro,
          [MostrarCarro.nombre]: MostrarCarro,
        };
      }
      UnidadesEnCarro[MostrarCarro.nombre].CopiasEnCarro += 1;
    } else {
      MostrarCarro.CopiasEnCarro = 1;
      UnidadesEnCarro = {
        [MostrarCarro.nombre]: MostrarCarro,
      };
    }
    localStorage.setItem("ProductosEnCarro", JSON.stringify(UnidadesEnCarro));
  }
  
  /* muestra los productos en la seccion del carrito de compras */
  
  
  /* Funcion que muestra las unidades en el carrito de compras de la navbar en las distintas secciones de la pagina */
  
  function MostrarCarro() {
    ProCont = window.localStorage.getItem("CantidadCarro");
    document.getElementById("CartCont").innerHTML = ProCont;
  }
  
}, "300")


