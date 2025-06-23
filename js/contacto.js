document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contacto");
  const popup = document.getElementById("popup-confirmacion");
  const datosFormulario = document.getElementById("datos-formulario");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita recarga

    // Obtener los datos del formulario
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const tipo = document.getElementById("tipo").value;
    const comentarios = document.getElementById("comentarios").value.trim();

    // Mostrar los datos en el popup
    datosFormulario.innerHTML = `
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Tipo de pastel:</strong> ${tipo}</p>
      <p><strong>Comentarios:</strong> ${comentarios || "(Sin comentarios)"}</p>
    `;

    // Mostrar el popup
    popup.style.display = "block";
  });

  // Hacemos la función global para que el botón "OK" pueda acceder a ella
  window.cerrarPopup = function () {
    popup.style.display = "none";
    form.reset(); // Limpiar el formulario
  };
});


