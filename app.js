
let pedido = prompt("Buenos dias cual va ser su pedido?  \n 1 simple con queso \n 2 doble con queso \n 3 doble roque \n 4 doble onion " )

let simpleQueso 
let dobleQueso
let dobleRoque
let dobleOnion

if (pedido == 1) {
    let cantidad = prompt("cuantas simples con queso desea comprar? ")
    alert ("usted ha comprado " + cantidad + " simple con queso")
}else if (pedido == 2) {
    let cantidad2 = prompt("cuantas doble con queso desea comprar?")
    alert( "usted ha comprado " + cantidad2 + " doble con queso")
}else if (pedido == 3) {
    let cantidad3 = prompt("cuantas doble roque desea comprar?")
    alert( "usted ha comprado " + cantidad3 + " doble roque")
}else if (pedido == 4) {
    let cantidad4 = prompt("cuantas doble onion desea comprar?")
    alert( "usted ha comprado " + cantidad4 + " doble onion");
}






