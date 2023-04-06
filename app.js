
let pedido = prompt("Buenos dias cual va ser su pedido?  \n 1 simple con queso \n 2 doble con queso \n 3 doble roque \n 4 doble onion " )

let listaPedido = []

function hamburguesa(nombre,carnes,quesos,precio,extra){
    this.nombre = nombre
    this.carnes = carnes
    this.quesos = quesos
    this.precio = precio
    this.extra = extra
}
const simpleQueso = new hamburguesa("simple con queso","una carne","dos quesos",1600,"")
const dobleQueso = new hamburguesa("doble con queso","dos carne","cuatro quesos",1800,"")
const dobleRoque = new hamburguesa("doble roque","dos carne", "queso roquefort",1850,"")
const dobleOnion = new hamburguesa("doble onion","dos carne","dos quesos",1900,"cebolla caramelizada")

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
        let precioTotal = totalPrice(simpleQueso.precio,Number(cantidad))
        alert ("usted ha comprado " + cantidad + " " + "simple con queso" + "a $"+ precioTotal + ", Muchas gracias por su compra")
        listaPedido.push({pedido:simpleQueso.nombre,precio:precioTotal})
    }else if (pedido == 2) {
        let cantidad = prompt("cuantas doble con queso desea comprar?")
        let precioTotal = totalPrice(dobleQueso.precio,Number(cantidad))
        alert( "usted ha comprado " + cantidad + " " + "doble con Queso" + "a $" + precioTotal +", Muchas gracias por su compra")
        listaPedido.push({pedido:dobleQueso.nombre,precio:precioTotal})
    }else if (pedido == 3) {
        let cantidad = prompt("cuantas doble roque desea comprar?")
        let precioTotal = totalPrice(dobleRoque.precio,Number(cantidad))
        alert( "usted ha comprado " + cantidad + " " + "doble Roque" + "a $" + precioTotal  + ", Muchas gracias por su compra")
        listaPedido.push({pedido:dobleRoque.nombre,precio:precioTotal})
    }else if (pedido == 4) {
        let cantidad = prompt("cuantas doble onion desea comprar?")
        let precioTotal = totalPrice(dobleOnion.precio,Number(cantidad))
        alert( "usted ha comprado " + cantidad + " " + "doble Onion" + "a $" + precioTotal +", Muchas gracias por su compra")
        listaPedido.push({pedido:dobleOnion.nombre,precio:precioTotal})
    }
    else if (pedido == 0 || pedido >= 5)
    alert("Ha ingresado un numero fuera de las opciones disponibles, por favor reintentar ingresado 1,2,3 o 4")
    break
}

alert("usted tiene un pedido de: " + JSON.stringify(Object.values(listaPedido)))

let nuevoPedido = prompt("Desea realizar otro pedido?, responder SI o NO" )
    if ((nuevoPedido == "SI")|| (nuevoPedido == "si")){
    location.reload()
    }
    else{
        alert("Gracias por su compra en Burgerlab")
    location.reload()
    }