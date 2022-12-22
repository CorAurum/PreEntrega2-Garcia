
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
        console.log(Productos[i]);
       
    })    
};

/* Funcion que suma el valor total de todos los productos agregados al carro */  

function CostoTotal(producto) {

  let CostoEnCarro=localStorage.getItem('CostoTotal');

  if(CostoEnCarro!=null){

        CostoEnCarro=parseInt(CostoEnCarro);
        localStorage.setItem('CostoTotal',CostoEnCarro+producto.precio);
  }else {
    localStorage.setItem('CostoTotal', producto.precio);
  }
};

/* Funcion que suma la cantidad total de todos los productos agregados al carro */  

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

/* muestra los productos en el carrito de compras */

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

function AgregarUnidadCarro(){

  let listaCarro = document.getElementsByClassName("AgregarUnidadJS");

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
}

function RestarUnidadCarro(){

  let listaCarro = document.getElementsByClassName("RestarUnidadJS");

      let CarritoJS = localStorage.getItem("ProductosEnCarro");
      CarritoJS = JSON.parse(CarritoJS);

      document.querySelectorAll(".RestarUnidadJS").forEach((RestarUnidadJS, index) => {

        RestarUnidadJS.onclick = (event) => {

          console.log("You clicked button number " + index);
          CarritoJS[Object.keys(CarritoJS)[index]].CopiasEnCarro = CarritoJS[Object.keys(CarritoJS)[index]].CopiasEnCarro - 1;
          localStorage.setItem("ProductosEnCarro", JSON.stringify(CarritoJS));   
          document.location.reload(true);
        };
      });
}

 /* Funcion que muestra el total del costo del carro sacando los valores de los productos y sumandolos para llegar a un total */

function MostrarTotal(){

  let listaCarro = document.getElementsByClassName("CarroProductoTotal");
  let listaUnidades = document.getElementsByClassName("cantidadEnElCarro");

  var TotalCosto = 0;
  var Unidades = 0;

  for(var i=0;i<listaCarro.length;i++) {

        TotalCosto = TotalCosto + Number(listaCarro[i].innerHTML);
        Unidades = Unidades + Number(listaUnidades[i].innerHTML)
  }
  console.log(TotalCosto);
  console.log(Unidades);
  localStorage.setItem('CantidadCarro', Unidades);
} 


function ActualizarCarro() {

    let listaUnidades = document.getElementsByClassName("cantidadEnElCarro");

  var Unidades = 0;

  for(var i=0;i<listaUnidades.length;i++) {

        Unidades = Unidades + Number(listaUnidades[i].innerHTML);
  }
  localStorage.setItem('CantidadCarro', Unidades);
  console.log(Unidades)
}


function MostrarCarro(){
  
    ProCont = window.localStorage.getItem('CantidadCarro'); 
    document.getElementById('CartCont').innerHTML = ProCont;

};