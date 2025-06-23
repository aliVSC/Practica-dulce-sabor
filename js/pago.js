const total = localStorage.getItem("total") || "0.00";
document.getElementById("monto-total").textContent = parseFloat(total).toFixed(2);

function calcularCambio() {
  const efectivo = parseFloat(document.getElementById("efectivo").value || 0);
  const tarjeta = parseFloat(document.getElementById("tarjeta").value || 0);
  const transferencia = parseFloat(document.getElementById("transferencia").value || 0);
  const pagado = efectivo + tarjeta + transferencia;
  const totalPagar = parseFloat(total);

  const cambio = pagado > totalPagar ? pagado - totalPagar : 0;
  const restante = pagado < totalPagar ? totalPagar - pagado : 0;

  document.getElementById("cambio").textContent = cambio.toFixed(2);
  document.getElementById("restante").textContent = restante.toFixed(2);
}

function finalizarPago() {
  const restante = parseFloat(document.getElementById("restante").textContent);
  if (restante > 0) {
    alert("Falta dinero por pagar. Por favor, completa el pago.");
    return;
  }

  alert("¡Pago registrado correctamente!");
  localStorage.removeItem("total");
  window.location.href = "tienda.html";
}
