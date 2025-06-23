const total = localStorage.getItem("total") || "0.00";
document.getElementById("monto-total").textContent = parseFloat(total).toFixed(2);

function calcularCambio() {
  const efectivo = parseFloat(document.getElementById("efectivo").value) || 0;
  const tarjeta = parseFloat(document.getElementById("tarjeta").value) || 0;
  const transferencia = parseFloat(document.getElementById("transferencia").value) || 0;

  const pagado = efectivo + tarjeta + transferencia;
  const totalPagar = parseFloat(total);

  const cambio = pagado > totalPagar ? pagado - totalPagar : 0;
  const restante = pagado < totalPagar ? totalPagar - pagado : 0;

  document.getElementById("cambio").textContent = cambio.toFixed(2);
  document.getElementById("restante").textContent = restante.toFixed(2);
}

function finalizarPago() {
  const efectivo = parseFloat(document.getElementById("efectivo").value) || 0;
  const tarjeta = parseFloat(document.getElementById("tarjeta").value) || 0;
  const transferencia = parseFloat(document.getElementById("transferencia").value) || 0;

  const pagado = efectivo + tarjeta + transferencia;
  const totalPagar = parseFloat(total);

  if (pagado === 0) {
    alert("No se ha ingresado ningún monto de pago.");
    return;
  }

  if (pagado < totalPagar) {
    const restante = (totalPagar - pagado).toFixed(2);
    alert(`El monto ingresado es insuficiente. Faltan $${restante}`);
    return;
  }

  alert("¡Pago registrado correctamente!");
  window.location.href = "tienda.html";
}

