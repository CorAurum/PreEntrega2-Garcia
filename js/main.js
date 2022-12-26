
let Carro = document.querySelectorAll(".AgregarCarroJS");

let Productos=[

    {
        nombre: 'All Systems Red',
        precio:100,
        CopiasEnCarro:0,
        imagenURL: 'All systems red - The murderbot diaries - Martha wells.jpg'
    },

    {
        nombre:'Kings of the wyld',
        precio:200,
        CopiasEnCarro:0,
        imagenURL: 'Kings of the wyld - Nicholas eames.jpg'
    },

    {
        nombre:'Clockwork boys',
        precio:300,
        CopiasEnCarro:0,
        imagenURL: 'Clockwork boys - Clocktaur war - T.Kingfisher.jpg'
    },

    {
        nombre:'StormFront',
        precio:400,
        CopiasEnCarro:0,
        imagenURL: 'StormFront - Dresden files - Jim butcher.jpg'
    },

    {
        nombre:'The Way of Kings',
        precio:500,
        CopiasEnCarro:0,
        imagenURL: 'The Way of Kings - Stormlight Archive - Brandon Sanderson.jpg'
    },

    {
        nombre:'Warbreaker',
        precio:600,
        CopiasEnCarro:0,
        imagenURL: 'Warbreaker - Brandon sanderson.jpg'
    },
];

for(let i=0;i<Carro.length;i++)
{
    Carro[i].addEventListener('click', ()=>{
        CostoTotal(Productos[i]);
        CantidadCarro(Productos[i]);
        MostrarProductosEnCarro(Productos[i]);
    })    
};

/* Funcion que suma el valor total de todos los productos agregados al carro en la seccion de la tienda */  

function CostoTotal(producto) {
  let CostoEnCarro=localStorage.getItem('CostoTotal');
  if(CostoEnCarro!=null){
        CostoEnCarro=parseInt(CostoEnCarro);
        localStorage.setItem('CostoTotal',CostoEnCarro+producto.precio);
  }else {
    localStorage.setItem('CostoTotal', producto.precio);
  }
};

/* Funcion que suma la cantidad total de todos los productos agregados al carro en la seccion de la tienda*/  

function CantidadCarro(cantidad) {

  let CantidadEnCarro=localStorage.getItem('CantidadCarro');

  if(CantidadEnCarro!=null){

        CantidadEnCarro=parseInt(CantidadEnCarro);
        localStorage.setItem('CantidadCarro',CantidadEnCarro+1);
  }else {
    localStorage.setItem('CantidadCarro', CantidadEnCarro+1);
  }

  ProCont = window.localStorage.getItem('CantidadCarro'); 
    document.getElementById('CartCont').innerHTML = ProCont;

};

/* Funcion que agregar el producto a las variables locales */

function MostrarProductosEnCarro(MostrarCarro) {

  let UnidadesEnCarro = localStorage.getItem('ProductosEnCarro');
  UnidadesEnCarro = JSON.parse(UnidadesEnCarro);

  if(UnidadesEnCarro != null) {

     if(UnidadesEnCarro[MostrarCarro.nombre] == undefined ) {

         UnidadesEnCarro = {
           ...UnidadesEnCarro,
           [MostrarCarro.nombre]: MostrarCarro
         }

     }
         UnidadesEnCarro[MostrarCarro.nombre].CopiasEnCarro += 1;
  } else { 
     MostrarCarro.CopiasEnCarro = 1;
     UnidadesEnCarro = {
       [MostrarCarro.nombre]: MostrarCarro
     }
  }
         localStorage.setItem("ProductosEnCarro", JSON.stringify(UnidadesEnCarro));    
}; 

/* muestra los productos en la seccion del carrito de compras */

function MostrarEnCarro() {
  let ItemsEnCarro = localStorage.getItem("ProductosEnCarro");
  ItemsEnCarro = JSON.parse(ItemsEnCarro);
  let ContenedorDeProductos = document.querySelector(".CarroProducto");

   if (ItemsEnCarro && ContenedorDeProductos) {

    ContenedorDeProductos.innerHTML = '';
    Object.values(ItemsEnCarro).map(item => {

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
};

/* Elimina el producto del carro de compras, de la variable local de productos y refresca la pagina para mostrar el carro actualizado. */

function BorrarProducto() {

      let listaCarro = document.getElementsByClassName("NombreProducto");
  
      let ItemsEnCarro = localStorage.getItem("ProductosEnCarro");
      ItemsEnCarro = JSON.parse(ItemsEnCarro);

      document.querySelectorAll(".EliminarProductoCarro").forEach((EliminarProductoCarro, index) => {

        EliminarProductoCarro.onclick = (event) => {
          console.log("You clicked button number " + index);
          console.log(listaCarro[index].innerHTML);
          delete ItemsEnCarro[listaCarro[index].innerHTML];
          localStorage.setItem("ProductosEnCarro", JSON.stringify(ItemsEnCarro));   
          document.location.reload(true);
        };
      });

};

/* Funcion que agrega unidades a los productos en el carro segun quiera el usuario */

function AgregarUnidadCarro(){

      let CarritoJS = localStorage.getItem("ProductosEnCarro");
      CarritoJS = JSON.parse(CarritoJS);

      document.querySelectorAll(".AgregarUnidadJS").forEach((AgregarUnidadJS, index) => {
        AgregarUnidadJS.onclick = (event) => {
          console.log("You clicked button number " + index);
          CarritoJS[Object.keys(CarritoJS)[index]].CopiasEnCarro = CarritoJS[Object.keys(CarritoJS)[index]].CopiasEnCarro + 1;
          localStorage.setItem("ProductosEnCarro", JSON.stringify(CarritoJS));   
          document.location.reload(true);
        };
      });
};

/* Funcion que resta unidades a los productos en el carro segun quiera el usuario */

function RestarUnidadCarro(){

  let listaCarro = document.getElementsByClassName("RestarUnidadJS");

      let CarritoJS = localStorage.getItem("ProductosEnCarro");
      CarritoJS = JSON.parse(CarritoJS);

      document.querySelectorAll(".RestarUnidadJS").forEach((RestarUnidadJS, index) => {

        RestarUnidadJS.onclick = (event) => {
            if (CarritoJS[Object.keys(CarritoJS)[index]].CopiasEnCarro < 2) { } else { 
          console.log("You clicked button number " + index);
          CarritoJS[Object.keys(CarritoJS)[index]].CopiasEnCarro = CarritoJS[Object.keys(CarritoJS)[index]].CopiasEnCarro - 1;
          localStorage.setItem("ProductosEnCarro", JSON.stringify(CarritoJS));   
          document.location.reload(true);
            };
        };
      });
};

 /* Funcion que muestra el total del costo del carro sacando los valores de los productos y sumandolos para llegar a un total
   Tambien muestra las unidades seleccionadas en el carrito de compras*/

function MostrarTotal(){

  let listaCarro = document.getElementsByClassName("CarroProductoTotal");
  let listaUnidades = document.getElementsByClassName("cantidadEnElCarro");
  let totalFinal = localStorage.getItem('CostoTotal');

  var TotalCosto = 0;
  var Unidades = 0;

  for(var i=0;i<listaUnidades.length;i++) {
    Unidades = Unidades + Number(listaUnidades[i].innerHTML);
};

  for(var i=0;i<listaCarro.length;i++) {
        TotalCosto = TotalCosto + Number(listaCarro[i].innerHTML);
  };
  localStorage.setItem('CostoTotal', TotalCosto);
  localStorage.setItem('CantidadCarro', Unidades);
  document.getElementById('CosteFinalTotal').innerHTML = totalFinal+"$";
};

/* Funcion que muestra los productos especificados por su nombre en la barra de busqueda de la Tienda */

  const BarraBusqueda = document.querySelector('.BarraProducto');
  const ProductosDivs = document.querySelectorAll('.ProductoTitulo p:nth-child(1)');
  const ProductosArrays = Array.prototype.slice.call(ProductosDivs);

  function Buscar(b){
    ProductosArrays.forEach((item,index) => {
      if(!item.innerHTML.toLowerCase().includes(b.target.value)){
        item.parentElement.parentElement.style.display = 'none';
      }else {
        item.parentElement.parentElement.style.display = 'block';
      }
    })
  };
  BarraBusqueda.addEventListener("keyup", Buscar);   

/* Funcion que muestra las unidades en el carrito de compras de la navbar en las distintas secciones de la pagina */

function MostrarCarro(){
    ProCont = window.localStorage.getItem('CantidadCarro'); 
    document.getElementById('CartCont').innerHTML = ProCont;
};

/* No quise desarrollar mucho la explicacion de las funciones del codigo para no hacerlo muy pesado y dificil de leer, si se me es
 requerido para la proxima entrega podria anexar un documento explicando en profundidad como funcionan las mismas, Gracias! */