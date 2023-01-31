var NombreCompleto;
var Email;
var Direccion;
var CP;
var  MensajeCompra;

var Tarjeta;
var CodigoS;
var FechaVencimientoMes;
var FechaVencimientoAño;

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

function pago() {

    var lista = document.querySelectorAll("input");
    console.log(lista);

    for (var i = 0; i < 8; i++) {

          if (lista[i].value != "") {  
            console.log(lista[i].value);

            localStorage.setItem(DatosdePago[i], lista[i].value); 
            
 } else { 
    console.log("Esta vacio master");
 }
      }
      alert("Gracias por su compra");
      
}

function sweet() {
    Swal.fire({
        title: '',
        html: 'Muchas Gracias por su compra ' + localStorage.getItem("NombreCompleto") 
        + "<br>"+ "Su pedido sera enviado a " + localStorage.getItem("Direccion"),
        icon: 'success',
        confirmButtonText: 'OK'
      })
}

/*    <div class="PaymentInformacionPersonal">
                    <p>Nombre Completo</p>
                    <input required required oninvalid="this.setCustomValidity('Porfavor ingrese su nombre')" type="textfield">
                    <p>Email</p>
                    <input  required oninvalid="this.setCustomValidity('Porfavor ingrese un email')" type="Email" name="Email">
                    <p>Direccion</p>
                    <input type="textfield" required oninvalid="this.setCustomValidity('Porfavor ingrese su Direccion')">
                    <p>Codigo Postal</p>
                    <input type="textfield" required oninvalid="this.setCustomValidity('Porfavor ingrese su Codigo Postal')">
                    <p>Mensaje Opcional</p>
                    <textarea style="resize: none;"></textarea>

                </div>

                <div class="PaymentDatosdePago">
                    <p>Numero de Tarjeta</p>
                    <input type="textfield" required oninvalid="this.setCustomValidity('Numero de Tarjeta Invalido')">
                    <p>Codigo de Seguridad</p>
                    <input type="textfield" required oninvalid="this.setCustomValidity('Codigo de Seguridad Invalido')">
                    <p> Fecha de vencimiento </p>
                    <input required oninvalid="this.setCustomValidity('Fecha de Vencimiento Invalida')" type="number" min="01" max="12">
                    <input required oninvalid="this.setCustomValidity('Fecha de Vencimiento Invalida')" type="number" min="1" max="99">
                    <input type="submit" value="Enviar" onclick="pago();">
                </div>  */