
let ProCont=0;

let PrecioCarro =0;

let CantidadProductos =0;

let CantidadProductos1 =0;

let CantidadProductos2 =0;

let CantidadProductos3 =0;

let CantidadProductos4 =0;

let CantidadProductos5 =0;

let CantidadProductos6 =0;

var PrecioProducto1 =100;

var PrecioProducto2 =200;

var PrecioProducto3 =300;

var PrecioProducto4 =400;

var PrecioProducto5 =500;

var PrecioProducto6 =600;

var DescuentoVar;

var DescuentoPor = "1.2";


/* Funciones que Agregan los productos seleccionados por el usuario al carro */

function AddPro1() {

   PrecioCarro += PrecioProducto1;
  
   CantidadProductos++;
   CantidadProductos1++;

   document.getElementById("CartCont").innerHTML = CantidadProductos;
   document.getElementById("CartCont2").innerHTML = CantidadProductos;
   document.getElementById("ProductoCont1").innerHTML = CantidadProductos1;
   document.getElementById("PrecioTotalCarro").innerHTML = PrecioCarro;
}

function AddPro2() {

    PrecioCarro += PrecioProducto2;
   
    CantidadProductos++;
    CantidadProductos2++;
 
    document.getElementById("CartCont").innerHTML = CantidadProductos;
    document.getElementById("CartCont2").innerHTML = CantidadProductos;
    document.getElementById("ProductoCont2").innerHTML = CantidadProductos2;
    document.getElementById("PrecioTotalCarro").innerHTML = PrecioCarro;
 }

 function AddPro3() {

    PrecioCarro += PrecioProducto3;
   
    CantidadProductos++;
    CantidadProductos3++;
 
    document.getElementById("CartCont").innerHTML = CantidadProductos;
    document.getElementById("CartCont2").innerHTML = CantidadProductos;
    document.getElementById("ProductoCont3").innerHTML = CantidadProductos3;
    document.getElementById("PrecioTotalCarro").innerHTML = PrecioCarro;
 }

 function AddPro4() {

    PrecioCarro += PrecioProducto4;
   
    CantidadProductos++;
    CantidadProductos4++;
 
    document.getElementById("CartCont").innerHTML = CantidadProductos;
    document.getElementById("CartCont2").innerHTML = CantidadProductos;
    document.getElementById("ProductoCont4").innerHTML = CantidadProductos4;
    document.getElementById("PrecioTotalCarro").innerHTML = PrecioCarro;
 }

 function AddPro5() {

    PrecioCarro += PrecioProducto5;
   
    CantidadProductos++;
    CantidadProductos5++;
 
    document.getElementById("CartCont").innerHTML = CantidadProductos;
    document.getElementById("CartCont2").innerHTML = CantidadProductos;
    document.getElementById("ProductoCont5").innerHTML = CantidadProductos5;
    document.getElementById("PrecioTotalCarro").innerHTML = PrecioCarro;
 }

 function AddPro6() {

    PrecioCarro += PrecioProducto6;
   
    CantidadProductos++;
    CantidadProductos6++;
 
    document.getElementById("CartCont").innerHTML = CantidadProductos;
    document.getElementById("CartCont2").innerHTML = CantidadProductos;
    document.getElementById("ProductoCont6").innerHTML = CantidadProductos6;
    document.getElementById("PrecioTotalCarro").innerHTML = PrecioCarro;
 }

/* Fin de las Funciones que agregan los productos seleccionados por el usuario al carro */ 


/* Funcion que aplica el descuento */

function Des() {

    DescuentoVar = document.getElementById("DescuentoInput").value;


    if ( DescuentoVar.includes("Desc") == true ) {
        
        document.getElementById("PrecioTotalCarro").innerHTML = PrecioCarro / DescuentoPor;

      }

}
/* Fin de la Funcion que aplica el descuento */



 /* Funcion experimental no aplicada aun.

function ShowCart(){

    ProCont = window.localStorage.getItem("CantPro"); 
    document.getElementById("CartCont").innerHTML = ProCont;

}
*/
