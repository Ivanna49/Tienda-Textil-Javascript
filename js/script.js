// Array de productos
const productos = [
    {
        "ID": 1,
        "categoria": "textiles",
        "imagen": "img/Productos/producto1.jpg",
        "alt": "cortinas soñadas",
        "nombre": "Cortinas de ensueño",
        "descripcion": "Telas con colores cálidos para tus cortinas soñadas",
        "tipo": "cortinas",
        "precio": 30.00,
        "disponible": true
    },
    {
        "ID": 2,
        "categoria": "textiles",
        "imagen": "img/Productos/producto7.jpg",
        "alt": "S´banas que envuelven tus sueños",
        "nombre": "Sábanas soñadas",
        "descripcion": "Sábanas que envuelven tus sueños con su suavidad y texturas únicas",
        "tipo": "sabanas",
        "precio": 60.00,
        "disponible": true

    },
    {
        "ID": 3,
        "categoria": "textiles",
        "imagen": "img/Productos/producto4.jpg",
        "alt": "Sábanas de oro",
        "nombre": "Sábanas de oro",
        "descripcion": "Sábanas que te harán sentir sumergida en hilos suaves de oro",
        "tipo": "sabanas",
        "precio": 49.50,
        "disponible": true
    },
    {
        "ID": 4,
        "categoria": "textiles",
        "imagen": "img/Productos/producto6.jpg",
        "alt": "Toallas modernas",
        "nombre": "Toallas modernas",
        "descripcion": "Las toallas más suaves que has podido sentir",
        "tipo": "toallas",
        "precio": 60.9,
        "disponible": true
    },
    {
        "ID": 5,
        "categoria": "textiles",
        "imagen": "img/Productos/cortinas_variedad.jpg",
        "alt": "Cortinas nuevas",
        "nombre": "Cortinas nuevas",
        "descripcion": "Las cortinas con la mejor caída que hayas podido ver",
        "tipo": "cortinas",
        "precio": 33.95,
        "disponible": true
    },
    {
        "ID": 6,
        "categoria": "textiles",
        "imagen": "img/Productos/producto11.jpg",
        "alt": "Sábanas rústicas",
        "nombre": "Sábanas rústicas",
        "descripcion": "Éstas ´sabanas son rústicas pero nobles",
        "tipo": "sabanas",
        "precio": 59.75,
        "disponible": true
    },
    {
        "ID": 7,
        "categoria": "textiles",
        "imagen": "img/Productos/producto10.jpg",
        "alt": "Sábanas otoñales",
        "nombre": "Sábanas otoñales",
        "descripcion": "Las sábanas con los colres otoñales más preciosos que podrás encontrar",
        "tipo": "sabanas",
        "precio": 29.65,
        "disponible": true
    },
    {
        "ID": 8,
        "categoria": "textiles",
        "imagen": "img/Productos/producto9.jpg",
        "alt": "Toallas fuertes",
        "nombre": "Toallas fuertes",
        "descripcion": "Las toallas más resitentes que podrás encontrar en el mercado",
        "tipo": "toallas",
        "precio": 89.00,
        "disponible": true
    },
    {
        "ID": 9,
        "categoria": "textiles",
        "imagen": "img/Productos/producto3.jpg",
        "alt": "Sábanas perfectas",
        "nombre": "Sábanas perfectas",
        "descripcion": "Sábanas con detalles de diseño",
        "tipo": "sabanas",
        "precio": 50.72,
        "disponible": true
    },
    {
        "ID": 10,
        "categoria": "textiles",
        "imagen": "img/Productos/producto4.jpg",
        "alt": "Sábanas de autor",
        "nombre": "Sábanas de autor",
        "descripcion": "Sábanas especialmente personalizadas ",
        "tipo": "sabanas",
        "precio": 36.50,
        "disponible": true
    },
    {
        "ID": 11,
        "categoria": "textiles",
        "imagen": "img/Productos/producto5.jpg",
        "alt": "Toallas soñadas",
        "nombre": "Toallas soñadas",
        "descripcion": "Toallas de uso personal",
        "tipo": "toallas",
        "precio": 39.00,
        "disponible": true
    },
    {
        "ID": 12,
        "categoria": "textiles",
        "imagen": "img/Productos/producto8.jpg",
        "alt": "Toallas suavecitas",
        "nombre": "Toallas suaves",
        "descripcion": "Toallas elaboradas con suaves hilos que te harán sentir especial",
        "tipo": "toallas",
        "precio": 36.50,
        "disponible": true
    },

];

// Array para almacenar los productos en el carrito
let carrito = [];

// Función para guardar el carrito en el localStorage
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para cargar el carrito desde el localStorage
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
}

// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
    const contadorCarrito = document.getElementById('cart-count');
    if (contadorCarrito) {
        const totalProductos = carrito.length;
        const totalPrecio = carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
        contadorCarrito.textContent = `${totalProductos} productos - $${totalPrecio.toFixed(2)}`;
    }
}

// Función para mostrar productos en el contenedor
function mostrarProductos() {
    const contenedorProductos = document.getElementById("product-list");

    if (contenedorProductos) {
        productos.forEach(producto => {
            const divProducto = document.createElement("div");
            divProducto.classList.add("col-md-4", "mb-4");

            const card = document.createElement("div");
            card.classList.add("card");

            const img = document.createElement("img");
            img.src = producto.imagen;
            img.alt = producto.alt;
            img.classList.add("card-img-top");
            img.style.cursor = "pointer";
       

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const cardTitle = document.createElement("h3");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = producto.nombre;

    
            const cardTextPrice = document.createElement("p");
            cardTextPrice.classList.add("card-text");
            cardTextPrice.textContent = `Precio: $${producto.precio}`;

            const button = document.createElement("button");
            button.classList.add("btn", "btn-secondary");
            button.textContent = "Agregar al carrito";
            button.onclick = () => agregarAlCarrito(producto.ID);

            // Botón "Ver Detalle"
            const btnDetalle = document.createElement("button");
            btnDetalle.classList.add("btn", "btn-secondary");
            btnDetalle.textContent = "Ver Detalle";
            btnDetalle.onclick = () => mostrarDetalle(producto);

            cardBody.appendChild(cardTitle);
          
            cardBody.appendChild(cardTextPrice);
            cardBody.appendChild(button);
            cardBody.appendChild(btnDetalle);

            card.appendChild(img);
            card.appendChild(cardBody);

            divProducto.appendChild(card);
            contenedorProductos.appendChild(divProducto);
        });
    }
}
 // "Ver Detalle de Productos"
function mostrarDetalle(producto) {
    alert(`Detalles del Producto:\n\nNombre: ${producto.nombre}\nPrecio: $${producto.precio}\nDescripción: ${producto.descripcion}`);

    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    modalContent.style.width = "50%";
    modalContent.style.margin = "0 auto";
    modalContent.style.position = "relative";
    modalContent.style.backgroundColor = "#fff";
    modalContent.style.padding = "20px";
    modalContent.style.borderRadius = "8px";

    const closeButton = document.createElement("button");
    closeButton.classList.add("close");
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.style.fontSize = "24px";
    closeButton.style.cursor = "pointer";
    closeButton.innerHTML = "&times;";
    closeButton.onclick = () => cerrarModalDetalle(modal);

    const modalTitle = document.createElement("h2");
    modalTitle.style.textAlign = "center";
    modalTitle.textContent = producto.nombre;

    const modalImg = document.createElement("img");
    modalImg.src = producto.imagen;
    modalImg.alt = producto.alt || "Imagen del producto";
    modalImg.style.width = "200px";
    modalImg.style.height = "200px";
    modalImg.style.display = "block";
    modalImg.style.margin = "20px auto";

    const modalDesc = document.createElement("p");
    modalDesc.style.textAlign = "center";
    modalDesc.textContent = producto.descripcion;

    const modalTipo = document.createElement("p");
    modalTipo.style.textAlign = "center";
    modalTipo.textContent = `Tipo: ${producto.tipo}`;

    const modalPrecio = document.createElement("p");
    modalPrecio.style.textAlign = "center";
    modalPrecio.textContent = `Precio: $${producto.precio}`;

    modalContent.appendChild(closeButton);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalImg);
    modalContent.appendChild(modalDesc);
    modalContent.appendChild(modalTipo);
    modalContent.appendChild(modalPrecio);

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    const escListener = (event) => {
        if (event.key === "Escape") {
            cerrarModalDetalle(modal);
            document.removeEventListener("keydown", escListener);
        }
    };
    document.addEventListener("keydown", escListener);
}

function cerrarModalDetalle(modal) {
    document.body.removeChild(modal);
}

function cerrarModalDetalle(modal) {
    modal.remove();
}

// Función para mostrar el modal de confirmación para agregar al carrito
function mostrarModalConfirmacion() {
    const modal = document.getElementById('modal-confirmacion');
    modal.style.display = 'block';

    setTimeout(() => {
        modal.style.display = 'none';
    }, 1000);
}

// Función para mostrar el modal de pago
function mostrarModalPago() {
    const modal = document.getElementById('modal-pago');
    modal.style.display = 'block';
}

// Función para cerrar el modal de pago
function cerrarModalPago() {
    const modal = document.getElementById('modal-pago');
    modal.style.display = 'none';
}

// Función para mostrar el modal de confirmación de compra
function mostrarModalConfirmacionCompra() {
    const modal = document.getElementById('modal-confirmacion-compra');
    modal.style.display = 'block';

    setTimeout(() => {
        modal.style.display = 'none';
    }, 3000);
}

// Función para procesar el pago
function procesarPago() {
    cerrarModalPago();
    mostrarModalConfirmacionCompra();
    vaciarCarrito();
}

// Función para agregar productos al carrito
function agregarAlCarrito(productoID) {
    const producto = productos.find(p => p.ID === productoID);
    const productoEnCarrito = carrito.find(p => p.ID === productoID);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }

    guardarCarrito();
    actualizarContadorCarrito();
    mostrarCarrito();
    mostrarModalConfirmacion();
    console.log(`Producto agregado al carrito: ${productoID}`);
}

// Función para eliminar productos del carrito
function eliminarDelCarrito(productoID) {
    carrito = carrito.filter(producto => producto.ID !== productoID);
    guardarCarrito();
    actualizarContadorCarrito();
    mostrarCarrito();
}

// Función para actualizar la cantidad de un producto en el carrito
function actualizarCantidad(productoID, cantidad) {
    const producto = carrito.find(p => p.ID === productoID);
    if (producto) {
        producto.cantidad += cantidad;
        if (producto.cantidad <= 0) {
            eliminarDelCarrito(productoID);
        } else {
            guardarCarrito();
            mostrarCarrito();
        }
    }
}

// Función para mostrar un modal
function mostrarModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'block';
}

// Función para cerrar una modal
function cerrarModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'none';
}

// Función para aplicar el descuento
function aplicarDescuento() {
    const codigoDescuento = document.getElementById('codigo-descuento').value;
    const totalPrecioElement = document.getElementById('total-precio');
    let total = parseFloat(totalPrecioElement.textContent);

    if (codigoDescuento === 'TEXTIL2024') {
        const descuento = total * 0.10;
        total -= descuento;
        totalPrecioElement.textContent = total.toFixed(2);
        mostrarModal('modal-descuento-aplicado');
    } else {
        mostrarModal('modal-descuento-invalido');
    }
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    const contenedorCarrito = document.getElementById("carrito-list");
    const totalPrecio = document.getElementById("total-precio");
    let total = 0;

    if (contenedorCarrito) {
        contenedorCarrito.innerHTML = "";

        carrito.forEach(producto => {
            const trProducto = document.createElement("tr");

            const tdImg = document.createElement("td");
            const divImg = document.createElement("div");
            divImg.classList.add("d-flex", "align-items-center", "justify-content-center");
            const img = document.createElement("img");
            img.src = producto.imagen;
            img.alt = producto.alt;
            img.classList.add("img-thumbnail");
            img.style.width = "50px";
            divImg.appendChild(img);
            tdImg.appendChild(divImg);

            const tdNombre = document.createElement("td");
            const divNombre = document.createElement("div");
            divNombre.classList.add("d-flex", "align-items-center", "justify-content-center");
            divNombre.textContent = producto.nombre;
            tdNombre.appendChild(divNombre);

            const tdCantidad = document.createElement("td");
            tdCantidad.classList.add("quantity-control");
            const divCantidad = document.createElement("div");
            divCantidad.classList.add("d-flex", "align-items-center", "justify-content-center");
            const btnMenos = document.createElement("button");
            btnMenos.classList.add("btn", "btn-sm", "btn-secondary", "btn-circle");
            btnMenos.textContent = "-";
            btnMenos.onclick = () => actualizarCantidad(producto.ID, -1);
            const spanCantidad = document.createElement("span");
            spanCantidad.classList.add("mx-2");
            spanCantidad.textContent = producto.cantidad;
            const btnMas = document.createElement("button");
            btnMas.classList.add("btn", "btn-sm", "btn-secondary", "btn-circle");
            btnMas.textContent = "+";
            btnMas.onclick = () => actualizarCantidad(producto.ID, 1);
            divCantidad.appendChild(btnMenos);
            divCantidad.appendChild(spanCantidad);
            divCantidad.appendChild(btnMas);
            tdCantidad.appendChild(divCantidad);

            const tdPrecio = document.createElement("td");
            const divPrecio = document.createElement("div");
            divPrecio.classList.add("d-flex", "align-items-center", "justify-content-center");
            divPrecio.textContent = `$${(producto.precio * producto.cantidad).toFixed(2)}`;
            tdPrecio.appendChild(divPrecio);

            const tdEliminar = document.createElement("td");
            const divEliminar = document.createElement("div");
            divEliminar.classList.add("d-flex", "align-items-center", "justify-content-center");
            const btnEliminar = document.createElement("button");
            btnEliminar.classList.add("btn", "btn-danger", "btn-sm");
            btnEliminar.textContent = "Eliminar";
            btnEliminar.onclick = () => eliminarDelCarrito(producto.ID);
            divEliminar.appendChild(btnEliminar);
            tdEliminar.appendChild(divEliminar);

            trProducto.appendChild(tdImg);
            trProducto.appendChild(tdNombre);
            trProducto.appendChild(tdCantidad);
            trProducto.appendChild(tdPrecio);
            trProducto.appendChild(tdEliminar);

            contenedorCarrito.appendChild(trProducto);
            total += producto.precio * producto.cantidad;
        });

        totalPrecio.textContent = total.toFixed(2);
    }
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    actualizarContadorCarrito();
    mostrarCarrito();
}

// Función para pagar el carrito
function pagarCarrito() {
    mostrarModalPago();
}

// Función para cargar opciones del filtro
function cargarOpcionesFiltro() {
    const selectTipo = document.getElementById("filtroTipo");

    if (selectTipo) {
        // Obtener tipos únicos de los productos
        const tiposUnicos = [...new Set(productos.map(producto => producto.tipo))];

        // Agregar la opción "Todos"
        const optionTodos = document.createElement("option");
        optionTodos.value = "todos";
        optionTodos.textContent = "Todos";
        selectTipo.appendChild(optionTodos);

        // Agregar las opciones de tipo de producto
            tiposUnicos.forEach(tipo=> {
            const option = document.createElement("option");
            option.value = tipo;
            option.textContent = tipo.charAt(0).toUpperCase() + tipo.slice(1); 
            selectTipo.appendChild(option);
        });
    }
}

// Función para filtrar productos por tipo de producto
function filtrarPorTipo(tipo) {
    const contenedorProductos = document.getElementById("product-list");
    contenedorProductos.innerHTML = "";

    productos
        .filter(producto => tipo === "todos" || producto.tipo === tipo)
        .forEach(producto => {
            const divProducto = document.createElement("div");
            divProducto.classList.add("col-md-4", "mb-4");

            const card = document.createElement("div");
            card.classList.add("card");

            const img = document.createElement("img");
            img.src = producto.imagen;
            img.alt = producto.alt;
            img.classList.add("card-img-top");
            img.style.cursor = "pointer";
            img.onclick = () => mostrarDetalle(producto.ID);

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const cardTitle = document.createElement("h3");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = producto.nombre;

            const cardTextDesc = document.createElement("p");
            cardTextDesc.classList.add("card-text");
            cardTextDesc.textContent = producto.descripcion;

            const cardTextPrice = document.createElement("p");
            cardTextPrice.classList.add("card-text");
            cardTextPrice.textContent = `Precio: $${producto.precio}`;

            const button = document.createElement("button");
            button.classList.add("btn", "btn-primary");
            button.textContent = "Agregar al carrito";
            button.onclick = () => agregarAlCarrito(producto.ID);

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardTextDesc);
            cardBody.appendChild(cardTextPrice);
            cardBody.appendChild(button);

            card.appendChild(img);
            card.appendChild(cardBody);

            divProducto.appendChild(card);
            contenedorProductos.appendChild(divProducto);
        });

    // Mostrar oferta especial en todas las categorías
    mostrarOfertaEspecial();
}

// Función para mostrar la oferta especial
function mostrarOfertaEspecial() {
    const ofertaBanner = document.createElement("div");
    ofertaBanner.classList.add("oferta-banner");
    ofertaBanner.textContent = "¡Oferta en Textiles premiun! ¡No te las pierdas!";
    ofertaBanner.style.position = "fixed";
    ofertaBanner.style.top = "10px";
    ofertaBanner.style.left = "50%";
    ofertaBanner.style.transform = "translateX(-50%)";
    ofertaBanner.style.backgroundColor = "yellow";
    ofertaBanner.style.padding = "10px";
    ofertaBanner.style.border = "2px solid black";
    ofertaBanner.style.zIndex = "1000";

    document.body.appendChild(ofertaBanner);

    setTimeout(() => {
        document.body.removeChild(ofertaBanner);
    }, 10000);
}

// Mostrar productos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    cargarCarrito();
    cargarOpcionesFiltro();
    mostrarProductos();
    mostrarCarrito();
    actualizarContadorCarrito();
});

// Validar formulario de contacto
const formulario = document.querySelector('form'); 

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita el envío por defecto del formulario


// Obtener los valores de los campos
    const nombre = document.getElementById('name').value.trim();
    const mail = document.getElementById('mail').value.trim();
    const mensaje = document.getElementById('message').value.trim();

    // Verificar si algún campo está vacío
    if (!nombre || !mail || !mensaje) {
        console.log("Por favor, completa todos los campos del formulario.");
        alert("Por favor, completa todos los campos del formulario."); 
    } else {
        console.log("Formulario enviado correctamente.");
        // Si todo está completo, se puede enviar el formulario
        formulario.submit(); // Esto realiza el envío
    }
});
