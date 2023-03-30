
let pedido = prompt("Buenos dias cual va ser su pedido?  \n 1 simple con queso \n 2 doble con queso \n 3 doble roque \n 4 doble onion " )

let burguerType1 = "simple con queso"
let burguerType2 = "doble con queso"
let burguerType3 = "doble roque"
let burguerType4 = "doble onion"

if (pedido == NaN ){
    alert("Alerta, ha ingresado un valor no numerico, por favor ingrese un numero segun la hamburguesa deseada")
}


while (pedido != NaN) {
    if (pedido == 1) {
        let cantidad = prompt("cuantas simples con queso desea comprar? ")
        alert ("usted ha comprado " + cantidad + " " + burguerType1 + ", Muchas gracias por su compra")
    }else if (pedido == 2) {
        let cantidad2 = prompt("cuantas doble con queso desea comprar?")
        alert( "usted ha comprado " + cantidad2 + " " + burguerType2 + ", Muchas gracias por su compra")
    }else if (pedido == 3) {
        let cantidad3 = prompt("cuantas doble roque desea comprar?")
        alert( "usted ha comprado " + cantidad3 + " " + burguerType3 + ", Muchas gracias por su compra")
    }else if (pedido == 4) {
        let cantidad4 = prompt("cuantas doble onion desea comprar?")
        alert( "usted ha comprado " + cantidad4 + " " + burguerType4 + ", Muchas gracias por su compra")
    }
    else if (pedido == 0 || pedido >= 5)
    alert("Ha ingresado un numero fuera de las opciones disponibles, por favor reintentar ingresado 1,2,3 o 4")
    break
}

let nuevoPedido = prompt("Desea realizar otro pedido?, responder SI o NO" )

if (nuevoPedido == "SI"){
    location.reload()
}





