/*
  let varo = localStorage.getItem("ProductosEnCarro");
  varo = JSON.parse(varo);
 
  delete varo['StormFront'];
console.log(varo);
  var ProductoNombre = document.getElementsByClassName("NombreProducto");
  localStorage.setItem("ProductosEnCarro", JSON.stringify(varo));


for (var i = 0; i < ProductoNombre.length; i++) {
  var price = ProductoNombre[i].innerText;
  console.log(price);
}


function BorrarProducto() { 

  let CarritoJS = document.querySelectorAll(".EliminarProductoCarro")

  console.log(CarritoJS);

    var lista = document.getElementsByClassName('NombreProducto');
    
    var listaBorrar = lista[0].innerHTML;


    let ListaCarro = localStorage.getItem('ProductosEnCarro')
    ListaCarro = JSON.parse(ListaCarro);

    let myKeys = Object.values(ListaCarro);


    console.log(ListaCarro);

    console.log(myKeys);


  console.log(listaBorrar); 

  let ItemsEnCarro = localStorage.getItem("ProductosEnCarro");
  ItemsEnCarro = JSON.parse(ItemsEnCarro);

  console.log(ItemsEnCarro[listaBorrar]);

   };


/* Borra productos del carro */

/*Funcion que muestra el numero de productos en el carrito de compras del NavBar*/