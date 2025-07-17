function irASiguiente() {
  window.location.href = "seccion1.html";
}

// Opcional: iniciar música al click si el navegador lo bloquea
document.addEventListener("click", () => {
  const audio = document.getElementById("musica-fondo");
  if (audio.paused) {
    audio.play();
  }
});
function pantallaCompleta() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen(); 
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}
