
let pedido = prompt("Buenos dias cual va ser su pedido?  \n 1 simple con queso \n 2 doble con queso \n 3 doble roque \n 4 doble onion " )

/* let burguerType1 = "simple con queso"
let burguerType2 = "doble con queso"
let burguerType3 = "doble roque"
let burguerType4 = "doble onion" */

function hamburguesa(carnes,quesos,precio,extra){
    this.carnes = carnes
    this.quesos = quesos
    this.precio = precio
    this.extra = extra
}
const simpleQueso = new hamburguesa("una carne","dos quesos",1600,"")
const dobleQueso = new hamburguesa("dos carne","cuatro quesos",1800,"")
const dobleRoque = new hamburguesa("dos carne", "queso roquefort",1850,"")
const dobleOnion = new hamburguesa("dos carne","dos quesos",1900,"cebolla caramelizada")

if (pedido == NaN ){
    alert("Alerta, ha ingresado un valor no numerico, por favor ingrese un numero segun la hamburguesa deseada")
}

function totalPrice(precio,cantidad){
    let price = (precio*cantidad)
    return price
}

while (pedido != NaN) {
    if (pedido == 1) {
        let cantidad = prompt("cuantas simples con queso desea comprar? ")
        
        alert ("usted ha comprado " + cantidad + " " + "simple con queso" + "a $"+ totalPrice(simpleQueso.precio,Number(cantidad)) + ", Muchas gracias por su compra")

    }else if (pedido == 2) {
        let cantidad = parseInt(prompt("cuantas doble con queso desea comprar?"))
        alert( "usted ha comprado " + cantidad + " " + "doble con Queso" + "a $" + totalPrice(dobleQueso.precio,Number(cantidad)) +", Muchas gracias por su compra")
    }else if (pedido == 3) {
        let cantidad = prompt("cuantas doble roque desea comprar?")
        alert( "usted ha comprado " + cantidad + " " + "doble Roque" + "a $" + totalPrice(dobleRoque.precio,Number(cantidad))  + ", Muchas gracias por su compra")
    }else if (pedido == 4) {
        let cantidad = prompt("cuantas doble onion desea comprar?")
        alert( "usted ha comprado " + cantidad + " " + "doble Onion" + "a $" +totalPrice(dobleOnion.precio,Number(cantidad)) +", Muchas gracias por su compra")
    }
    else if (pedido == 0 || pedido >= 5)
    alert("Ha ingresado un numero fuera de las opciones disponibles, por favor reintentar ingresado 1,2,3 o 4")
    break
}


let nuevoPedido = prompt("Desea realizar otro pedido?, responder SI o NO" )
    if ((nuevoPedido == "SI")|| (nuevoPedido == "si")){
    location.reload()
    }
    else{
        alert ("Gracias por comprar en BurguerLab")
        location.reload()
    }