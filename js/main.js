
let Carro = document.querySelectorAll(".AgregarCarroJS");

console.log(Carro);

let Productos=[

    {
        nombre: 'All Systems Red',
        precio:100,
        CopiasEnCarro:1
    },

    {
        nombre:'Kings of the wyld',
        precio:200,
        CopiasEnCarro:1
    },

    {
        nombre:'Clockwork boys',
        precio:300,
        CopiasEnCarro:1
    },

    {
        nombre:'StormFront',
        precio:400,
        CopiasEnCarro:1
    },

    {
        nombre:'The Way of Kings',
        precio:500,
        CopiasEnCarro:1
    },

    {
        nombre:'Warbreaker',
        precio:600,
        CopiasEnCarro:1
    },
]




for(let i=0;i<Carro.length;i++)
{

    Carro[i].addEventListener('click', ()=>{

        CostoTotal(Productos[i]);
        CantidadCarro(Productos[i]);
        ProductosEnCarro(Productos[i])
        AgregarProductos(Productos[i]);
       
    })    
};

/* Funcion que suma la cantidad de unidades elegida por el cliente del producto seleccionado*/

function ProductosEnCarro(copias) {

    let CopiasIndividualesEnCarro = localStorage.getItem('Copias '+copias.nombre);
  
    if(CopiasIndividualesEnCarro!=null){
  
        CopiasIndividualesEnCarro=parseInt(CopiasIndividualesEnCarro);
          localStorage.setItem('Copias '+copias.nombre,CopiasIndividualesEnCarro+copias.CopiasEnCarro);
    }else {
      localStorage.setItem('Copias '+copias.nombre, copias.CopiasEnCarro);
    }
  
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
        localStorage.setItem('CantidadCarro',CantidadEnCarro+cantidad.CopiasEnCarro);
  }else {
    localStorage.setItem('CantidadCarro', cantidad.CopiasEnCarro);
  }

  ProCont = window.localStorage.getItem('CantidadCarro'); 
    document.getElementById('CartCont').innerHTML = ProCont;

};

/* Funcion que agregar el producto a las variables locales */

function AgregarProductos(agregar) {

 localStorage.setItem('ProductoEnCarro ' +agregar.nombre, JSON.stringify(agregar));

};


function MostrarProductosEnCarro(MostrarCarro) {

    let InventarioCarro = local

}


/*Funcion que muestra el numero de productos en el carrito de compras del NavBar*/

function MostrarCarro(){

    ProCont = window.localStorage.getItem('CantidadCarro'); 
    document.getElementById('CartCont').innerHTML = ProCont;

};
