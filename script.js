



const menuElement = document.querySelector('#menu ul');
const carritoElement = document.querySelector('#carrito ul');
const totalElement = document.querySelector('#total');
const vaciarCarritoButton = document.querySelector('#vaciar-carrito');


const catalogo = [
    {
    id: 1,
    nombre: 'Simple con queso',
    precio: 1200
    },
    {
    id: 2,
    nombre: 'Doble con queso',
    precio: 1500
    },
    {
    id: 3,
    nombre: 'Doble roque',
    precio: 1750
    },
    {
    id: 4,
    nombre: 'Doble onion',
    precio: 1800
    }
];

    let carrito = [];
    if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    }

    function agregarAlCarrito(id) {

    const producto = catalogo.find(item => item.id === id);

    producto.cantidad = 1;

    carrito.push(producto);

    actualizarCarrito();
}

    function eliminarDelCarrito(id) {
    const index = carrito.findIndex(item => item.id === id);
    carrito.splice(index, 1);
    actualizarCarrito();
}

    function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

    function actualizarCarrito() {
    carritoElement.innerHTML = '';
    carrito.forEach(producto => {

    const li = document.createElement('li');

    li.textContent = producto.nombre;

    const boton = document.createElement('button');
    boton.textContent = 'Eliminar';
    boton.addEventListener('click', () => eliminarDelCarrito(producto.id));
    
    li.appendChild(boton);
    carritoElement.appendChild(li);
    localStorage.setItem('carrito', JSON.stringify(carrito));
  });

        const total = carrito.reduce((suma, producto) => suma + producto.precio, 0);
        
        totalElement.textContent = total.toFixed(2);
}


        function mostrarMenu() {
        menuElement.innerHTML = '';
    
        catalogo.forEach(producto => {

        const li = document.createElement('li');
        li.textContent = producto.nombre;

        const boton = document.createElement('button');
        boton.textContent = 'Agregar';
        boton.addEventListener('click', () => agregarAlCarrito(producto.id));
        li.appendChild(boton);
        menuElement.appendChild(li);
    });
    } 

    mostrarMenu(); 

    vaciarCarritoButton.addEventListener('click', vaciarCarrito);


const botonComprar = document.querySelector('#boton-comprar');
botonComprar.addEventListener('click', () => {
    let total = 0;
    carrito.forEach(producto => {
    total += producto.precio * producto.cantidad;
    });
    const mensaje = `¡Gracias por tu compra! El total es: $${total.toFixed(2)}`;
    alert(mensaje);
});

document.body.style.backgroundColor = "#f2f2f2";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.textAlign = "center";
document.body.style.alignItems= "center";

const headers = document.querySelectorAll('h1');
headers.forEach(header => {
header.style.fontSize = "40px";
header.style.height="30px";

});
