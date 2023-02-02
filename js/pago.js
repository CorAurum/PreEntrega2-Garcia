const DatosdePago = [
    "NombreCompleto",
    "Email",
    "Direccion",
    "CP",
    "Tarjeta",
    "CodigoS",
    "FechaVencimientoMes",
    "FechaVencimientoAño",
];

function sweet() {
    Swal.fire({
        title: '',
        html: 'Muchas Gracias por su compra ' + localStorage.getItem("NombreCompleto") 
        + "<br>"+ "Su pedido sera enviado a " + localStorage.getItem("Direccion"),
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: "rgb(40, 192, 78)",
        
      }).then(function() {
        window.location = "../index.html";
    }); 
}

function pago() {

    var lista = document.querySelectorAll("input");
    for (var i = 0; i < 8; i++) {
          if (lista[i].value != "") {  
            console.log(lista[i].value);
            localStorage.setItem(DatosdePago[i], lista[i].value);          
 } }
 sweet(); 
}
