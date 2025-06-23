let carrito = {};
let subtotal = 0;

function agregarProducto(nombre, precio) {
  if (carrito[nombre]) {
    carrito[nombre].cantidad += 1;
  } else {
    carrito[nombre] = { precio: precio, cantidad: 1 };
  }
  actualizarCarrito();
}

function eliminarProducto(nombre) {
  if (carrito[nombre]) {
    delete carrito[nombre];
    actualizarCarrito();
  }
}

function actualizarCarrito() {
  const lista = document.getElementById("listaCarrito");
  lista.innerHTML = "";

  subtotal = 0;

  for (let nombre in carrito) {
    const item = carrito[nombre];
    const li = document.createElement("li");
    li.innerHTML = `${nombre} x${item.cantidad} - $${(item.precio * item.cantidad).toFixed(2)}
      <button onclick="eliminarProducto('${nombre}')">❌</button>`;
    lista.appendChild(li);

    subtotal += item.precio * item.cantidad;
  }

  document.getElementById("subtotal").textContent = subtotal.toFixed(2);
  const iva = subtotal * 0.15;
  document.getElementById("iva").textContent = iva.toFixed(2);
  const total = subtotal + iva;
  document.getElementById("total").textContent = total.toFixed(2);
}

function pagar() {
  if (subtotal === 0) {
    alert("El carrito está vacío.");
    return;
  }

  const metodo = prompt("Selecciona método de pago:\n1. Efectivo\n2. Transferencia\n3. Tarjeta");

  if (metodo === "1") {
    alert("Has seleccionado pago en EFECTIVO. ¡Gracias por tu compra!");
  } else if (metodo === "2") {
    alert("Has seleccionado pago por TRANSFERENCIA. Se enviará la información bancaria.");
  } else if (metodo === "3") {
    alert("Has seleccionado pago con TARJETA. Procede a ingresar los datos en la pasarela.");
  } else {
    alert("Método de pago no válido o cancelado.");
  }
}
