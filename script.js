window.addEventListener('DOMContentLoaded', function() {

// Utilizando constructor de clase para los productos
class Producto {
    constructor(id, nombre, precio, imagen) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
    }
  }
  
  const menuElement = document.querySelector('#menu .menu-grid');
  const carritoElement = document.querySelector('#carrito ul');
  const totalElement = document.querySelector('#total');
  const vaciarCarritoButton = document.querySelector('#vaciar-carrito');
  
  const catalogo = [
    new Producto(1, 'Simple con queso', 1200,'imagen1.jpg'),
    new Producto(2, 'Doble con queso', 1500, 'imagen2.jpg'),
    new Producto(3, 'Doble roque', 1750, 'imagen3.jpg'),
    new Producto(4, 'Doble onion', 1800, 'imagen4.jpg')
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
      const div = document.createElement('div');
      div.className = 'menu-item';
  
      const img = document.createElement('img');
      img.src = producto.imagen;
      img.alt = producto.nombre;
      div.appendChild(img);
  
      const nombre = document.createElement('p');
      nombre.textContent = producto.nombre;
      div.appendChild(nombre);
  
      const precio = document.createElement('p');
      precio.textContent = `$${producto.precio}`;
      div.appendChild(precio);
  
      const boton = document.createElement('button');
      boton.textContent = 'Agregar';
      boton.addEventListener('click', () => agregarAlCarrito(producto.id));
      div.appendChild(boton);
  
      menuElement.appendChild(div);
    });
  }
  
  mostrarMenu();
  
  vaciarCarritoButton.addEventListener('click', vaciarCarrito);
  
  const botonComprar = document.querySelector('#boton-comprar');
  botonComprar.addEventListener('click', () => {
    const total = calcularTotal();
    const mensaje = `¡Gracias por tu compra! El total es: $${total.toFixed(2)}`;
    mostrarAlerta(mensaje);
  });
  
  function calcularTotal() {
    let total = 0;
    carrito.forEach(producto => {
      total += producto.precio * producto.cantidad;
    });
    return total;
  }
  
  function mostrarAlerta(mensaje) {
    Swal.fire({
      icon: 'success',
      title: 'Compra realizada',
      text: mensaje,
    });
  }

});
// Función para obtener la hora y la fecha de la API


async function obtenerHoraYFecha() {
  try {
    const response = await fetch('https://worldtimeapi.org/api/ip');
    if (!response.ok) {
      throw new Error('No se pudo obtener la hora');
    }
    const data = await response.json();
    const hora = data.datetime.slice(11, 16);
    const fecha = data.datetime.slice(0, 10);
    mostrarHoraYFecha(hora, fecha);
  } catch (error) {
    console.log('Error al obtener la hora y la fecha:', error.message);
  }
}

  // Función para mostrar la hora y la fecha en el DOM
  function mostrarHoraYFecha(hora, fecha) {
    const horaElement = document.querySelector('#hora');
    const fechaElement = document.querySelector('#fecha');
    horaElement.textContent = hora;
    fechaElement.textContent = fecha;
  }

  // Llamar a la función para obtener la hora y la fecha al cargar la página
  obtenerHoraYFecha();