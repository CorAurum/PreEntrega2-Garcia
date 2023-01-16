/* Funcion que muestra los productos especificados por su nombre en la barra de busqueda de la Tienda */

const BarraBusqueda = document.querySelector('.BarraProducto');
const ProductosDivs = document.querySelectorAll('.ProductoTitulo p:nth-child(1)');
const ProductosArrays = Array.prototype.slice.call(ProductosDivs);

function Buscar(b){
  ProductosArrays.forEach((item,index) => {
    if(!item.innerHTML.toLowerCase().includes(b.target.value)){
      item.parentElement.parentElement.style.display = 'none';
    } else {
      item.parentElement.parentElement.style.display = 'block';
    }
  })
};
BarraBusqueda.addEventListener("keyup", Buscar);   


