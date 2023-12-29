let carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
    mostrarAlerta('¡Se agregó un nuevo producto al carrito! baja para confirmar la compra');
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function finalizarCompra() {
    // Verificamos si hay elementos en el carrito
    if (carrito.length === 0) {
        alert('El carrito está vacío. Agrega productos antes de finalizar la compra.');
        return;
    }

    // Crear el mensaje para enviar a WhatsApp
    const mensaje = '¡Hola! Quiero comprar: ' + carrito.join(', ');
    const numeroWhatsApp = '+5492915776978'; // Reemplaza con tu número de WhatsApp

    // Codificar el mensaje y crear el enlace de WhatsApp
    const mensajeCodificado = encodeURIComponent(mensaje);
    const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

    // Abrir una nueva ventana o pestaña con el enlace de WhatsApp
    window.open(enlaceWhatsApp);
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';

    carrito.forEach((producto, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = producto;

        const eliminarButton = document.createElement('button');
        eliminarButton.textContent = 'Eliminar';
        eliminarButton.className = 'eliminar-btn';
        eliminarButton.onclick = () => eliminarDelCarrito(index);

        listItem.appendChild(eliminarButton);
        listaCarrito.appendChild(listItem);
    });
}

function mostrarAlerta(mensaje) {
    const alertBox = document.querySelector('.alert');
    alertBox.textContent = mensaje;
    alertBox.style.display = 'block';

    // Cierra la alerta automáticamente después de 2 segundos (ajusta el tiempo según sea necesario)
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 3000);
}


function mostrarAlerta(mensaje) {
    const alertBox = document.querySelector('.alert');
    alertBox.textContent = mensaje;
    alertBox.style.display = 'block';

    // Cierra la alerta automáticamente después de 2 segundos (ajusta el tiempo según sea necesario)
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 3000);
}




