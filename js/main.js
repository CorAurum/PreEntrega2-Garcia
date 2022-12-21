
let Carro = document.querySelectorAll(".AgregarCarroJS");

console.log(Carro);

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

  console.log(ItemsEnCarro);
  if (ItemsEnCarro && ContenedorDeProductos) {

    ContenedorDeProductos.innerHTML = '';
    Object.values(ItemsEnCarro).map(item => {
      

      ContenedorDeProductos.innerHTML += `
              
              <button class="EliminarProductoCarro" onclick="BorrarProducto()">
              <img src="../img/icons/delete.png">
            </button>

            <img src="../front-covers/${item.imagenURL}">

            <p>
              ${item.precio}
            </p>

            <div>
              <button><img src="../img/icons/minus.png"></button>
              <p>${item.CopiasEnCarro}</p>
              <button class="AgregarUnidadJS"><img src="../img/icons/plus.png"></button>
            </div>
            <p class="CarroProductoTotal">
            ${item.precio * item.CopiasEnCarro}
            </p>  `;
    });

  } 
};


/* Borra productos del carro */

function EliminarProductosEnCarro() {
  console.log("Borrado");

}; 

/*Funcion que muestra el numero de productos en el carrito de compras del NavBar*/

function MostrarCarro(){

    ProCont = window.localStorage.getItem('CantidadCarro'); 
    document.getElementById('CartCont').innerHTML = ProCont;
};

