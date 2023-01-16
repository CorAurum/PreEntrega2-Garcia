/* Funcion que muestra las unidades en el carrito de compras de la navbar en las distintas secciones de la pagina */

function MostrarCarro(){
    ProCont = window.localStorage.getItem('CantidadCarro'); 
    document.getElementById('CartCont').innerHTML = ProCont;
};