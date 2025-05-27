// contador.js
function actualizarContador() {
  const inicio = new Date("2024-05-27T00:00:00");
  const ahora = new Date();
  const diferencia = ahora - inicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("contador").textContent =
    `${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

setInterval(actualizarContador, 1000);
actualizarContador();
