
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

console.log(Productos);


for(let i=0;i<Carro.length;i++)
{

    Carro[i].addEventListener('click', ()=>{

        CostoTotal(Productos[i]);
        CantidadCarro(Productos[i]);
       
    })

    console.log(Productos[i]);

}

function CostoTotal(producto) {


  let CostoEnCarro=localStorage.getItem('CostoTotal');

  if(CostoEnCarro!=null){

        CostoEnCarro=parseInt(CostoEnCarro);
        localStorage.setItem('CostoTotal',CostoEnCarro+producto.precio);
  }else {
    localStorage.setItem('CostoTotal', producto.precio);
  }
};

function CantidadCarro(cantidad) {

  let CantidadEnCarro=localStorage.getItem('CantidadCarro');

  if(CantidadEnCarro!=null){

        CantidadEnCarro=parseInt(CantidadEnCarro);
        localStorage.setItem('CantidadCarro',CantidadEnCarro+cantidad.CopiasEnCarro);
  }else {
    localStorage.setItem('CantidadCarro', cantidad.CopiasEnCarro);
  }
};

function MostrarCarro(){

    ProCont = window.localStorage.getItem('CantidadCarro'); 
    document.getElementById('CartCont').innerHTML = ProCont;

}
